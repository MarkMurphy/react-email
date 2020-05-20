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
exports.Row = void 0;
var react_1 = __importDefault(require("react"));
var styles = {
    cell: {
        fontSize: '0px',
        padding: '10px 25px',
        wordBreak: 'break-word',
    },
};
function Row(_a) {
    var _b = _a.align, align = _b === void 0 ? 'center' : _b, children = _a.children, style = _a.style;
    return (react_1.default.createElement("tr", null,
        react_1.default.createElement("td", { align: align, style: __assign(__assign({}, styles.cell), style) }, children)));
}
exports.Row = Row;
