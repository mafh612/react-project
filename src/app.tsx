import { DatalayerData } from 'gtm-datalayer-library'
import { PageType } from 'gtm-datalayer-library/dist/types/enums'
import { Request } from 'koa'
import React, { FunctionComponent } from 'react'
import ReactDOMServer from 'react-dom/server'
import Card from './components/Card'
import CardBody from './components/CardBody'
import ClassAsComponent from './components/ClassComponent'
import FunctionAsComponent from './components/FunctionComponent'
import Layout from './components/Layout'
import List from './components/List'
import ListItem from './components/ListItem'

const AnotherComponent: FunctionComponent = (): React.ReactElement => {
  return <div>Another Component</div>
}

export const render = (request: Request, pageType: PageType, datalayerData: DatalayerData) => {
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
  ]

  return ReactDOMServer.renderToNodeStream(
    <Layout URL={request.URL} pageType={pageType} datalayerData={datalayerData}>
      <h1>{request.URL.host}</h1>
      <h1>{request.URL.pathname}</h1>
      <h1>{request.URL.protocol}</h1>
      <div>
        <Card>
          <CardBody>
            <List>
              {books.map((book, i) => (
                <ListItem key={i}>
                  {' '}
                  {book.author} {book.title}
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>
        Hello World!
        <ClassAsComponent />
        <FunctionAsComponent />
        <AnotherComponent />
        <script>console.log(JSON.stringify(dataLayer, undefined, 2))</script>
      </div>
    </Layout>
  )
}
