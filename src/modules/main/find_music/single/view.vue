<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
import Model from './view.model.js'

export default {
	name: 'landing-page',
	data () {
		return {
			data: {
				playlists: []
			}
		}
	},
	methods: {
		init () {
			this.getSongSheet()
		},

		// 获取歌单
		getSongSheet: async function () {
			let data = await Model.getSongSheet()
			if (!data) return false
			this.data = data
		},

		// 歌单点击
		songSheetClick: async function (item) {
			this.$router.push({name: 'songSheetDetail', query: {id: item.id}})
		},

		open (link) {
			this.$electron.shell.openExternal(link)
		}
	},
	created () {
		this.init()
	}
}
</script>
