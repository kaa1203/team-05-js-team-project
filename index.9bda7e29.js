const e=document.getElementById("myModal"),t=document.querySelectorAll("[data-modal-open]"),n=document.querySelector(".close"),d=document.querySelectorAll(".team-member");let c=0;function l(){e.classList.add("is-hidden")}function o(e){d.forEach((e=>{e.style.display="none"})),d[e].style.display="block"}t[0].addEventListener("click",(function(){e.classList.remove("is-hidden"),o(c)})),n.addEventListener("click",l),document.addEventListener("keydown",(function(e){"Escape"===e.key&&l()})),document.addEventListener("click",(e=>{e.target.classList.contains("modal-overlay")&&l()})),document.getElementById("nextMember").addEventListener("click",(()=>{c=(c+1)%d.length,o(c)})),document.getElementById("prevMember").addEventListener("click",(()=>{c=(c-1+d.length)%d.length,o(c)}));
//# sourceMappingURL=index.9bda7e29.js.map
