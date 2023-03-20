var p=Object.defineProperty;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(r,a,n)=>a in r?p(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,u=(r,a)=>{for(var n in a||(a={}))m.call(a,n)&&d(r,n,a[n]);if(i)for(var n of i(a))g.call(a,n)&&d(r,n,a[n]);return r};import{C as b,W as h,s as f,a as y,b as F,A as x,c as E,L as w,B as A,p as C,d as v,e as O,r as c,R as l,D as k,f as B}from"./vendor.f7897d1d.js";const S=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};S();const R=b`
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
`,D=h`
  ${R};
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
`,L=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`,j=f.div`
  padding: 2rem;
  border-radius: 10px;
`;async function z(){try{const{data:r}=await y.get("https://ayush-adhoc-api.up.railway.app/GetRepoLanguageStatistics"),a=r.reduce((e,t)=>(Object.keys(e).forEach(o=>{t[o]&&(e[o]+=t[o],delete t[o])}),Object.keys(t).forEach(o=>{e[o]||(e[o]=t[o])}),u({},e)));let s=Object.keys(a).map(e=>({[e]:a[e]})).filter(e=>{var t=["Hack","Shell","Batchfile","Dockerfile","Procfile"];return!t.includes(Object.keys(e)[0])});return s.sort((e,t)=>t[Object.keys(t)[0]]-e[Object.keys(e)[0]]),s.map(e=>({label:Object.keys(e)[0],value:e[Object.keys(e)[0]]}))}catch(r){console.log(r)}}const _=["#FF0000","#FFA500","#ffff00","#00FF00","#008000","#87CEEB","#4169e1","#ee82ee","#ffc0cb","#a52a2a","#808080","#FF6666","#FFC966","#FFFF7F","#99FF99","#7FBF7F","#B7E1F3","#A0B4F0","#F6C0F6","#FFDFE5","#C97F7F","#BFBFBF","#000000"];F.register(x,E,w,A,C,v,O);const I=()=>{const[r,a]=c.exports.useState(),n=c.exports.useRef();c.exports.useEffect(()=>{(async()=>a(await z()))()},[]);const s={labels:r&&r.map(({label:t})=>t),datasets:[{data:r&&r.map(({value:t})=>t),backgroundColor:_}]},e={id:"custom_canvas_background_color",beforeDraw:t=>{const o=t.canvas.getContext("2d");o.save(),o.globalCompositeOperation="destination-over",o.fillStyle="#22272E",o.fillRect(0,0,1e3,1e3),o.borderRadius=20,o.restore()},legend:{labels:{color:"red"}}};return l.createElement(l.Fragment,null,l.createElement(D,null),l.createElement(L,null,l.createElement("h1",null,"GitHub Stats"),l.createElement("div",{className:"chart"},r?l.createElement(j,null,l.createElement(k,{ref:n,plugins:[e],style:{width:550},options:{responsive:!0,maintainAspectRatio:!0,layout:{padding:20},plugins:{legend:{labels:{color:"#ADBAC7"}}},animation:{onComplete:function(){var t;(t=document.getElementById("download"))==null||t.setAttribute("href",this.toBase64Image())}}},data:s})):l.createElement("p",null,"Loading...")),l.createElement("a",{style:{display:"none"},id:"download",href:""},"Download")))};B.render(l.createElement(l.StrictMode,null,l.createElement(I,null)),document.getElementById("root"));
