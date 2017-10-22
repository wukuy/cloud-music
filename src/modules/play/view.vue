<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
import Model from './view.model.js'
import Utils from 'common/app.utils.js'

import progressBar from 'components/ui/progress_bar/view.vue'

export default {
	name: 'landing-page',
	data () {
		return {
			select: 0,
			playState: false,
			playId: '',
			playUrl: false,
			playEle: ''
		}
	},
	methods: {
		init () {
			this.playEle = this.$refs.playCtrl
		},
		open (link) {
			this.$electron.shell.openExternal(link)
		},

		// 点击暂停、播放
		playStateChange () {
			this.$store.state.play.state ? this.playEle.pause() : this.playEle.play()
		},

		// 开始播放事件
		play () {
			Utils.setPlay({state: 1}, this)
		},

		// 暂停播放
		pause () {
			Utils.setPlay({state: 0}, this)
		}
	},
	components: {
		progressBar
	},
	watch: {
		'$store.state.play': {
			handler: async function (newV) {
				// 当前播放ID和改变的ID相同， 不发送请求
				if (newV.id === this.playId) {
					if (this.$store.state.play.state) this.playEle.play()
					return
				}

				this.playId = newV.id
				let data = await Model.getSongUrl({id: newV.id})
				if (!data) return false
				this.playUrl = data[0].url
			},
			deep: true
		}
	},
	mounted () {
		this.init()
	}
}
</script>
