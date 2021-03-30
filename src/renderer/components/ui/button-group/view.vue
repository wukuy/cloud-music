<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-button-group'

export default {
  props: {
    vertical: Boolean
  },
  computed: {
    classes () {
      return [
        prefix,
        {[`${prefix}-vertical`]: this.vertical}
      ]
    }
  }
}
</script>
