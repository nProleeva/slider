(this["webpackJsonpslider-task1"]=this["webpackJsonpslider-task1"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),u=n(4),s=n.n(u),o=(n(9),n(10),n(2)),i=(n(11),n(0)),a=function(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),r=Object(c.useRef)(0);return Object(c.useEffect)((function(){n.current&&t.current&&(r.current=Math.floor(6*n.current.offsetWidth/t.current.offsetWidth))}),[e.arrayOutput]),Object(i.jsxs)("div",{ref:n,children:[Object(i.jsx)("p",{children:Object(i.jsx)("span",{ref:t,children:"\u0412\u044b\u0432\u043e\u0434:"})}),e.arrayOutput.map((function(t,n){if(n===e.arrayOutput.length-1){var c=new RegExp("([^\\s]{0,".concat(r.current,"})")),u=t.split(c),s=0;return Object(i.jsx)("p",{className:"lastOutput",children:u.map((function(e,t){var n=e.length,c={width:"".concat(n,"ch"),animationDuration:"".concat(n/4,"s, ").concat(s/4,"s"),animationTimingFunction:"steps(".concat(n,"), ease-in-out"),animationDelay:"".concat(s/4,"s, 0s")};return s+=n,Object(i.jsx)("span",{style:c,className:"output",children:e},t)}))},n)}return Object(i.jsx)("p",{children:t},n)}))]})},f=(n(13),r.a.forwardRef((function(e,t){var n=Object(c.useRef)(null),r=Object(c.useState)([]),u=Object(o.a)(r,2),s=u[0],f=u[1];return Object(c.useEffect)((function(){"object"===typeof n&&(null===n||void 0===n?void 0:n.current)&&n.current.focus()}),[]),Object(i.jsxs)("div",{className:"form",ref:t,children:[Object(i.jsxs)("form",{onSubmit:function(e){"object"===typeof n&&(null===n||void 0===n?void 0:n.current)&&(f(s.concat(n.current.value)),n.current.value="",n.current.focus()),e.preventDefault(),e.stopPropagation()},children:[Object(i.jsx)("textarea",{ref:n,required:!0}),Object(i.jsx)("input",{type:"submit",value:"Send"})]}),Object(i.jsx)(a,{arrayOutput:s})]})}))),l=(n(14),r.a.forwardRef((function(e,t){var n=Object(c.useState)(""),r=Object(o.a)(n,2),u=r[0],s=r[1],a=Object(c.useRef)(void 0);return Object(c.useEffect)((function(){var e={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};s((new Date).toLocaleString("en-US",e)),a.current=setInterval((function(){s((new Date).toLocaleString("en-US",e))}),1e3)}),[]),Object(c.useEffect)((function(){return function(){return clearTimeout(a.current)}}),[]),Object(i.jsx)("div",{className:"time",ref:t,children:Object(i.jsx)("span",{children:u})})}))),j=function(){var e=Object(c.useRef)(0),t=Object(c.useRef)(null),n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.classList.add("none")}),[]),Object(i.jsxs)("div",{className:"App",onTouchMove:function(c){for(var r,u=c.touches[0].target;u!==t.current&&u!==n.current;)u=u.parentElement;if(!u.classList.contains("none"))if(u===t.current&&c.touches[0].clientX-e.current<0)null===(r=n.current)||void 0===r||r.classList.remove("none"),t.current.classList.add("none");else if(u===n.current&&c.touches[0].clientX-e.current>0){var s;null===(s=t.current)||void 0===s||s.classList.remove("none"),n.current.classList.add("none")}},onTouchStart:function(t){e.current=t.touches[0].clientX},children:[Object(i.jsx)(f,{ref:t}),Object(i.jsx)(l,{ref:n})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f9678f85.chunk.js.map