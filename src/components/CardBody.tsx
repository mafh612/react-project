import React from 'react'

interface CardBodyProps {
  children: React.ReactNode
}

export default ({ children }: CardBodyProps): React.ReactElement => {
  return <div className="card-body">{children}</div>
}
