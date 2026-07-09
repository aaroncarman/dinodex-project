/* One-off: snapshot every fossil exhibit detail panel (openFossilExhibit),
 * since the main snapshot.js only captures page-load state and these panels
 * only render on click. Usage: node exhibit-check.js <label> */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const OUT_ROOT = path.join(REPO_ROOT, 'refactor-snapshots');
const PORT = 8935;
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

  const ids = await page.evaluate(() => window.FOSSILS_SCIENCE_CASES.map(c => c.id));
  await page.evaluate(() => { document.querySelector('.sidebar-nav-item[data-view="fossils-science"]').click(); });
  await page.waitForTimeout(150);

  for (const id of ids) {
    const html = await page.evaluate((cid) => {
      window.openFossilExhibit(cid);
      return document.getElementById('fossil-exhibit-detail-panel').innerHTML;
    }, id);
    fs.writeFileSync(path.join(outDir, 'exhibit-' + id + '.html'), html, 'utf8');
  }
  await browser.close();
  server.close();
  console.log(`Exhibit snapshot "${label}" complete: ${ids.length} panels written.`);
}

run(process.argv[2]).catch((e) => { console.error(e); process.exit(1); });
