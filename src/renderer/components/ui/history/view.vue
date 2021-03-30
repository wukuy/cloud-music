<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-history'

export default {
  props: {
  },
  methods: {
    back () {
      window.history.back(-1)
    },
    forward () {
      window.history.forward(1)
    }
  },
  computed: {
    classes () {
      return [
        `${prefix}`
      ]
    }
  }
}
</script>
