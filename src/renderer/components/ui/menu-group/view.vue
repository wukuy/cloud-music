<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-menu-group'

export default {
  name: 'MenuGroup',
  props: {
    title: String
  },
  data () {
    return {
      prefix
    }
  },
  methods: {
    itemActive (item) {
      let menu = this.$parent
      let menuItem = []

      if (menu.$options.name === 'Menu') {
        menu.$children.forEach(el => {
          menuItem.push(...el.$children)
        })
      } else {
        // let menuItem = this.$children || []
      }

      menuItem.forEach(el => {
        if (el !== item) el.active = false
      })
      item.active = true
    }
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
