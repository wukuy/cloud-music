import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@view/home/view.vue';
import Example from '@components/example/index.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/example',
        component: Example
    }]
});

export default router;