const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const list=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(item=>item.isDirectory()?list(path.join(dir,item.name)):[path.join(dir,item.name)]);
for(const base of [root,path.join(root,'dist')]){
 const assets=list(path.join(base,'assets'));
 assert(!assets.some(file=>/\.(png|jpe?g)$/i.test(file)),'Old bitmap files remain');
 const context={window:{}};
 const prototype=path.join(base,'website-code/prototype');
 vm.runInNewContext(fs.readFileSync(path.join(prototype,'responsive-images.js'),'utf8'),context);
 for(const [source,entry] of Object.entries(context.window.XunAiImages)){
  for(const url of [source,...entry.variants.map(item=>item[0])]){
   const file=path.resolve(prototype,url);
   assert(fs.existsSync(file),`Missing ${file}`);
   const header=fs.readFileSync(file).subarray(0,12);
   assert.equal(header.toString('ascii',8,12),'WEBP',`Invalid WebP ${file}`);
  }
 }
 for(const file of list(prototype).filter(file=>/\.(js|css|html)$/.test(file)))assert(!/\.(png|jpe?g)\b/i.test(fs.readFileSync(file,'utf8')),`Old bitmap reference ${file}`);
 console.log(`PASS: ${base===root?'source':'dist'} WebP masters and variants exist; no PNG/JPG files or runtime references.`);
}
