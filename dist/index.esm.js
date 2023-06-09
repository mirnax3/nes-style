import { jsx, jsxs } from 'react/jsx-runtime';
import React from 'react';
import ReactDOM from 'react-dom/client';

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
    return (jsx("button", __assign({ onClick: onClick, className: "nes-btn is-primary p-4" }, { children: label })));
};

function App() {
    return (jsxs("html", { children: [jsxs("head", __assign({ title: "App" }, { children: [jsx("link", { href: "https://fonts.googleapis.com/css?family=Press+Start+2P", rel: "stylesheet" }), jsx("title", { children: "MirioUI" })] })), jsx("body", { children: jsx(Button, { onClick: function () { return null; }, label: "button" }) })] }));
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx(React.StrictMode, { children: jsx(App, {}) }));

export { Button };
//# sourceMappingURL=index.esm.js.map
