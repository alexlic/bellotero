import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPage1Data } from '@/redux/modules/page1'
import { getPageData } from '@/redux/selectors/page1'

const Page1 = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPage1Data())
  }, [dispatch, fetchPage1Data])

  const { title, slider } = useSelector(getPageData()) || {}
  return <h1>{title}</h1>
}

export default Page1
