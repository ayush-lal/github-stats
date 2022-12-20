var p=Object.defineProperty;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(o,a,n)=>a in o?p(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n,f=(o,a)=>{for(var n in a||(a={}))m.call(a,n)&&d(o,n,a[n]);if(i)for(var n of i(a))b.call(a,n)&&d(o,n,a[n]);return o};import{C as g,W as h,s as u,a as y,b as x,A as E,c as w,L as v,B as A,p as C,d as O,e as R,r as c,R as l,D as S,f as k}from"./vendor.f7897d1d.js";const D=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}};D();const z=g`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --white: #fff;
    --black: #000;
    --gray: #7f7f7f;
    --blue: #057dcd;

    --bg: '#22272E';

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`,L=h`
  ${z};
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--white);
    color: var(--black);
    max-width: var(--max-width);
    background-color: #22272E;
  }

  p, h1 {
    color: #ADBAC7
  }
`,B=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`,j=u.div`
  padding: 2rem;
  border-radius: 10px;
`;async function _(){try{const{data:o}=await y.get("https://ayush-adhoc-api.up.railway.app/GetRepoLanguageStatistics"),a=o.reduce((r,t)=>(Object.keys(r).forEach(e=>{t[e]&&(r[e]+=t[e],delete t[e])}),Object.keys(t).forEach(e=>{r[e]||(r[e]=t[e])}),f({},r)));return Object.keys(a).map(r=>({[r]:a[r]})).map(r=>({label:Object.keys(r)[0],value:r[Object.keys(r)[0]]}))}catch(o){console.log(o)}}const F=["#a5c9ff","#f8b380","#d692ce","#b7fcae","#8efabb","#808de6","#f895bf","#9caac8","#9bddff","#8cc69e","#a195aa","#93fffd","#e3d5dd","#ff8cf0","#cff280","#87adc0","#899880","#f7fd80","#eca087","#b78aff"];x.register(E,w,v,A,C,O,R);const I=()=>{const[o,a]=c.exports.useState(),n=c.exports.useRef();c.exports.useEffect(()=>{(async()=>a(await _()))()},[]);const r={labels:o&&o.map(({label:e})=>e),datasets:[{data:o&&o.map(({value:e})=>e),backgroundColor:F}]},t={id:"custom_canvas_background_color",beforeDraw:e=>{const s=e.canvas.getContext("2d");s.save(),s.globalCompositeOperation="destination-over",s.fillStyle="#22272E",s.fillRect(0,0,1e3,1e3),s.borderRadius=20,s.restore()},legend:{labels:{color:"red"}}};return l.createElement(l.Fragment,null,l.createElement(L,null),l.createElement(B,null,l.createElement("h1",null,"GitHub Stats"),l.createElement("div",{className:"chart"},o?l.createElement(j,null,l.createElement(S,{ref:n,plugins:[t],style:{width:550},options:{responsive:!0,maintainAspectRatio:!0,layout:{padding:20},plugins:{legend:{labels:{color:"#ADBAC7"}}},animation:{onComplete:function(){var e;(e=document.getElementById("download"))==null||e.setAttribute("href",this.toBase64Image())}}},data:r})):l.createElement("p",null,"Loading...")),l.createElement("a",{style:{display:"none"},id:"download",href:""},"Download")))};k.render(l.createElement(l.StrictMode,null,l.createElement(I,null)),document.getElementById("root"));
