import axios from 'axios'
// config:配置
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  })
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return Promise.reject(err)
  })

  return instance(config)
}
