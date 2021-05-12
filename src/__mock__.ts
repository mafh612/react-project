import { DatalayerData , carts_v2} from '@redteclab/gtm-datalayer-library'

const cart: unknown = {
  _id: 1234567,
  totalAmount: 4.1,
  subAmount: 5.1,
  discountAmountTotal: 1,
  prescriptionFollows: false,
  currency: 'EUR',
  customerId: '123456',
  tenant: 'com-dev',
  created: '2020-07-14T22:15:03.621Z',
  lastUpdated: '2020-07-14T22:15:03.621Z',
  messages: [
    {
      itemCode: 'voucherNeu2021',
      messages: ['CouponLimitReached'],
      scope: 'voucher',
      type: 'warn'
    }
  ],
  sellerGroups: [
    {
      sellerId: '2000',
      subTotal: 5.1,
      discountAmountTotal: 1,
      discounts: [
        {
          type: 'voucher',
          name: 'Gutschein 10%',
          code: 'Voucher10',
          affectedProductIds: ['00571748'],
          value: 1
        }
      ],
      groupEntries: [
        {
          type: 'noPrescription',
          items: [
            {
              offerId: 'COM00571748',
              productId: '00571748',
              itemPosition: 1,
              cartInsertOrder: 1614690827923,
              quantity: 2,
              itemTotal: 5.1,
              price: 2.55,
              channel: '',
              entryType: 'article',
              prescriptionType: 'noPrescription',
              promotion: null
            }
          ]
        }
      ],
      groupEntriesERx: [
        {
          type: 'insurancePrescription',
          items: [
            {
              cartInsertOrder: 1614690827923,
              hashedToken: 'dbae4c21fca062f1e32af23420fe9a786a5a7e01',
              itemPosition: 1,
              itemTotal: 2.55,
              price: 2.55,
              quantity: 1
            }
          ]
        }
      ]
    }
  ]
}

export default (): Promise<DatalayerData> =>
  Promise.resolve({
    cart: cart as carts_v2.CartResponseERx,
    countryCode: 'DE',
    environment: 'reference',
    language: 'de',
    tenant: 'com-qs',
    unavailableServices: ['cart-service'],
    product: undefined,
    customer: undefined
  })
