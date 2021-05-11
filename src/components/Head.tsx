import React from 'react'
import DataLayer, { DatalayerData, PageType } from '@redteclab/gtm-datalayer-library'
import { URL } from 'url'

interface HeadProps {
  URL: URL
  datalayerData: DatalayerData
  pageType: PageType
}

export default ({ URL, datalayerData, pageType }: HeadProps): React.ReactElement => {
  return (
    <head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossOrigin="anonymous"
      ></script>
      <DataLayer application="reactProject" url={URL} pageType={pageType} datalayerData={datalayerData} />
    </head>
  )
}
