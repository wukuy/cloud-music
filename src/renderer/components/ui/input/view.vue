<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-input'

export default {
  props: {
    vertical: Boolean,
    value: String,
    placeholder: String
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    handleChange () {
      let val = this.val = event.target.value
      this.$emit('change', val)
      this.$emit('input', val)
    },
    setVal () {
      this.val = this.value || this.val
    }
  },
  computed: {
    classes () {
      return [
        prefix,
        {[`${prefix}-vertical`]: this.vertical}
      ]
    }
  },
  created () {
    this.setVal()
  },
  watch: {
    value () {
      this.setVal()
    }
  }
}
</script>
