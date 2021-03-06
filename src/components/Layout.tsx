import { URL } from 'url'
import React from 'react'
import Head from './Head'
import { PageType, DatalayerData } from '@redteclab/gtm-datalayer-library'
import Nav from './Nav'

interface LayoutProps {
  URL: URL
  children: React.ReactNode
  pageType: PageType
  datalayerData: DatalayerData
  datalayerDataUrl: string
}

export default ({ URL, children, datalayerData, datalayerDataUrl, pageType }: LayoutProps): React.ReactElement => {
  return (
    <html>
      <Head URL={URL} pageType={pageType} datalayerData={datalayerData} datalayerDataUrl={datalayerDataUrl} />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
