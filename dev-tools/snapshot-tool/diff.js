/*
 * Compares two snapshot runs (e.g. before vs after) and reports, per view,
 * whether the rendered innerHTML changed at all. Byte-identical is the bar.
 * Usage: node diff.js before after
 */
const fs = require('fs');
const path = require('path');

const OUT_ROOT = path.join(__dirname, '..', '..', 'refactor-snapshots');

const [labelA, labelB] = process.argv.slice(2);
if (!labelA || !labelB) {
  console.error('Usage: node diff.js <labelA> <labelB>');
  process.exit(1);
}

const dirA = path.join(OUT_ROOT, labelA);
const dirB = path.join(OUT_ROOT, labelB);

if (!fs.existsSync(dirA) || !fs.existsSync(dirB)) {
  console.error(`Missing snapshot dir: ${!fs.existsSync(dirA) ? dirA : dirB}`);
  process.exit(1);
}

const filesA = new Set(fs.readdirSync(dirA).filter(f => f.endsWith('.html')));
const filesB = new Set(fs.readdirSync(dirB).filter(f => f.endsWith('.html')));
const allViews = new Set([...filesA, ...filesB]);

let anyDiff = false;
const results = [];

for (const f of [...allViews].sort()) {
  const view = f.replace(/\.html$/, '');
  const pA = path.join(dirA, f);
  const pB = path.join(dirB, f);
  const existsA = fs.existsSync(pA);
  const existsB = fs.existsSync(pB);

  if (!existsA || !existsB) {
    anyDiff = true;
    results.push(`MISSING  ${view}: present in ${existsA ? labelA : ''}${existsA && !existsB ? '' : ''} ${!existsA ? labelA : labelB} but not the other`);
    continue;
  }

  const contentA = fs.readFileSync(pA, 'utf8');
  const contentB = fs.readFileSync(pB, 'utf8');

  if (contentA === contentB) {
    results.push(`OK       ${view}: identical (${contentA.length} chars)`);
  } else {
    anyDiff = true;
    // find first differing character for a human-readable pointer
    let i = 0;
    while (i < contentA.length && i < contentB.length && contentA[i] === contentB[i]) i++;
    const ctxA = contentA.slice(Math.max(0, i - 60), i + 60);
    const ctxB = contentB.slice(Math.max(0, i - 60), i + 60);
    results.push(
      `DIFF     ${view}: lengths ${contentA.length} vs ${contentB.length}, first diff at char ${i}\n` +
      `           ${labelA}: ...${ctxA}...\n` +
      `           ${labelB}: ...${ctxB}...`
    );
  }
}

console.log(results.join('\n'));
console.log('');
console.log(anyDiff ? 'RESULT: differences found — review before proceeding.' : 'RESULT: zero differences across all views.');
process.exit(anyDiff ? 1 : 0);
