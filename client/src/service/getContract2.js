import Web3 from 'web3'
import { issuerABI } from './myContract'

console.log('getContractS')

const getContract2 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        issuerABI,
        '0x71Ee5C1a0E156D353e692EE17d4A6235d949e538'
    )
    return myContractInstance
}

export default getContract2
