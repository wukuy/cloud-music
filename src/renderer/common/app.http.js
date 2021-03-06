import Config from './app.config'
import Axios from 'axios'

class Http {
  constructor (config) {
    this.instance = Axios.create()
    this.setInterceptors()
    return this.instance.request(config)
  }

  // 设置拦截器
  setInterceptors () {
    // 添加请求拦截器
    this.instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      return config
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    this.instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response.data
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }
}

export default function (config) {
  config.url = `${Config.baseUrl}:${Config.port}${config.url}`
  config.params = config.data
  return new Http(config)
}
