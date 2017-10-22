import axios from 'axios'
import Config from 'common/app.config.js'

class Http {
	constructor (params) {
		this.params = params
		this.init()
	}

	init () {
		this.instance = axios.create({
			baseURL: Config.host,
			timeout: 30000
		})

		// 添加请求拦截器
		this.instance.interceptors.request.use(function (config) {
			// 在发送请求之前做些什么
			console.log('开始请求')
			return config
		}, function (error) {
			console.log('结束请求')
			// 对请求错误做些什么
			return Promise.reject(error)
		})

		// 添加响应拦截器
		this.instance.interceptors.response.use(function (response) {
			// 对响应数据做点什么
			console.log('结束请求')
			return response.data
		}, function (error) {
			console.log('网络错误')
			// 对响应错误做点什么
			return Promise.reject(error)
		})
	}

	connect (options) {
		return this.instance(Object.assign(this.params, options))
	}
}

export default Http
