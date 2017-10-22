import Vue from 'vue'
import Router from 'vue-router'
import findMusic from './find_music'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'cloud-music',
			component: require('@/modules/view.vue').default,
			redirect: { name: 'find_music' },
			children: [
				{
					path: 'download_manage',
					name: 'download_manage',
					component: require('@/modules/main/download_manage/view.vue').default
				},
				{
					path: 'find_music',
					name: 'find_music',
					component: require('@/modules/main/find_music/view.vue').default,
					children: findMusic,
					redirect: { name: 'recommend' }
				},
				{
					path: 'fm',
					name: 'fm',
					component: require('@/modules/main/fm/view.vue').default
				},
				{
					path: 'friend',
					name: 'friend',
					component: require('@/modules/main/friend/view.vue').default
				},
				{
					path: 'local_music',
					name: 'local_music',
					component: require('@/modules/main/local_music/view.vue').default
				},
				{
					path: 'love_music',
					name: 'love_music',
					component: require('@/modules/main/love_music/view.vue').default
				},
				{
					path: 'mv',
					name: 'mv',
					component: require('@/modules/main/mv/view.vue').default
				}
			]
		}
	]
})
