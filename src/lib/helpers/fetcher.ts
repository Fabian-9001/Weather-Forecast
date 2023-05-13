import axios from 'axios'

export const fetcher = (URL: string) => {
  return axios.get(URL).then(res => res.data)
}
