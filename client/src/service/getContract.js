import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        '0xF96C3bDf97eB5C06DE82549A28c4dC6c648bf88c'
    )
    return myContractInstance
}

export default getContract
