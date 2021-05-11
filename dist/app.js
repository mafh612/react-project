"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const Card_1 = __importDefault(require("./components/Card"));
const CardBody_1 = __importDefault(require("./components/CardBody"));
const ClassComponent_1 = __importDefault(require("./components/ClassComponent"));
const FunctionComponent_1 = __importDefault(require("./components/FunctionComponent"));
const Layout_1 = __importDefault(require("./components/Layout"));
const List_1 = __importDefault(require("./components/List"));
const ListItem_1 = __importDefault(require("./components/ListItem"));
const AnotherComponent = () => {
    return react_1.default.createElement("div", null, "Another Component");
};
const render = (request, pageType, datalayerData) => {
    const books = [
        {
            author: 'J.K. Rowling',
            title: 'Harry Potter and the Philosopher Stone'
        },
        {
            author: 'J.K. Rowling',
            title: 'Harry Potter and the Chamber of Secrets'
        },
        {
            author: 'J.K. Rowling',
            title: 'Harry Potter and the Prisoner of Ascaban'
        }
    ];
    return server_1.default.renderToNodeStream(react_1.default.createElement(Layout_1.default, { URL: request.URL, pageType: pageType, datalayerData: datalayerData },
        react_1.default.createElement("h1", null, request.URL.host),
        react_1.default.createElement("h1", null, request.URL.pathname),
        react_1.default.createElement("h1", null, request.URL.protocol),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Card_1.default, null,
                react_1.default.createElement(CardBody_1.default, null,
                    react_1.default.createElement(List_1.default, null, books.map((book, i) => (react_1.default.createElement(ListItem_1.default, { key: i },
                        ' ',
                        book.author,
                        " ",
                        book.title)))))),
            "Hello World!",
            react_1.default.createElement(ClassComponent_1.default, null),
            react_1.default.createElement(FunctionComponent_1.default, null),
            react_1.default.createElement(AnotherComponent, null),
            react_1.default.createElement("script", null, "console.log(JSON.stringify(dataLayer, undefined, 2))"))));
};
exports.render = render;
//# sourceMappingURL=app.js.map