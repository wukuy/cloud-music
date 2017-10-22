<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
import Model from './view.model.js'
import Utils from 'common/app.utils.js'

export default {
	name: 'detail',
	data () {
		return {
			table: [
				{key: 'list', value: '歌曲列表'},
				{key: 'comment', value: '评论'},
				{key: 'collect', value: '收藏'}
			],
			// tab栏选中
			select: 'list',

			// 列表选中
			listSelect: '',
			currentPlayId: '',
			data: {
				playlist: {
					avatarUrl: '',
					creator: []
				}
			},
			// 精彩评论
			hotComments: [],
			// 评论
			comments: []
		}
	},
	methods: {
		init: async function () {
			let id = this.$route.query.id
			await this.getSongSheetDetail(id)
			await this.getComment(this.data.playlist.id)
		},

		// 歌单点击
		getSongSheetDetail: async function (id) {
			let data = await Model.getSongSheetDetail({id})
			if (!data) return false
			this.data = data
			console.log(this.data)
		},

		// 歌曲评论
		getComment: async function (id) {
			let data = await Model.getComment({id})
			if (!data) return false
			this.comments = data.comments
			this.hotComments = data.hotComments
			this.data.playlist.commentCount = data.total
		},

		// 列表双击
		listDblClick (item) {
			this.setPlayId(item)
			Utils.setPlay({state: 1}, this)
		},

		// 设置播放ID
		setPlayId (item) {
			Utils.setPlay({id: item.id}, this)
		}

	},
	computed: {
		getPlay () {
			return this.$store.state.play
		}
	},
	activated () {
		this.init()
	}
}
</script>
