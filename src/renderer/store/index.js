import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        name: '',
        id: ''
    },
    mutations: {
        async musicInfo(state, {name, id}) {
            state.name = name;
            state.id = id;       
        }
    },
})

export default store;