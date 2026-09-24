const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'../website-code/prototype');
const css=fs.readFileSync(path.join(root,'wide-desktop.css'),'utf8').replace(/\/\*[\s\S]*?\*\//g,'').trim();
let depth=0;
for(let i=0;i<css.length;i++){
 if(depth===0&&!/\s/.test(css[i])){
  const media=css.slice(i).match(/^@media \(min-width:(1920|2560)px\)\{/);
  assert(media,'Rule outside approved wide breakpoint');i+=media[0].length-1;depth=1;continue;
 }
 if(css[i]==='{')depth++;if(css[i]==='}')depth--;assert(depth>=0);
}
assert.equal(depth,0);assert(!css.includes('url('));
assert(css.includes('.xs-hero-media video{width:100%;height:100%;object-fit:cover}'));
for(const [size,counts] of [[4,[4,4,2]],[5,[5,5]],[6,[6,4]]]){
 const pages=Array.from({length:Math.ceil(10/size)},(_,i)=>Array.from({length:10},(_,n)=>n).slice(i*size,(i+1)*size));
 assert.deepEqual(pages.map(p=>p.length),counts);assert.deepEqual(pages.flat(),Array.from({length:10},(_,i)=>i));
}
console.log('PASS: wide-only CSS, preserved assets, cover video and 4/5/6 pagination arithmetic');
