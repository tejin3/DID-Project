import Web3 from 'web3'
import { vcABI } from './myContract'

console.log('getContractV')

const getContract1 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        vcABI,
        '0x567B9Ad819EE5a1Beff574D4736FB8b48BCb58CD'
    )
    return myContractInstance
}

export default getContract1
