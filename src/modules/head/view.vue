<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
// import Model from './view.model.js'

export default {
	name: 'head',
	data () {
		return {
			win: this.$electron.remote.getCurrentWindow()
		}
	},
	methods: {
		// 最小化
		minimize () {
			this.win.minimize()
		},

		// 最大化
		maximization () {
			this.win.maximize()
		},

		// 关闭
		close () {
			this.win.close()
		}
	},
	created () {

	}
}
</script>
