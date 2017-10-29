<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
import slide from 'components/ui/slide/view.vue'

import Model from './view.model.js'

export default {
	name: 'recommend',
	data () {
		return {
			// 轮播图
			banner: [],
			// 推荐歌单
			recommendSong: [],
			// 独家放送
			broadcast: [],
			// 最新音乐
			newMusic: [],
			// 推荐MV
			mv: [],
			// 主播电台
			radioStation: []
		}
	},
	methods: {
		init () {
			this.getBanner()
			this.getRecommendSong()
			this.getBroadcast()
			this.getNewMusic()
			this.getRecommendMv()
			this.getRadioStation()
		},

		// 获取banner
		getBanner: async function () {
			let data = await Model.getBanner()
			this.banner = data
		},

		// 获取歌单
		getRecommendSong: async function () {
			let data = await Model.getRecommendSong()
			data.forEach(item => {
				item.isShow = false
			})
			this.recommendSong = data
		},

		// 打开歌单详情
		detail: async function (id) {
			this.$router.push({name: 'songSheetDetail', query: {id}})
		},

		// 独家放送
		getBroadcast: async function () {
			let data = await Model.getBroadcast()
			this.broadcast = data
		},

		// 最新音乐
		getNewMusic: async function () {
			let data = await Model.getNewMusic()
			this.newMusic = data
		},

		// 推荐MV
		getRecommendMv: async function () {
			let data = await Model.getRecommendMv()
			this.mv = data
		},

		// 主播电台
		getRadioStation: async function () {
			let data = await Model.getRadioStation()
			this.radioStation = data
		}
	},
	activated () {
		this.init()
	},
	components: {
		'u-slide': slide
	}
}
</script>
