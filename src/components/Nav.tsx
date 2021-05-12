import React from 'react'

export default (): React.ReactElement => {
  const pageTypes = [
    {
      name: 'home',
      link: '/'
    },
    {
      name: 'cart-intermediate-page',
      link: '/com-qs/de/cartintermediate/?cartAction=display&eventName=addToCart_PDP&eventType=conversion&offer=COM01578675&prescriptionType=noPrescription&product=01578675&quantity=1&userToken=anonymous-e940b27b-9161-4d04-b76c-cd297ea0c828'
    }
  ]

  return (
    <ul className="nav justify-content-center">
      {pageTypes.map((pageType, i) => (
        <li key={i} className="nav-item">
          <a className="nav-link" aria-current="page" href={pageType.link}>
            {pageType.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
