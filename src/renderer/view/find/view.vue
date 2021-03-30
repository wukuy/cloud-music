<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
export default {
  data () {
    return {
      navList: [
        {
          text: '个性推荐',
          path: '/find/recommend'
        },
        {
          text: '歌单',
          path: '/find/song-sheet'
        },
        {
          text: '主播电台',
          path: '/find/radio'
        },
        {
          text: '排行榜',
          path: '/find/rank'
        },
        {
          text: '歌手',
          path: '/find/singer'
        },
        {
          text: '最新音乐',
          path: '/find/new-music'
        }
      ]
    }
  },
  methods: {
    init () {
      this.setTabSelected()
    },
    setTabSelected () {
      let currentPath = this.$route.path

      this.navList.forEach(item => {
        this.$set(item, '$active', item.path === currentPath)
      })
    },
    tabsChange (item) {
      this.$router.push(item.path)
      this.setTabSelected()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

