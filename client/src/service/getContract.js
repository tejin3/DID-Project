import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        '0x290C46019b66a0436C45990964aa4c3F018ce2b2'
    )
    return myContractInstance
}

export default getContract
