import{a as f,S as p,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="50804236-703018bc97defe2a99a93e985",y="https://pixabay.com/api/";async function g(o){return(await f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a");function b(o){const r=`
    <ul class="gallery-list">
      ${o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
        <li class="gallery__item">
          <a href="${s}">
            <img src="${i}" alt="${e}" />
            <div class="info">
              <p><b>Likes:</b> ${t}</p>
              <p><b>Views:</b> ${n}</p>
              <p><b>Comments:</b> ${u}</p>
              <p><b>Downloads:</b> ${d}</p>
            </div>
          </a>
        </li>
      `).join("")}
    </ul>
  `;c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Будь ласка, введіть слово для пошуку!",position:"topRight"});return}L(),v();try{const s=(await g(r)).hits;s.length===0?a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(s)}catch{a.error({message:"Сталася помилка. Спробуйте ще раз.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
