import Web3 from 'web3'
import store from '../store'

const pollWeb3 = function(state) {
    const web3 = new Web3(Web3.givenProvider)

    setInterval(async () => {
        // current provider check
        console.log('current', await web3.eth.getCoinbase())
        // state provider check
        console.log('state', store.state.web3.coinbase)

        // Web3가 있는 지 없는 체크 ?
        // if (!Web3 || !store.state.web3) {
        //     console.log('here', Web3)
        //     return
        // }
        // const newCoinbase = await web3.eth.getCoinbase()
        var newIsInjected = await web3.eth.getCoinbase()
        // console.log(newIsInjected)
        store.dispatch('updateWeb3', {
            coinbase: newIsInjected

            // isInjected: newIsInjected
        })

        // if (newIsInjected !== true) {
        //     var newCoinbase = await web3.eth.getCoinbase()
        //     store.dispatch('updateWeb3', {
        //         coinbase: newCoinbase,
        //         isInjected: newIsInjected
        //     })
        // }
    }, 5000)
}

export default pollWeb3
