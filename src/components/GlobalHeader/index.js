import React, { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@/assets/bellotero.svg'
import Link from '@/components/Link'
import DesktopMenu from './DesktopMenu'

import { getHeaderItems } from '@/redux/modules/headerItems'

const GlobalHeader = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHeaderItems())
  }, [dispatch, getHeaderItems])

  const menuItems = useSelector(state => state?.headerItems?.data)

  return (
    <nav className="mt-2 w-full h-16 bg-white flex items-center px-4">
      <div className="w-full grid grid-cols-2">
          <Link href="/page-1" >
            <Logo width={133} height={26} />
          </Link>
          <DesktopMenu items={menuItems?.menu?.items} />
      </div>
    </nav>
  )
}

export default GlobalHeader
