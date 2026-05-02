import{a as l,i as u,S as f}from"./assets/vendor-DnoGfDwQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(a){const r={key:"55636858-c5012cce39e9f46aea8eda2c3",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.defaults.baseURL="https://pixabay.com/api/",l.get("",{params:r})}const c=document.querySelector(".gallery");function p(a){c.innerHTML=a.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:i,downloads:d})=>`<li class="gallery-card">
        <a href=${r}>
            <img class="gallery-image" src=${s} alt=${o} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${e}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${t}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${i}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${d}</p>
            </li>
        </ul>
        </li>`).join("")}function h(){c.innerHTML=""}const n=document.querySelector("#loader");function y(){n.classList.add("loader")}function g(){n.classList.remove("loader")}const L=document.querySelector(".form");L.addEventListener("submit",b);function b(a){a.preventDefault();const s=a.target.elements["search-text"].value.trim();y(),h(),m(s).then(r=>{r.data.hits.length<=0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"}),p(r.data.hits),new f(".gallery-card a",{captionsData:"alt",captionDelay:250})}).catch(r=>console.log(r)).finally(()=>{g(),a.target.reset()})}
//# sourceMappingURL=index.js.map
