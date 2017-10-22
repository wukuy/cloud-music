<style lang="scss" scoped src="./view.scss">
</style>
<template lang="html" src="./view.html"></template>

<script>
// import Model from './view.model.js'
import musicDetail from '../music_detail/view.vue'

export default {
	name: 'landing-page',
	data () {
		return {
			select: 0
		}
	},
	methods: {
		init () {

		},
		open (link) {
			this.$electron.shell.openExternal(link)
		},
		menuChange (idx) {
			this.select = idx
			switch (idx) {
				case 0:
					this.$router.push({ name: 'find_music' })
					break
				case 1:
					this.$router.push({ name: 'fm' })
					break
				case 2:
					this.$router.push({ name: 'mv' })
					break
				case 3:
					this.$router.push({ name: 'friend' })
					break
				case 4:
					this.$router.push({ name: 'local_music' })
					break
				case 5:
					this.$router.push({ name: 'download_manage' })
					break
				case 6:
					this.$router.push({ name: 'love_music' })
					break
			}
		}
	},
	components: {
		musicDetail
	},
	created () {
	}
}
</script>
