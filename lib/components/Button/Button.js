"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Row_1 = require("../Column/Row");
var styles = {
    button: {
        display: 'inline-block',
        background: '#414141',
        color: '#ffffff',
        fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif',
        fontSize: '17px',
        fontWeight: 'normal',
        lineHeight: '120%',
        margin: '0',
        textDecoration: 'none',
        textTransform: 'none',
        padding: '10px 25px',
        borderRadius: '8px',
        height: '50px',
    },
};
function Button(_a) {
    var children = _a.children, href = _a.href, _b = _a.target, target = _b === void 0 ? '_blank' : _b;
    return (react_1.default.createElement(Row_1.Row, { align: "center" },
        react_1.default.createElement("table", { cellPadding: "0", cellSpacing: "0", role: "presentation", style: {
                borderCollapse: 'separate',
                lineHeight: '100%',
            } },
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", { align: "center", role: "presentation", valign: "middle", style: {
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'auto',
                            background: '#414141',
                        } },
                        react_1.default.createElement("a", { href: href, target: target, style: styles.button }, children)))))));
}
exports.Button = Button;
