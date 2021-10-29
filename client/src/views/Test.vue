<template>
    <div></div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            Buffer: {},
            sigUtil: {},
            provider: {}
        }
    },
    setup() {},
    created() {
        this.Buffer = require('buffer/').Buffer
        console.log(this.Buffer)
        this.sigUtil = require('eth-sig-util')
        console.log(this.sigUtil)
        if (!window.ethereum) {
            alert('web3 is required')
        }
        this.provider = window.ethereum
        console.log(this.provider)
    },
    mounted() {},
    unmounted() {},
    methods: {
        async getPublicKey() {
            const accounts = await this.provider.enable()
            const encryptionPublicKey = await this.provider.request({
                method: 'eth_getEncryptionPublicKey',
                params: [accounts[0]]
            })
            return encryptionPublicKey
        }
    }
    // async encrypt(msg) {
    //     const encryptionPublicKey = await getPublicKey()
    //     const buf = Buffer.from(
    //         JSON.stringify(
    //             sigUtil.encrypt(
    //                 encryptionPublicKey,
    //                 { data: msg },
    //                 'x25519-xsalsa20-poly1305'
    //             )
    //         ),
    //         'utf8'
    //     )
    //     return '0x' + buf.toString('hex')
    // },
    // async encryptHandler() {
    //     try {
    //         encryptedMessage.innerText = ''
    //         const msg = encryptInput.value
    //         const encMsg = await encrypt(msg)
    //         encryptedMessage.innerText = encMsg
    //     } catch (err) {
    //         alert(err.message)
    //         console.error(err)
    //     }
    // },
    // async decrypt(encMsg) {
    //     const accounts = await provider.enable()
    //     const decMsg = await provider.request({
    //         method: 'eth_decrypt',
    //         params: [encMsg, accounts[0]]
    //     })
    //     return decMsg
    // },
    // async decryptHandler() {
    //     try {
    //         decryptedMessage.innerText = ''
    //         const msg = decryptInput.value
    //         const decMsg = await decrypt(msg)
    //         decryptedMessage.innerText = decMsg
    //     } catch (err) {
    //         alert(err.message)
    //         console.error(err)
    //     //     }
    // }
}
</script>
