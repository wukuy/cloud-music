<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
// import Model from './view.model.js'

export default {
	name: 'landing-page',
	data () {
		return {
			select: 0,
			playState: false
		}
	},
	methods: {
		init () {

		},
		open (link) {
			this.$electron.shell.openExternal(link)
		},
		playStateChange () {
			this.playState = !this.playState
		}
	},
	created () {
	}
}
</script>
