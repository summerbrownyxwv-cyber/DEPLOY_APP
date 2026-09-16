import http from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve(import.meta.dirname,'..',process.argv[2]||'.');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.mp4':'video/mp4','.ttf':'font/ttf','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{
try{const url=new URL(req.url,'http://localhost');let file=resolve(root,'.'+decodeURIComponent(url.pathname));if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);return res.end();}if((await stat(file)).isDirectory())file=resolve(file,'index.html');const info=await stat(file);let start=0,end=info.size-1;const range=req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);if(range){start=Number(range[1]);end=range[2]?Math.min(Number(range[2]),end):end;if(start>end){res.writeHead(416);return res.end();}}
res.writeHead(range?206:200,{'Content-Type':types[extname(file)]||'application/octet-stream','Content-Length':end-start+1,'Accept-Ranges':'bytes',...(range?{'Content-Range':`bytes ${start}-${end}/${info.size}`}:{})});if(req.method==='HEAD')return res.end();createReadStream(file,{start,end}).pipe(res);
}catch{res.writeHead(404);res.end('Not found');}
}).listen(Number(process.env.PORT||4178),'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:'+(process.env.PORT||4178)));
