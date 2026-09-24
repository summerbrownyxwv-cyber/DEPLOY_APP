const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'website-code/prototype/mobile-responsive.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').trim();
const guard = '@media (max-width:1023.98px)';
assert(css.startsWith(guard), 'Mobile CSS must not match the 1024px Desktop boundary');
let depth = 0;
for (let i = css.indexOf('{'); i < css.length; i++) {
  if (css[i] === '{') depth++;
  if (css[i] === '}') depth--;
  assert(depth >= 0, 'Unbalanced CSS');
  if (css[i] === '}' && depth === 0 && css.slice(i + 1).trim()) {
    assert(css.slice(i + 1).trim().startsWith('@media(max-width:1199.98px)'), 'Only the shared tablet footer may extend the mobile guard');
    assert(!css.slice(i + 1).replace(/\.footer-[\w-]+/g, '').includes('.xs-'), 'Tablet footer must not change store layouts');
  }
}
assert.equal(depth, 0);
assert(!/url\s*\(/i.test(css), 'Mobile overrides must not replace image/font assets');
assert(css.includes('--m-body:1rem'));
assert(css.includes('--m-page:1.25rem'));
assert(css.includes('.drawer-nav a{display:flex'));
assert(css.includes('.footer-columns{width:100%;display:grid;grid-template-columns:minmax(0,1fr)'));
console.log('PASS: Mobile-only guard, balanced CSS, unchanged assets, tokens, drawer and single-column footer');
