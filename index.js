import{A as y,S as g,a as j,i as L}from"./assets/vendor-aktHCZAo.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();new y(".accordion-container",{duration:400,showMultiple:!1});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".covers-section");t&&new IntersectionObserver(e=>{e.forEach(a=>{a.intersectionRatio>=.5?s():r()})},{root:null,threshold:.5}).observe(t);function s(){document.querySelectorAll(".marquee-item").forEach(e=>{e.style.animationPlayState="running"})}function r(){document.querySelectorAll(".marquee-item").forEach(e=>{e.style.animationPlayState="paused"})}});const d=new URL("/stackers-js-project/assets/avatar-1-uFynqyCN.jpg",import.meta.url).href,m=new URL("/stackers-js-project/assets/avatar-1@2x-DslpcW4M.jpg",import.meta.url).href,p=new URL("/stackers-js-project/assets/avatar-2-DeRed-Kx.jpg",import.meta.url).href,u=new URL("/stackers-js-project/assets/avatar-2@2x-C3RXHOVg.jpg",import.meta.url).href,f=new URL("/stackers-js-project/assets/avatar-3-lk1ZwxYN.jpg",import.meta.url).href,v=new URL("/stackers-js-project/assets/avatar-3@2x-BCmgfPwi.jpg",import.meta.url).href,h=new URL("/stackers-js-project/assets/avatar-4-DMdfcu2T.jpg",import.meta.url).href,w=new URL("/stackers-js-project/assets/avatar-4@2x-D5ut5x67.jpg",import.meta.url).href,x=[{name:"Natalia",text:"Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations",avatar:{x1:d,x2:m}},{name:"Dmytro",text:"I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.",avatar:{x1:p,x2:u}},{name:"Anna",text:"The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!",avatar:{x1:f,x2:v}},{name:"Ivetta",text:"Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.",avatar:{x1:h,x2:w}},{name:"Margo",text:"Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations",avatar:{x1:d,x2:m}},{name:"Stanislav",text:"I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.",avatar:{x1:p,x2:u}},{name:"Xena",text:"The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!",avatar:{x1:f,x2:v}},{name:"Tetiana",text:"Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.",avatar:{x1:h,x2:w}}];function b(){const t=document.querySelector(".reviews-list");if(!t)return;if(x.length===0){q();return}const s=x.map(r=>`
    <li class="reviews-item swiper-slide">
      <img src="${r.avatar.x1}"
           srcset="${r.avatar.x1} 1x, ${r.avatar.x2} 2x"
           alt="${r.name}'s avatar"
           class="reviews-avatar"
           width="48"
           height="48">
      <div class="reviews-content">
        <h3 class="reviews-name">${r.name}</h3>
        <p class="reviews-text">${r.text}</p>
      </div>
    </li>
  `).join("");t.innerHTML=s}function q(){const t=document.querySelector(".reviews-error"),s=document.querySelector(".reviews-list"),r=document.querySelector(".reviews-nav");t&&t.classList.remove("visually-hidden"),s&&(s.innerHTML=""),r&&(r.style.display="none")}function k(){new g(".reviews-slider",{slidesPerView:1,spaceBetween:16,loop:!1,direction:"horizontal",speed:600,navigation:{prevEl:".reviews-button-prev",nextEl:".reviews-button-next"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}document.addEventListener("DOMContentLoaded",()=>{b(),k();const t=document.querySelector(".reviews-nav");t&&(t.style.display="flex")});const n=document.querySelector(".footer-form"),i=document.querySelector(".modal-window-backdrop"),S=document.querySelector(".footer-modal-close-btn"),l=()=>{i.classList.remove("is-open")},E=async t=>{try{t.preventDefault();const s={email:n.elements.email.value,comment:n.elements.comment.value};(await j.post("https://portfolio-js.b.goit.study/api/requests",s)).status===201&&(i.classList.add("is-open"),n.reset())}catch{L.show({theme:"dark",icon:"icon-person",message:"Sorry, something goes wrong. Please try again!",position:"center"})}};n.addEventListener("submit",E);S.addEventListener("click",l);i.addEventListener("click",t=>{t.target===i&&l()});document.addEventListener("keydown",t=>{t.key==="Escape"&&l()});
//# sourceMappingURL=index.js.map
