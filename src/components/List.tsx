import React from 'react'

interface ListProps {
  children: React.ReactNode
}

export default ({ children }: ListProps): React.ReactElement => {
  return <ul className="list-group list-group-flush">{children}</ul>
}
