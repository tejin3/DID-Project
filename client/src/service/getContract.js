import Web3 from 'web3'
import { surveyABI } from './myContract'

console.log('getContractS')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const myContractInstance = new web3.eth.Contract(
        surveyABI,
        // '0xed87dF7a0a3E46BA61D583548A53AFD778F76357' 정습님꺼
        // '0xAe6112eC606503f038bB9f67E6BD253318e7db51' 집
        // '0x100932D8E41CC72f15978824F04A532130F344c1'
        '0x1Ee555D9A8BDaE51F9D31C76495533dECCD6F66a'
    )
    return myContractInstance
}

export default getContract
