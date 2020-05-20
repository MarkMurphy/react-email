"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
var react_1 = __importDefault(require("react"));
var Style_1 = require("../Style");
function Head(_a) {
    var children = _a.children;
    return (react_1.default.createElement("head", null,
        react_1.default.createElement("meta", { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" }),
        react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        react_1.default.createElement(Style_1.Style, null, "\n        body {\n          width: 100% !important; \n          min-width: 100%;\n          margin: 0;\n          padding: 0;\n          -webkit-text-size-adjust: 100%;\n          -ms-text-size-adjust: 100%;\n        }\n    \n        table,\n        td {\n          border-collapse: collapse;\n          mso-table-lspace: 0pt;\n          mso-table-rspace: 0pt;\n        }\n    \n        img {\n          border: 0;\n          height: auto;\n          line-height: 100%;\n          outline: none;\n          text-decoration: none;\n          -ms-interpolation-mode: bicubic;\n        }\n\n        @media only screen and (min-width: 480px) {\n          .col-1 { width: 100% !important; }\n          .col-2 { width: 50% !important; }\n          .col-3 { width: 33.333% !important; }\n          .col-4 { width: 25% !important; }\n          .col-5 { width: 20% !important; }\n          .col-6 { width: 16.666% !important; }\n        }\n        "),
        children));
}
exports.Head = Head;
