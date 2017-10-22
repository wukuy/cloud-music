import FindMusic from 'models/model.find_music.js'

export default {
	// 获取歌曲的URL地址
	getMusiceDetail: async function (options) {
		options = {
			params: options
		}
		let result = await FindMusic.getMusiceDetail.connect(options)
		if (!result || result.code !== 200) return false
		return result
	},

	getMusicelyric: async function (options) {
		options = {
			params: options
		}
		let result = await FindMusic.getMusicelyric.connect(options)
		if (!result || result.code !== 200) return false
		return result
	}
}
