import{a as i,S as f,i as h}from"./assets/vendor-DnoGfDwQ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){const r={key:"55636858-c5012cce39e9f46aea8eda2c3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return i.defaults.baseURL="https://pixabay.com/api/",i.get("",{params:r}).then(o=>o.data.hits).catch(o=>console.log(o.message))}const n=document.querySelector(".gallery");let p=new f(".gallery-card a",{captionsData:"alt",captionDelay:250});function y(s){n.innerHTML=s.map(({webformatURL:a,largeImageURL:r,tags:o,likes:e,views:t,comments:l,downloads:d})=>`<li class="gallery-card">
        <a href=${r}>
            <img class="gallery-image" src=${a} alt=${o} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${e}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${t}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${l}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${d}</p>
            </li>
        </ul>
        </li>`).join(""),p.refresh()}function g(){n.innerHTML=""}const c=document.querySelector("#loader");function L(){c.classList.add("loader")}function u(){c.classList.remove("loader")}const b=document.querySelector(".form");u();b.addEventListener("submit",w);function w(s){s.preventDefault();const a=s.target.elements["search-text"].value.trim();L(),g(),m(a).then(r=>{if(r.length<=0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"});return}y(r)}).catch(r=>console.log(r)).finally(()=>{u(),s.target.reset()})}
//# sourceMappingURL=index.js.map
