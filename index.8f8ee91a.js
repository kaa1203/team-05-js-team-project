var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire902a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire902a=r);var a=r("2Fivl");a=r("2Fivl");const s=document.querySelector(".nav-bar"),i=document.querySelector(".nav-form"),l=document.getElementsByClassName("ml-buttons"),o=document.querySelector("header");s.addEventListener("click",(function(e){e.preventDefault();const t=e.currentTarget.children[1].children[0].children[0],n=e.currentTarget.children[1].children[1].children[0];"H2"===e.target.tagName&&(i.classList.remove("is-hidden"),l.length>0&&l[0].remove(),o.removeAttribute("class"),(0,a.displayMovies)());"A"===e.target.tagName&&("HOME"===e.target.innerText?(l.length>0&&l[0].remove(),i.classList.remove("is-hidden"),o.removeAttribute("class"),(0,a.displayMovies)()):(i.classList.add("is-hidden"),l.length<=0&&function(){const e='\n        <div class="ml-buttons">\n            <button type="button" class="ml-button">watched</button>\n            <button type="button" class="ml-button">queue</button>\n        </div>\n    ';s.insertAdjacentHTML("afterend",e)}(),o.classList.add("library")));if(o.classList.contains("library")){t.classList.remove("active"),n.classList.add("active"),l[0].children[0].classList.add("active");let e=localStorage.getItem("watchList");if(0===JSON.parse(e).length)return void(a.movieGalleryEl.innerText="NO MOVIES ADDED TO WATCHED YET");(0,a.createCards)(JSON.parse(e),!1)}else n.classList.remove("active"),t.classList.add("active")}));
//# sourceMappingURL=index.8f8ee91a.js.map
