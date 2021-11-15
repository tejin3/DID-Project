import Web3 from 'web3'
import { vcABI } from './myContract'

console.log('getContractV')

const getContract1 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        vcABI,
        '0x617f45a16600CBAf860751Fa1A27D36fA3dd9e92'
    )
    return myContractInstance
}

export default getContract1
