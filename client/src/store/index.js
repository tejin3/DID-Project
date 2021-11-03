import Vue from 'vue'
import Vuex from 'vuex'
import persistedstate from 'vuex-persistedstate'

import getWeb3 from '@/service/getWeb3'
// import pollWeb3 from '@/service/pollWeb3'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    // state : {}
    state() {
        return {
            web3: null,
            survey: []
        }
    },
    mutations: {
        registerWeb3Instance(state, data) {
            // 요청된 web3 instance를 store에 저장
            state.web3 = data
            // pollWeb3()
        },
        updateWeb3Instance(state, data) {
            console.log('updateWeb3Instance', data)
            state.web3.coinbase = data.coinbase
            state.web3.balance = data.balance
        }
        // registerContractInstance(state, data) {
        //     console.log('register contract instance', data)
        //     state.contractInstance = () => 'data'
        // }
    },
    actions: {
        async registerWeb3({ commit }) {
            // web3 instance 요청
            var web3 = await getWeb3()
            // console.log(web3)
            commit('registerWeb3Instance', web3)
        },
        updateWeb3({ commit }, data) {
            commit('updateWeb3Instance', data)
        }
    },
    modules: {},
    plugins: [
        persistedstate({
            paths: []
        })
    ]
})
