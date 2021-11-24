import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        //    서베이 컨트랙트 주소
        '0xd574d51Ef1A874eC43B17B6166cc21E1A4b19aE3'
    )
    return myContractInstance
}

export default getContract
