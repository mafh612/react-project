"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gtm_datalayer_library_1 = __importDefault(require("gtm-datalayer-library"));
exports.default = ({ URL, datalayerData, pageType }) => {
    return (react_1.default.createElement("head", null,
        react_1.default.createElement("link", { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css", rel: "stylesheet", integrity: "sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0", crossOrigin: "anonymous" }),
        react_1.default.createElement("script", { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", integrity: "sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8", crossOrigin: "anonymous" }),
        react_1.default.createElement(gtm_datalayer_library_1.default, { application: "reactProject", url: URL, pageType: pageType, datalayerData: datalayerData })));
};
//# sourceMappingURL=Head.js.map