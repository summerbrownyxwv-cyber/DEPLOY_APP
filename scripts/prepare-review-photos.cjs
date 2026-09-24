// Original photos are kept untouched. Usage: NODE_PATH=<sharp modules> node scripts/prepare-review-photos.cjs
const sharp = require('sharp');
const { mkdir } = require('node:fs/promises');
const { resolve } = require('node:path');
const dest = resolve(__dirname, '../assets/review-20260920');
// name, original, output width/height, focal x/y, brightness, saturation, optional normalized crop
const photos = [
 ['history-2016','Downloads/微信图片_20230619094237.jpg',1200,720,.55,.6,1.12,.92],
 ['history-2017','Desktop/3931789872846_.pic.jpg',1200,720,.6,.58,1,.95],
 ['history-2019','Desktop/微信图片_20230619092716.jpg',1200,720,.5,.58,1.08,.92],
 ['history-2020','Desktop/3971789872992_.pic.jpg',1200,720,.5,.55,1,.88],
 ['history-2021','Desktop/3951789872925_.pic.jpg',1200,720,.48,.5,1.1,.83],
 ['history-2022','Desktop/3961789872932_.pic.jpg',1200,720,.55,.5,1,.93],
 ['history-2023','Desktop/3981789873301_.pic.jpg',1200,720,.5,.5,1.07,.92],
 ['history-2024','Desktop/3941789872857_.pic.jpg',1200,807,.5,.5,1,.95],
 ['history-2025','Downloads/_I9A0043.JPG',1200,720,.5,.2,1.16,.9],
 ['group','Desktop/艾草育苗恒温研究所 (2).jpg',1000,1100,.64,.56,1.08,.9],
 ['store-standard','Desktop/寻艾门店图_1-3.jpg',1200,825,.5,.56,1.08,.92],
 ['store-light','Desktop/Rectang1le.png',1200,825,.5,.5,1.02,.94],
 ['process-1','Desktop/4-007.jpg',1000,1000,.4,.53,1,.9],
 ['process-2','Desktop/01-企业介绍-_E4A2408.jpg',1000,1000,.63,.55,1.1,.88],
 ['process-3','Desktop/4001789876373_.pic.jpg',1000,1000,.43,.5,1,.9],
 ['process-4','Desktop/4021789876506_.pic.jpg',1000,1000,.55,.5,1,.87,[.12,.03,.75,.86]],
 ['process-5','Downloads/寻艾艾灸馆标准化SI手册#0704-21.jpg',1000,1000,.57,.55,1.08,.92],
 ['process-6','Desktop/3991789876362_.pic.jpg',1000,1000,.49,.47,1.06,.9],
 ...Array.from({length:9},(_,i)=>['service-'+(i+1),'Desktop/Rectangle'+(i?'-'+i:'')+'.png',600,856,[.5,.48,.57,.47,.43,.5,.53,.57,.53][i],[.57,.54,.53,.5,.48,.52,.55,.5,.5][i],1,.94])
];
(async()=>{
 await mkdir(dest,{recursive:true});
 for(const [name,path,width,height,x,y,brightness,saturation,crop] of photos){
  const src=resolve('/Users/dabao',path);
  let input=sharp(src).rotate();
  let buffer=await input.toBuffer();
  let meta=await sharp(buffer).metadata();
  if(crop){
   buffer=await sharp(buffer).extract({left:Math.round(meta.width*crop[0]),top:Math.round(meta.height*crop[1]),width:Math.floor(meta.width*crop[2]),height:Math.floor(meta.height*crop[3])}).toBuffer();
   meta=await sharp(buffer).metadata();
  }
  const ratio=width/height;
  const cw=Math.min(meta.width,Math.round(meta.height*ratio));
  const ch=Math.min(meta.height,Math.round(meta.width/ratio));
  const left=Math.max(0,Math.min(meta.width-cw,Math.round(meta.width*x-cw/2)));
  const top=Math.max(0,Math.min(meta.height-ch,Math.round(meta.height*y-ch/2)));
  await sharp(buffer).extract({left,top,width:cw,height:ch}).resize(width,height)
   .modulate({brightness,saturation}).webp({quality:87,effort:5}).toFile(resolve(dest,name+'.webp'));
  console.log(name,width+'x'+height);
 }
})();
