import Web3 from 'web3'
import { vcABI } from './myContract'

console.log('getContractV')

const getContract1 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        vcABI,
        '0x132b3916D1356cf2A428c10161498Bd532F66836'
    )
    return myContractInstance
}

export default getContract1
