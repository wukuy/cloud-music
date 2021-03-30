<template src="./view.html"></template>
<style src="./view.styl" lang="stylus" scoped></style>

<script>
import { getDJCatelist, getDJRecommend, getRadioHot } from '@models/find.js'

export default {
  data () {
    return {
      catelist: [],
      currentCateId: '',
      DJRecommendList: [],
      radioHotList: []
    }
  },
  methods: {
    async init () {
      await this.getDJCatelist()
      const oneCate = this.catelist[0]
      if (oneCate) {
        this.cateChange(oneCate)
      }
    },
    async getDJCatelist () {
      const data = await getDJCatelist()
      this.catelist = data.categories
    },
    cateChange (item) {
      this.currentCateId = item.id
      this.getDJRecommend()
      this.getRadioHot()
    },
    async getDJRecommend () {
      let data = await getDJRecommend({ type: this.currentCateId })
      this.DJRecommendList = data.djRadios
    },
    async getRadioHot () {
      let data = await getRadioHot({ cateId: this.currentCateId })
      this.radioHotList = data.djRadios
    }
  },
  mounted () {
    this.init()
  }
}
</script>

