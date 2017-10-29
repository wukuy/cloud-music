import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import 'common/app.init.js'
import Vuex from 'vuex'
import stores from './store.js'
import './assets/css/animate.css'

Vue.use(Vuex)

const store = new Vuex.Store(stores)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app')
