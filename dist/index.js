"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const koa_1 = __importDefault(require("koa"));
const app_1 = require("./app");
const gtm_datalayer_library_1 = require("gtm-datalayer-library");
const app = new koa_1.default();
const router = new router_1.default();
router.get('/', async (ctx, next) => {
    ctx.body = 'nothing here';
    return next();
});
router.get('/:tenant/:language/cartintermediate', async (ctx, next) => {
    const datalayerData = await gtm_datalayer_library_1.requestDatalayerData(ctx.params.language, ctx.params.tenant, gtm_datalayer_library_1.PageType.CART_INTERMEDIATE, ctx.get('auth'));
    ctx.body = app_1.render(ctx.request, gtm_datalayer_library_1.PageType.CART_INTERMEDIATE, datalayerData);
    ctx.set('content-type', 'text/html');
    return next();
});
app.use(router.routes());
app.listen(3000, () => {
    console.log('app listens on Port 3000');
});
//# sourceMappingURL=index.js.map