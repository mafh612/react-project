import React from 'react'

interface CardHeaderProps {
  children: React.ReactNode
}

export default ({ children }: CardHeaderProps): React.ReactElement => {
  return <div className="card-header">{children}</div>
}
