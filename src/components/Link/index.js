import React from 'react'

const Link = ({
  children,
  href = '',
  onClick = '',
  className = '',
}) => {
  if (onClick) return <button onClick={onClick} className={className}>{children}</button>
  if (href) return <a href={href} className={className}>{children}</a>
  else return null
}

export default Link
