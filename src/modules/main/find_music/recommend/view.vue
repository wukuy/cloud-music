<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
// import Model from './view.model.js'

export default {
	name: 'landing-page',
	methods: {
		open (link) {
			this.$electron.shell.openExternal(link)
		}
	}
}
</script>
