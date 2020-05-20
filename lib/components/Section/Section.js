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
exports.Section = void 0;
var react_1 = __importDefault(require("react"));
var styles = {
    section: {
        margin: '0 auto',
        maxWidth: '600px',
    },
    table: {
        width: '100%',
    },
};
function Section(_a) {
    var children = _a.children, style = _a.style;
    var itemClassName = 'col-' + react_1.default.Children.count(children);
    return (react_1.default.createElement("div", { style: __assign(__assign({}, styles.section), style) },
        react_1.default.createElement("table", { cellPadding: "0", cellSpacing: "0", role: "presentation", style: styles.table },
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", { style: {
                            direction: 'ltr',
                            fontSize: 0,
                            padding: '20px 0',
                            textAlign: 'center',
                        } }, react_1.default.Children.map(children, function (child) {
                        if (react_1.default.isValidElement(child)) {
                            return react_1.default.cloneElement(child, {
                                className: [itemClassName, child.props.className]
                                    .filter(Boolean)
                                    .join(' '),
                            });
                        }
                        return child;
                    })))))));
}
exports.Section = Section;
