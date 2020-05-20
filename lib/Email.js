"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("./components");
function Email(props) {
    return (react_1.default.createElement(components_1.Template, null,
        react_1.default.createElement(components_1.Head, null,
            react_1.default.createElement("title", null, "Example Email"),
            react_1.default.createElement(components_1.Style, null, "\n          body {\n            background-color: #fafafa;\n          }\n        ")),
        react_1.default.createElement(components_1.Body, null,
            react_1.default.createElement(components_1.Section, null,
                react_1.default.createElement(components_1.Column, null,
                    react_1.default.createElement(components_1.Text, { align: "center" },
                        "Hello ",
                        props.name))),
            react_1.default.createElement(components_1.Section, null,
                react_1.default.createElement(components_1.Column, null,
                    react_1.default.createElement(components_1.Text, null, "Head"),
                    react_1.default.createElement(components_1.Spacer, null),
                    react_1.default.createElement(components_1.Button, { href: "/" }, "Button"),
                    react_1.default.createElement(components_1.Spacer, null),
                    react_1.default.createElement(components_1.Text, null, "Foot"))),
            react_1.default.createElement(components_1.Section, null,
                react_1.default.createElement(components_1.Column, null,
                    react_1.default.createElement(components_1.Button, { href: "/" }, "Left Side")),
                react_1.default.createElement(components_1.Column, null,
                    react_1.default.createElement(components_1.Button, { href: "/" }, "Center")),
                react_1.default.createElement(components_1.Column, null,
                    react_1.default.createElement(components_1.Button, { href: "/" }, "Right Size"))),
            react_1.default.createElement(components_1.Section, null,
                react_1.default.createElement(components_1.Column, null,
                    react_1.default.createElement(components_1.Text, { align: "center" }, "Footer"))))));
}
exports.default = Email;
