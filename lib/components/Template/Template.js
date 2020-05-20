"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var react_1 = __importDefault(require("react"));
function Template(_a) {
    var children = _a.children;
    return react_1.default.createElement("html", { lang: "en" }, children);
}
exports.Template = Template;
