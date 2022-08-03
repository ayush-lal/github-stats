var g=Object.defineProperty;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(t,a,r)=>a in t?g(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,f=(t,a)=>{for(var r in a||(a={}))b.call(a,r)&&u(t,r,a[r]);if(d)for(var r of d(a))h.call(a,r)&&u(t,r,a[r]);return t};import{C as y,W as x,s as p,a as m,b as E,A as w,c as A,L as v,B as C,p as O,d as R,e as S,r as i,R as l,D as k,f as z}from"./vendor.f7897d1d.js";const L=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}};L();const _=y`
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
`,D=x`
  ${_};
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
`,I=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`,B=p.div`
  padding: 2rem;
  border-radius: 10px;
`;async function j(){try{const{data:t}=await m.get("https://api.github.com/users/ayush-lal/repos",{headers:{Authorization:`${{}.VITE_GH_APIKEY}`}}),a=t.map(e=>e.languages_url),s=(await P(a)).reduce((e,n)=>(Object.keys(e).forEach(c=>{n[c]&&(e[c]+=n[c],delete n[c])}),Object.keys(n).forEach(c=>{e[c]||(e[c]=n[c])}),f({},e)));return Object.keys(s).map(e=>({[e]:s[e]})).map(e=>({label:Object.keys(e)[0],value:e[Object.keys(e)[0]]}))}catch(t){console.log(t)}}async function P(t){return await Promise.all(t.map(async r=>{const{data:s}=await m.get(r,{headers:{Authorization:`${{}.VITE_GH_APIKEY}`}});return s}))}const F=["#a5c9ff","#f8b380","#d692ce","#b7fcae","#8efabb","#808de6","#f895bf","#9caac8","#9bddff","#8cc69e","#a195aa","#93fffd","#e3d5dd","#ff8cf0","#cff280","#87adc0","#899880","#f7fd80","#eca087","#b78aff"];E.register(w,A,v,C,O,R,S);const N=()=>{const[t,a]=i.exports.useState(),r=i.exports.useRef();i.exports.useEffect(()=>{(async()=>a(await j()))()},[]);const s={labels:t&&t.map(({label:e})=>e),datasets:[{data:t&&t.map(({value:e})=>e),backgroundColor:F}]},o={id:"custom_canvas_background_color",beforeDraw:e=>{const n=e.canvas.getContext("2d");n.save(),n.globalCompositeOperation="destination-over",n.fillStyle="#22272E",n.fillRect(0,0,1e3,1e3),n.borderRadius=20,n.restore()},legend:{labels:{color:"red"}}};return l.createElement(l.Fragment,null,l.createElement(D,null),l.createElement(I,null,l.createElement("h1",null,"GitHub Stats"),l.createElement("div",{className:"chart"},t?l.createElement(B,null,l.createElement(k,{ref:r,plugins:[o],style:{width:550},options:{responsive:!0,maintainAspectRatio:!0,layout:{padding:20},plugins:{legend:{labels:{color:"#ADBAC7"}}},animation:{onComplete:function(){var e;(e=document.getElementById("download"))==null||e.setAttribute("href",this.toBase64Image())}}},data:s})):l.createElement("p",null,"Loading...")),l.createElement("a",{style:{display:"none"},id:"download",href:""},"Download")))};z.render(l.createElement(l.StrictMode,null,l.createElement(N,null)),document.getElementById("root"));
