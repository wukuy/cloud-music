<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
import {getStyle} from '../../utils/assist.js'

const prefix = 'c-carousel'

export default {
  name: 'carousel',
  props: {
    title: String,
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      prefix,
      itemWidth: 0,
      listWidth: 0,
      items: [],
      currentIdx: this.value
    }
  },
  computed: {
    classes () {
      return [
        `${prefix}`
      ]
    }
  },
  methods: {
    init () {
      this.itemWidth = parseFloat(getStyle(this.$refs.carousel, 'width'))
    },
    updateCarousel () {
      this.items = this.$slots.default || []

      this.listWidth = this.items.length * this.itemWidth
      this.$refs.carouselWrap.style.width = `${this.listWidth}px`

      this.items.forEach(vNode => {
        vNode.elm.style.width = `${this.itemWidth}px`
      })
    },
    changeSlot () {
      this.updateCarousel()
    },
    sliderChange (idx) {
      this.currentIdx = idx

      this.$refs.carouselWrap.style.transform = `translateX(-${idx * this.itemWidth}px)`
    }
  },
  mounted () {
    this.init()
  }
}
</script>
