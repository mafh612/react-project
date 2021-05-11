import Router from '@koa/router'
import Koa, { Context, Next } from 'koa'
import { render } from './app'
import { DatalayerData, requestDatalayerData, PageType } from '@redteclab/gtm-datalayer-library'

const app = new Koa()
const router = new Router()

router.get(
  '/',
  async (ctx: Context, next: Next): Promise<void> => {
    ctx.body = 'nothing here'

    return next()
  }
)
router.get(
  '/:tenant/:language/cartintermediate',
  async (ctx: Context, next: Next): Promise<void> => {
    const datalayerData: DatalayerData = await requestDatalayerData(
      ctx.params.language,
      ctx.params.tenant,
      PageType.CART_INTERMEDIATE,
      ctx.get('auth')
    )

    ctx.body = render(ctx.request, PageType.CART_INTERMEDIATE, datalayerData)
    ctx.set('content-type', 'text/html')

    return next()
  }
)

app.use(router.routes())
app.listen(3000, () => {
  console.log('app listens on Port 3000')
})
