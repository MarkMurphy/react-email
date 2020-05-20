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
exports.Spacer = void 0;
var react_1 = __importDefault(require("react"));
var Row_1 = require("../Column/Row");
var styles = {
    spacer: {
        height: '20px',
    },
};
function Spacer(_a) {
    var className = _a.className, style = _a.style;
    return (react_1.default.createElement(Row_1.Row, null,
        react_1.default.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: '&nbsp;' }, style: __assign(__assign({}, styles.spacer), style) })));
}
exports.Spacer = Spacer;
