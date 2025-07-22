import{a as f,S as E,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();f.defaults.baseURL="https://pixabay.com/api/";async function p(r,t){const i={params:{key:"51379223-9a96b00f02e12c8a533ab27fa",q:r,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}};return(await f.get("",i)).data}function m(r){const t=r.map(e=>`<li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200" />
      </a>
     <ul class="info-list">
    <li class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${e.likes}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${e.views}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${e.comments}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${e.downloads}</p>
    </li>
  </ul>
    </li>`).join("");g.insertAdjacentHTML("beforeend",t)}const P=new E(".gallery a"),h=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".load-more-btn");function L(){P.refresh()}function u(){h.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function S(){g.innerHTML=""}function v(){y.classList.remove("is-hidden-load-more")}function d(){y.classList.add("is-hidden-load-more")}const q=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let a=1,w=15,n=null;async function $(r){if(r.preventDefault(),d(),S(),b(),a=1,n=r.target.elements["search-text"].value.trim(),!n){c.error({message:"Please enter a valid search query.",position:"topRight"}),u();return}try{const t=await p(n,a);if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",icon:""});return}m(t.hits),L(),t.totalHits>w&&v()}catch(t){console.log(t)}finally{u()}}async function B(r){d(),b(),a++;try{const e=await p(n,a);m(e.hits),L(),v(),Math.ceil(e.totalHits/w)===a&&(d(),c.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.log(e)}finally{u()}const t=document.querySelector(".gallery-item");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}}q.addEventListener("submit",$);M.addEventListener("click",B);
//# sourceMappingURL=index.js.map
