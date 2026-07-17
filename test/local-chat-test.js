#!/usr/bin/env node
/* ============================================================
   LOCAL TEST HARNESS for /api/chat.js
   Exercises the handler directly (mock req/res) so it can be run
   without `vercel dev`. Two modes:

   1. OFFLINE (default) - mocks global.fetch so Upstash and
      Anthropic are never actually called. Validates request
      validation, envelope shapes, rate-limit counter logic, and
      JSON-parse/error-handling paths without needing real
      credentials or spending anything.

   2. LIVE (only if a local .env.local file defines the four real
      env vars) - runs one real end-to-end call against the real
      Anthropic + Upstash APIs, using the x-test-key bypass so it
      doesn't count against the visitor daily limit.

   Run: node test/local-chat-test.js
   ============================================================ */

const fs = require('fs');
const path = require('path');

/* ---- tiny .env.local loader (no dependency) ---- */
function loadDotEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) return false;
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
  return true;
}
const hasDotEnvLocal = loadDotEnvLocal();

const REQUIRED_LIVE_VARS = ['ANTHROPIC_API_KEY', 'UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN', 'CHATBOT_TEST_KEY'];
const hasLiveCreds = REQUIRED_LIVE_VARS.every(v => Boolean(process.env[v]));

let passed = 0, failed = 0;
function check(label, cond, detail) {
  if (cond) { passed++; console.log(`  PASS - ${label}`); }
  else { failed++; console.log(`  FAIL - ${label}${detail ? ' :: ' + detail : ''}`); }
}

function mockReq({ method = 'POST', body = undefined, headers = {} } = {}) {
  return { method, body, headers, socket: { remoteAddress: '203.0.113.7' } };
}
function mockRes() {
  const res = {
    _status: null, _body: null,
    status(code) { this._status = code; return this; },
    json(body) { this._body = body; return this; }
  };
  return res;
}

async function invoke(handlerModule, reqOpts) {
  // fresh require each time isn't needed - handler is stateless per call
  const req = mockReq(reqOpts);
  const res = mockRes();
  await handlerModule(req, res);
  return { status: res._status, body: res._body };
}

/* ============================================================
   OFFLINE SECTION - mock fetch so no real network calls happen
   ============================================================ */
async function runOfflineTests() {
  console.log('\n=== OFFLINE TESTS (mocked Upstash + Anthropic) ===');

  // Force fake env vars for the *duration of this function only*, even if
  // .env.local supplies real ones - otherwise the mocked fetch below (which
  // only intercepts requests to fake-upstash.example.com) would silently let
  // real credentials fall through to realFetch() and hit production Upstash.
  const realEnv = {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    CHATBOT_TEST_KEY: process.env.CHATBOT_TEST_KEY
  };
  process.env.ANTHROPIC_API_KEY = 'test-fake-anthropic-key';
  process.env.UPSTASH_REDIS_REST_URL = 'https://fake-upstash.example.com';
  process.env.UPSTASH_REDIS_REST_TOKEN = 'fake-upstash-token';
  process.env.CHATBOT_TEST_KEY = 'fake-test-key-for-offline-run';

  // In-memory fake Redis so INCR/EXPIRE behave like the real thing.
  const fakeRedis = new Map();

  const realFetch = global.fetch;
  global.fetch = async function mockFetch(url, opts) {
    const u = String(url);

    if (u.includes('fake-upstash.example.com')) {
      const parts = u.split('/');
      // .../incr/<key>  or  .../expire/<key>/<seconds>
      const cmdIdx = parts.findIndex(p => p === 'incr' || p === 'expire');
      const cmd = parts[cmdIdx];
      if (cmd === 'incr') {
        const key = decodeURIComponent(parts[cmdIdx + 1]);
        const next = (fakeRedis.get(key) || 0) + 1;
        fakeRedis.set(key, next);
        return { ok: true, json: async () => ({ result: next }) };
      }
      if (cmd === 'expire') {
        return { ok: true, json: async () => ({ result: 1 }) };
      }
      return { ok: false, status: 400, text: async () => 'unknown command' };
    }

    if (u.includes('api.anthropic.com')) {
      const parsedBody = JSON.parse(opts.body);
      // The final message is always the current question + passages block,
      // regardless of how many history turns precede it - route on that,
      // not messages[0] (which is only correct when there's no history).
      const userMsg = parsedBody.messages[parsedBody.messages.length - 1].content;
      // Simulate three distinct Claude behaviours based on what the
      // handler actually sent it, so we can test all three paths from
      // the validation checklist without real API calls.
      if (userMsg.includes('__SIMULATE_MALFORMED__')) {
        return { ok: true, json: async () => ({ content: [{ text: 'not valid json {{{' }] }) };
      }
      if (userMsg.includes('Retrieved passages: none')) {
        // The mock model still tries to suggest a page (id: 'coelophysis')
        // even though nothing was retrieved for this question - which is
        // exactly the scenario the request-scoped label resolver should
        // catch: 'coelophysis' is a perfectly real site citeId, but it was
        // NOT among the (zero) passages actually retrieved for THIS
        // request, so it must still be dropped.
        return {
          ok: true,
          json: async () => ({
            content: [{ text: JSON.stringify({
              answer: "That's not something this site covers yet.",
              inScope: false,
              citations: [],
              suggestions: [{ id: 'coelophysis', reason: 'Browse the full species field guide instead.' }]
            }) }]
          })
        };
      }
      if (userMsg.includes('I really like pterosaurs')) {
        // 'pteranodon' is genuinely retrieved for this question (confirmed
        // against the real search index), so this exercises the normal
        // success path rather than the "nothing retrieved" edge case above.
        return {
          ok: true,
          json: async () => ({
            content: [{ text: JSON.stringify({
              answer: null,
              inScope: true,
              citations: [],
              suggestions: [{ id: 'pteranodon', reason: 'A well-known flying reptile with a very different anatomy to a dinosaur.' }]
            }) }]
          })
        };
      }
      // "in scope" factual answer path
      return {
        ok: true,
        json: async () => ({
          content: [{ text: '```json\n' + JSON.stringify({
            answer: 'Tyrannosaurus rex is known from more than forty identified specimens.',
            inScope: true,
            citations: [{ id: 'tyrannosaurus' }],
            suggestions: [{ id: 'hpw-record', reason: 'Explains why specimen completeness varies so much between species.' }]
          }) + '\n```' }]
        })
      };
    }

    return realFetch ? realFetch(url, opts) : { ok: false, status: 500, text: async () => 'no mock matched' };
  };

  delete require.cache[require.resolve('../api/chat.js')];
  const handler = require('../api/chat.js');

  // --- non-POST -> 405 ---
  {
    const { status, body } = await invoke(handler, { method: 'GET' });
    check('GET request returns HTTP 405', status === 405, `got ${status}`);
    check('405 response uses error envelope shape', body.status === 'error' && body.answer === null, JSON.stringify(body));
  }

  // --- missing body -> 400 ---
  {
    const { status, body } = await invoke(handler, { body: undefined, headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY } });
    check('Missing body returns HTTP 400', status === 400, `got ${status}`);
    check('400 response uses error envelope shape', body.status === 'error' && Array.isArray(body.citations) && body.citations.length === 0, JSON.stringify(body));
  }

  // --- malformed body (question not a string) -> 400 ---
  {
    const { status, body } = await invoke(handler, { body: { question: 12345 }, headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY } });
    check('Non-string "question" returns HTTP 400', status === 400, `got ${status}`);
  }

  // --- empty string question -> 400 ---
  {
    const { status } = await invoke(handler, { body: { question: '   ' }, headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY } });
    check('Whitespace-only "question" returns HTTP 400', status === 400, `got ${status}`);
  }

  // --- factual question the index should cover well, WITH test-key bypass ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: 'How many Tyrannosaurus rex specimens are known?' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Factual in-scope question returns HTTP 200', status === 200, `got ${status}`);
    check('  ...status "ok"', body.status === 'ok');
    check('  ...answer is a non-empty string', typeof body.answer === 'string' && body.answer.length > 0);
    check('  ...inScope true', body.inScope === true);
    check('  ...has at least one citation', Array.isArray(body.citations) && body.citations.length > 0);
    check('  ...citation label came from cite-labels.json, not the model (model sent no label)',
      body.citations[0] && body.citations[0].label === 'Tyrannosaurus rex', JSON.stringify(body.citations));
    check('  ...citation carries sourceType for the widget\'s click-through dispatch', body.citations[0] && body.citations[0].sourceType === 'species', JSON.stringify(body.citations));
    check('  ...suggestion label came from cite-labels.json too', body.suggestions[0] && body.suggestions[0].label === 'How a fossil forms', JSON.stringify(body.suggestions));
    check('  ...suggestion carries sourceType too', body.suggestions[0] && body.suggestions[0].sourceType === 'hpw', JSON.stringify(body.suggestions));
    check('  ...message is null', body.message === null);
  }

  // --- question genuinely outside scope ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: 'How do I fix a leaking kitchen tap?' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Out-of-scope question still returns HTTP 200', status === 200, `got ${status}`);
    check('  ...inScope false', body.inScope === false);
    check('  ...still status "ok" (model handled it, not an error)', body.status === 'ok');
    // Nothing was actually retrieved for this question (confirmed against
    // the real search index), so even though the mock model suggested a
    // perfectly real site citeId ('coelophysis'), it wasn't among the
    // passages retrieved for THIS request and must still be dropped - the
    // request-scoped resolver has nothing to resolve it against.
    check('  ...suggestion with no matching retrieved passage is dropped, not shown with a stale/global label', body.suggestions.length === 0, JSON.stringify(body.suggestions));
  }

  // --- model hallucinates a citeId that doesn't exist in the site's content ---
  {
    const realFetch2 = global.fetch;
    global.fetch = async function (url, opts) {
      if (String(url).includes('api.anthropic.com')) {
        return { ok: true, json: async () => ({ content: [{ text: JSON.stringify({
          answer: 'Test answer.',
          inScope: true,
          citations: [{ id: 'tyrannosaurus' }, { id: 'this-citeid-does-not-exist' }],
          suggestions: [{ id: 'this-one-also-does-not-exist', reason: 'bogus' }]
        }) }] }) };
      }
      return realFetch2(url, opts);
    };
    // Reuse a question confirmed to actually retrieve a tyrannosaurus chunk,
    // so requestLabels genuinely contains 'tyrannosaurus' and this test
    // proves real-citeId-kept vs. hallucinated-citeId-dropped, rather than
    // both being dropped simply because nothing was retrieved at all.
    const { status, body } = await invoke(handler, {
      body: { question: 'How many Tyrannosaurus rex specimens are known?' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Hallucinated citeId: response still 200', status === 200, `got ${status}`);
    check('  ...real citeId kept, with its label attached', body.citations.length === 1 && body.citations[0].id === 'tyrannosaurus' && body.citations[0].label === 'Tyrannosaurus rex', JSON.stringify(body.citations));
    check('  ...unresolvable citeId silently dropped, not shipped with a missing/blank label', body.suggestions.length === 0, JSON.stringify(body.suggestions));
    global.fetch = realFetch2;
  }

  // --- interest-only message, no direct question ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: 'I really like pterosaurs.' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Interest-only message returns HTTP 200', status === 200, `got ${status}`);
    check('  ...has suggestions', Array.isArray(body.suggestions) && body.suggestions.length > 0);
    check('  ...suggestion label resolved from the actually-retrieved chunk', body.suggestions[0] && body.suggestions[0].label === 'Pteranodon', JSON.stringify(body.suggestions));
  }

  // ============================================================
  // MULTI-TURN TESTS
  // ============================================================

  // --- no history at all (undefined, not even an empty array) - old
  // stateless behaviour must still work unchanged ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: 'How many Tyrannosaurus rex specimens are known?' }, // no "history" key at all
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('No "history" field at all: still HTTP 200, unchanged behaviour', status === 200, `got ${status}`);
    check('  ...status "ok", citation label attached as before', body.status === 'ok' && body.citations[0] && body.citations[0].label === 'Tyrannosaurus rex', JSON.stringify(body));
  }

  // --- sanitizeHistory() unit checks: cap + drop malformed entries ---
  {
    const { sanitizeHistory } = handler._internal;
    const eightValidTurns = Array.from({ length: 8 }, (_, i) => ({ question: `Q${i}`, answer: `A${i}` }));
    const capped = sanitizeHistory(eightValidTurns);
    check('sanitizeHistory caps 8 valid entries down to the last 6', capped.length === 6 && capped[0].question === 'Q2' && capped[5].question === 'Q7', JSON.stringify(capped));

    const messy = [
      { question: 'Real question', answer: 'Real answer' },
      { question: 'Missing answer field' }, // dropped
      { question: 42, answer: 'Non-string question' }, // dropped
      { question: '', answer: 'Empty question string' }, // dropped
      null, // dropped
      'just a string, not an object', // dropped
      { question: '   ', answer: 'Whitespace-only question' }, // dropped
      { question: 'Another real one', answer: 'Another real answer' }
    ];
    const sanitizedMessy = sanitizeHistory(messy);
    check('sanitizeHistory drops every malformed entry, keeps only the 2 well-formed ones',
      sanitizedMessy.length === 2 && sanitizedMessy[0].question === 'Real question' && sanitizedMessy[1].question === 'Another real one',
      JSON.stringify(sanitizedMessy));

    check('sanitizeHistory(undefined) returns []', Array.isArray(sanitizeHistory(undefined)) && sanitizeHistory(undefined).length === 0);
    check('sanitizeHistory(non-array) returns []', Array.isArray(sanitizeHistory('not an array')) && sanitizeHistory('not an array').length === 0);
  }

  // --- oversized/malformed history sent in an actual request: confirm the
  // server caps and sanitises it before it ever reaches Anthropic, rather
  // than trusting the client's own array as-is ---
  {
    const sharedMockFetch = global.fetch;
    let capturedMessages = null;
    global.fetch = async function (url, opts) {
      if (String(url).includes('api.anthropic.com')) {
        capturedMessages = JSON.parse(opts.body).messages;
        return { ok: true, json: async () => ({ content: [{ text: JSON.stringify({
          answer: 'Fine.', inScope: true, citations: [], suggestions: []
        }) }] }) };
      }
      return sharedMockFetch(url, opts);
    };
    const oversizedHistory = Array.from({ length: 12 }, (_, i) => ({ question: `Old question ${i}`, answer: `Old answer ${i}` }));
    oversizedHistory.push({ question: 'malformed, no answer field' }); // should be dropped entirely, not just left un-capped
    const { status } = await invoke(handler, {
      body: { question: 'Current question.', history: oversizedHistory },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Oversized/malformed history request: still HTTP 200', status === 200, `got ${status}`);
    // 12 valid turns capped to 6 -> 12 messages (6 user + 6 assistant) + 1 final user message = 13
    check('  ...only the last 6 (valid) history turns reached Anthropic, not all 12+1',
      capturedMessages.length === 13, `got ${capturedMessages ? capturedMessages.length : 'null'} messages: ${JSON.stringify(capturedMessages)}`);
    check('  ...oldest surviving history turn is "Old question 6" (0-5 were trimmed off)',
      capturedMessages[0].content === 'Old question 6', capturedMessages[0].content);
    check('  ...malformed trailing entry (no answer) was dropped, not passed through as garbage',
      !capturedMessages.some(m => m.content === 'malformed, no answer field'));
    global.fetch = sharedMockFetch;
  }

  // --- genuine multi-turn structure sent to Anthropic, plus the
  // previous-question search-weighting improvement for vague follow-ups ---
  {
    // Confirmed against the real search index: "What about its arms?" alone
    // does not retrieve anything about Tyrannosaurus, but folding in the
    // previous turn's question as lower-weighted context does.
    const aloneResults = handler._internal.searchChunks('What about its arms?');
    const withContextResults = handler._internal.searchChunks('What about its arms?', 'Tell me about Tyrannosaurus.');
    check('Vague follow-up alone does not retrieve Tyrannosaurus content', !aloneResults.some(c => c.citeId === 'tyrannosaurus'), JSON.stringify(aloneResults.map(c => c.citeId)));
    check('Same follow-up WITH the previous question as context does retrieve it', withContextResults.some(c => c.citeId === 'tyrannosaurus'), JSON.stringify(withContextResults.map(c => c.citeId)));

    const sharedMockFetch = global.fetch;
    let capturedBody = null;
    global.fetch = async function (url, opts) {
      if (String(url).includes('api.anthropic.com')) {
        capturedBody = JSON.parse(opts.body);
        return { ok: true, json: async () => ({ content: [{ text: JSON.stringify({
          answer: 'Its forelimbs were short, with two functional fingers.', inScope: true, citations: [{ id: 'tyrannosaurus' }], suggestions: []
        }) }] }) };
      }
      return sharedMockFetch(url, opts);
    };
    const { status, body } = await invoke(handler, {
      body: {
        question: 'What about its arms?',
        history: [{ question: 'Tell me about Tyrannosaurus.', answer: 'Tyrannosaurus rex was a large bipedal theropod from the Late Cretaceous.' }]
      },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Follow-up request: HTTP 200', status === 200, `got ${status}`);
    check('  ...answer is coherent with the prior turn (mock stands in for a real grounded answer)', body.answer && body.answer.toLowerCase().includes('forelimb'));
    check('  ...system prompt still sent in full, unchanged, every call', capturedBody.system === handler._internal.SYSTEM_PROMPT);
    check('  ...messages: [prior user, prior assistant, current user] - genuine multi-turn structure, not one flattened block',
      capturedBody.messages.length === 3 &&
      capturedBody.messages[0].role === 'user' && capturedBody.messages[0].content === 'Tell me about Tyrannosaurus.' &&
      capturedBody.messages[1].role === 'assistant' && capturedBody.messages[1].content === 'Tyrannosaurus rex was a large bipedal theropod from the Late Cretaceous.' &&
      capturedBody.messages[2].role === 'user' && capturedBody.messages[2].content.includes('What about its arms?'),
      JSON.stringify(capturedBody.messages));
    check('  ...prior assistant turn is plain text, not the JSON envelope, so the model is not reading its own past output-format back at itself',
      !capturedBody.messages[1].content.trim().startsWith('{'));
    global.fetch = sharedMockFetch;
  }

  // --- NEW: cross-sourceType citeId collision (spinosaurus is the real,
  // currently-existing example) resolved correctly with no cross-
  // contamination, using the actual buildRequestLabels()/searchChunks()
  // logic rather than a further mock ---
  {
    const { searchChunks, buildRequestLabels } = handler._internal;

    // Construct a synthetic "retrieved passages" set the way a real request
    // might: one species chunk and one research-case chunk that legitimately
    // share the bare citeId "spinosaurus" (confirmed to actually exist in
    // cite-labels.json under both sourceTypes with the same real name).
    const speciesChunk = searchChunks('Was Spinosaurus a swimmer?').find(c => c.sourceType === 'species' && c.citeId === 'spinosaurus');
    const caseChunk = searchChunks('Was Spinosaurus a swimmer?').find(c => c.sourceType === 'research-case' && c.citeId === 'spinosaurus');
    check('Setup: both a species and a research-case "spinosaurus" chunk exist to retrieve', Boolean(speciesChunk) && Boolean(caseChunk));

    const requestLabels = buildRequestLabels([speciesChunk, caseChunk].filter(Boolean));
    check('  ...request-scoped label for "spinosaurus" resolves (no cross-contamination possible - both sourceTypes happen to share the same real name here)',
      requestLabels.spinosaurus && requestLabels.spinosaurus.label === 'Spinosaurus', JSON.stringify(requestLabels));

    // Now prove the model referencing only ONE of the two ambiguous ids
    // still resolves correctly and doesn't spuriously pull in the other.
    // Save/restore the shared mock exactly like the hallucinated-citeId
    // block above, so later tests (malformed JSON, rate-limit bypass
    // checks) keep using the original shared mock, not this one-off.
    const sharedMockFetch = global.fetch;
    global.fetch = async function (url, opts) {
      if (String(url).includes('api.anthropic.com')) {
        return { ok: true, json: async () => ({ content: [{ text: JSON.stringify({
          answer: 'Spinosaurus may have been semi-aquatic.',
          inScope: true,
          citations: [{ id: 'spinosaurus' }],
          suggestions: []
        }) }] }) };
      }
      return sharedMockFetch(url, opts); // Upstash (and anything else) still goes through the real shared mock
    };
    const { status, body } = await invoke(handler, {
      body: { question: 'Was Spinosaurus a swimmer?' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Collision question end-to-end: HTTP 200', status === 200, `got ${status}`);
    check('  ...single citation resolves to the correct shared label, no duplication or cross-contamination',
      body.citations.length === 1 && body.citations[0].id === 'spinosaurus' && body.citations[0].label === 'Spinosaurus', JSON.stringify(body.citations));
    global.fetch = sharedMockFetch;
  }

  // --- NEW: direct name-match pass catches an entity name buried in
  // ordinary phrasing that the stopword/tokenizer path alone misses ---
  {
    const { searchChunks } = handler._internal;

    // The exact motivating example: "favourite", "dino", "interesting",
    // "things" all survive stopword stripping as ordinary content words,
    // so the query never collapses to a single term and never gets the
    // MIN_DISTINCT_MATCHES relaxation - even though "magyarosaurus" is
    // sitting right there in the text.
    const magyarosaurusResults = searchChunks('my favourite dino is magyarosaurus, tell me some interesting things about it');
    check('Buried name (Magyarosaurus) is retrieved despite generic surrounding phrasing',
      magyarosaurusResults.some(c => c.sourceType === 'species' && c.citeId === 'magyarosaurus'),
      JSON.stringify(magyarosaurusResults.map(c => c.sourceType + ':' + c.citeId)));

    // Two more, differently phrased, to confirm this generalises rather
    // than just patching the one example.
    const nyasasaurusResults = searchChunks('so I saw this weird looking creature called nyasasaurus somewhere and got curious about it');
    check('Buried name (Nyasasaurus) is retrieved from a different sentence shape',
      nyasasaurusResults.some(c => c.sourceType === 'species' && c.citeId === 'nyasasaurus'),
      JSON.stringify(nyasasaurusResults.map(c => c.sourceType + ':' + c.citeId)));

    const huayangosaurusResults = searchChunks('a friend of mine keeps talking about huayangosaurus and I have no clue what that even is');
    check('Buried name (Huayangosaurus) is retrieved from yet another sentence shape',
      huayangosaurusResults.some(c => c.sourceType === 'species' && c.citeId === 'huayangosaurus'),
      JSON.stringify(huayangosaurusResults.map(c => c.sourceType + ':' + c.citeId)));

    // Confirm the name-match pass doesn't force a chunk in when the
    // question has no entity name at all - ordinary topical queries still
    // go through the existing tokenized path unchanged.
    const noNameResults = searchChunks('How do I fix a leaking kitchen tap?');
    check('No buried name -> no forced chunk, ordinary out-of-scope behaviour unchanged',
      noNameResults.length === 0, JSON.stringify(noNameResults));
  }

  // --- malformed JSON from Claude -> error envelope, not a crash ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: '__SIMULATE_MALFORMED__ trigger bad json' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Malformed model JSON returns HTTP 500', status === 500, `got ${status}`);
    check('  ...status "error" with a message, no crash', body.status === 'error' && typeof body.message === 'string');
  }

  // --- test-key bypass: WRONG key should NOT bypass, should hit rate limiter normally ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: 'Does the wrong test key bypass rate limiting?' },
      headers: { 'x-test-key': 'this-is-not-the-real-key' }
    });
    check('Wrong x-test-key still returns HTTP 200 (under the limit)', status === 200, `got ${status}`);
    // confirm it actually went through the counter by checking the fake Redis got an increment
    const anyRatelimitKeys = [...fakeRedis.keys()].some(k => k.startsWith('chatbot:ratelimit:'));
    check('  ...rate-limit counter was actually touched (bypass did not silently apply)', anyRatelimitKeys);
  }

  // --- absent x-test-key header entirely -> falls through to rate limiter normally ---
  {
    fakeRedis.clear();
    const { status } = await invoke(handler, { body: { question: 'No test key header at all.' } });
    check('No x-test-key header returns HTTP 200 (under the limit) and uses rate limiter', status === 200);
    check('  ...counter incremented for this IP', [...fakeRedis.values()][0] === 1);
  }

  // --- simulate hitting the daily limit directly against the counter logic ---
  {
    fakeRedis.clear();
    const ip = '198.51.100.42';
    const key = `chatbot:ratelimit:${ip}:${new Date().toISOString().slice(0, 10)}`;
    fakeRedis.set(key, DAILY_LIMIT_FOR_TEST());
    function DAILY_LIMIT_FOR_TEST() { return 10; } // matches DAILY_LIMIT in api/chat.js
    const req = { method: 'POST', body: { question: 'Am I rate limited yet?' }, headers: {}, socket: { remoteAddress: ip } };
    const res = mockRes();
    await handler(req, res);
    check('11th question from same IP same day returns HTTP 429', res._status === 429, `got ${res._status}`);
    check('  ...status "rate_limited"', res._body.status === 'rate_limited');
    check('  ...citations/suggestions are empty arrays, not null', Array.isArray(res._body.citations) && Array.isArray(res._body.suggestions));
    check('  ...answer/inScope are null', res._body.answer === null && res._body.inScope === null);
    check('  ...message has the house-voice rate-limit copy', res._body.message.includes("today's question limit"));
  }

  global.fetch = realFetch;

  // restore real credentials (if any) so a subsequent live test uses them
  for (const [key, value] of Object.entries(realEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

/* ============================================================
   LIVE SECTION - only runs if .env.local supplies real credentials
   ============================================================ */
async function runLiveTest() {
  console.log('\n=== LIVE TEST (real Anthropic + Upstash calls) ===');
  delete require.cache[require.resolve('../api/chat.js')];
  const handler = require('../api/chat.js');

  const { status, body } = await invoke(handler, {
    body: { question: 'What is a bonebed?' },
    headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
  });
  console.log('  question: "What is a bonebed?"');
  console.log('  HTTP status:', status);
  console.log('  response:', JSON.stringify(body, null, 2));
  check('Live call returns HTTP 200', status === 200, `got ${status}`);
  check('Live call status "ok"', body.status === 'ok');
  check('Live call produced a non-empty answer', typeof body.answer === 'string' && body.answer.length > 0);

  console.log('\n--- LIVE two-turn follow-up conversation ---');
  const turn1Question = 'Tell me about Coelophysis.';
  const { status: s1, body: b1 } = await invoke(handler, {
    body: { question: turn1Question },
    headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
  });
  console.log('  turn 1 question:', turn1Question);
  console.log('  turn 1 answer:', b1.answer);
  check('Live turn 1: HTTP 200 with a real answer', s1 === 200 && typeof b1.answer === 'string' && b1.answer.length > 0);

  const turn2Question = 'Did it hunt in groups?'; // deliberately pronoun-based, no species name
  const { status: s2, body: b2 } = await invoke(handler, {
    body: {
      question: turn2Question,
      history: [{ question: turn1Question, answer: b1.answer }]
    },
    headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
  });
  console.log('  turn 2 question (pronoun-based follow-up):', turn2Question);
  console.log('  turn 2 answer:', b2.answer);
  console.log('  turn 2 citations:', JSON.stringify(b2.citations));
  check('Live turn 2: HTTP 200 with a real answer', s2 === 200 && typeof b2.answer === 'string' && b2.answer.length > 0);
  check('Live turn 2 answer stayed on Coelophysis, not a cold/generic answer ("it" resolved via history)',
    /coelophysis/i.test(b2.answer) || (b2.citations || []).some(c => c.id === 'coelophysis'),
    `answer: ${b2.answer} | citations: ${JSON.stringify(b2.citations)}`);

  // --- Standing spot-check, not a pass/fail assertion (LLM output isn't
  // deterministic): interest-only statements should now get real, grounded
  // content per Phase 2, not answer:null. Read this by eye on every run. ---
  console.log('\n--- LIVE spot-check: interest-only statement (Phase 2) ---');
  const interestQuestion = 'I really like pterosaurs.';
  const { status: sInterest, body: bInterest } = await invoke(handler, {
    body: { question: interestQuestion },
    headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
  });
  console.log('  message:', interestQuestion);
  console.log('  HTTP status:', sInterest);
  console.log('  full response:', JSON.stringify(bInterest, null, 2));

  // --- Standing spot-check, not a pass/fail assertion: the Research-Desk
  // sourcetype-attribution problem (Phase 3). Read by eye on every run -
  // check whether any specific example named alongside "Research Desk" is
  // actually one of the citations' research-case sourceType entries. ---
  console.log('\n--- LIVE spot-check: Research Desk sourcetype attribution (Phase 3) ---');
  const openQuestionsMessage = "I'm interested in the open questions palaeontologists are still arguing about.";
  const { status: sOpenQ, body: bOpenQ } = await invoke(handler, {
    body: { question: openQuestionsMessage },
    headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
  });
  console.log('  message:', openQuestionsMessage);
  console.log('  HTTP status:', sOpenQ);
  console.log('  full response:', JSON.stringify(bOpenQ, null, 2));
}

(async () => {
  await runOfflineTests();

  if (hasLiveCreds) {
    await runLiveTest();
  } else {
    console.log('\n=== LIVE TEST SKIPPED ===');
    console.log('  No .env.local with real ANTHROPIC_API_KEY / UPSTASH_REDIS_REST_URL /');
    console.log('  UPSTASH_REDIS_REST_TOKEN / CHATBOT_TEST_KEY found, so no real API calls were made.');
    console.log('  (checked for .env.local at project root:', hasDotEnvLocal ? 'file exists but is missing one or more vars' : 'no file found', ')');
  }

  console.log(`\n=== RESULT: ${passed} passed, ${failed} failed ===`);
  // Set exitCode rather than forcing process.exit() - a forced exit can race
  // an open fetch keep-alive socket (from the real Anthropic/Upstash calls
  // above) and trip a benign libuv teardown assertion on some platforms.
  process.exitCode = failed ? 1 : 0;
})();
