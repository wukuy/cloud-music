import Vue from 'vue';
import VueRouter from 'vue-router';
import Example from '@components/example/index.vue';
import FindRouter from './find.js';
import FMRouter from './fm.js';
import FriendRouter from './friend.js';
import MVRouter from './mv.js';

console.log(FindRouter);

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/example',
            component: Example
        },
        FindRouter,
        FMRouter,
        FriendRouter,
        MVRouter
    ]
});

export default router;