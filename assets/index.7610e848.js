var g=Object.defineProperty;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(e,a,r)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,m=(e,a)=>{for(var r in a||(a={}))h.call(a,r)&&f(e,r,a[r]);if(d)for(var r of d(a))b.call(a,r)&&f(e,r,a[r]);return e};import{C as y,W as x,s as w,a as p,b as E,A,c as O,L as v,B as C,p as R,d as S,e as k,r as u,R as l,f as L,D as z,g as F}from"./vendor.0e1102d9.js";const j=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=r(n);fetch(n.href,t)}};j();const B=y`
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

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`,D=x`
  ${B};
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
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
  }
`,I=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* text-align: center; */
  min-height: 100vh;
`;async function N(){try{const{data:e}=await p.get("https://api.github.com/users/ayush-lal/repos"),a=e.map(o=>o.languages_url),s=(await M(a)).reduce((o,c)=>(Object.keys(o).forEach((i,_)=>{c[i]&&(o[i]+=c[i],delete c[i])}),Object.keys(c).forEach(i=>{o[i]||(o[i]=c[i])}),m({},o)));return Object.keys(s).map(o=>({[o]:s[o]})).map(o=>({label:Object.keys(o)[0],value:o[Object.keys(o)[0]]}))}catch(e){throw e}}async function M(e){return await Promise.all(e.map(async r=>{const{data:s}=await p.get(r);return s}))}E.register(A,O,v,C,R,S,k);const P=()=>{const[e,a]=u.exports.useState(),r=u.exports.useRef(null);u.exports.useEffect(()=>{(async()=>a(await N()))()},[]),e&&e.map(({value:t})=>console.log(t));const s={labels:e?e.map(({label:t})=>t):null,datasets:[{data:e?e.map(({value:t})=>t):null,backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};function n(){console.log("test download")}return l.createElement(l.Fragment,null,l.createElement(D,null),l.createElement(I,null,l.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.createElement("h1",null,"GitHub Stats"," ",l.createElement(L,{onClick:n,style:{verticalAlign:"bottom"}}))),l.createElement("br",null),l.createElement("div",{className:"chart"},l.createElement(z,{ref:r,style:{width:500},options:{responsive:!0,maintainAspectRatio:!0,animation:{onComplete:function(){var t;(t=document.getElementById("test"))==null||t.setAttribute("href",this.toBase64Image())}}},data:s})),l.createElement("a",{id:"test",href:"https://www.google.com"},"test")))};F.render(l.createElement(l.StrictMode,null,l.createElement(P,null)),document.getElementById("root"));
