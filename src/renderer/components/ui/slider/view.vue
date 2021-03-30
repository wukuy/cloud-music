<template src="./view.html"></template>
<style src="./view.scss" lang="scss"></style>

<script>
const prefix = 'c-slider'

export default {
  props: {
    vertical: Boolean,
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    hoverTip: Boolean,
    tipText: String
  },
  data () {
    return {
      prefix,
      customTip: false,
      showTip: true
    }
  },
  methods: {
    init () {
      this.customTip = this.$slots.tip
    },
    getDom () {
      let barDom = this.$refs.bar
      let tipDom = this.$refs.tip
      let occupyBarDom = this.$refs.occupyBar
      let ctrlDom = occupyBarDom.querySelector(`.${this.prefix}-bar-ctrl`)
      return {barDom, tipDom, occupyBarDom, ctrlDom}
    },
    ctrlMousemove (event) {
      let {barDom, occupyBarDom, ctrlDom} = this.getDom()

      let occupyBarWidth = event.x - barDom.offsetLeft
      let barWidth = this.$refs.bar.offsetWidth
      let offset = ctrlDom.offsetWidth / 2
      let occupyBarWidthRate = occupyBarWidth / barWidth

      if (occupyBarWidthRate < 1 && occupyBarWidthRate > 0) {
        occupyBarDom.style.width = `calc(${occupyBarWidthRate * 100}% + ${offset}px)`
      }
    },
    ctrlMousedown () {
      document.addEventListener('mousemove', this.ctrlMousemove)
      document.addEventListener('mouseup', this.ctrlMouseup)
    },
    ctrlMouseup () {
      document.removeEventListener('mousemove', this.ctrlMousemove, false)
      document.removeEventListener('mouseup', this.ctrlMouseup, false)
    },
    handleClick () {
      this.ctrlMousemove(event)
    },
    handleMouseenter () {
      let {barDom, tipDom, ctrlDom} = this.getDom()
      let offset = ctrlDom.offsetWidth / 2
      let position = event.x - barDom.offsetLeft

      if (tipDom) {
        tipDom.style.left = (position - offset) + 'px'
      }

      this.showTip = true
    },
    handleMouseleave () {
      this.showTip = false
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    classes () {
      return [
        `${prefix}`,
        {[`${prefix}-vertical`]: this.vertical}
      ]
    }
  }
}
</script>
