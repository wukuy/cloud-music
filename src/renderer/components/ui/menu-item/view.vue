<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
const prefix = 'c-menu-item'

export default {
  name: 'MenuItem',
  props: {
    name: String
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    handleClick () {
      this.$parent.itemActive(this)
      this.$emit('click', name)
    }
  },
  computed: {
    classes () {
      return [
        `${prefix}`,
        {[`${prefix}-active`]: this.active}
      ]
    }
  }
}
</script>
