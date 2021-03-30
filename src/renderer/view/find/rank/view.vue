<template src="./view.html"></template>
<style src="./view.scss" lang="scss" scoped></style>

<script>
import { getTopList } from '@models/find.js'

export default {
  data () {
    return {
      topList: []
    }
  },
  methods: {
    init () {
      this.getTopList()
    },
    async getTopList () {
      const data = await getTopList()
      this.topList = data.list.slice(0, 5)

      for (let idx in this.topList) {
        let item = this.topList[idx]
        console.log(item)
        await this.playlistDetail(item.id)
      }
    },
    async playlistDetail (id) {
      // const data = await playlistDetail({ id })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

