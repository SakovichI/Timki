(()=>{var e={106:()=>{const e=document.querySelectorAll(".rect");let t=0;window.requestAnimationFrame((function(){e.forEach((e=>{setInterval((()=>{t+=1,e.style.backgroundColor=`hsla(${t}, 100%, 50%, 0.5)`}),50)}))}))},598:()=>{function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function r(){document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("mouseup",a),document.addEventListener("pointermove",a),document.addEventListener("pointerdown",a),document.addEventListener("pointerup",a),document.addEventListener("touchmove",a),document.addEventListener("touchstart",a),document.addEventListener("touchend",a)}function a(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",a),document.removeEventListener("pointermove",a),document.removeEventListener("pointerdown",a),document.removeEventListener("pointerup",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchstart",a),document.removeEventListener("touchend",a))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),r())}),!0),r(),e.addEventListener("focus",(function(e){var n,o,u;i(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(u=n.tagName)&&d[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{"use strict";n(598),window,document,document.documentElement,document.body,n(106)})()})();