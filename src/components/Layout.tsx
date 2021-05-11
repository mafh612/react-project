import { URL } from 'url'
import React from 'react'
import Head from './Head'
import { PageType } from 'gtm-datalayer-library/dist/types/enums'
import { DatalayerData } from 'gtm-datalayer-library'

interface LayoutProps {
  URL: URL
  children: React.ReactNode
  datalayerData: DatalayerData
  pageType: PageType
}

export default ({ URL, children, datalayerData, pageType }: LayoutProps): React.ReactElement => {
  return (
    <html>
      <Head URL={URL} pageType={pageType} datalayerData={datalayerData} />
      <body>{children}</body>
    </html>
  )
}
