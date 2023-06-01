import { jsx, jsxs } from 'react/jsx-runtime.js';
import React from 'react';
import ReactDOM from 'react-dom/client';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n";
styleInject(css_248z$1);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var css_248z = ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n";
styleInject(css_248z);

function App() {
    return (jsx("div", __assign({ className: "App" }, { children: jsxs("header", __assign({ className: "App-header" }, { children: [jsxs("p", { children: ["Edit ", jsx("code", { children: "src/App.tsx" }), " and save to reload."] }), jsx("a", __assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" }))] })) })));
}

var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve().then(function () { return webVitals; }).then(function (_a) {
            var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

var Button = function (_a) {
    var label = _a.label, style = _a.style, onClick = _a.onClick;
    return (jsx("button", __assign({ style: style, onClick: onClick }, { children: label })));
};

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx(React.StrictMode, { children: jsx(App, {}) }));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var e,t,n,i,r=function(e,t){return {name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)));};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0);},u=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t);}),!0);},c=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)));}},f=-1,s=function(){return "hidden"===document.visibilityState?0:1/0},m=function(){o((function(e){var t=e.timeStamp;f=t;}),!0);},v=function(){return f<0&&(f=s(),m(),u((function(){setTimeout((function(){f=s(),m();}),0);}))),{get firstHiddenTime(){return f}}},d=function(e,t){var n,i=v(),o=r("FCP"),f=function(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),n(!0)));},s=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],m=s?null:a("paint",f);(s||m)&&(n=c(e,o,t),s&&f(s),u((function(i){o=r("FCP"),n=c(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,n(!0);}));}));})));},p=!1,l=-1,h=function(e,t){p||(d((function(e){l=e.value;})),p=!0);var n,i=function(t){l>-1&&e(t);},f=r("CLS",0),s=0,m=[],v=function(e){if(!e.hadRecentInput){var t=m[0],i=m[m.length-1];s&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,m.push(e)):(s=e.value,m=[e]),s>f.value&&(f.value=s,f.entries=m,n());}},h=a("layout-shift",v);h&&(n=c(i,f,t),o((function(){h.takeRecords().map(v),n(!0);})),u((function(){s=0,l=-1,f=r("CLS",0),n=c(i,f,t);})));},T={passive:!0,capture:!0},y=new Date,g=function(i,r){e||(e=r,t=i,n=new Date,w(removeEventListener),E());},E=function(){if(t>=0&&t<n-y){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach((function(e){e(r);})),i=[];}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){g(e,t),r();},i=function(){r();},r=function(){removeEventListener("pointerup",n,T),removeEventListener("pointercancel",i,T);};addEventListener("pointerup",n,T),addEventListener("pointercancel",i,T);}(t,e):g(t,e);}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,T)}));},L=function(n,f){var s,m=v(),d=r("FID"),p=function(e){e.startTime<m.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),s(!0));},l=a("first-input",p);s=c(n,d,f),l&&o((function(){l.takeRecords().map(p),l.disconnect();}),!0),l&&u((function(){var a;d=r("FID"),s=c(n,d,f),i=[],t=-1,e=null,w(addEventListener),a=p,i.push(a),E();}));},b={},F=function(e,t){var n,i=v(),f=r("LCP"),s=function(e){var t=e.startTime;t<i.firstHiddenTime&&(f.value=t,f.entries.push(e),n());},m=a("largest-contentful-paint",s);if(m){n=c(e,f,t);var d=function(){b[f.id]||(m.takeRecords().map(s),m.disconnect(),b[f.id]=!0,n(!0));};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0});})),o(d,!0),u((function(i){f=r("LCP"),n=c(e,f,t),requestAnimationFrame((function(){requestAnimationFrame((function(){f.value=performance.now()-i.timeStamp,b[f.id]=!0,n(!0);}));}));}));}},P=function(e){var t,n=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n);}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}));};

var webVitals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getCLS: h,
  getFCP: d,
  getFID: L,
  getLCP: F,
  getTTFB: P
});

export { Button };
