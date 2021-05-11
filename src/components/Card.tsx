import React from 'react'

interface CardProps {
  children: React.ReactNode
}

export default ({ children }: CardProps): React.ReactElement => {
  return <div className="card">{children}</div>
}
