(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5202:function(){!function(a,b){b()}(this,function(){"use strict";function a(a){var b=!0,c=!1,d=null,e={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function f(a){return!!a&&a!==document&&"HTML"!==a.nodeName&&"BODY"!==a.nodeName&&"classList"in a&&"contains"in a.classList}function g(a){!a.classList.contains("focus-visible")&&(a.classList.add("focus-visible"),a.setAttribute("data-focus-visible-added",""))}function h(a){b=!1}function i(){document.addEventListener("mousemove",j),document.addEventListener("mousedown",j),document.addEventListener("mouseup",j),document.addEventListener("pointermove",j),document.addEventListener("pointerdown",j),document.addEventListener("pointerup",j),document.addEventListener("touchmove",j),document.addEventListener("touchstart",j),document.addEventListener("touchend",j)}function j(a){(!a.target.nodeName||"html"!==a.target.nodeName.toLowerCase())&&(b=!1,document.removeEventListener("mousemove",j),document.removeEventListener("mousedown",j),document.removeEventListener("mouseup",j),document.removeEventListener("pointermove",j),document.removeEventListener("pointerdown",j),document.removeEventListener("pointerup",j),document.removeEventListener("touchmove",j),document.removeEventListener("touchstart",j),document.removeEventListener("touchend",j))}document.addEventListener("keydown",function(c){!c.metaKey&&!c.altKey&&!c.ctrlKey&&(f(a.activeElement)&&g(a.activeElement),b=!0)},!0),document.addEventListener("mousedown",h,!0),document.addEventListener("pointerdown",h,!0),document.addEventListener("touchstart",h,!0),document.addEventListener("visibilitychange",function(a){"hidden"===document.visibilityState&&(c&&(b=!0),i())},!0),i(),a.addEventListener("focus",function(a){var c,d,h;f(a.target)&&(b||(d=(c=a.target).type,h=c.tagName,"INPUT"===h&&e[d]&&!c.readOnly||"TEXTAREA"===h&&!c.readOnly||c.isContentEditable))&&g(a.target)},!0),a.addEventListener("blur",function(a){if(f(a.target)){var b;(a.target.classList.contains("focus-visible")||a.target.hasAttribute("data-focus-visible-added"))&&(c=!0,window.clearTimeout(d),d=window.setTimeout(function(){c=!1},100),b=a.target,!b.hasAttribute("data-focus-visible-added")||(b.classList.remove("focus-visible"),b.removeAttribute("data-focus-visible-added")))}},!0),a.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&a.host?a.host.setAttribute("data-js-focus-visible",""):a.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var b;window.applyFocusVisiblePolyfill=a;try{b=new CustomEvent("focus-visible-polyfill-ready")}catch(c){(b=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(b)}"undefined"!=typeof document&&a(document)})},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2654)}])},7193:function(a,b){"use strict";b.Z={src:"/_next/static/media/apple-touch-icon.822687be.png",height:180,width:180,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEWLXPaLXPWKXPaLW/WKW/aKW/WLXPWKXPaKXPWKW/WKW/aKW/WLW/aKW/aKW/WKXPWKW/aKXPaKW/aLW/aKW/aKXPWKW/aKW/WKW/aKW/aLXPWKW/aKW/aKW/WKW/aKXPaKW/aKXPWKW/aKW/aKXPWKW/aKW/WKW/aKW/aKW/bcsXiZAAAAKnRSTlMAAAAAAAACAgUFBgYJCQobHB4eSElWV1dYb3JygISFsbGztMTGxsvMzdp28qqoAAAASElEQVR42gVACRZAIBD9abLLvkSIKN3/gh4El8ZILjCeXmtvJritFKxaHZ6GspTqF9dCeSHmG/3HKCI/gO22a+3BkZAKQSH+Aa91BMwIr6q2AAAAAElFTkSuQmCC"}},1852:function(a,b){"use strict";b.Z={src:"/_next/static/media/favicon-16x16.bbc86fa7.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsklEQVR42mOAgc7Yb8LdMd9Wdkd/W9AZ+10AIRHzLbgr5uuqrphvp7qiv9YBcTOQfRJIrwPiUAYgsbcr+lsJUBcXkml8QE2FQLn9IAW72iN/yIIkgGzW7pivLGB2zDd5oKKdQAbIqG9xUAVsIAxhf4sCsteAVPp0R387xYAEoAoOd8d88wBzuqO/NgJVH+yK+qLYFfVVDsjeB8RtYMneqN+MUB25QJMudsd8vdQNZMNMAgCHtmc4Sl65kgAAAABJRU5ErkJggg=="}},7056:function(a,b){"use strict";b.Z={src:"/_next/static/media/favicon-32x32.2a23e45f.png",height:32,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApElEQVR42mOAga6Yb7zdMd/Wd0V/W9MZ9Y0HIRH9NQIouLE7+tspIG4AsptBbJAYUC4SpOAEUKAYaAI3TBPQJC6geBFIDmT0USBDBmoaK1AnK4gN1CQDZB8FCW4EMiKBYkD2N7bu6K9sUMVhQP4GoHFf3YGMMwxoAOombyjnayNQx2EglgParwDUdAjIboZ5jwlqfAFQx00gvgYUywWJ9cZ+ZQQAwT5pdQJIQw4AAAAASUVORK5CYII="}},7727:function(a,b){"use strict";b.Z={src:"/_next/static/media/social-card.fefc68e0.jpg",height:600,width:1200,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAK2Lf//EABcQAQADAAAAAAAAAAAAAAAAAAIAASL/2gAIAQEAAT8AIpjU/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="}},2654:function(a,b,c){"use strict";c.r(b);var d=c(1799),e=c(5893),f=c(9008),g=c.n(f);c(4316),c(5202),b.default=function(a){var b=a.Component,f=a.pageProps;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(g(),{children:[(0,e.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:c(7193).Z.src}),(0,e.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:c(7056).Z.src}),(0,e.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:c(1852).Z.src}),(0,e.jsx)("meta",{content:"Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",name:"description"}),(0,e.jsx)("meta",{property:"og:url",content:"https://wellness-icons.saunaworlds.com"}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:site_name",content:"wellness-icons"}),(0,e.jsx)("meta",{property:"og:description",content:"Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."}),(0,e.jsx)("title",{children:"wellness-icons"}),(0,e.jsx)("meta",{property:"og:title",content:"wellness-icons"}),(0,e.jsx)("meta",{property:"og:image",content:"https://wellness-icons.saunaworlds.com".concat(c(7727).Z.src)}),(0,e.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,e.jsx)("meta",{name:"twitter:site",content:"@tailwindlabs"}),(0,e.jsx)("meta",{name:"twitter:title",content:"wellness-icons"}),(0,e.jsx)("meta",{name:"twitter:description",content:"Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."}),(0,e.jsx)("meta",{name:"twitter:image",content:"https://wellness-icons.saunaworlds.com".concat(c(7727).Z.src)})]}),(0,e.jsx)(b,(0,d.Z)({},f))]})}},4316:function(){},9008:function(a,b,c){a.exports=c(5443)},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])