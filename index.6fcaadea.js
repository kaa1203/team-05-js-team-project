var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire902a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire902a=o);var l=o("2Fivl"),i=o("k8pNR");let r=localStorage.getItem("watchList"),c=localStorage.getItem("queueList");function a(){r=localStorage.getItem("watchList"),c=localStorage.getItem("queueList")}function u(e,t){l.movieGalleryEl.innerHTML="",e&&0!==JSON.parse(e).length?(0,l.createCards)(JSON.parse(e),!1):l.movieGalleryEl.innerText="NO MOVIES ADDED TO "+t+" YET"}document.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&("WATCHED"===e.target.innerText&&(a(),u(r,"WATCHED"),document.querySelector(".ml-buttons .ml-button:nth-child(1)").classList.add("active"),document.querySelector(".ml-buttons .ml-button:nth-child(2)").classList.remove("active")),"QUEUE"===e.target.innerText&&(a(),u(c,"QUEUE"),document.querySelector(".ml-buttons .ml-button:nth-child(1)").classList.remove("active"),document.querySelector(".ml-buttons .ml-button:nth-child(2)").classList.add("active")))})),i.movieCon.addEventListener("click",i.movieClicked),document.querySelector(".nav-item:nth-child(2) .nav-link").addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector(".ml-buttons .ml-button:nth-child(1)");t?(t.classList.add("active"),t.click(),t.focus()):console.error("Watched button not found")}));
//# sourceMappingURL=index.6fcaadea.js.map
