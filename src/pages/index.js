import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home () {
  const router = useRouter()
  useEffect(() => {
    // redirect to testimonial page
    // TODO: add error page handler
    router.push('/page-1')
  })
  return null
}
