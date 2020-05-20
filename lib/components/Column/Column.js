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
exports.Column = void 0;
var react_1 = __importDefault(require("react"));
var styles = {
    column: {
        fontSize: '0px',
        textAlign: 'left',
        direction: 'ltr',
        display: 'inline-block',
        verticalAlign: 'top',
        width: '100%',
    },
    table: {
        verticalAlign: 'top',
        width: '100%',
    },
};
function Column(_a) {
    var children = _a.children, className = _a.className, style = _a.style;
    return (react_1.default.createElement("div", { className: className, style: __assign(__assign({}, styles.column), style) },
        react_1.default.createElement("table", { cellPadding: "0", cellSpacing: "0", role: "presentation", style: styles.table },
            react_1.default.createElement("tbody", null, children))));
}
exports.Column = Column;
