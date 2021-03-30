<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-image'

export default {
  props: {
    src: String
  },
  data () {
    return {
    }
  },
  methods: {
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
