const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = path.resolve(__dirname, '../website-code/prototype');
const read = name => fs.readFileSync(path.join(base, name), 'utf8');
const css = read('mobile-responsive.css');
const start = css.indexOf('@media(max-width:767.98px)');
assert(start >= 0, 'Restoration must have a handset-only breakpoint');
let depth = 1, end = css.indexOf('{', start) + 1;
for (; depth && end < css.length; end++) {
  if (css[end] === '{') depth++;
  if (css[end] === '}') depth--;
}
assert.equal(depth, 0);
const phone = css.slice(start, end);
for (const rule of [
  '.xh-home .xh-ai-visual .xa-device',
  '.xf-hero-copy', '.xf-products', '.xf-terminal', '.xs-strength-thumbs',
  '.xs-service-group', '.xa-report-grid', '.xa-scenario-photos',
  '.xj-product-grid .xj-product', '.xo-news-track'
]) assert(phone.includes(rule), `Missing handset restoration: ${rule}`);
assert(phone.includes('.xs-service-group{grid-template-columns:repeat(2,minmax(0,1fr))'));
assert(phone.includes('.xf-products figure:nth-child(3),.xf-products figure:nth-child(4){grid-column:1/-1}'));
assert(phone.includes('flex-basis:82%'));
assert(phone.includes('grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:minmax(0,1fr)'));
const shared = css.slice(0, start);
assert(shared.includes('min-height:0;align-self:stretch;padding:1.25rem'));
assert(shared.includes('#recognition .xf-honor:nth-of-type(3)>h3>span{order:1}'));
assert(shared.includes('.xf-honor>h3{display:flex;align-items:baseline;gap:20px}'));
assert(shared.includes('.xf-history-track{flex-direction:row;'));
assert(shared.includes('.xf-years{flex-wrap:nowrap;overflow-x:auto;'));
assert(!/url\s*\(/i.test(phone), 'Restoration must not replace assets');
assert(!/\.xo-news-track\{[^}]*transform:[^}]*!important/.test(phone), 'Important transform blocks the news animation');
assert(read('script.js').includes("if (footerPhone.matches) syncPhoneFooter();"));
assert(css.includes('@media(max-width:1199.98px)'));
assert(css.includes('.footer-mobile-toggle'));
assert(read('script.js').includes("const footerPhone = matchMedia('(max-width:1199.98px)')"));
assert(read('script.js').includes('heading.replaceChildren(...nodes)'));
assert(read('brand-figma.js').includes("historyMobile=matchMedia('(max-width:1023.98px)')"));
assert(!read('brand-figma.js').includes('historyTablet'));
assert(read('about-page.js').includes("matchMedia('(min-width:768px) and (max-width:1023.98px)').matches"));
console.log('PASS: handset compositions, shared tablet history/honors, footer teardown, carousel guards and unchanged assets');
