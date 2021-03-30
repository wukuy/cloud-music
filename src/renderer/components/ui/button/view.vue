<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-button'

export default {
  props: {
    type: {
      type: String,
      default: '',
      validator (val) {
        return [
          '',
          'primary',
          'info',
          'text',
          'error',
          'success',
          'warning'
        ].includes(val)
      }
    },
    // large, small
    size: String,
    disabled: Boolean,
    long: Boolean,
    shape: String,
    ghost: Boolean
  },
  computed: {
    classes () {
      return [
        prefix,
        { [`${prefix}-${this.type}`]: this.type },
        { [`${prefix}-${this.size}`]: this.size },
        { [`${prefix}-disabled`]: this.disabled },
        { [`${prefix}-long`]: this.long },
        { [`${prefix}-${this.shape}`]: this.shape },
        { [`${prefix}-ghost`]: this.ghost }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
