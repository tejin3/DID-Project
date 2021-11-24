import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        //    서베이 컨트랙트 주소
        '0x7F6364AdE1BE83162A1aAd5AF031A880b1617C30'
    )
    return myContractInstance
}

export default getContract
