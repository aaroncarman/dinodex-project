/* One-off: snapshot every person modal that has linked species (exercises
 * buildLinkedSpeciesPills), since it only renders on click, not page load.
 * Usage: node person-modal-check.js <label> */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const OUT_ROOT = path.join(REPO_ROOT, 'refactor-snapshots');
const PORT = 8936;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.JPG': 'image/jpeg' };

function startServer() {
  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(REPO_ROOT, reqPath);
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function run(label) {
  const outDir = path.join(OUT_ROOT, label);
  fs.mkdirSync(outDir, { recursive: true });
  const server = await startServer();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle' });

  const ids = await page.evaluate(() =>
    window.PEOPLE.filter(p => p.linkedDinoDexSpecies && p.linkedDinoDexSpecies.length).map(p => p.id)
  );

  for (const id of ids) {
    const html = await page.evaluate((pid) => {
      window.openPersonModal(pid);
      return document.getElementById('modal').innerHTML;
    }, id);
    fs.writeFileSync(path.join(outDir, 'person-' + id + '.html'), html, 'utf8');
  }
  await browser.close();
  server.close();
  console.log(`Person modal snapshot "${label}" complete: ${ids.length} modals written.`);
}

run(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });
