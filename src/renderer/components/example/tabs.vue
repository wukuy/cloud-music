<template>
    <div>
        <Tabs :data="tabsData" type="line"></Tabs>
        <Tabs :data="tabsCardData" type="card" class="p-tabs-card"></Tabs>
    </div>
</template>
<script>
import {Tabs} from '../index'

export default {
  components: {
    Tabs
  },
  data () {
    return {
      tabsData: [{
        text: '个性推荐',
        id: 1,
        $active: true
      }, {
        text: '歌曲',
        id: 2
      }, {
        text: '主播电台',
        id: 3
      }, {
        text: '排行榜',
        id: 4
      }, {
        text: '歌手',
        id: 5
      }, {
        text: '最新音乐',
        id: 6
      }],
      tabsCardData: [
        {
          text: '播放列表',
          id: 1
        }, {
          text: '历史记录',
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
    .p-tabs-card{
        margin-top: 20px;
    }
</style>
