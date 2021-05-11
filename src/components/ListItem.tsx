import React from 'react'

interface ListItemProps {
  children: React.ReactNode
}

export default ({ children }: ListItemProps): React.ReactElement => {
  return <li className="list-group-item">{children}</li>
}
