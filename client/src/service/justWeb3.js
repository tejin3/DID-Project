import Web3 from 'web3'

const justWeb3 = () => {
    let result1 = {}

    if (window.ethereum) {
        try {
            const web33 = new Web3(window.ethereum)

            result1 = {
                ...result1,
                web33
            }

            return result1
        } catch (error) {
            console.log('error')
        }
    } else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web33 = window.web3
        console.log('Injected web3 detected.')
        result1 = {
            ...result1,
            web33
        }

        return result1
    }
}

export default justWeb3
