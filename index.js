import{a as u,S as f,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(i){const t="https://pixabay.com/api/",o="51379223-9a96b00f02e12c8a533ab27fa",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(t,{params:s}).then(e=>e.data).catch(e=>{throw e})}function p(i){return i.map(t=>`<li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="200" />
      </a>
     <ul class="info-list">
    <li class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${t.likes}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${t.views}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${t.comments}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${t.downloads}</p>
    </li>
  </ul>
    </li>`).join("")}const m=new f(".gallery a"),c=document.querySelector(".loader"),h=document.querySelector(".gallery");function g(){m.refresh()}function l(){c.classList.add("is-hidden")}function y(){c.classList.remove("is-hidden")}function L(){h.innerHTML=""}const v=document.querySelector(".form"),b=document.querySelector(".gallery");function w(i){i.preventDefault(),L(),y();const t=i.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a valid search query.",position:"topRight"}),l();return}d(t).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",icon:""});return}b.innerHTML=p(o.hits),g()}).catch(o=>console.log(o)).finally(()=>{l()})}v.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
