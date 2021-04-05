import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from '@components/example/index.vue'
import FindRouter from './find.js'
import FMRouter from './fm.js'
import FriendRouter from './friend.js'
import MVRouter from './mv.js'
import PlaylistDetail from '@view/find/playlist-detail/view.vue'
import LyricBar from '@view/lyric-bar/view.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/find'
        },
        {
            path: '/example',
            component: Example
        },
        FindRouter,
        FMRouter,
        FriendRouter,
        MVRouter,
        {
            path: '/playlist_detail',
            component: PlaylistDetail
        },
        {
            path: '/lyric-bar',
            component: LyricBar,
            meta: {
                frame: false
            }
        }
    ]
})

export default router
