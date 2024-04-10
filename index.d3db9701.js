!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequire902a;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},r.parcelRequire902a=a),a.register("fSCrk",(function(r,n){e(r.exports,"movieGalleryEl",(function(){return h})),e(r.exports,"createCards",(function(){return w}));var o,i,c=a("bpxeT"),u=a("2TvXO"),s=a("7Omtz"),l=s.params.option,f=l.language,p=l.key,h=document.querySelector(".movie-list");function d(){return v.apply(this,arguments)}function v(){return(v=t(c)(t(u).mark((function e(){var r,n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(p));case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",n.genres);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=t(c)(t(u).mark((function e(){var r,n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s.BASE_URL,"/trending/movie/day?api_key=").concat(p,"&language=").concat(f));case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=t(c)(t(u).mark((function e(r){var n,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d();case 3:return n=t.sent,o=n.filter((function(t){return r.includes(t.id)})).map((function(t){return t.name})),t.abrupt("return",o);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(e,r){var n;e.map((n=t(c)(t(u).mark((function e(n){var o,a,i,c,s,l,f,p,d,v,y,m,w,x;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n.id,a=n.popularity,i=n.poster_path,c=n.original_title,s=n.title,l=n.release_date,f=n.overview,p=n.genre_ids,d=n.vote_average,v=n.vote_count,!0!==r){t.next=10;break}return t.next=4,g(p);case 4:y=t.sent,m=l.split("-"),w='\n                  <li class="movie-item" data-id='.concat(o,'>\n                      <a href="https://image.tmdb.org/t/p/w500/').concat(i,'" class="movie-link">\n                          <div class="movie-card" data-popularity=').concat(a.toFixed(1),'>\n                              <img src="https://image.tmdb.org/t/p/w500/').concat(i,'" alt="').concat(f,'">\n                              <div class="movie-details">\n                                  <p class="movie-title" data-title="').concat(c,'">').concat(s,"</p>\n                                  <span>").concat(y.map((function(t){return" ".concat(t)})),'</span>\n                                  <span data-year="').concat(m[0],'">| ').concat(m[0],'</span>\n                                  <p data-count="').concat(v,'">').concat(d.toFixed(1),"</p>\n                              </div>\n                          </div>\n                      </a>\n                  </li>\n              "),h.insertAdjacentHTML("afterbegin",w),t.next=11;break;case 10:x='\n                  <li class="movie-item" data-id='.concat(o,'>\n                      <a href="https://image.tmdb.org/t/p/w500/').concat(i,'" class="movie-link">\n                          <div class="movie-card" data-popularity=').concat(a,'>\n                              <img src="https://image.tmdb.org/t/p/w500/').concat(i,'" alt="').concat(f,'">\n                              <div class="movie-details">\n                                  <p class="movie-title" data-title="').concat(c,'">').concat(s,"</p>\n                                  <span>").concat(p,'</span>\n                                  <span data-year="').concat(l,'">| ').concat(l,'</span>\n                                  <p data-count="').concat(v,'">').concat(d,"</p>\n                              </div>\n                          </div>\n                      </a>\n                  </li>\n              "),h.insertAdjacentHTML("afterbegin",x);case 11:case"end":return t.stop()}}),e)}))),function(t){return n.apply(this,arguments)})).join("")}o=localStorage.getItem("watchList"),i=localStorage.getItem("queueList"),null!==o&&0!==o.length||localStorage.setItem("watchList","[]"),null!==i&&0!==o.length||localStorage.setItem("queueList","[]"),document.addEventListener("DOMContentLoaded",(function(){try{(function(){return y.apply(this,arguments)})().then((function(t){w(t.results,!0)}))}catch(t){console.log(t)}}))})),a.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==r&&n.call(b,a)&&(w=b);var L=m.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=m,u(L,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("7Omtz",(function(t,r){e(t.exports,"BASE_URL",(function(){return n})),e(t.exports,"params",(function(){return o}));var n="https://api.themoviedb.org/3",o={option:{key:"334986b59c344f376defb99ce94fed26",query:"",include_adult:!1,language:"en-US",primary_release_year:"",page:1,region:"",year:""}}})),a("fSCrk")}();
//# sourceMappingURL=index.d3db9701.js.map
