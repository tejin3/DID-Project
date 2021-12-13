import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        //    서베이 컨트랙트 주소
        '0xcd835DD7040BF924349fA794F460f18442dA6F17'
    )
    return myContractInstance
}

export default getContract
