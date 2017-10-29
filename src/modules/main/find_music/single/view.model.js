import findMusic from 'models/model.find_music.js'

export default {
	// 获取歌单
	getSongSheet: async function (options) {
		options = {
			params: {limit: 20, order: 'hot'}
		}

		let result = await findMusic.getSongSheet.connect(options)
		if (!result || result.code !== 200) return false
		return result
	},

	// 获取歌单详情
	getSongSheetDetail: async function (options) {
		options = {
			params: options
		}

		let result = await findMusic.getSongSheetDetail.connect(options)
		if (!result || result.code !== 200) return false
		return result
	}
}
