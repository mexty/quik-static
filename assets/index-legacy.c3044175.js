!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function i(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var r,a,n=[],c=!0,d=!1;try{for(i=i.call(e);!(c=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);c=!0);}catch(o){d=!0,a=o}finally{try{c||null==i.return||i.return()}finally{if(d)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},i=Object.prototype,r=i.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",d=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function m(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{m({},"")}catch(E){m=function(e,t,i){return e[t]=i}}function s(e,t,i,r){var a=t&&t.prototype instanceof h?t:h,n=Object.create(a.prototype),c=new S(r||[]);return n._invoke=function(e,t,i){var r="suspendedStart";return function(a,n){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw n;return P()}for(i.method=a,i.arg=n;;){var c=i.delegate;if(c){var d=w(c,i);if(d){if(d===u)continue;return d}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===r)throw r="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r="executing";var o=l(e,t,i);if("normal"===o.type){if(r=i.done?"completed":"suspendedYield",o.arg===u)continue;return{value:o.arg,done:i.done}}"throw"===o.type&&(r="completed",i.method="throw",i.arg=o.arg)}}}(e,i,c),n}function l(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(E){return{type:"throw",arg:E}}}t.wrap=s;var u={};function h(){}function f(){}function k(){}var p={};m(p,n,(function(){return this}));var g=Object.getPrototypeOf,q=g&&g(g(_([])));q&&q!==i&&r.call(q,n)&&(p=q);var b=k.prototype=h.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){m(e,t,(function(e){return this._invoke(t,e)}))}))}function y(t,i){function a(n,c,d,o){var m=l(t[n],t,c);if("throw"!==m.type){var s=m.arg,u=s.value;return u&&"object"==e(u)&&r.call(u,"__await")?i.resolve(u.__await).then((function(e){a("next",e,d,o)}),(function(e){a("throw",e,d,o)})):i.resolve(u).then((function(e){s.value=e,d(s)}),(function(e){return a("throw",e,d,o)}))}o(m.arg)}var n;this._invoke=function(e,t){function r(){return new i((function(i,r){a(e,t,i,r)}))}return n=n?n.then(r,r):r()}}function w(e,t){var i=e.iterator[t.method];if(void 0===i){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(i,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function t(){for(;++i<e.length;)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=k,m(b,"constructor",k),m(k,"constructor",f),f.displayName=m(k,o,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,m(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},v(y.prototype),m(y.prototype,d,(function(){return this})),t.AsyncIterator=y,t.async=function(e,i,r,a,n){void 0===n&&(n=Promise);var c=new y(s(e,i,r,a),n);return t.isGeneratorFunction(i)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},v(b),m(b,o,"Generator"),m(b,n,(function(){return this})),m(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var i in e)t.push(i);return t.reverse(),function i(){for(;t.length;){var r=t.pop();if(r in e)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(i,r){return c.type="throw",c.arg=e,t.next=i,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],c=n.completion;if("root"===n.tryLoc)return i("end");if(n.tryLoc<=this.prev){var d=r.call(n,"catchLoc"),o=r.call(n,"finallyLoc");if(d&&o){if(this.prev<n.catchLoc)return i(n.catchLoc,!0);if(this.prev<n.finallyLoc)return i(n.finallyLoc)}else if(d){if(this.prev<n.catchLoc)return i(n.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return i(n.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var c=n?n.completion:{};return c.type=e,c.arg=t,n?(this.method="next",this.next=n.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),N(i),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var r=i.completion;if("throw"===r.type){var a=r.arg;N(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:_(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),u}},t}function d(e,t,i,r,a,n,c){try{var d=e[n](c),o=d.value}catch(m){return void i(m)}d.done?t(o):Promise.resolve(o).then(r,a)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(r,a){var n=e.apply(t,i);function c(e){d(n,r,a,c,o,"next",e)}function o(e){d(n,r,a,c,o,"throw",e)}c(void 0)}))}}var m=document.createElement("style");m.innerHTML=".mqik-a0d507ce{position:relative;height:100%;width:100%;flex-grow:1}.mqik-a0d507ce .mqik-9d01e40d{position:absolute;bottom:.75rem;left:.75rem;z-index:10}.mqik-a0d507ce .mqik-9d01e40d button{border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity: .9;padding:.25rem .5rem;font-size:1rem;line-height:1.5rem;font-weight:700;color:var(--mexty-quik-secondary-color)}.mqik-a0d507ce .mqik-d3d02730{position:absolute;display:flex;height:100%;width:100%;flex-direction:row;align-items:flex-start;padding-left:.75rem;padding-right:.75rem}@media (min-width: 480px){.mqik-a0d507ce .mqik-d3d02730>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.75rem * var(--tw-space-x-reverse));margin-left:calc(.75rem * calc(1 - var(--tw-space-x-reverse)))}}.mqik-a0d507ce .mqik-2dd25643{margin-top:.25rem;margin-bottom:.25rem;overflow:hidden;padding-left:.75rem;padding-right:.75rem}@media (min-width: 480px){.mqik-a0d507ce .mqik-2dd25643{display:none}}.mqik-a0d507ce .mqik-2dd25643 .mqik-db4dc8ce{margin-bottom:.25rem;border-radius:9999px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:.125rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.mqik-a0d507ce .mqik-2dd25643 .mqik-db4dc8ce .mqik-72c52047{width:50%;border-radius:9999px;padding:.25rem .75rem;font-weight:700;color:var(--mexty-quik-secondary-color)}.mqik-a0d507ce .mqik-2dd25643 .mqik-db4dc8ce .mqik-72c52047:hover{--tw-bg-opacity: 1;background-color:rgba(245,245,245,var(--tw-bg-opacity))}.mqik-a0d507ce .mqik-2dd25643 .mqik-db4dc8ce .mqik-72c52047.mqik-b9643e6c{background-color:var(--mexty-quik-secondary-color);--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity))}.mqik-a0d507ce .mqik-2df26439{top:0px;right:0px;bottom:0px;left:0px;width:100%;flex-direction:column;padding-top:0}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439{width:50%;padding-top:.75rem;padding-bottom:.75rem}}.mqik-a0d507ce .mqik-2df26439{height:calc(100% - 3.5rem)}.mqik-a0d507ce .mqik-2df26439.mqik-e3febf16{width:100%}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439.mqik-e3febf16{width:50%}}.mqik-a0d507ce .mqik-2df26439.mqik-cfe34e90 .mqik-c4be0906{--tw-bg-opacity: 1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439{height:100%}}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906{position:relative;display:flex;flex-grow:1;flex-direction:row;justify-content:center;border-radius:.75rem;--tw-bg-opacity: 1;background-color:rgba(251,191,36,var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906.mqik-dd6e4483{background-position:50% 34%;background-image:url(https://cdn.jsdelivr.net/gh/mexty/quik-static@v0.1.36/assets/bg-rank.89c6c374.png)}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906.mqik-7a3cfc7e{background-position:50% 34%;background-image:url(https://cdn.jsdelivr.net/gh/mexty/quik-static@v0.1.36/assets/bg-rank2.55b2e341.png)}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906.mqik-7a3cfc7e .mqik-d5fa14c8 .mqik-53ceda94 .mqik-35c8ffd7{--tw-text-opacity: 1;color:rgba(59,130,246,var(--tw-text-opacity))}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906.mqik-7a3cfc7e .mqik-9cd6b167 .mqik-b5f4b9d3 .mqik-ad97e8e6 .mqik-7fe8da0a{--tw-bg-opacity: 1;background-color:rgba(30,58,138,var(--tw-bg-opacity))}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906.mqik-7a3cfc7e .mqik-9cd6b167 .mqik-b5f4b9d3 .mqik-6c09e06c{--tw-text-opacity: 1;color:rgba(30,58,138,var(--tw-text-opacity))}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-d5fa14c8{position:absolute;top:0px;left:0px;width:100%;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));z-index:10;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:.5rem .75rem;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity: .25}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-d5fa14c8{--tw-bg-opacity: 0}}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-d5fa14c8 .mqik-d62fc5f3 h3{font-weight:700!important}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-d5fa14c8 .mqik-53ceda94>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-d5fa14c8 .mqik-53ceda94 .mqik-2f5292be{border-radius:9999px;border-width:1px;--tw-border-opacity: 1;border-color:rgba(255,255,255,var(--tw-border-opacity));padding:.125rem .75rem}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-d5fa14c8 .mqik-53ceda94 .mqik-35c8ffd7{border-color:transparent;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700;--tw-text-opacity: 1;color:rgba(217,119,6,var(--tw-text-opacity))}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167{position:relative;overflow:hidden;text-align:center}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167{height:100%}}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167{height:285px;width:112px}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-b5f4b9d3{position:absolute;height:10rem;top:48%}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-b5f4b9d3 img{--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-b5f4b9d3 .mqik-ad97e8e6{padding-left:.25rem;padding-right:.25rem;padding-top:.25rem;width:112px}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-b5f4b9d3 .mqik-ad97e8e6 .mqik-7fe8da0a{border-radius:9999px;--tw-bg-opacity: 1;background-color:rgba(120,53,15,var(--tw-bg-opacity));padding:.125rem .375rem;font-size:.875rem;line-height:1.25rem;font-weight:700;--tw-text-opacity: 1;color:rgba(255,255,255,var(--tw-text-opacity));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:112px}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-b5f4b9d3 .mqik-6c09e06c{font-size:1rem;line-height:1.5rem;font-weight:700;--tw-text-opacity: 1;color:rgba(180,83,9,var(--tw-text-opacity))}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167{height:285px}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-b5f4b9d3{top:28%}}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-4c723ed9{margin-top:-9rem}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-4c723ed9{margin-top:-5rem}}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-e087594d{margin-top:-5rem;padding-right:.25rem}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-e087594d{margin-top:-1.5rem}}.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-3111f176{margin-top:-3rem;padding-left:.25rem}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-c4be0906 .mqik-9cd6b167 .mqik-3111f176{margin-top:.25rem}}.mqik-a0d507ce .mqik-2df26439.mqik-ad1e6877,.mqik-a0d507ce .mqik-2df26439.mqik-158c0c85{display:none}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439.mqik-ad1e6877,.mqik-a0d507ce .mqik-2df26439.mqik-158c0c85{display:flex}}.mqik-a0d507ce .mqik-2df26439.mqik-ad1e6877.mqik-b9643e6c,.mqik-a0d507ce .mqik-2df26439.mqik-158c0c85.mqik-b9643e6c{display:flex}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4{position:relative;margin-top:.5rem;width:100%;overflow-y:auto;border-radius:.375rem;flex-grow:1}@media (min-width: 480px){.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4{flex-grow:0}}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d{position:relative}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d{padding-bottom:2.25rem}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db{display:flex;flex-direction:row;align-items:center}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db{border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:.5rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db:hover{--tw-bg-opacity: 1;background-color:rgba(254,243,199,var(--tw-bg-opacity));--tw-bg-opacity: .3}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db .mqik-3ec2d446{width:2.5rem;flex-shrink:1;padding-left:.5rem;text-align:center;font-size:1.25rem;line-height:1.75rem;font-weight:700;font-style:italic;--tw-text-opacity: 1;color:rgba(115,115,115,var(--tw-text-opacity))}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db .mqik-9698e90a{width:3rem;flex-shrink:1;text-align:center}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db .mqik-28cd36e9{flex:1 1 0%;font-size:1rem;line-height:1.5rem;font-weight:700}.mqik-a0d507ce .mqik-2df26439 .mqik-805a84d4 .mqik-9548d40d .mqik-f15222db .mqik-31444f73{flex:none;padding-right:.5rem;font-weight:700;color:var(--mexty-quik-primary-color)}\n",document.head.appendChild(m),System.register(["./vendor-legacy.c06bd478.js","./index-legacy.1fcea3ad.js","./index-legacy.928d52cf.js","./index-legacy.54d7d0eb.js","./index-legacy.84fe4859.js","./Tooltip-legacy.a9623a63.js","./jsx-runtime_commonjs-proxy-legacy.5ab9bd6e.js"],(function(e){"use strict";var t,a,d,m,s,l,u,h,f,k,p,g,q,b,v,y,w;return{setters:[function(e){t=e.w,a=e.A,d=e.x,m=e.B,s=e.$,l=e.G,u=e.H},function(e){h=e.D,f=e.W,k=e.T,p=e.ci,g=e.U,q=e.ba},function(e){b=e.u},function(e){v=e.U},function(e){y=e.P},function(e){w=e.T},function(){}],execute:function(){var x={day:"1",week:"7",month:"30"};function N(e){return function(){var t=o(c().mark((function t(i,r){var a,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=x[e]||"",t.prev=1,t.next=4,h.getRanks(n,"hot");case 4:a=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),f(t.t0,i,r),t.abrupt("return",{error:t.t0});case 11:return i(k([{type:p.RECEIVED_RANKS,data:{period:e,ranks:a.ranks}},{type:g.RECEIVED_PROFILES_LIST,data:a.users}])),t.abrupt("return",{data:a});case 13:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,i){return t.apply(this,arguments)}}()}function S(e){return function(){var t=o(c().mark((function t(i,r){var a,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=x[e]||"",t.prev=1,t.next=4,h.getRanks(n,"commit");case 4:a=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),f(t.t0,i,r),t.abrupt("return",{error:t.t0});case 11:return i(k([{type:p.RECEIVED_RANKS2,data:{period:e,ranks:a.ranks}},{type:g.RECEIVED_PROFILES_LIST,data:a.users}])),t.abrupt("return",{data:a});case 13:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,i){return t.apply(this,arguments)}}()}var _="mqik-a0d507ce",P="mqik-9d01e40d",E="mqik-d3d02730",I="mqik-2dd25643",j="mqik-db4dc8ce",L="mqik-72c52047",O="mqik-b9643e6c",D="mqik-2df26439",T="mqik-e3febf16",C="mqik-cfe34e90",R="mqik-c4be0906",z="mqik-dd6e4483",A="mqik-7a3cfc7e",U="mqik-d5fa14c8",F="mqik-53ceda94",M="mqik-35c8ffd7",G="mqik-9cd6b167",B="mqik-b5f4b9d3",V="mqik-ad97e8e6",H="mqik-7fe8da0a",$="mqik-6c09e06c",K="mqik-d62fc5f3",X="mqik-2f5292be",Y="mqik-4c723ed9",W="mqik-e087594d",J="mqik-3111f176",Q="mqik-ad1e6877",Z="mqik-158c0c85",ee="mqik-805a84d4",te="mqik-9548d40d",ie="mqik-f15222db",re="mqik-3ec2d446",ae="mqik-9698e90a",ne="mqik-28cd36e9",ce="mqik-31444f73",de=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}],oe=function(e){var i,r=(new Date).getTime();return t("div",{className:a(D,T,n({},C,e.blue)),children:[t("div",{className:a(R,(i={},n(i,z,!e.blue),n(i,A,e.blue),i)),children:[t("div",{className:U,children:[d("div",{className:K,children:d("h3",{children:"Bảng xếp hạng"})}),t("div",{className:F,children:[r>164097e7?d("button",{className:a(X,n({},M,"month"===e.period)),onClick:function(){return e.onSelect("month")},children:"Tháng"}):null,r>16387236e5?d("button",{className:a(X,n({},M,"week"===e.period)),onClick:function(){return e.onSelect("week")},children:"Tuần"}):null,d("button",{className:a(X,n({},M,"day"===e.period)),onClick:function(){return e.onSelect("day")},children:"Ngày"})]})]}),d("div",{className:a(G),children:t("div",{className:a(B,W,"u3-px-3"),children:[d("div",{className:"u3-w-20 u3-h-20 u3-bg-gray-300 u3-rounded-full u3-animate-pulse u3-mx-auto"}),d("div",{className:a(H,"u3-h-6 u3-w-24 u3-mx-auto u3-rounded-full u3-bg-gray-200  u3-mt-1 u3-animate-pulse")}),d("div",{className:a($,"u3-h-5 u3-w-16 u3-mx-auto u3-mt-1 u3-bg-gray-200 u3-rounded u3-animate-pulse")})]})}),d("div",{className:a(G),children:t("div",{className:a(B,Y,"u3-px-3"),children:[d("div",{className:"u3-w-24 u3-h-24 u3-bg-gray-300 u3-rounded-full u3-animate-pulse u3-mx-auto"}),d("div",{className:a(H,"u3-h-6 u3-w-24 u3-mx-auto u3-rounded-full u3-bg-gray-200  u3-mt-1 u3-animate-pulse")}),d("div",{className:a($,"u3-h-5 u3-w-16 u3-mx-auto u3-mt-1 u3-bg-gray-200 u3-rounded u3-animate-pulse")})]})}),d("div",{className:a(G),children:t("div",{className:a(B,J,"u3-px-3"),children:[d("div",{className:"u3-w-20 u3-h-20 u3-bg-gray-300 u3-rounded-full u3-animate-pulse u3-mx-auto"}),d("div",{className:a(H,"u3-h-6 u3-w-24 u3-mx-auto u3-rounded-full u3-bg-gray-200 u3-mt-1 u3-animate-pulse")}),d("div",{className:a($,"u3-h-5 u3-w-16 u3-mx-auto u3-mt-0.5 u3-bg-gray-200 u3-rounded u3-animate-pulse")})]})})]}),d("div",{className:a(ee,"u3-overflow-hidden"),children:d("div",{className:a(te,"u3-overflow-hidden"),children:de.map((function(e,i){return i<3?d(m.exports.Fragment,{},"rank-".concat(i,"-").concat(e.id)):t("div",{className:ie,children:[d("div",{className:re,children:i+1}),d("div",{className:a(ae,"u3-pl-1"),children:d("div",{className:"u3-w-10 u3-h-10 u3-bg-gray-300 u3-rounded-full u3-animate-pulse"})}),d("div",{className:a(ne,"u3-h-6 u3-bg-gray-300 u3-rounded u3-animate-pulse")}),d("div",{className:a(ce,"u3-h-6 u3-w-8 u3-bg-gray-300 u3-rounded u3-animate-pulse")})]})}))})})]})};function me(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1.")}var se=function(e){var i=r(m.exports.useState("day"),2),c=i[0],o=i[1],l=r(m.exports.useState("day"),2),u=l[0],f=l[1],k=r(m.exports.useState("day"),2),p=k[0],g=k[1],q=r(m.exports.useState("day"),2),x=q[0],N=q[1],S=r(m.exports.useState("hot"),2),T=S[0],C=S[1],de=r(m.exports.useState(!0),2),se=de[0],le=de[1],ue=r(m.exports.useState(!0),2),he=ue[0],fe=ue[1],ke=b(),pe=(new Date).getTime(),ge=s();function qe(t){t!==c&&(le(!0),g(t),e.actions.fetchRanks(t))}function be(t){t!==u&&(fe(!0),N(t),e.actions.fetchRanks2(t))}m.exports.useEffect((function(){ke.setTitle("Bảng Xếp Hạng"),e.actions.fetchRanks("day"),e.actions.fetchRanks2("day")}),[]),m.exports.useEffect((function(){o(e.period),le(!1)}),[e.period]),m.exports.useEffect((function(){f(e.period2),fe(!1)}),[e.period2]);var ve=d(oe,{period:p,onSelect:qe}),ye=d(oe,{period:x,onSelect:be,blue:!0});if(!e.isLoading&&!se&&e.ranksData[0]){var we=e.ranksData[0],xe=e.ranksData[1],Ne=e.ranksData[2];ve=t("div",{className:a(D,Q,n({},O,"hot"===T)),children:[t("div",{className:a(R,z),children:[t("div",{className:U,children:[d("div",{className:K,children:d("h3",{children:"Xếp hạng cao thủ"})}),t("div",{className:F,children:[pe>164097e7?d("button",{className:a(X,n({},M,"month"===c)),onClick:function(){return qe("month")},children:"Tháng"}):null,pe>16387236e5?d("button",{className:a(X,n({},M,"week"===c)),onClick:function(){return qe("week")},children:"Tuần"}):null,d("button",{className:a(X,n({},M,"day"===c)),onClick:function(){return qe("day")},children:"Ngày"})]})]}),d("div",{className:a(G),children:t("div",{className:a(B,W),children:[d(y,{src:h.getProfilePictureUrl(xe.id,xe.last_picture_update),size:"6xl",userId:xe.id,hasMention:!1,username:xe.username}),d("div",{className:V,children:d("div",{className:H,children:d(w,{placement:"top",content:d(v,{userId:xe.id,channelId:"",hideStatus:!0,disablePopover:!0}),children:d(v,{userId:xe.id,channelId:"",hideStatus:!0,disablePopover:!0})})})}),d("div",{className:$,children:me(xe.score)})]})}),d("div",{className:a(G),children:t("div",{className:a(B,Y),children:[d(y,{src:h.getProfilePictureUrl(we.id,we.last_picture_update),size:"7xl",userId:we.id,hasMention:!1,username:we.username}),d("div",{className:V,children:d("div",{className:H,children:d(v,{userId:we.id,channelId:"",hideStatus:!0,disablePopover:!0})})}),d("div",{className:$,children:me(we.score)})]})}),d("div",{className:a(G),children:t("div",{className:a(B,J),children:[d(y,{src:h.getProfilePictureUrl(Ne.id,Ne.last_picture_update),size:"6xl",userId:Ne.id,hasMention:!1,username:Ne.username}),d("div",{className:V,children:d("div",{className:H,children:d(v,{userId:Ne.id,channelId:"",hideStatus:!0,disablePopover:!0})})}),d("div",{className:$,children:me(Ne.score)})]})})]}),d("div",{className:ee,children:d("div",{className:te,children:e.ranksData.map((function(e,i){return i<3?d(m.exports.Fragment,{},"rank-hot-".concat(i,"-").concat(e.id)):t("div",{className:ie,children:[d("div",{className:re,children:i+1}),d("div",{className:ae,children:d(y,{src:h.getProfilePictureUrl(e.id,e.last_picture_update),size:"xl",userId:e.id,hasMention:!1,username:e.username})}),d("div",{className:ne,children:d(v,{userId:e.id,channelId:"",hideStatus:!0,disablePopover:!0})}),d("div",{className:ce,children:me(e.score)})]},"rank-hot-".concat(i,"-").concat(e.id))}))})})]})}if(!e.isLoading2&&!he&&e.ranksData2[0]){var Se=e.ranksData2[0],_e=e.ranksData2[1],Pe=e.ranksData2[2];ye=t("div",{className:a(D,Z,n({},O,"commit"===T)),children:[t("div",{className:a(R,A),children:[t("div",{className:U,children:[d("div",{className:K,children:d("h3",{children:"Bảng cống hiến"})}),t("div",{className:F,children:[pe>164097e7?d("button",{className:a(X,n({},M,"month"===u)),onClick:function(){return be("month")},children:"Tháng"}):null,pe>16387236e5?d("button",{className:a(X,n({},M,"week"===u)),onClick:function(){return be("week")},children:"Tuần"}):null,d("button",{className:a(X,n({},M,"day"===u)),onClick:function(){return be("day")},children:"Ngày"})]})]}),d("div",{className:a(G),children:t("div",{className:a(B,W),children:[d(y,{src:h.getProfilePictureUrl(_e.id,_e.last_picture_update),size:"6xl",userId:_e.id,hasMention:!1,username:_e.username}),d("div",{className:V,children:d("div",{className:H,children:d(w,{placement:"top",content:d(v,{userId:_e.id,channelId:"",hideStatus:!0,disablePopover:!0}),children:d(v,{userId:_e.id,channelId:"",hideStatus:!0,disablePopover:!0})})})}),d("div",{className:$,children:me(_e.score)})]})}),d("div",{className:a(G),children:t("div",{className:a(B,Y),children:[d(y,{src:h.getProfilePictureUrl(Se.id,Se.last_picture_update),size:"7xl",userId:Se.id,hasMention:!1,username:Se.username}),d("div",{className:V,children:d("div",{className:H,children:d(v,{userId:Se.id,channelId:"",hideStatus:!0,disablePopover:!0})})}),d("div",{className:$,children:me(Se.score)})]})}),d("div",{className:a(G),children:t("div",{className:a(B,J),children:[d(y,{src:h.getProfilePictureUrl(Pe.id,Pe.last_picture_update),size:"6xl",userId:Pe.id,hasMention:!1,username:Pe.username}),d("div",{className:V,children:d("div",{className:H,children:d(v,{userId:Pe.id,channelId:"",hideStatus:!0,disablePopover:!0})})}),d("div",{className:$,children:me(Pe.score)})]})})]}),d("div",{className:ee,children:d("div",{className:a(te),children:e.ranksData2.map((function(e,i){return i<3?d(m.exports.Fragment,{},"rank-commit-".concat(i,"-").concat(e.id)):t("div",{className:a(ie),children:[d("div",{className:re,children:i+1}),d("div",{className:ae,children:d(y,{src:h.getProfilePictureUrl(e.id,e.last_picture_update),size:"xl",userId:e.id,hasMention:!1,username:e.username})}),d("div",{className:ne,children:d(v,{userId:e.id,channelId:"",hideStatus:!0,disablePopover:!0})}),d("div",{className:ce,children:me(e.score)})]},"rank-commit-".concat(i,"-").concat(e.id))}))})})]})}return t("div",{className:_,children:[d("div",{className:P,children:d("button",{onClick:function(){return ge.goBack()},children:"Trở lại Phòng Chat"})}),d("div",{className:I,children:t("div",{className:j,children:[d("button",{className:a(L,n({},O,"hot"===T)),onClick:function(){return C("hot")},children:"Hạng Cao Thủ"}),d("button",{className:a(L,n({},O,"commit"===T)),onClick:function(){return C("commit")},children:"Bảng Cống Hiến"})]})}),t("div",{className:E,children:[ve,ye]})]})};e("default",l((function(e){var t=function(e){return e.entities.ranks.ranks}(e),r=function(e){return e.entities.ranks.ranks2}(e),a=t.current||"",n=r.current||"",c=[],d=[];a&&(c=t[t.current]||[]),n&&(d=r[r.current]||[]);var o=!a,m=!a;return!o&&c.length&&(c=c.map((function(t){return i(i({},q(e,t.user_id)),{},{score:t.score})}))),!m&&d.length&&(d=d.map((function(t){return i(i({},q(e,t.user_id)),{},{score:t.score})}))),{ranksData:c,ranksData2:d,period:a,period2:n,isLoading:o,isLoading2:m}}),(function(e){return{actions:u({fetchRanks:N,fetchRanks2:S},e)}}))(se))}}}))}();
