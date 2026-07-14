/* ============================================================
   /api/chat.js — DinoDex chatbot serverless function (Vercel)
   Backend only. No chat widget UI here - see the follow-up prompt
   for that. Receives { question }, searches content-index.json
   (built in Phase 0) for relevant passages, and asks Claude to
   answer grounded strictly in those passages.

   Env vars (already set in Vercel):
     ANTHROPIC_API_KEY
     UPSTASH_REDIS_REST_URL
     UPSTASH_REDIS_REST_TOKEN
     CHATBOT_TEST_KEY
   ============================================================ */

const fs = require('fs');
const path = require('path');

const MODEL = 'claude-haiku-4-5-20251001';
const MAX_TOKENS = 1024;
const DAILY_LIMIT = 10;
const MIN_SCORE = 3; // a single generic shared word (e.g. "world", "good") shouldn't count as relevant
const MIN_DISTINCT_MATCHES = 2; // require overlap on more than one distinct query token
const MAX_PASSAGES = 8;

const SYSTEM_PROMPT = `You are the DinoDex assistant for ilikedinosaurs.com, a palaeontology
education site. You answer questions and point visitors toward relevant
pages, using ONLY the passages provided to you below as retrieved context.
You have no other source of information about dinosaurs, palaeontology, or
this site - do not draw on anything outside the provided passages, even if
you believe you know the answer.

HOUSE VOICE: precise, calm, a little wry, never breathless. British English.
Plain hyphens only, never en dashes or em dashes. Never use the words
"revolutionary," "iconic," "pioneer," "genuinely," "honestly," or "actually."

GROUNDING RULES:
- Answer only using the passages provided. If they don't cover what's being
  asked, say so plainly - something like "that's not something this site
  covers yet" - rather than guessing, padding, or reaching for general
  knowledge.
- Each provided passage carries a confidence level: strong, moderate, low,
  or none (meaning plain settled description). Preserve that language
  exactly as given. If a passage is tagged moderate or low, your answer
  must carry that same hedge - never flatten "a live hypothesis" into a
  stated fact, and never state a strong-confidence passage more tentatively
  than the source does either. Getting this backwards is the one mistake
  that matters most here.
- If retrieved passages disagree with each other (e.g. two interpretations
  of the same question), present both, not just one.

TWO KINDS OF VISITOR MESSAGE:
1. A factual question ("did T. rex have feathers?", "what's a bonebed?") -
   answer it from the passages, following the grounding rules above.
2. An expression of interest with no direct question ("I really like
   pterosaurs," "where should I start?") - don't force an answer; instead
   go straight to suggesting relevant pages (see below).

ALWAYS INCLUDE - after any answer, and standing alone for interest-only
messages - a short set of 1-3 relevant pages to explore next, drawn from
the crossRefs of the passages you used. Keep this brief: a name and a
half-sentence of why it's relevant, not a restatement of the passage.

Keep the answer field under roughly 120 words.

OUTPUT FORMAT: respond with ONLY valid JSON, no preamble, no markdown
fences, matching exactly this shape:
{
  "answer": string or null (null only for pure interest-expression messages
            with nothing to factually answer),
  "inScope": boolean (false if the question falls outside what the
            passages cover),
  "citations": [ { "id": string, "label": string } ],
  "suggestions": [ { "id": string, "label": string, "reason": string } ]
}
"id" values must be the citeId/view-id fields exactly as given in the
passages - the site uses these to link directly to the right page.`;

/* ---- load content-index.json once at cold start, not per-request ---- */
const CONTENT_INDEX = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'content-index.json'), 'utf8')
);

const STOPWORDS = new Set([
  'a','an','the','is','are','was','were','be','been','being','to','of','in','on','at',
  'for','and','or','but','if','so','than','then','that','this','these','those','it',
  'its','with','as','by','from','about','into','over','after','before','between',
  'do','does','did','have','has','had','can','could','would','should','will','shall',
  'not','no','what','when','where','why','how','who','which','you','your','i','me',
  'my','we','our','they','them','their','he','she','him','her','there','here','also'
]);

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2 && !STOPWORDS.has(t));
}

/* pre-tokenise every chunk once, at cold start */
const SEARCH_INDEX = CONTENT_INDEX.map(chunk => ({
  chunk,
  titleTokens: tokenize(chunk.title),
  textTokens: tokenize(chunk.text)
}));

function searchChunks(question) {
  const qTokens = tokenize(question);
  if (!qTokens.length) return [];
  const qSet = new Set(qTokens);

  const scored = SEARCH_INDEX.map(({ chunk, titleTokens, textTokens }) => {
    let score = 0;
    const matched = new Set();
    for (const t of titleTokens) if (qSet.has(t)) { score += 2; matched.add(t); } // title matches weighted higher
    for (const t of textTokens) if (qSet.has(t)) { score += 1; matched.add(t); }
    return { chunk, score, distinctMatches: matched.size };
  }).filter(r => r.score >= MIN_SCORE && (r.distinctMatches >= MIN_DISTINCT_MATCHES || qSet.size === 1));

  scored.sort((a, b) => b.score - a.score);

  if (!scored.length) return [];
  return scored.slice(0, MAX_PASSAGES).map(r => r.chunk);
}

/* ---- envelope helper ---- */
function envelope({ status, answer = null, inScope = null, citations = null, suggestions = null, message = null }) {
  const isTerminalFailure = status === 'rate_limited' || status === 'error';
  return {
    status,
    answer: isTerminalFailure ? null : answer,
    inScope: isTerminalFailure ? null : inScope,
    citations: isTerminalFailure ? [] : (citations || []),
    suggestions: isTerminalFailure ? [] : (suggestions || []),
    message: isTerminalFailure ? message : null
  };
}

function sendJson(res, httpStatus, body) {
  res.status(httpStatus).json(body);
}

/* ---- Upstash REST helpers (plain fetch, no SDK) ---- */
async function upstashCommand(baseUrl, token, segments) {
  const url = `${baseUrl.replace(/\/$/, '')}/${segments.map(encodeURIComponent).join('/')}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) {
    throw new Error(`Upstash command failed: ${res.status} ${await res.text().catch(() => '')}`);
  }
  const data = await res.json();
  return data.result;
}

function todayKeyDate() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD, UTC
}

function getClientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) {
    const first = String(fwd).split(',')[0].trim();
    if (first) return first;
  }
  if (req.socket && req.socket.remoteAddress) return req.socket.remoteAddress;
  return 'unknown';
}

/* returns { limited: boolean } or throws on infra failure */
async function checkAndIncrementRateLimit(ip) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('Upstash environment variables are not configured');
  }

  const key = `chatbot:ratelimit:${ip}:${todayKeyDate()}`;

  // Atomic increment first (avoids a check-then-increment race between
  // concurrent requests from the same IP), then decide based on the result.
  const newCount = await upstashCommand(url, token, ['incr', key]);
  if (newCount === 1) {
    // first request of the day for this IP - start the 24h TTL so Upstash
    // cleans the key up automatically rather than accumulating forever
    await upstashCommand(url, token, ['expire', key, '86400']);
  }

  return { limited: newCount > DAILY_LIMIT };
}

/* ---- Anthropic call ---- */
function stripCodeFences(text) {
  return String(text || '')
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();
}

function buildUserMessage(question, passages) {
  if (!passages.length) {
    return `Visitor message: "${question}"\n\nRetrieved passages: none. No passage in the content index scored as relevant to this message.`;
  }
  const passageBlocks = passages.map((p, i) =>
    `[${i + 1}] citeId: ${p.citeId} | confidence: ${p.confidence || 'none'}\n${p.text}`
  ).join('\n\n');
  return `Visitor message: "${question}"\n\nRetrieved passages:\n${passageBlocks}`;
}

async function callAnthropic(question, passages) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not configured');
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildUserMessage(question, passages) }]
    })
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => '');
    throw new Error(`Anthropic API error: ${res.status} ${errBody}`);
  }

  const data = await res.json();
  const rawText = data && data.content && data.content[0] && data.content[0].text;
  return rawText;
}

/* ============================================================
   HANDLER
   ============================================================ */
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json(envelope({ status: 'error', message: 'Only POST requests are accepted.' }));
    return;
  }

  const body = req.body;
  const question = body && typeof body.question === 'string' ? body.question.trim() : null;
  if (!question) {
    sendJson(res, 400, envelope({ status: 'error', message: 'Request body must be JSON with a non-empty "question" string.' }));
    return;
  }

  /* ---- Step 0: test-key bypass ---- */
  const testKeyHeader = req.headers['x-test-key'];
  const testKeyConfigured = process.env.CHATBOT_TEST_KEY;
  const bypassRateLimit = Boolean(testKeyConfigured) && testKeyHeader === testKeyConfigured;

  /* ---- Step 1: rate limiting (unless bypassed) ---- */
  if (!bypassRateLimit) {
    const ip = getClientIp(req);
    let limited;
    try {
      ({ limited } = await checkAndIncrementRateLimit(ip));
    } catch (err) {
      console.error('Rate limiter infra error:', err);
      sendJson(res, 500, envelope({
        status: 'error',
        message: 'Something went wrong checking today\'s question limit - worth trying again in a moment.'
      }));
      return;
    }
    if (limited) {
      sendJson(res, 429, envelope({
        status: 'rate_limited',
        message: "That's today's question limit for this bot - it resets tomorrow. The rest of the site is still fully open for browsing in the meantime."
      }));
      return;
    }
  }

  /* ---- Step 2: search content-index.json (already capped at MAX_PASSAGES) ---- */
  const passages = searchChunks(question);

  /* ---- Step 3 / 4: call Anthropic, handle failures ---- */
  let rawText;
  try {
    rawText = await callAnthropic(question, passages);
  } catch (err) {
    console.error('Anthropic API call failed:', err);
    sendJson(res, 500, envelope({
      status: 'error',
      message: "The bot's monthly budget is resting until next month - everything else on the site is unaffected."
    }));
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(stripCodeFences(rawText));
  } catch (err) {
    console.error('Failed to parse Anthropic response as JSON. Raw response:', rawText);
    sendJson(res, 500, envelope({
      status: 'error',
      message: "Something went wrong putting that answer together - worth trying again in a moment."
    }));
    return;
  }

  sendJson(res, 200, envelope({
    status: 'ok',
    answer: typeof parsed.answer === 'string' ? parsed.answer : null,
    inScope: typeof parsed.inScope === 'boolean' ? parsed.inScope : null,
    citations: Array.isArray(parsed.citations) ? parsed.citations : [],
    suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : []
  }));
};

/* exported for local testing only (see test/local-chat-test.js) */
module.exports._internal = { searchChunks, tokenize, envelope, checkAndIncrementRateLimit, getClientIp };
