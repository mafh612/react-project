"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Head_1 = __importDefault(require("./Head"));
exports.default = ({ URL, children, datalayerData, pageType }) => {
    return (react_1.default.createElement("html", null,
        react_1.default.createElement(Head_1.default, { URL: URL, pageType: pageType, datalayerData: datalayerData }),
        react_1.default.createElement("body", null, children)));
};
//# sourceMappingURL=Layout.js.map