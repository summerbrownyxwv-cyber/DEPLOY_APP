// Dependency-free regression checks for the production counter and visibility lifecycle.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const events=()=>({listeners:new Map(),addEventListener(k,fn){this.listeners.set(k,fn)},removeEventListener(k){this.listeners.delete(k)}});
let now=0,id=0,observer;
const jobs=new Map();
const queue=(fn,delay=16)=>{jobs.set(++id,{fn,at:now+delay});return id};
const advance=ms=>{const end=now+ms;while(true){const next=[...jobs].sort((a,b)=>a[1].at-b[1].at)[0];if(!next||next[1].at>end)break;now=next[1].at;jobs.delete(next[0]);next[1].fn(now)}now=end};
const reduce={...events(),matches:false};
const counter={dataset:{count:'1,200.50万+'},classList:{add(){}},setAttribute(){},replaceChildren(...children){this.children=children}};
const main={...events(),querySelectorAll(selector){return selector==='[data-count]'?[counter]:[]}};
const window={...events()};
class Observer{
 constructor(callback,options){this.callback=callback;this.options=options;observer=this}
 observe(){} disconnect(){this.disconnected=true}
 emit(ratio){this.callback([{target:counter,isIntersecting:ratio>0,intersectionRatio:ratio}])}
}
window.IntersectionObserver=Observer;
const document={...events(),hidden:false,documentElement:{},querySelector:()=>({getBoundingClientRect:()=>({bottom:88})}),createElement:()=>({textContent:'',setAttribute(){}})};
const context={window,document,matchMedia:()=>reduce,IntersectionObserver:Observer,Element:{prototype:{animate(){}}},getComputedStyle:()=>({getPropertyValue:()=>''}),innerHeight:844,performance:{now:()=>now},setTimeout:queue,clearTimeout:n=>jobs.delete(n),requestAnimationFrame:fn=>queue(fn),cancelAnimationFrame:n=>jobs.delete(n),Map,Event};
vm.runInNewContext(fs.readFileSync(path.join(root,'website-code/prototype/motion-refinement.js'),'utf8'),context);
const motion=window.XunAiMotion;
for(const [input,p,expected] of [['1,200.50万+',.5,'600.25万+'],['80–120m²',.5,'40–60m²'],['98.5%',0,'0.0%'],['3–5秒',1,'3–5秒'],['待补充',.3,'待补充']])assert.equal(motion.formatCount(input,p),expected);
assert.equal(motion.isVisible({isIntersecting:true,intersectionRatio:.39},.4),false);
motion.mount(main);const value=()=>counter.children[1].textContent;
assert.equal(value(),'0.00万+');
observer.emit(.44);advance(4000);assert.equal(value(),'0.00万+','below threshold must not count');
observer.emit(.45);advance(199);assert.equal(value(),'0.00万+','delay must finish first');
advance(500);assert.notEqual(value(),'0.00万+');assert.notEqual(value(),'1,200.50万+');
observer.emit(0);assert.equal(value(),'0.00万+','early exit resets');advance(4000);assert.equal(value(),'0.00万+');
observer.emit(.5);advance(300);document.hidden=true;document.listeners.get('visibilitychange')();advance(4000);assert.equal(value(),'0.00万+','background must not finish');
document.hidden=false;document.listeners.get('visibilitychange')();observer.emit(.5);advance(2500);assert.equal(value(),'1,200.50万+');
observer.emit(0);observer.emit(.5);advance(500);assert.equal(value(),'1,200.50万+','completed counter plays once');
motion.unmount();assert.equal(jobs.size,0);assert.equal(window.listeners.size,0);assert.equal(document.listeners.size,0);
motion.mount(main);reduce.matches=true;reduce.listeners.get('change')();assert.equal(value(),'1,200.50万+','live reduced motion shows final');
motion.unmount();
const manifestContext={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'website-code/prototype/responsive-images.js'),'utf8'),manifestContext);
for(const item of Object.values(manifestContext.window.XunAiImages)){
 assert(item.width>0&&item.height>0);
 for(const [src,width] of item.variants){assert(width<=item.width);assert(fs.existsSync(path.resolve(root,'website-code/prototype',src)),src)}
}
console.log('PASS: format, thresholds, delay, early exit/re-entry, background, completion, reduced motion, cleanup and image references');
