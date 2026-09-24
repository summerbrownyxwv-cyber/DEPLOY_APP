const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'../website-code/prototype');
const context={window:{XunAiDesign:{responsiveMarkup:html=>html}},matchMedia:()=>({addEventListener(){}})};
vm.createContext(context);
for(const file of ['about-page.js','stores-page.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
for(const [page,contact] of [['careers','0713-3671098'],['business','0755-22664794'],['overseas','ljh1@aiaitie.com']])assert(context.window.XunAiAbout.render('/about/'+page).includes('咨询方式：'+contact));
const culture=context.window.XunAiAbout.render('/about/culture');
assert(culture.includes('品牌动态'));
assert(!culture.includes('class="xo-culture"'));
assert(!culture.includes('<p>东元集团</p>'));
assert.equal((culture.match(/profile_ext\?action=home/g)||[]).length,13);
for(const type of ['standard','black-gold']){
 const html=context.window.XunAiStores.render('/stores/'+type+'/detail');
 assert(!html.includes('2025年，寻艾将'));
 assert(!html.includes('场景介绍'));
 assert(html.includes('以科技赋能提效，让传统成为可进化的智慧'));
 assert(html.includes('寻艾·智能AI中医师随时为您检测'));
 assert(html.includes(type==='standard'?'品牌空间规范':'一席茶，一方静境。'));
}
assert(!fs.readFileSync(path.join(root,'brand-page.js'),'utf8').includes('深圳手信'));
console.log('PASS: shared contacts, culture, news links, store detail copy and removed honor.');
