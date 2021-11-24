import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        //    서베이 컨트랙트 주소
        '0xfcACF859f7A82595f63Dc864F6f170266Eb40cd1'
    )
    return myContractInstance
}

export default getContract
