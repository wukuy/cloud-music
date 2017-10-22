<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'cloud-music',
	created () {
		// this.$electron.remote.setMenuBarVisibility(false)
	}
}
</script>

<style>
/* CSS */
</style>
