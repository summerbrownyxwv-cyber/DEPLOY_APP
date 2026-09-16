import {mkdir,cp,readFile,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const entry=await readFile(resolve(root,'website-code/prototype/index.html'),'utf8');
for(const match of entry.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g))await readFile(resolve(root,'website-code/prototype',match[1]));
await mkdir(resolve(root,'dist'),{recursive:true});
for(const item of ['index.html','website-code','design-system','assets'])await cp(resolve(root,item),resolve(root,'dist',item),{recursive:true});
console.log('PASS: static runtime copied unchanged into dist.');
