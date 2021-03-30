<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-menu'

export default {
  name: 'Menu',
  props: {
    title: String
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
