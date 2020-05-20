"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var Email_1 = __importDefault(require("./Email"));
var doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n';
var markup = server_1.default.renderToStaticMarkup(react_1.default.createElement(Email_1.default, { name: 'Mark Murphy' }));
console.log(doctype + markup);
