import Web3 from 'web3'
import store from '../store'

const pollWeb3 = function(state) {
    const web3 = new Web3(Web3.givenProvider)

    setInterval(async () => {
        // current provider check
        const newCoinbase = await web3.eth.getCoinbase()
        // console.log('new coinbase is', newCoinbase)

        const currentCoinbase = store.state.web3.coinbase
        // state provider check
        // console.log('current state coinbase is ', currentCoinbase)

        if (newCoinbase !== currentCoinbase) {
            const newIsInjected = await web3.eth.net.isListening()
            const newCoinbase = await web3.eth.getCoinbase()

            store.dispatch('updateWeb3', {
                coinbase: newCoinbase,
                isInjected: newIsInjected
            })
        } else {
            console.log('접속된 주소가 변경되지 않았습니다')
        }
    }, 5000)
}

export default pollWeb3
