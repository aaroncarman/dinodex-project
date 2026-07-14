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
const MAX_HISTORY_TURNS = 6; // server-enforced cap, independent of whatever the client sends

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
  "citations": [ { "id": string } ],
  "suggestions": [ { "id": string, "reason": string } ]
}
"id" values must be the citeId/view-id fields exactly as given in the
passages - the site uses these to link directly to the right page. Do not
include a "label" or display-name field on citations or suggestions - the
site already knows each page's name and will attach it itself.`;

/* ---- load content-index.json and cite-labels.json once at cold start ---- */
const CONTENT_INDEX = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'content-index.json'), 'utf8')
);
const CITE_LABELS = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'cite-labels.json'), 'utf8')
);

const STOPWORDS = new Set([
  // grammatical function words
  'a','an','the','is','are','was','were','be','been','being','to','of','in','on','at',
  'for','and','or','but','if','so','than','then','that','this','these','those','it',
  'its','with','as','by','from','about','into','over','after','before','between',
  'do','does','did','have','has','had','can','could','would','should','will','shall',
  'not','no','what','when','where','why','how','who','which','you','your','i','me',
  'my','we','our','they','them','their','he','she','him','her','there','here','also',
  // conversational scaffolding - the words a visitor wraps around their
  // actual question ("tell me about X", "can you explain X", "describe
  // X", "I want to know about X", "give me some information on X") rather
  // than content words themselves. Without these, a normal, natural
  // question can fail MIN_DISTINCT_MATCHES entirely: e.g. "tell" alone
  // used to count as a second "content" match alongside the actual
  // subject, which is exactly the wrong thing for a generic verb that
  // carries no topical signal of its own.
  'tell','explain','describe','show','give','please','know','want','like','us','some','more','information',
  // filler intensifiers - carry emphasis, not topical content (e.g. "I
  // REALLY like pterosaurs" is the system prompt's own canonical
  // interest-expression example; "really" must not count as a second
  // "content" word alongside "pterosaurs" or it silently defeats the
  // single-content-word relaxation below)
  'really','very','just','actually','quite'
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

/* previousQuestion (optional): for a follow-up like "what about its arms",
   the current question alone often has too little signal to retrieve
   anything useful. Folding the prior turn's tokens in as lower-weighted
   supporting context (half the weight of a current-question match, at
   each tier) helps without letting old context override what THIS
   question is actually asking - it's a nudge, not an equal vote. */
function searchChunks(question, previousQuestion) {
  const qTokens = tokenize(question);
  if (!qTokens.length) return [];
  const qSet = new Set(qTokens);
  const prevSet = new Set((previousQuestion ? tokenize(previousQuestion) : []).filter(t => !qSet.has(t)));

  const scored = SEARCH_INDEX.map(({ chunk, titleTokens, textTokens }) => {
    let score = 0;
    const matched = new Set();
    for (const t of titleTokens) {
      if (qSet.has(t)) { score += 2; matched.add(t); } // title match, current question
      else if (prevSet.has(t)) { score += 1; matched.add(t); } // title match, previous question only - supporting context
    }
    for (const t of textTokens) {
      if (qSet.has(t)) { score += 1; matched.add(t); } // body match, current question
      else if (prevSet.has(t)) { score += 0.5; matched.add(t); } // body match, previous question only
    }
    return { chunk, score, distinctMatches: matched.size };
  }).filter(r => r.score >= MIN_SCORE && (r.distinctMatches >= MIN_DISTINCT_MATCHES || qSet.size === 1));

  scored.sort((a, b) => b.score - a.score);

  if (!scored.length) return [];
  return scored.slice(0, MAX_PASSAGES).map(r => r.chunk);
}

/* citeId strings are not globally unique across sourceTypes (e.g. species.js
   and research-cases.js both use "spinosaurus" for unrelated entries), so
   labels are resolved per-request from the specific chunks actually
   retrieved for this question - which always carry sourceType alongside
   citeId - rather than from a single global citeId -> label map. `passages`
   is already sorted best-score-first by searchChunks(), so the first chunk
   seen for a given citeId is the highest-scoring one; if a second, later
   chunk in this same request shares that citeId under a *different*
   sourceType with a genuinely different label, that's the rare true
   ambiguity case - keep the first (higher-scoring) one and just log a note. */
function buildRequestLabels(passages) {
  // Stores { label, sourceType } per citeId, not just the bare label
  // string - the chat widget's click-through dispatch needs sourceType to
  // know which site function to call (openModal, goToView, etc.), and
  // resolving it here (where sourceType is already known per chunk) is
  // simpler and more reliable than trying to re-derive it client-side.
  const resolved = {};
  for (const chunk of passages) {
    const label = CITE_LABELS[chunk.sourceType] && CITE_LABELS[chunk.sourceType][chunk.citeId];
    if (!label) continue; // shouldn't happen if the content index build validated cleanly, but don't crash if it did not
    if (resolved[chunk.citeId] === undefined) {
      resolved[chunk.citeId] = { label, sourceType: chunk.sourceType };
    } else if (resolved[chunk.citeId].label !== label) {
      console.log(`Note: citeId "${chunk.citeId}" was ambiguous within this request (matched more than one sourceType with different labels). Kept "${resolved[chunk.citeId].label}" (higher search score); also saw "${label}" from sourceType "${chunk.sourceType}".`);
    }
  }
  return resolved;
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

/* House style bans en dashes (–) and em dashes (—) in favour of plain
   hyphens, but testing showed Haiku doesn't reliably follow that rule from
   the system prompt alone. This is a cheap server-side safety net, not a
   fix to the prompt - it does not touch SYSTEM_PROMPT itself. */
function sanitizeDashes(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/[–—]/g, ' - ').replace(/ {2,}/g, ' ').trim();
}

/* "history" is client-supplied, so it's validated the same way "question"
   is: never trust the client's own trimming/shape, even though the widget
   is only ever expected to send well-formed { question, answer } pairs.
   Caps to the last MAX_HISTORY_TURNS entries server-side regardless of how
   many the client sent - defense in depth against an inflated payload. */
function sanitizeHistory(rawHistory) {
  if (!Array.isArray(rawHistory)) return [];
  const cleaned = rawHistory.filter(turn =>
    turn &&
    typeof turn.question === 'string' && turn.question.trim() &&
    typeof turn.answer === 'string' && turn.answer.trim()
  ).map(turn => ({ question: turn.question.trim(), answer: turn.answer.trim() }));
  return cleaned.slice(-MAX_HISTORY_TURNS);
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

/* Real multi-turn structure, not history flattened into one block of text:
   each prior turn becomes its own user/assistant message pair (the
   assistant side is the recorded answer as plain text only - not the full
   JSON envelope, so the model isn't reading its own past output-format
   structure back at itself, just the substance of what it said). The
   current question plus retrieved passages form the final user message,
   exactly as in the single-turn case. */
function buildMessages(question, passages, history) {
  const messages = [];
  for (const turn of history) {
    messages.push({ role: 'user', content: turn.question });
    messages.push({ role: 'assistant', content: turn.answer });
  }
  messages.push({ role: 'user', content: buildUserMessage(question, passages) });
  return messages;
}

async function callAnthropic(question, passages, history) {
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
      messages: buildMessages(question, passages, history)
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
  const history = sanitizeHistory(body && body.history); // [] if absent/malformed - fully backward compatible

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

  /* ---- Step 2: search content-index.json (already capped at MAX_PASSAGES) ----
     Search on the current question primarily; the immediately previous
     question (if any) is folded in as lower-weighted supporting context
     for follow-ups like "what about its arms" - see searchChunks(). */
  const previousQuestion = history.length ? history[history.length - 1].question : null;
  const passages = searchChunks(question, previousQuestion);
  if (!passages.length) {
    // Content-quality signal for later review, not an activity log: the
    // question text alone, nothing that could identify who asked it (no
    // IP, no history, no request metadata). Purely a side effect - does
    // not alter the response, which still proceeds through the normal
    // "no relevant passages" path below exactly as before.
    console.log('Zero-result question:', question);
  }
  const requestLabels = buildRequestLabels(passages);

  /* ---- Step 3 / 4: call Anthropic, handle failures ---- */
  let rawText;
  try {
    rawText = await callAnthropic(question, passages, history);
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

  // Labels (and sourceType, for the widget's click-through dispatch) are
  // resolved against requestLabels - built from the specific chunks
  // retrieved for THIS question (see buildRequestLabels above), not the
  // global cite-labels.json - so there's no bare-citeId ambiguity to begin
  // with. If the model names an id that isn't in requestLabels at all, it
  // wasn't actually among the passages it was given - likely hallucinated
  // or misremembered - so drop that citation/suggestion entirely rather
  // than shipping a labelless, possibly broken link.
  const citations = (Array.isArray(parsed.citations) ? parsed.citations : [])
    .filter(c => c && requestLabels[c.id])
    .map(c => ({ id: c.id, label: requestLabels[c.id].label, sourceType: requestLabels[c.id].sourceType }));
  const suggestions = (Array.isArray(parsed.suggestions) ? parsed.suggestions : [])
    .filter(s => s && requestLabels[s.id])
    .map(s => ({ id: s.id, label: requestLabels[s.id].label, sourceType: requestLabels[s.id].sourceType, reason: sanitizeDashes(s.reason) }));

  sendJson(res, 200, envelope({
    status: 'ok',
    answer: sanitizeDashes(typeof parsed.answer === 'string' ? parsed.answer : null),
    inScope: typeof parsed.inScope === 'boolean' ? parsed.inScope : null,
    citations,
    suggestions
  }));
};

/* exported for local testing only (see test/local-chat-test.js) */
module.exports._internal = { searchChunks, tokenize, envelope, checkAndIncrementRateLimit, getClientIp, buildRequestLabels, sanitizeHistory, buildMessages, SYSTEM_PROMPT };
