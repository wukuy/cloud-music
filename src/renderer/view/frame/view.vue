<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
import PlayCtrl from '@widgets/play-ctrl/view.vue'

export default {
  data () {
    return {
      navList: [
        {
          classesName: '推荐',
          menus: [
            {
              name: '发现音乐',
              icon: 'music',
              path: '/find'
            },
            {
              name: '私人FM',
              icon: 'feed',
              path: '/fm'
            },
            {
              name: 'MV',
              icon: 'toggle-right',
              path: '/mv'
            },
            {
              name: '朋友',
              icon: 'user-o',
              path: '/friend'
            }
          ]
        },
        {
          classesName: '我的音乐',
          menus: [
            {
              name: '本地音乐',
              icon: 'feed',
              path: '/fm'
            },
            {
              name: '下载管理',
              icon: 'feed',
              path: '/fm'
            }
          ]
        },
        {
          classesName: '创建的歌单',
          menus: [
            {
              name: '我喜欢的音乐',
              icon: 'feed',
              path: '/fm'
            }
          ]
        }
      ],
      play: false
    }
  },
  methods: {
  },
  computed: {
    musicInfo () {
      return this.$store.state
    },
    musicUrl () {
      let playDom = this.$refs.playDom
      if (playDom) {
        playDom.load()
      }
      return this.$store.state.url
    }
  },
  components: {
    PlayCtrl
  }
}
</script>

