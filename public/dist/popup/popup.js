(()=>{"use strict";var e={616:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);a&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},515:e=>{e.exports=function(e){return e[1]}},699:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(515),r=n.n(a),o=n(616),s=n.n(o)()(r());s.push([e.id,".app {\n  padding: 20px;\n  width: 300px;\n}\n\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.action {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n\n.button{\n  text-align: center;\n  margin-top: 20px;\n}",""]);const c=s},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],u=a.base?i[0]+a.base:i[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,a);a.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function r(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var i=a(e,r),u=0;u<o.length;u++){var l=n(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=React;var t=n.n(e);const a=ReactDOM;var r=n.n(a);const o=antd;var s=n(379),c=n.n(s),i=n(795),u=n.n(i),l=n(569),d=n.n(l),p=n(565),f=n.n(p),m=n(216),v=n.n(m),g=n(589),y=n.n(g),h=n(699),x={};x.styleTagTransform=y(),x.setAttributes=f(),x.insert=d().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=v();c()(h.Z,x);h.Z&&h.Z.locals&&h.Z.locals;const b=browser;var w=n.n(b);const C={async emitContent(e){const t=await w().tabs.query({active:!0,currentWindow:!0});t&&t.length>0&&await w().tabs.sendMessage(t[0].id,e)},emitBackground:e=>chrome.extension.getBackgroundPage().onMessage(e),async emit(e){await w().runtime.sendMessage(e)},on(e){w().runtime.onMessage.addListener(e)}},E={get:async e=>(await w().storage.local.get()||{})[e],async set(e){await w().storage.local.set(e)}};const M="fillPassword",S="getPassword",k="getCurrentContentHost",T="getCurrentContentStatus";function P(){const[e,n]=t().useState(!1),[a,r]=t().useState(""),[s,c]=t().useState(!1),[i,u]=t().useState(""),[l,d]=t().useState([]);t().useEffect((()=>{!async function(){C.on((async e=>{console.log("popup.js m",e);const{action:t,data:n}=e;"onContentInit"==t?await E.set({currentHost:n.currentHost}):"setDesignerPages"==t?d(n.pages):t===M&&(console.log("动态口令为",n?.authCode),r(n?.authCode))}));const e=await C.emitBackground({action:k,data:{}});console.log(e);let t=`${e.currentContentHost}-value`;const a=await E.get(t)||"data-id";u(a),c(e.currentContentHost);let o=`${e.currentContentHost}-status`;const s=await C.emitBackground({action:T,data:{key:o}});n(s.value)}()}),[]);return t().createElement("div",{className:"app"},t().createElement("div",{className:"title"},"YnfQuicker"),t().createElement("div",{style:{marginTop:"20px"}},"当前host: ",s),t().createElement("div",{className:"action"},t().createElement(o.Button,{onClick:()=>{C.emitBackground({action:S})}},"自动填充动态口令")),t().createElement("div",{style:{textAlign:"center"}},a),t().createElement(o.Button,{type:"primary",onClick:async()=>{chrome.runtime.openOptionsPage()}},"设置"))}const B=document.getElementById("root");r().createRoot(B).render(t().createElement(P,null))})()})();