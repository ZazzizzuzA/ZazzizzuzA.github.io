!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=7)}([function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var o,i,r={},l=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),a=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),b=null,c=0,s=[],d=t(0);function p(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var l=0;l<i.parts.length;l++)i.parts[l](o.parts[l]);for(;l<o.parts.length;l++)i.parts.push(g(o.parts[l],e))}else{var a=[];for(l=0;l<o.parts.length;l++)a.push(g(o.parts[l],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function f(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],l=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[l]?o[l].parts.push(a):t.push(o[l]={id:l,parts:[a]})}return t}function m(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),s.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,i)}}function _(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=s.indexOf(n);e>=0&&s.splice(e,1)}function u(n){var e=document.createElement("style");return n.attrs.type="text/css",x(e,n.attrs),m(n,e),e}function x(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var l=c++;t=b||(b=u(e)),o=v.bind(null,t,l,!1),i=v.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",x(e,n.attrs),m(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=d(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var l=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(l),a&&URL.revokeObjectURL(a)}.bind(null,t,e),i=function(){_(t),t.href&&URL.revokeObjectURL(t.href)}):(t=u(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){_(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return p(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var l=t[i];(a=r[l.id]).refs--,o.push(a)}n&&p(f(n,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var b=0;b<a.parts.length;b++)a.parts[b]();delete r[a.id]}}}};var h,k=(h=[],function(n,e){return h[n]=e,h.filter(Boolean).join("\n")});function v(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=k(e,i);else{var r=document.createTextNode(i),l=n.childNodes;l[e]&&n.removeChild(l[e]),l.length?n.insertBefore(r,l[e]):n.appendChild(r)}}},function(n,e,t){n.exports=t.p+"d7d5d4588a9f50c99264bc12e4892a7c.ttf"},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(l=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(r).concat([i]).join("\n")}var l;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var l=n[i];"number"==typeof l[0]&&o[l[0]]||(t&&!l[2]?l[2]=t:t&&(l[2]="("+l[2]+") and ("+t+")"),e.push(l))}},e}},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){var o=t(4);(n.exports=t(3)(!1)).push([n.i,"html,\nbody,\nul,\nol {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-family: 'OpenSans-Regular', sans-serif; }\n\n@font-face {\n  font-family: 'OpenSans-Regular';\n  src: url("+o(t(2))+"); }\n\n.hide {\n  display: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0; }\n\n@keyframes ripple {\n  0% {\n    box-shadow: 0 0 0 0px rgba(99, 199, 32, 0.6), 0 0 0 0px rgba(230, 230, 230, 0.6); }\n  100% {\n    box-shadow: 0 0 10px 60px rgba(99, 199, 32, 0), 0 0 0 60px rgba(240, 240, 240, 0); } }\n\n@keyframes rippleRev {\n  0% {\n    box-shadow: 0 0 10px 60px rgba(99, 199, 32, 0), 0 0 0 60px rgba(240, 240, 240, 0); }\n  100% {\n    box-shadow: 0 0 0 0px rgba(99, 199, 32, 0.8), 0 0 0 0px rgba(230, 230, 230, 0.8); } }\n\n* {\n  transition: all 200ms ease-out; }\n\nbody {\n  background: #f9f7ee;\n  padding: 30px 85px; }\n  body h1 {\n    font-weight: 400;\n    padding-bottom: 10px; }\n\n.item_content-for-reg-user {\n  background: white;\n  display: flex;\n  height: 500px;\n  border-top: 1px solid #2b2b2b17;\n  border-right: 1px solid #2b2b2b17;\n  border-bottom: 0px solid #2b2b2b17;\n  border-left: 1px solid #2b2b2b17;\n  font-size: 3em;\n  font-weight: 600; }\n  .item_content-for-reg-user span {\n    margin: auto;\n    text-align: center; }\n\n.hide {\n  display: none; }\n\n.block {\n  display: flex;\n  justify-content: space-between; }\n  .block .block__item_big {\n    width: 65%;\n    box-sizing: border-box;\n    display: flex;\n    flex-flow: column wrap; }\n    .block .block__item_big .item__content {\n      background: white;\n      display: flex;\n      flex-flow: column wrap;\n      border-top: 1px solid #2b2b2b17;\n      border-right: 1px solid #2b2b2b17;\n      border-bottom: 0px solid #2b2b2b17;\n      border-left: 1px solid #2b2b2b17; }\n      .block .block__item_big .item__content .box {\n        display: flex;\n        flex-flow: row nowrap;\n        padding: 20px 30px;\n        border-top: 0 solid #2b2b2b17;\n        border-right: 0 solid #2b2b2b17;\n        border-bottom: 1px solid #2b2b2b17;\n        border-left: 0 solid #2b2b2b17; }\n        .block .block__item_big .item__content .box h4 {\n          width: 25%; }\n      .block .block__item_big .item__content .box__info-main {\n        display: flex;\n        flex-flow: column wrap; }\n        .block .block__item_big .item__content .box__info-main h4 {\n          width: 100%;\n          padding-bottom: 10px; }\n        .block .block__item_big .item__content .box__info-main .info-commentary {\n          flex-flow: column wrap; }\n          .block .block__item_big .item__content .box__info-main .info-commentary a {\n            font-size: 0.8em;\n            height: 22px;\n            padding-left: 25%; }\n          .block .block__item_big .item__content .box__info-main .info-commentary textarea {\n            resize: none;\n            align-self: center;\n            width: 50%;\n            flex-wrap: nowrap;\n            height: 0px;\n            opacity: 0;\n            transition: all 500ms ease-out; }\n          .block .block__item_big .item__content .box__info-main .info-commentary .activeComment {\n            height: 100px;\n            opacity: 1; }\n      .block .block__item_big .item__content .box__info-delivery {\n        display: flex;\n        flex-flow: column wrap; }\n        .block .block__item_big .item__content .box__info-delivery #adressStock {\n          flex-grow: 2; }\n      .block .block__item_big .item__content .button-checkout {\n        justify-content: center; }\n        .block .block__item_big .item__content .button-checkout button {\n          background-color: #63bf20;\n          font-size: 1.1em;\n          font-weight: 600;\n          color: white;\n          padding: 5px 15px;\n          border-top: 0px solid #2b2b2b17;\n          border-right: 0px solid #2b2b2b17;\n          border-bottom: 1px solid #2b2b2b17;\n          border-left: 0px solid #2b2b2b17;\n          border-radius: 20px;\n          cursor: pointer;\n          outline: none;\n          animation: ripple 3500ms infinite;\n          z-index: 10; }\n        .block .block__item_big .item__content .button-checkout button:hover {\n          animation: rippleRev 800ms cubic-bezier(0.34, 0.2, 0.83, 0.45); }\n    .block .block__item_big .hide {\n      display: none; }\n    .block .block__item_big .input_item {\n      display: flex;\n      flex-flow: row nowrap;\n      width: 100%;\n      padding: 10px 0px; }\n      .block .block__item_big .input_item span {\n        width: 25%;\n        font-size: 0.9em;\n        color: #969696;\n        height: 22px; }\n      .block .block__item_big .input_item input {\n        width: 40%;\n        height: 22px;\n        border: 1px groove #2b2b2b80;\n        border-radius: 3px;\n        padding: 0px 5px; }\n    .block .block__item_big .item_nav {\n      width: 100%;\n      display: flex;\n      justify-content: flex-start; }\n      .block .block__item_big .item_nav .nav {\n        border: 1px solid #2b2b2b17;\n        border-bottom: 0;\n        padding: 15px 15px;\n        background: #f9f7ee;\n        font-weight: 600;\n        font-size: 0.8em;\n        white-space: pre-wrap;\n        max-width: 25%;\n        cursor: pointer;\n        color: #2073b3; }\n        .block .block__item_big .item_nav .nav span {\n          border-bottom: 1px dotted #2073b3; }\n      .block .block__item_big .item_nav .active {\n        background: white;\n        color: #000;\n        cursor: default; }\n        .block .block__item_big .item_nav .active span {\n          border-bottom: 0; }\n      .block .block__item_big .item_nav .nav:first-child {\n        border-right: 0; }\n  .block .block__item_small {\n    width: 33%;\n    box-sizing: border-box;\n    background: white;\n    align-self: flex-start;\n    border-top: 1px solid #2b2b2b17;\n    border-right: 1px solid #2b2b2b17;\n    border-bottom: 0px solid #2b2b2b17;\n    border-left: 1px solid #2b2b2b17; }\n    .block .block__item_small .box_order {\n      position: relative;\n      display: flex;\n      padding: 15px 15px;\n      border-top: 0px solid #2b2b2b17;\n      border-right: 0px solid #2b2b2b17;\n      border-bottom: 1px solid #2b2b2b17;\n      border-left: 0px solid #2b2b2b17; }\n      .block .block__item_small .box_order img {\n        height: 70px; }\n      .block .block__item_small .box_order .about-all-items {\n        font-size: 0.8em;\n        padding: 0px 15px;\n        display: flex;\n        flex-flow: column wrap;\n        justify-content: space-between;\n        cursor: pointer; }\n        .block .block__item_small .box_order .about-all-items .about-item {\n          color: #2073b3;\n          border-bottom: 1px dotted #2073b3; }\n        .block .block__item_small .box_order .about-all-items .item-price {\n          color: #969696; }\n        .block .block__item_small .box_order .about-all-items .price_absolute {\n          position: absolute;\n          bottom: 15px;\n          right: 20px;\n          font-weight: 600;\n          opacity: 0; }\n    .block .block__item_small .box_order:not(:nth-child(3n+1)):hover {\n      background-color: #bebebe; }\n      .block .block__item_small .box_order:not(:nth-child(3n+1)):hover .price_absolute {\n        opacity: 1; }\n    .block .block__item_small .price-sum {\n      font-weight: 600; }\n      .block .block__item_small .price-sum span {\n        width: 100%;\n        text-align: right; }\n\n@media (max-width: 1024px) {\n  .adaptive .block {\n    flex-flow: column wrap;\n    justify-content: space-between; }\n    .adaptive .block .block__item_big {\n      width: 100%; }\n    .adaptive .block .block__item_small {\n      width: 100%;\n      margin-top: 20px; }\n      .adaptive .block .block__item_small .box_order img {\n        height: 100px; }\n      .adaptive .block .block__item_small .box_order .about-all-items {\n        font-size: 1em; } }\n\n@media (max-width: 768px) {\n  .adaptive .block .block__item_big .item_nav .nav {\n    font-size: 0.7em; }\n  .adaptive .block .block__item_big .item__content {\n    font-size: 0.8em; }\n    .adaptive .block .block__item_big .item__content .box__info-main .info-commentary a {\n      font-size: 0.7em; }\n    .adaptive .block .block__item_big .item__content .box__info-main input {\n      font-size: 0.8em; }\n  .adaptive .block .block__item_small {\n    width: 100%;\n    margin-top: 20px; }\n    .adaptive .block .block__item_small .box_order img {\n      height: 70px; }\n    .adaptive .block .block__item_small .box_order .about-all-items {\n      font-size: 0.7em; }\n  .adaptive .block .box__info-delivery #adressStock {\n    flex-grow: 1;\n    max-width: 70%; }\n  .adaptive .block .box__info-delivery #typeOfDelivery {\n    max-width: 70%; }\n  .adaptive .item_content-for-reg-user {\n    font-size: 1.5em; } }\n",""])},function(n,e,t){var o=t(5);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){"use strict";t.r(e);t(6);let o=document.getElementById("commentArea"),i=document.getElementById("toComment"),r=document.getElementById("newBuyer"),l=document.getElementById("regBuyer"),a=document.getElementsByClassName("item_content-for-reg-user")[0],b=document.getElementsByClassName("item__content")[0];i.addEventListener("click",n=>{n.preventDefault(),o.classList.toggle("activeComment")}),r.onclick=(()=>{l.classList.contains("active")&&(r.classList.toggle("active"),b.classList.toggle("hide"),a.classList.toggle("hide"),l.classList.remove("active"))}),l.onclick=(()=>{r.classList.contains("active")&&(l.classList.toggle("active"),b.classList.toggle("hide"),a.classList.toggle("hide"),r.classList.remove("active"))})}]);