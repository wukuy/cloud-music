import Vue from 'vue';
import router from '@routes/index.js'
import '@common/app.init.js';
import Frame from '@view/frame/view.vue';

new Vue({
    el: '#app',
    render: h => h(Frame),
    router
});