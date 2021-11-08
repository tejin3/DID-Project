import Web3 from 'web3'

const getWeb3 = async () => {
    // 저장할 오브젝트 생성
    let result = {}

    // 메타마스크 켜지는 지 확인
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum || Web3.givenProvider)
        try {
            // Request account access if needed
            await window.ethereum.enable()

            var isInjected = await web3.eth.net.isListening()
            var coinbase = await web3.eth.getCoinbase()

            result = {
                ...result,
                isInjected,
                coinbase
            }

            return result
        } catch (error) {
            console.log('error')
            alert('메타마스트 접속에 실패하였습니다. 다시 시도해 주세요')
        }
    }
    // lse if (window.web3) {
    //     console.log('hello4')

    //     // Use Mist/MetaMask's provider.
    //     const web3 = new Web3(Web3.givenProvider)
    //     // this.$store.commit('web3Save', window.web3)
    //     console.log('Injected web3 detected.')
    // }
}

export default getWeb3
