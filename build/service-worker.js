if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const t=e=>s(e,l),u={module:{uri:l},exports:o,require:t};i[l]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/main.css",revision:"e06d7701f1dff391e426820607d8a68b"},{url:"index.html",revision:"f96af7712a88b001a23b8e53b1a177d5"},{url:"js/build.23a2451104.js",revision:null},{url:"js/build.773c977863.js",revision:null},{url:"js/build.c8e7b912d2.js",revision:null},{url:"js/build.c8e7b912d2.js.LICENSE.txt",revision:"2031e621de27518e27f38a971f9cec6d"},{url:"media/0325d25689.gif",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
