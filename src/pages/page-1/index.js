import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MaxWidth from '@/components/MaxWidth'
import Slider from '@/components/Slider'

import { fetchPage1Data } from '@/redux/modules/page1'
import { getPageData } from '@/redux/selectors/page1'
const Page1 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPage1Data())
  }, [dispatch])

  const { title, slider } = useSelector(getPageData()) || {}
  return (
    <MaxWidth >
      <div className="mt-32">
        <h1 className="bg-blue-cobalt text-white text-4xl font-black tracking-wider py-3 px-1 inline-block">
          {title}
        </h1>
        <div className="mt-24">
          <Slider slides={slider}/>
        </div>
      </div>
    </MaxWidth>
  )
}

export default Page1
