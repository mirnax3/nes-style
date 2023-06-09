'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ReactDOM = require('react-dom/client');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (jsxRuntime.jsx("button", __assign({ onClick: onClick, className: "nes-btn is-primary p-4" }, { children: label })));
};

function App() {
    return (jsxRuntime.jsxs("html", { children: [jsxRuntime.jsxs("head", __assign({ title: "App" }, { children: [jsxRuntime.jsx("link", { href: "https://fonts.googleapis.com/css?family=Press+Start+2P", rel: "stylesheet" }), jsxRuntime.jsx("title", { children: "MirioUI" })] })), jsxRuntime.jsx("body", { children: jsxRuntime.jsx(Button, { onClick: function () { return null; }, label: "button" }) })] }));
}

var root = ReactDOM__default["default"].createRoot(document.getElementById('root'));
root.render(jsxRuntime.jsx(React__default["default"].StrictMode, { children: jsxRuntime.jsx(App, {}) }));

exports.Button = Button;
//# sourceMappingURL=index.js.map
