import Find from '@view/find/view.vue'
import Recommend from '@view/find/recommend/view.vue'
import SongSheet from '@view/find/song-sheet/view.vue'
import Radio from '@view/find/radio/view.vue'
import Singer from '@view/find/singer/view.vue'
import Rank from '@view/find/rank/view.vue'
import NewMusic from '@view/find/new-music/view.vue'

export default {
  component: Find,
  path: '/find',
  redirect: '/find/recommend',
  children: [
    {
      component: Recommend,
      path: 'recommend'
    },
    {
      component: SongSheet,
      path: 'song-sheet'
    },
    {
      component: Radio,
      path: 'radio'
    },
    {
      component: Singer,
      path: 'singer'
    },
    {
      component: Rank,
      path: 'rank'
    },
    {
      component: NewMusic,
      path: 'new-music'
    }
  ]
}
