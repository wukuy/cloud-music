<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-icon'

export default {
  props: {
    name: String
  },
  computed: {
    classes () {
      return [
        `${prefix}`,
        {[`${prefix}-${this.name}`]: this.name}
      ]
    }
  }
}
</script>
