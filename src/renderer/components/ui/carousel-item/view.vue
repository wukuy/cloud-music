<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-carousel-item'

export default {
  name: 'carousel',
  props: {
    title: String
  },
  computed: {
    classes () {
      return [
        `${prefix}`
      ]
    }
  },
  mounted () {
    this.$parent.changeSlot()
  }
}
</script>
