import Web3 from 'web3'
import { issuerABI } from './myContract'

console.log('getContractS')

const getContract2 = () => {
    console.log('getContract2')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        issuerABI,
        // 이슈어 컨트랙트 주소
        '0xDf344C7e3D80e880361D4560b4d5b90e279c2449'
    )
    return myContractInstance
}

export default getContract2
