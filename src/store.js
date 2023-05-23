import { createStore } from 'vuex'

const store = createStore({
    state: {
        data: null
    },
    mutations: {
        setData(state, data) {
            state.data = data;
        }
    },
    actions: {
        setData({ commit }, data) {
            commit('setData', data);
        }
    },
    getters: {
        getData: state => state.data
    }
})

export default store