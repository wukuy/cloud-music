<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-search'

export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索音乐，歌手，歌词，用户'
    }
  },
  computed: {
    classes () {
      return [
        prefix
      ]
    }
  }
}
</script>
