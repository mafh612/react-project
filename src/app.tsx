import { DatalayerData, PageType } from '@redteclab/gtm-datalayer-library'
import { Request } from 'koa'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Card from './components/Card'
import CardBody from './components/CardBody'
import CardHeader from './components/CardHeader'
import Layout from './components/Layout'

export const render = (request: Request, pageType: PageType, datalayerData: DatalayerData, datalayerDataUrl: string) => {
  const script = `
    const datalayer = JSON.stringify(dataLayer, undefined, 2)
    document.getElementById("datalayerView").innerHTML = datalayer
  `
  return ReactDOMServer.renderToNodeStream(
    <Layout URL={request.URL} pageType={pageType} datalayerData={datalayerData} datalayerDataUrl={datalayerDataUrl}>
      <div className="container">
        <Card>
          <CardHeader>
            <h1>{request.URL?.protocol}</h1>
            <h1>{request.URL?.host}</h1>
            <h1>{encodeURIComponent(request.URL?.pathname)}</h1>
          </CardHeader>
          <CardBody>
            <code>
              <pre id="datalayerView"></pre>
            </code>
          </CardBody>
        </Card>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    </Layout>
  )
}
