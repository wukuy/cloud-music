<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
// import Model from './view.model.js'

export default {
	name: 'landing-page',
	data () {
		return {
			select: 0
		}
	},
	methods: {
		open (link) {
			this.$electron.shell.openExternal(link)
		},
		nativeChange (idx) {
			this.select = idx
			switch (idx) {
				case 0:
					this.$router.push({name: 'recommend'})
					break
				case 1:
					this.$router.push({name: 'single'})
					break
				case 2:
					this.$router.push({name: 'transceiver'})
					break
				case 3:
					this.$router.push({name: 'ranking'})
					break
				case 4:
					this.$router.push({name: 'singer'})
					break
				case 5:
					this.$router.push({name: 'new_song'})
					break
			}
		}
	}
}
</script>
