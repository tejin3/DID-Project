import Web3 from 'web3'
import { issuerABI } from './myContract'

console.log('getContractS')

const getContract2 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        issuerABI,
        // 이슈어 컨트랙트 주소
        '0x1b8e8B86e846eB70D8f9FD66C11D0F409d78EE63'
    )
    return myContractInstance
}

export default getContract2
