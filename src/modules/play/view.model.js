import Public from 'models/model.public.js'

export default {
	// 获取歌曲的URL地址
	getSongUrl: async function (options) {
		options = {
			params: options
		}
		let result = await Public.getSongUrl.connect(options)
		if (!result || result.code !== 200) return false
		return result.data
	}
}
