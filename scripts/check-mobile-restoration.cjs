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
  '.xf-hero-copy', '.xf-history-track', '.xf-products', '.xf-terminal',
  '#recognition .xf-honor:nth-of-type(3)>h3', '.xs-strength-thumbs',
  '.xs-service-group', '.xa-report-grid', '.xa-scenario-photos',
  '.xj-product-grid .xj-product', '.xo-news-track'
]) assert(phone.includes(rule), `Missing handset restoration: ${rule}`);
assert(phone.includes('.xs-service-group{grid-template-columns:repeat(2,minmax(0,1fr))'));
assert(phone.includes('.xf-products figure:nth-child(3),.xf-products figure:nth-child(4){grid-column:1/-1}'));
assert(phone.includes('flex-basis:82%'));
assert(phone.includes('grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:minmax(0,1fr)'));
assert(phone.includes('min-height:0;align-self:stretch;padding:1.25rem'));
assert(phone.includes('#recognition .xf-honor:nth-of-type(3)>h3>span{order:1}'));
assert(!/url\s*\(/i.test(phone), 'Restoration must not replace assets');
assert(!/\.xo-news-track\{[^}]*transform:[^}]*!important/.test(phone), 'Important transform blocks the news animation');
assert(read('script.js').includes("if (footerPhone.matches) syncPhoneFooter();"));
assert(css.includes('@media(max-width:1199.98px)'));
assert(css.includes('.footer-mobile-toggle'));
assert(read('script.js').includes("const footerPhone = matchMedia('(max-width:1199.98px)')"));
assert(read('script.js').includes('heading.replaceChildren(...nodes)'));
assert(read('brand-figma.js').includes("historyPhone=matchMedia('(max-width:767.98px)')"));
assert(read('about-page.js').includes("matchMedia('(min-width:768px) and (max-width:1023.98px)').matches"));
console.log('PASS: 13 handset targets, preserved compositions, footer teardown, carousel guards and unchanged assets');
