/*
 * Refactor safety-net snapshot tool.
 * Standalone dev tool, run manually with `node snapshot.js <before|after>`.
 * Never shipped, never wired into the live site, not part of any build step.
 *
 * Serves the repo root over plain HTTP (script tags need a real origin, not
 * file://), drives every sidebar view in headless Chromium, and saves:
 *   - the full innerHTML of that view's content container
 *   - a full-page screenshot
 * into refactor-snapshots/<label>/<view-id>.html and .png
 *
 * Run again after each refactor step with `node snapshot.js after` and diff
 * against `before` — see diff.js.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const OUT_ROOT = path.join(REPO_ROOT, 'refactor-snapshots');
const PORT = 8934;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.JPG': 'image/jpeg', '.gif': 'image/gif',
  '.json': 'application/json', '.docx': 'application/octet-stream',
};

function startServer() {
  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(REPO_ROOT, reqPath);
    if (!filePath.startsWith(REPO_ROOT)) { res.writeHead(403); res.end(); return; }
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404); res.end('not found: ' + reqPath); return; }
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// view-id -> the content container id whose innerHTML we snapshot.
// Most views are '<view-id>-view'; a couple render into a shared container.
const VIEWS = [
  'home', 'dinodex', 'dinosaurs-through-time', 'anatomy-101',
  'deep-time', 'moving-earth', 'mesozoic-ecosystems',
  'last-day', 'mass-extinctions', 'theropods-to-birds',
  'hpw-record', 'hpw-field-to-lab', 'hpw-dating', 'hpw-classification',
  'hpw-reading-bones', 'hpw-becoming-knowledge',
  'fossil-hunters', 'fossils-science', 'research-desk',
  'glossary', 'responsible-ai',
];

async function snapshotAll(label) {
  const outDir = path.join(OUT_ROOT, label);
  fs.mkdirSync(outDir, { recursive: true });

  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

  const consoleErrors = [];
  page.on('pageerror', (e) => consoleErrors.push('[pageerror] ' + e.message));
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push('[console.error] ' + msg.text()); });

  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle' });

  for (const view of VIEWS) {
    consoleErrors.length = 0;
    await page.evaluate((v) => {
      const btn = document.querySelector(
        `.sidebar-nav-item[data-view="${v}"],.sidebar-home[data-view="${v}"]`
      );
      if (btn) btn.click();
    }, view);
    await page.waitForTimeout(150); // let any render function finish

    const containerId = view + '-view';
    const html = await page.evaluate((cid) => {
      const el = document.getElementById(cid);
      return el ? el.innerHTML : null;
    }, containerId);

    if (html === null) {
      fs.writeFileSync(path.join(outDir, view + '.MISSING.txt'),
        `No element with id="${containerId}" found when data-view="${view}" was activated.\n`);
      continue;
    }

    fs.writeFileSync(path.join(outDir, view + '.html'), html, 'utf8');
    await page.screenshot({ path: path.join(outDir, view + '.png'), fullPage: true });
    if (consoleErrors.length) {
      fs.writeFileSync(path.join(outDir, view + '.console-errors.txt'), consoleErrors.join('\n'), 'utf8');
    }
  }

  await browser.close();
  server.close();
  console.log(`Snapshot "${label}" complete: ${VIEWS.length} views written to ${outDir}`);
}

const label = process.argv[2];
if (!label) {
  console.error('Usage: node snapshot.js <label>   e.g. node snapshot.js before');
  process.exit(1);
}
snapshotAll(label).catch((e) => { console.error(e); process.exit(1); });
