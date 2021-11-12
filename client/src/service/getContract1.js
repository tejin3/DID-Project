import Web3 from 'web3'
import { vcABI } from './myContract'
import store from '../store'

console.log('getContract')

const getContract1 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const address = store.state.web3.coinbase
    const myContractInstance = new web3.eth.Contract(vcABI, address)
    return myContractInstance
}

export default getContract1
