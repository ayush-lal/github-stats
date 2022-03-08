import{C as i,W as c,s as d,a as u,A as f,b as m,L as p,B as b,p as g,c as h,d as y,r as x,R as t,e as E,D as v,f as w}from"./vendor.a78d7353.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}};k();const C=i`
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
`,S=c`
  ${C};
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
`,z=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* text-align: center; */
  min-height: 100vh;
`;u.register(f,m,p,b,g,h,y);const A=()=>{x.exports.useState({});const n={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};function r(){console.log("test download")}return t.createElement(t.Fragment,null,t.createElement(S,null),t.createElement(z,null,t.createElement("div",{style:{display:"flex",justifyContent:"center"}},t.createElement("h1",null,"GitHub Stats"," ",t.createElement(E,{onClick:r,style:{verticalAlign:"bottom"}}))),t.createElement("br",null),t.createElement("div",{className:"chart"},t.createElement(v,{options:{responsive:!0,maintainAspectRatio:!0},data:n}))))};w.render(t.createElement(t.StrictMode,null,t.createElement(A,null)),document.getElementById("root"));
