import Vuex from 'vuex';
import {getMusicUrl} from '@models/find.js';

const store = new Vuex.Store({
    state: {
        name: '',
        id: '',
        url: ''
    },
    mutations: {
        setMusicInfo(state, {name, id}) {
            state.name = name;
            state.id = id;
            // store.actions.dispatch('getMusicUrl', id);
            this.dispatch('getMusicUrl', id);
        },
        setMusicUrl(state, url) {
            state.url = url;
        }
    },
    actions: {
        async getMusicUrl({commit}, id) {
            let result = await getMusicUrl({id});
            let data = result.data;
            if(data.length) {
                let url = data[0].url;
                url && commit('setMusicUrl',url)
            }

        }
    }
})

export default store;