!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequire902a;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequire902a=a);var o=a("bpxeT"),l=a("2TvXO"),u=a("7Omtz"),c=a("fSCrk"),i=u.params.option,s=i.language,f=i.key,d=i.include_adult,p=i.q;function v(){return(v=e(o)(e(l).mark((function n(t){var r,a,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.search_bar,p=r.value,e.prev=3,e.next=6,fetch("".concat(u.BASE_URL,"/search/movie?api_key=").concat(f,"&language=").concat(s,"&query=").concat(p,"&include_adult=").concat(d));case 6:return a=e.sent,e.next=9,a.json();case 9:o=e.sent,console.log(o.results),c.movieGalleryEl.innerHTML="",(0,c.createCards)(o.results,!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),n,null,[[3,15]])})))).apply(this,arguments)}document.querySelector(".nav-form").addEventListener("submit",(function(e){return v.apply(this,arguments)}))}();
//# sourceMappingURL=index.0a7d1835.js.map