import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MaxWidth from '@/components/MaxWidth'
import Calculator from '@/components/Calculator'

import { fetchPage2Data } from '@/redux/modules/page2'
import { getPageDataSelector } from '@/redux/selectors/page2'

const Page2 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPage2Data())
  }, [dispatch])

  const pageData = useSelector(getPageDataSelector)
  const { title, description } = pageData || {}

  return (
    <MaxWidth>
      <div className="grid grid-cols-2 mt-36">
        <div className="pr-64">
          <h1 className="text-white text-4xl font-black tracking-wider inline-block">
              <span className="bg-blue-cobalt py-3 px-2 leading-loose">{title}</span>
          </h1>
          <p className="mt-8 text-base font-roboto-regular">{description}</p>
        </div>
        <Calculator />
      </div>
    </MaxWidth>
  )
}

export default Page2
