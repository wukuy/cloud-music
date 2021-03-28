import Vue from 'vue';
import router from '@routes/index.js'
import '@common/app.init.js';
import Frame from '@view/frame/view.vue';
import store from '@store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(Frame),
    store,
    router
});