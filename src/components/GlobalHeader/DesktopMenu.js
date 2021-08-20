import React from 'react'
import Link from '@/components/Link'

const DesktopMenu = ({ items }) => {
  if (!items || !items.length ) return null
  return (
    <ul className="grid grid-flow-col">
      {items.map(item => (
        <li key={item.text}>
          <Link
            className="font-medium text-blue-cobalt"
            href={`/${item?.route}`}>
            {item?.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DesktopMenu
