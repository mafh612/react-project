import Router from '@koa/router'
import Koa, { Context, Next } from 'koa'
import { render } from './app'
import { DatalayerData, PageType } from '@redteclab/gtm-datalayer-library'
import gtmDataLayerMock from './__mock__'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx: Context, next: Next): Promise<void> => {
  ctx.body = render(ctx.request, undefined, undefined, undefined)
  ctx.set('content-type', 'text/html')

  return next()
})

router.get(/\webclient\/.*/, async (ctx: Context, next: Next): Promise<void> => {
  ctx.body = {
    event: 'gtm.data.loaded',
    payload: {
      product: {
        basicPrice: '47.40 € / 100 g',
        brand: 'Bepanthen',
        bz: 'Apothekenpflichtig',
        categoryPath: 'null/null/null/null/Bepanthen® Augen- und Nasensalbe',
        eanCode: 'NULL',
        entryType: 'product',
        famId: '3341579000',
        id: ctx.request.query.upid,
        isPersistentCartEntry: false,
        linkedCategory: 'Wundversorgung & Hilfsmittel',
        manufacturer: 'Bayer Vital GmbH',
        manufacturerCode: 'A006410',
        name: 'Bepanthen® Augen- und Nasensalbe',
        pharmaForm: 'Augen- und Nasensalbe',
        prescriptionType: ctx.request.query.prescriptionType,
        priceBrutto: '80.58',
        priceNetto: '69.47',
        quantity: ctx.request.query.quantity,
        substances: '50 mg Dexpanthenol',
        unit: 'product.attribute.unit.g',
        unitQuantityString: '10'
      }
    }
  }

  return next()
})

router.get('/:tenant/:language/cartintermediate', async (ctx: Context, next: Next): Promise<void> => {
  const datalayerData: DatalayerData = await gtmDataLayerMock()

  ctx.body = render(
    ctx.request,
    PageType.CART_INTERMEDIATE,
    datalayerData,
    `/webclient/de/gtmDatalayer/v1/com-qs/events/cartintermediate?upid=${ctx.request.query.product}&prescriptionType=${ctx.request.query.prescriptionType}&quantity=${ctx.request.query.quantity}`
  )
  ctx.set('content-type', 'text/html')

  return next()
})

app.use(router.routes())
app.listen(3000, () => {
  console.log('app listens on Port 3000')
})
