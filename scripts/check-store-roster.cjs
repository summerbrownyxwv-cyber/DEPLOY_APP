const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const context={window:{XunAiDesign:{responsiveMarkup:html=>html}},matchMedia:()=>({addEventListener(){}})};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname,'../website-code/prototype/stores-page.js'),'utf8'),context);
for(const route of ['/stores/standard','/stores/black-gold']){
 const html=context.window.XunAiStores.render(route).match(/<section class="xs-section" id="locations">([\s\S]*?)<\/section>/)[1];
 const ids=[...html.matchAll(/data-store-id="(\d+)"/g)].map(match=>Number(match[1]));
 assert.equal(ids.length,107);
 assert.deepEqual([...ids].sort((a,b)=>a-b),Array.from({length:109},(_,i)=>i+1).filter(id=>id!==60&&id!==61));
 const groups=html.split('<div class="xs-location-group">').slice(1);
 assert.deepEqual([...groups[0].matchAll(/data-store-id="(\d+)"/g)].map(match=>Number(match[1])),[25,56]);
 assert(groups[1].includes('data-store-cities'));
 assert.equal((html.match(/xs-store-subgroup/g)||[]).length,2);
 assert.deepEqual([...groups[1].matchAll(/data-store-id="(\d+)" data-store-type="直营店"/g)].map(match=>Number(match[1])),[6,28,41,53,70,109]);
 assert.equal([...groups[1].matchAll(/data-store-type="加盟店"/g)].length,99);
 assert(!html.includes('门店名称：'));
 assert(html.includes('待定（未选址）'));
 for(const name of ['莲花北村店','隆尧县魏庄村店','御景天城店'])assert(html.includes(`寻艾轻享店（${name}）`));
 assert(!/深圳湾|地址、营业时间|区域经理|加盟商/.test(html));
}
console.log('PASS: 107 source records; exclusions 60/61; black-gold 2, standard direct 6, franchise 99; no invented details.');
const review=fs.readFileSync(path.join(__dirname,'../website-code/prototype/review-comments.js'),'utf8');
assert(!review.includes('phone.matches'));
assert(review.includes("querySelectorAll('.xs-city-book,.xs-store-subgroup')"));
assert(review.includes('groupCities();'));
console.log('PASS: all-screen city grouping and nested search expansion guards.');
