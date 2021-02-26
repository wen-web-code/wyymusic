import axios from 'axios'

export function request (config) {
  const instance = new axios.create({
    baseURL: '/api',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  })
  instance.interceptors.response.use(res => {
    return res.data
  })

  return instance(config)
}