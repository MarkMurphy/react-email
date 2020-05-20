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
exports.Text = void 0;
var react_1 = __importDefault(require("react"));
var Row_1 = require("../Column/Row");
var styles = {
    text: {
        fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif',
        fontSize: '13px',
        lineHeight: '1',
        color: '#000000',
        textAlign: 'center',
    },
};
function Text(_a) {
    var children = _a.children, _b = _a.align, align = _b === void 0 ? 'left' : _b;
    return (react_1.default.createElement(Row_1.Row, { align: align, style: {
            verticalAlign: 'middle',
        } },
        react_1.default.createElement("div", { style: __assign(__assign({}, styles.text), { textAlign: align }) }, children)));
}
exports.Text = Text;
