import findMusic from 'models/model.find_music.js'

export default {
	// 获取banner
	getBanner: async function () {
		let result = await findMusic.getBanner.connect()
		if (!result || result.code !== 200) return false
		return result.banners
	},

	// 获取推荐歌单
	getRecommendSong: async function () {
		let result = await findMusic.getRecommendSong.connect()
		if (!result || result.code !== 200) return false
		return result.result
	},

	// 独家放送
	getBroadcast: async function () {
		let result = await findMusic.getBroadcast.connect()
		if (!result || result.code !== 200) return false
		return result.result
	},

	// 最新音乐
	getNewMusic: async function () {
		let result = await findMusic.getNewMusic.connect()
		if (!result || result.code !== 200) return false
		return result.result
	},

	// 推荐MV
	getRecommendMv: async function () {
		let result = await findMusic.getRecommendMv.connect()
		if (!result || result.code !== 200) return false
		return result.result
	},

	// 主播电台
	getRadioStation: async function () {
		let result = await findMusic.getRadioStation.connect()
		if (!result || result.code !== 200) return false
		return result.result
	}
}
