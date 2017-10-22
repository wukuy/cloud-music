<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
import Model from './view.model.js'
// import Utils from 'common/app.utils.js'

export default {
	name: 'music_detail', // 音乐歌词显示
	data () {
		return {
			detail: {},
			lyric: '',
			fullState: false,
			full: false
		}
	},
	methods: {
		init () {
		},
		getMusiceDetail: async function (ids) {
			let data = await Model.getMusiceDetail({ids})
			if (!data) return false
			this.detail = data.songs[0]
		},
		getMusicelyric: async function (id) {
			let data = await Model.getMusicelyric({id})
			if (!data) return false
			if (!data.lrc) return
			let tempArr = data.lrc.lyric.split('\n')
			this.lyric = []
			let timeReg = /\[\d*:\d*((\.|:)\d*)*\]/g
			tempArr.forEach((item) => {
				let time = item.match(timeReg)
				let lyr = item.replace(timeReg, '')
				this.lyric.push({time, lyr})
			})
			// this.lyric = data.lrc.lyric.split('\n')
		}
	},
	watch: {
		'$store.state.play': {
			handler: function (newV) {
				console.log(newV)
				// 当前播放ID和改变的ID相同， 不发送请求
				if (newV.id === this.playId) return false
				this.playId = newV.id
				this.getMusiceDetail(newV.id)
				this.getMusicelyric(newV.id)
			},
			deep: true
		}
	},
	mounted () {
		this.init()
	}
}
</script>
