<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
import Playlist from '@widgets/play-list/view.vue'

export default {
  data () {
    return {
      play: false,
      playDom: ''
    }
  },
  methods: {
    upPlay () {

    },
    downPlay () {

    },
    pauseAndPlay () {
      this.play = !this.play
      this.play ? this.playDom.pause() : this.playDom.play()
    },
    openPlayList () {
      this.$refs.playList.show()
    }
  },
  mounted () {
    this.playDom = this.$refs.playDom
  },
  computed: {
    musicInfo () {
      return this.$store.state
    },
    musicUrl () {
      if (this.playDom) this.playDom.load()
      return this.$store.state.url
    }
  },
  components: {
    Playlist
  }
}
</script>

