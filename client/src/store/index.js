import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    // state : {}
    state() {
        return {
            web3: {},
            survey: []
        }
    },
    mutations: {},
    actions: {},
    modules: {},
    plugins: [
        persistedstate({
            paths: []
        })
    ]
})
