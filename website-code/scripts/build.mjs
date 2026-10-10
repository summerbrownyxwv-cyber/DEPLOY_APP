import {mkdir,cp,readFile,rm} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
const root=resolve(import.meta.dirname,'../..');
const runtime=resolve(root,'website-code');
const output=resolve(runtime,'dist');
const entry=await readFile(resolve(runtime,'index.html'),'utf8');
const files=['index.html',...Array.from(entry.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g),match=>match[1])];
for(const file of files)await readFile(resolve(runtime,file));
await rm(output,{recursive:true,force:true,maxRetries:3,retryDelay:100});
await mkdir(output,{recursive:true});
for(const item of ['index.html','assets'])await cp(resolve(root,item),resolve(output,item),{recursive:true,filter:file=>!file.endsWith('/.DS_Store')&&!file.split('/').at(-1).startsWith('._')});
for(const file of files){const target=resolve(output,'website-code',file);await mkdir(dirname(target),{recursive:true});await cp(resolve(runtime,file),target);}
console.log('PASS: static runtime copied unchanged into dist.');
