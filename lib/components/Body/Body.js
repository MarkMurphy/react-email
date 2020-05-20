"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
var react_1 = __importDefault(require("react"));
var styles = {
    body: {
        width: '100%',
        height: '100%',
    },
    container: {
        margin: '0 auto',
        width: '600px',
    },
};
function Body(_a) {
    var children = _a.children, style = _a.style;
    return (react_1.default.createElement("body", { style: __assign(__assign({}, styles.body), style) },
        react_1.default.createElement("div", null, children)));
}
exports.Body = Body;
