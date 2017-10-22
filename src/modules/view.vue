<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
// import Model from './view.model.js'
import menu from './menu/view.vue'
import head from './head/view.vue'
import play from './play/view.vue'

export default {
	name: 'landing-page',
	methods: {
		open (link) {
			this.$electron.shell.openExternal(link)
		}
	},
	components: {
		'c-menu': menu,
		'c-head': head,
		'c-play': play
	}
}
</script>
