export const getPageData = () => state => {
  const data =state?.page1?.data?.slider
  return {
    title: data?.title,
    slider: data?.reviews
  }
}