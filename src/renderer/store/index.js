import Vuex from 'vuex'
import { getMusicUrl } from '@models/find.js'

const store = new Vuex.Store({
	state: {
		name: '',
		id: '',
		url: '',
		playList: [],
		historyPlayList: []
	},
	mutations: {
		setMusicInfo(state, item) {
			const { name, id } = item

			state.name = name
			state.id = id
			this.dispatch('getMusicUrl', id)
			state.playList.forEach(singe => {
				singe.playing = singe.id === id
			})
			if(!state.historyPlayList.find(singe => singe.id === item.id)) {
				this.commit('addHistoryPlayList', item)
			}
		},
		setMusicUrl(state, url) {
			state.url = url
		},
		setPlayList(state, playList) {
			state.playList = playList
			localStorage.setItem('playList', JSON.stringify(playList))
		},
		setHistoryPlayList(state, historyPlayList) {
			state.historyPlayList = historyPlayList
			localStorage.setItem('historyPlayList', JSON.stringify(state.historyPlayList))
		},
		addHistoryPlayList(state, playItem) {
			state.historyPlayList.unshift(playItem)
			localStorage.setItem('historyPlayList', JSON.stringify(state.historyPlayList))
		}
	},
	actions: {
		async getMusicUrl({ commit }, id) {
			let result = await getMusicUrl({ id })
			let data = result.data
			if (data.length) {
				data = data[0]
				if(data) {
					commit('setMusicUrl', data.url)
				}
			}
		}
	}
})

function init () {
	const playList = JSON.parse(localStorage.getItem('playList') || '[]')
	const historyPlayList = JSON.parse(localStorage.getItem('historyPlayList') || '[]')
	
	store.commit('setPlayList', playList)
	store.commit('setHistoryPlayList', historyPlayList)
}

init()

export default store
