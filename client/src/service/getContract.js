import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        '0x80ECeA5114615f3ccd0b921834dFDBfD2D4D197a'
    )
    return myContractInstance
}

export default getContract
