import axios from 'axios'

export const fetchData = async (url, params = {}) => {
  return axios.get(url, { params: { ...params } })
}
