var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire902a;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire902a=i);var l=i("2Fivl");const a=document.querySelector(".movie-list"),r=document.getElementsByClassName("overlay");function s(e){if(e.preventDefault(),"IMG"===e.target.tagName){const t={id:e.target.parentElement.parentElement.parentElement.dataset.id,backdropImage:e.target.parentElement.parentElement.href,popularity:e.target.parentElement.dataset.popularity,about:e.target.alt,originalTitle:e.target.nextElementSibling.children[0].dataset.title,title:e.target.nextElementSibling.children[0].innerText,genre:e.target.nextElementSibling.children[0].nextElementSibling.innerText,release_date:e.target.nextElementSibling.children[0].nextElementSibling.nextElementSibling.dataset.year,vote:e.target.nextElementSibling.children[0].nextElementSibling.nextElementSibling.nextElementSibling.innerText,voteCount:e.target.nextElementSibling.children[0].nextElementSibling.nextElementSibling.nextElementSibling.dataset.count};let n=document.createElement("div");n.className="overlay",document.body.insertAdjacentElement("afterbegin",n),function(e){const{id:t,backdropImage:n,popularity:i,about:l,originalTitle:a,title:s,genre:o,vote:d,voteCount:c}=e;let m=`\n        <div class="modal-container">\n            <div class="modal-close">&times;</div>\n            <div class="modal-content" data-id="${t}">\n                <div class="modal-image">\n                    <img src="${n}" alt="movie photo">\n                </div>\n                <div class="modal-details">\n                    <ul class="modal-list">\n                        <li class="modal-item">\n                            <h1 class="movie-title">${s.toUpperCase()}</h1>\n                        </li>\n                        <li class="modal-item">\n                            <p class="modal-header">vote/votes</p>\n                            <p><span class="modal-rating">${d}</span> / ${c}</p>\n                        </li>\n                        <li class="modal-item">\n                            <p class="modal-header">popularity</p>\n                            <p>${i}</p>\n                        </li>\n                        <li class="modal-item">\n                            <p class="modal-header">title</p>\n                            <p>${a.toUpperCase()}</p>\n                        </li>\n                        <li class="modal-item">\n                            <p class="modal-header">genre</p>    \n                            <p>${o}</p>\n                        </li>\n                    </ul>\n                    <div class="modal-about">\n                        <h4>ABOUT</h4>\n                        <p>${l}</p>\n                    </div>\n                    <div class="modal-buttons">\n                        <button type="button" class="modal-button" data-button="watched">add to watched</button>\n                        <button type="button" class="modal-button" data-button="queue">add to queue</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    `;r[0].insertAdjacentHTML("beforeend",m)}(t),function(e){let t=JSON.parse(localStorage.getItem("watchList")),n=JSON.parse(localStorage.getItem("queueList")),i=document.querySelector(".modal-container"),l=i.children[1].children[1].children[2].children[0],a=i.children[1].children[1].children[2].children[1];0!=t.length&&t.forEach((t=>{t.id===e&&(l.innerText="remove from watched",l.classList.add("selected"))}));0!=n.length&&n.forEach((t=>{t.id===e&&(a.innerText="remove from queue",a.classList.add("selected"))}))}(t.id)}}function o(e,t){let n=JSON.parse(localStorage.getItem(t)),i=!1;for(const t of n)t.id==e.id&&(i=!0);!1===i&&(n.push(e),localStorage.setItem(t,JSON.stringify(n)))}function d(e,t){let n=JSON.parse(localStorage.getItem(t));n.filter((t=>t.id==e)).map((e=>{let i=n.indexOf(e);n.splice(i,1),localStorage.setItem(t,JSON.stringify(n))}))}a.addEventListener("click",s),document.addEventListener("click",(function(e){e.target.classList.contains("modal-close")&&(r[0].children[0].classList.add("close"),setTimeout((()=>{r[0].remove()}),1400));if(e.target.classList.contains("modal-button")){let t=e.target.parentElement.previousElementSibling.previousElementSibling.children[1].children[1].innerText;t=t.split("/");const n={id:e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.parentElement.dataset.id,poster_path:e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.children[0].src,title:e.target.parentElement.previousElementSibling.previousElementSibling.children[0].children[0].innerText,vote_average:t[0],vote_count:t[1],popularity:e.target.parentElement.previousElementSibling.previousElementSibling.children[2].children[1].innerText,original_title:e.target.parentElement.previousElementSibling.previousElementSibling.children[3].children[1].innerText,genre_ids:e.target.parentElement.previousElementSibling.previousElementSibling.children[4].children[1].innerText,overview:e.target.parentElement.previousElementSibling.children[1].innerText};"watched"===e.target.dataset.button&&("ADD TO WATCHED"===e.target.innerText?(o(n,"watchList"),e.target.innerText="remove from watched",d(n.id,"queueList"),e.target.nextElementSibling.innerText="add to queue",e.target.classList.add("selected")):(d(n.id,"watchList"),e.target.innerText="add to watched",e.target.classList.remove("selected")),e.target.nextElementSibling.classList.contains("selected")&&e.target.nextElementSibling.classList.remove("selected")),"queue"===e.target.dataset.button&&("ADD TO QUEUE"===e.target.innerText?(o(n,"queueList"),e.target.innerText="remove from queue",d(n.id,"watchList"),e.target.previousElementSibling.innerText="add to watched",e.target.classList.add("selected")):(d(n.id,"queueList"),e.target.innerText="add to queue",e.target.classList.remove("selected")),e.target.previousElementSibling.classList.contains("selected")&&e.target.previousElementSibling.classList.remove("selected"))}}));let c=localStorage.getItem("watchList"),m=localStorage.getItem("queueList");document.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&("WATCHED"===e.target.innerText&&(l.movieGalleryEl.innerHTML="",(0,l.createCards)(JSON.parse(c),!1)),"QUEUE"===e.target.innerText&&(l.movieGalleryEl.innerHTML="",(0,l.createCards)(JSON.parse(m),!1)))})),a.addEventListener("click",s);
//# sourceMappingURL=index.50986525.js.map
