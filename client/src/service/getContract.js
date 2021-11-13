import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        '0x7b07ddB08Ff2D974d7cd41778686e8017B9e79b1'
    )
    return myContractInstance
}

export default getContract
