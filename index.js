import{S as u,N as f,K as p}from"./assets/vendor-Cu_Vzv4Q.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i=document.querySelector(".projects-btn-prev"),s=document.querySelector(".projects-btn-next"),y=document.querySelector(".swiper-projects-js"),a=new u(y,{modules:[f,p],direction:"horizontal",spaceBetween:50,slidesPerView:1,loop:!1,speed:400,navigation:{nextEl:s,prevEl:i},keyboard:{enabled:!0,onlyInViewport:!1},on:{init:function(){c(this)},slideChange:function(){c(this)},toEdge:function(){c(this)}}});function c(t){i.disabled=t.isBeginning,s.disabled=t.isEnd,i.classList.toggle("disabled",t.isBeginning),s.classList.toggle("disabled",t.isEnd)}document.addEventListener("keydown",t=>{t.key==="ArrowLeft"&&!i.disabled&&i.click(),t.key==="ArrowRight"&&!s.disabled&&s.click()});[i,s].forEach((t,n)=>{t.addEventListener("focus",()=>t.classList.add("focused")),t.addEventListener("blur",()=>t.classList.remove("focused")),t.addEventListener("keydown",o=>{(o.key===" "||o.key==="Enter")&&(o.preventDefault(),n===0?a.slidePrev():a.slideNext())})});
//# sourceMappingURL=index.js.map
