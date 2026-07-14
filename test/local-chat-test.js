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

  // Provide fake env vars so the handler doesn't hit the
  // "not configured" fail-safe path during these offline tests.
  process.env.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || 'test-fake-anthropic-key';
  process.env.UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL || 'https://fake-upstash.example.com';
  process.env.UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || 'fake-upstash-token';
  process.env.CHATBOT_TEST_KEY = process.env.CHATBOT_TEST_KEY || 'fake-test-key-for-offline-run';

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
      const userMsg = parsedBody.messages[0].content;
      // Simulate three distinct Claude behaviours based on what the
      // handler actually sent it, so we can test all three paths from
      // the validation checklist without real API calls.
      if (userMsg.includes('__SIMULATE_MALFORMED__')) {
        return { ok: true, json: async () => ({ content: [{ text: 'not valid json {{{' }] }) };
      }
      if (userMsg.includes('Retrieved passages: none')) {
        return {
          ok: true,
          json: async () => ({
            content: [{ text: JSON.stringify({
              answer: "That's not something this site covers yet.",
              inScope: false,
              citations: [],
              suggestions: [{ id: 'dinodex', label: 'DinoDex', reason: 'Browse the full species field guide instead.' }]
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
            citations: [{ id: 'tyrannosaurus', label: 'Tyrannosaurus rex' }],
            suggestions: [{ id: 'hpw-record', label: 'The Record', reason: 'Explains why specimen completeness varies so much between species.' }]
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
  }

  // --- interest-only message, no direct question ---
  {
    const { status, body } = await invoke(handler, {
      body: { question: 'I really like pterosaurs.' },
      headers: { 'x-test-key': process.env.CHATBOT_TEST_KEY }
    });
    check('Interest-only message returns HTTP 200', status === 200, `got ${status}`);
    check('  ...has suggestions', Array.isArray(body.suggestions) && body.suggestions.length > 0);
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
  process.exit(failed ? 1 : 0);
})();
