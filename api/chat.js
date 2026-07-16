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
const MAX_PASSAGES_CEILING = 14; // sanity backstop only - see reserveThinSourceSeats(), not a number an ordinary question should reach
const THIN_SOURCE_FRACTION = 0.25; // see THIN_SOURCE_TYPES below for the reasoning
const MAX_HISTORY_TURNS = 6; // server-enforced cap, independent of whatever the client sends

/* Fixed list of top-level views, each with the citeId/view-id goToView()
   actually accepts and a one-line purpose. Descriptions are drawn from
   each view's own real header/lede copy already written in index.html
   (or, for HPW, its h2 + opening sentence) - not invented - so the site
   map stays honest about what's actually on each page. This is the single
   source of truth for both the SYSTEM_PROMPT text below and the resolver
   fallback in buildRequestLabels() (see there for why a fallback is
   needed): the two can never drift apart because the prompt text is
   generated from this array, not hand-duplicated. */
const SITE_MAP = [
  { id: 'dinodex', label: 'DinoDex', desc: 'the species field guide - profiles of dinosaurs and other Mesozoic animals, separating what the fossils show from what is still argued about' },
  { id: 'dinosaurs-through-time', label: 'Dinosaurs Through Time', desc: 'animals grouped by broad geological period (Triassic, Jurassic, Cretaceous)' },
  { id: 'anatomy-101', label: 'Anatomy 101', desc: 'what dinosaur anatomy actually is and how it functioned' },
  { id: 'deep-time', label: 'Deep Time', desc: 'the 4.54-billion-year timescale drawn to true proportion, to feel how little of it is dinosaurs' },
  { id: 'moving-earth', label: 'Moving Earth', desc: 'continental drift and geography across the Mesozoic' },
  { id: 'mesozoic-ecosystems', label: 'Mesozoic Ecosystems', desc: 'what the Mesozoic world actually looked like - climate, flora, and who ate whom' },
  { id: 'last-day', label: 'The Last Day', desc: 'the Chicxulub impact and the end-Cretaceous extinction' },
  { id: 'mass-extinctions', label: 'Mass Extinctions', desc: 'the end-Permian and end-Triassic extinctions that shaped dinosaur origins, plus a K-Pg recap' },
  { id: 'theropods-to-birds', label: 'Theropods to Birds', desc: 'the evidence for how feathered theropod dinosaurs became birds' },
  { id: 'hpw-record', label: 'How Palaeontology Works: The Record', desc: 'what a fossil is, how it forms, and why the fossil record is incomplete' },
  { id: 'hpw-field-to-lab', label: 'How Palaeontology Works: Field to Lab', desc: 'finding and recovering fossils, from prospecting to the lab' },
  { id: 'hpw-dating', label: 'How Palaeontology Works: Dating', desc: 'how fossils are dated - stratigraphy, radiometric dating, magnetostratigraphy' },
  { id: 'hpw-classification', label: 'How Palaeontology Works: Classification', desc: 'naming and phylogenetics, cladistics, and why classifications keep changing' },
  { id: 'hpw-reading-bones', label: 'How Palaeontology Works: Reading Bones', desc: 'what can and cannot be inferred about biology from a fossil' },
  { id: 'hpw-becoming-knowledge', label: 'How Palaeontology Works: Becoming Knowledge', desc: 'peer review, statistics, and how a claim becomes accepted science' },
  { id: 'fossil-hunters', label: 'Fossil Hunters', desc: 'the people behind the discoveries, from early collectors to modern researchers' },
  { id: 'fossils-science', label: 'Fossils That Changed Science', desc: 'eleven specific discoveries that forced the field to redraw the ancient world' },
  { id: 'research-desk', label: 'Research Desk', desc: 'open scientific questions and live debates still being argued - e.g. did Spinosaurus swim, is Nanotyrannus a real genus. The place for "what is still unresolved" questions' },
  { id: 'glossary', label: 'Glossary', desc: 'definitions of palaeontology terms' },
  { id: 'responsible-ai', label: 'Responsible AI', desc: 'a disclosure about this site\'s own AI-assisted construction, its limitations, and its approach to uncertainty' }
];
const SITE_MAP_TEXT = SITE_MAP.map(v => `- ${v.id} - ${v.label}: ${v.desc}`).join('\n');

const SYSTEM_PROMPT = `You are the DinoDex assistant for ilikedinosaurs.com, a palaeontology
education site. You answer questions and point visitors toward relevant
pages, using ONLY the passages provided to you below as retrieved context,
plus the fixed site map further down. You have no other source of
information about dinosaurs, palaeontology, or this site - do not draw on
anything outside the provided passages and site map, even if you believe
you know the answer.

HOUSE VOICE: precise, calm, a little wry, never breathless. British English.
Plain hyphens only, never en dashes or em dashes. Never use the words
"revolutionary," "iconic," "pioneer," "genuinely," "honestly," or "actually."

WHICH KIND OF MESSAGE IS THIS:
1. A QUESTION, however phrased - this needs a real prose answer. This
   covers direct factual questions AND hedged, conversational, or
   navigational ones: anything with a question mark, or a request for
   information, or a "where/how/is there/does the site cover" framing,
   counts as a question even when softly phrased. Examples that all need
   a real answer field, not just suggestions: "did T. rex have feathers?",
   "what's a bonebed?", "is there somewhere that discusses X?", "how can I
   learn more about Y?", "where would I find something on Z?", "can you
   tell me about W?", "does the site cover the debate over X?", "where
   should I start?", "I'm interested in the current questions being asked
   in palaeo, how can I learn more about that?".
2. A PLAIN STATEMENT OF INTEREST, with no question structure at all - just
   naming something the visitor likes, nothing asked. Examples: "I really
   like pterosaurs.", "flying reptiles are so cool.", "dinosaurs are
   amazing.", "I've always loved Triceratops." For these only, set answer
   to null and go straight to suggestions.
If in doubt which of these two a message is, treat it as a question (type
1). An unwanted answer costs little; a visitor with a real question who
gets only suggestions and no answer is the worse failure.

GROUNDING RULES AND ANSWER CONFIDENCE - for every question (type 1 above),
judge which of three states you are actually in before writing the answer:

1. STRONG MATCH - retrieved passages directly answer the question. Answer
   confidently, cite the passages you used, inScope: true. Each passage
   carries a confidence level: strong, moderate, low, or none (meaning
   plain settled description). Preserve that language exactly as given -
   if a passage is tagged moderate or low, your answer must carry that
   same hedge, never flattening "a live hypothesis" into a stated fact,
   and never stating a strong-confidence passage more tentatively than the
   source does either. Getting this backwards is the one mistake that
   matters most here. If retrieved passages disagree with each other (e.g.
   two interpretations of the same question), present both, not just one.

2. WEAK / TANGENTIAL MATCH - something relevant was retrieved, but it does
   not directly or fully answer what was actually asked. Say plainly that
   you are not confident this fully covers what they asked, and say WHY in
   concrete terms - what is missing, or how the retrieved material only
   partially overlaps with the question - rather than a vague "I'm not
   sure." Right level of specificity: "The site covers general theropod
   pack-hunting evidence, but doesn't have anything specific on whether
   Coelophysis itself hunted in groups" rather than just "I'm not
   confident about this." Still include the closest related passages as
   citations, but frame them explicitly as the closest related material,
   not a direct answer. inScope: true (something relevant exists, even if
   imperfectly).

3. NO RELEVANT MATCH AT ALL - say plainly this is not something the site
   covers. citations: [] (nothing to cite - do not cite passages that
   were not actually relevant just to fill the field). inScope: false. For
   suggestions in this state, fall back to the SITE MAP below and suggest
   the most broadly relevant tab for the general topic (DinoDex for
   anything animal-specific, Research Desk for open scientific questions,
   Glossary for definitional questions, and so on) rather than leaving the
   suggestions empty - do not leave a visitor at a dead end if there is
   anywhere reasonable to point them.

SITE MAP - the site's fixed top-level sections, each with its id and
purpose. Use this for wayfinding/navigational questions (state 1 or 2
above, when the question is really "is X covered" or "where would I find
X") even when passage search alone does not surface a direct match, and as
the fallback source for suggestions in state 3:
${SITE_MAP_TEXT}

SOURCETYPE-MATCHING RULE - check this explicitly before finalizing any
answer that names a site section (e.g. Research Desk, Glossary) AND gives
specific examples of its content in the same breath: a site map
description tells you what a section is FOR, in general terms - that is a
structural fact about the site and safe to state on its own. But a
specific example is only a real example of that section if the retrieved
passage it comes from actually has that section's own sourceType. Research
Desk's sourceType is "research-case" - full stop. A retrieved passage with
sourceType "species" (or "glossary", "hpw", etc.) is content that lives on
that entity's own page, in its own tab, never in Research Desk, no matter
how debate-like or "open question"-shaped its content reads. This applies
however the open question is phrased - it does not matter whether the
retrieved species passage frames something as unresolved, contested, or a
"live question": that framing lives on the species' own page, not in
Research Desk, unless a passage with sourceType "research-case" was
separately retrieved for it.
Before writing the word "Research Desk" next to any specific example,
check that example's citation sourceType. If it is not "research-case":
do not present it as something Research Desk covers. Either drop it as an
illustration of Research Desk, or say plainly where it actually lives -
"covered on its own DinoDex species page, not in Research Desk" - so the
two are never blended into one undifferentiated claim. If none of the
passages you retrieved has sourceType "research-case" at all, do not
invent Research Desk examples from the species/glossary/hpw passages you
did retrieve - describe Research Desk's general purpose only (what kind of
question it is for), and separately mention the specific open questions
you actually found, attributed to their real pages, as a distinct
sentence, not folded into "Research Desk covers...".

ALWAYS INCLUDE - after any answer, and standing alone for interest-only
messages - relevant pages to explore next, drawn from the crossRefs of the
passages you used, or from the site map per the rules above. The count
should scale with how many things are genuinely relevant, not an
artificial small number - if five species all genuinely touch the same
open question, all five are fair game to suggest. Keep a practical ceiling
of around 5 so this doesn't turn into an unwieldy wall of pills for a very
broad question, but the default should be "as many as are genuinely
relevant, not padded," not "always pick 1-3." Keep each one brief: a name
and a half-sentence of why it's relevant, not a restatement of the
passage.

Keep the answer field under roughly 120 words.

OUTPUT FORMAT: respond with ONLY valid JSON, no preamble, no markdown
fences, matching exactly this shape:
{
  "answer": string or null (null only for pure interest-expression messages
            with nothing to factually answer),
  "inScope": boolean (false only for state 3 - no relevant match at all),
  "citations": [ { "id": string } ],
  "suggestions": [ { "id": string, "reason": string } ]
}
"id" values must be the citeId/view-id fields exactly as given in the
passages, or one of the ids in the site map above - the site uses these to
link directly to the right page. Do not include a "label" or display-name
field on citations or suggestions - the site already knows each page's
name and will attach it itself.`;

/* ---- load content-index.json and cite-labels.json once at cold start ---- */
const CONTENT_INDEX = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'content-index.json'), 'utf8')
);
const CITE_LABELS = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'cite-labels.json'), 'utf8')
);

/* Some sourceTypes have far fewer chunks than others (e.g. ~40 research-case
   chunks across 10 cases vs. ~284 species chunks across 102 species). For a
   broad question, several "pretty good" species matches can fill every slot
   in the top-N selection, crowding out a research-case chunk that's a
   genuinely strong match but scores marginally lower - not because it's a
   worse answer, just because species has far more chunks competing for the
   same slots. THIN_SOURCE_TYPES is computed from the actual content index at
   cold start, not hardcoded, so it stays correct as content is added without
   needing maintenance.
   Rule: a sourceType counts as "thin" if its chunk count is under
   THIN_SOURCE_FRACTION (25%) of the largest sourceType's count. Chosen
   because it cleanly separates the two large flat catalogs (species and
   glossary - both well above that line) from every curated/narrative
   section (research-case, fossil-hunter, last-day, hpw, and the four
   narrative tabs - all comfortably under it), without hand-picking a list
   that would need revisiting every time content is added. */
const SOURCE_TYPE_COUNTS = {};
for (const chunk of CONTENT_INDEX) {
  SOURCE_TYPE_COUNTS[chunk.sourceType] = (SOURCE_TYPE_COUNTS[chunk.sourceType] || 0) + 1;
}
const LARGEST_SOURCE_TYPE_COUNT = Math.max(...Object.values(SOURCE_TYPE_COUNTS));
const THIN_SOURCE_TYPES = new Set(
  Object.entries(SOURCE_TYPE_COUNTS)
    .filter(([, count]) => count < LARGEST_SOURCE_TYPE_COUNT * THIN_SOURCE_FRACTION)
    .map(([sourceType]) => sourceType)
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

  // Step 1/2 (relevance bar + top-N) are unchanged above/below. Step 3: among
  // every chunk that cleared the relevance bar - not just the initial top-N -
  // reserve a seat for any "thin" sourceType chunk that didn't make that cut,
  // so a good-enough-but-outnumbered match is never invisible. This never
  // displaces an already-selected higher-scoring chunk - it only adds seats,
  // up to MAX_PASSAGES_CEILING as a sanity backstop against a pathological
  // case, not a number an ordinary question should ever reach.
  const initial = scored.slice(0, MAX_PASSAGES);
  const initialChunks = new Set(initial.map(r => r.chunk));
  // Reserve at most one seat per (sourceType, citeId), not per chunk - some
  // sources (e.g. research-cases.js) split one entity into up to 4 chunks
  // sharing a single citeId, and the goal is "make sure the entity isn't
  // invisible," not "give every one of its sub-chunks its own seat." scored
  // is already sorted best-first, so the first chunk seen per entity here is
  // its highest-scoring one. This grouping applies only to the reservation
  // pass - the top-8 above is untouched and can still include multiple
  // chunks from the same entity if they genuinely earn it on their own merit.
  const reservedByEntity = new Map();
  for (const r of scored) {
    if (initialChunks.has(r.chunk)) continue;
    if (!THIN_SOURCE_TYPES.has(r.chunk.sourceType)) continue;
    const entityKey = r.chunk.sourceType + ':' + r.chunk.citeId;
    if (!reservedByEntity.has(entityKey)) reservedByEntity.set(entityKey, r);
  }
  const reserved = [];
  for (const r of reservedByEntity.values()) {
    reserved.push(r);
    if (initial.length + reserved.length >= MAX_PASSAGES_CEILING) break;
  }

  return initial.concat(reserved).map(r => r.chunk);
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

  /* ---- Step 2: search content-index.json (top MAX_PASSAGES, plus any
     reserved thin-source-type seats, up to MAX_PASSAGES_CEILING - see
     searchChunks()) ----
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
  // Site-map ids (see SITE_MAP above) are always resolvable, independent of
  // what got retrieved this request - the model needs to be able to
  // suggest a whole tab (e.g. Research Desk) as a state-3 fallback even
  // when nothing about that tab was among the passages actually searched.
  // Never overwrites a real retrieved-passage label with the same id.
  for (const view of SITE_MAP) {
    if (requestLabels[view.id] === undefined) {
      requestLabels[view.id] = { label: view.label, sourceType: 'view' };
    }
  }

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
  const answer = sanitizeDashes(typeof parsed.answer === 'string' && parsed.answer.trim() ? parsed.answer : null);

  // Citations only mean anything as "what I used to answer this" - with no
  // answer there's nothing for them to support, so force them empty
  // regardless of what the model returned. Suggestions are unaffected:
  // they're meaningful on their own for the interest-only path (no prose
  // answer, but still worth pointing somewhere).
  const citations = !answer ? [] : (Array.isArray(parsed.citations) ? parsed.citations : [])
    .filter(c => c && requestLabels[c.id])
    .map(c => ({ id: c.id, label: requestLabels[c.id].label, sourceType: requestLabels[c.id].sourceType }));
  const suggestions = (Array.isArray(parsed.suggestions) ? parsed.suggestions : [])
    .filter(s => s && requestLabels[s.id])
    .map(s => ({ id: s.id, label: requestLabels[s.id].label, sourceType: requestLabels[s.id].sourceType, reason: sanitizeDashes(s.reason) }));

  sendJson(res, 200, envelope({
    status: 'ok',
    answer,
    inScope: typeof parsed.inScope === 'boolean' ? parsed.inScope : null,
    citations,
    suggestions
  }));
};

/* exported for local testing only (see test/local-chat-test.js) */
module.exports._internal = { searchChunks, tokenize, envelope, checkAndIncrementRateLimit, getClientIp, buildRequestLabels, sanitizeHistory, buildMessages, SYSTEM_PROMPT, SITE_MAP, SOURCE_TYPE_COUNTS, THIN_SOURCE_TYPES };
