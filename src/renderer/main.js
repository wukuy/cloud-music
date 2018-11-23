import Vue from 'vue';
import router from '@routes/index.js'
import '@common/app.init.js';

new Vue({
    template: `
        <router-view></router-view>
    `,
    router
}).$mount('#app');