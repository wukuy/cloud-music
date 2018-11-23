import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '@view/home/view.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
        path: '/',
        component: home
    }]
});

export default router;