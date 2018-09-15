export default {
    namespaced: true, //带命名空间
    state: {
        admin: 'admin1'
    },
    getters: {
        admin(state) {
            return state.admin
        }
    },
    mutations: {
        changeAdmin(state, payload) {
            state.admin = payload
        }
    },
    actions: {
        CHANGE_ADMIN({commit}, payload) {
            commit('changeAdmin', payload)
        }
    }
}