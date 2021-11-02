<template>
    <div>
        <my-pond />

        <!-- 유저 프로필 상세 내용 -->
        <div>
            <v-divided></v-divided>
            구분선
        </div>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h1>test</h1>
                <h2>{{ result }}</h2>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="encryptedMessage">
                    Click me
                </v-btn>
                <h2>
                    {{ encMsg }}
                </h2>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="decrypt">
                    Click me
                </v-btn>
                <h2>
                    {{ decMsg }}
                </h2>
                test2
            </v-col>
        </v-row>
    </div>
</template>
<script>
// import MyPond from '../components/MyPond'
import MyPond from '@/components/MyPond'
// import ProfileHeader from '@/components/MyPage/ProfileHeader'
import Web3 from 'web3'

export default {
    name: '',
    components: { MyPond },
    data() {
        return {
            sampleData: 'abc',
            web3: null,
            result: null,
            otherPublicKey: 'ZROBC1WIHbz94PZ4dyUz+qOKaaNwKn1VD0QIG+p4/B4=',
            encMsg: '',
            decMsg: '',
            vp: {
                id: 'http://public.administration/credentials/24532',

                type: ['VerifiableCredential', 'IDCredential'],

                issuer: 'https://public.administration/issuers/982349',

                issuanceDate: '2021-10-01T19:73:24Z',

                credentialSubject: {
                    id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',

                    userOf: {
                        id: 'did:example:c276e12ec21ebfeb1f712ebc6f1',
                        name: [
                            {
                                value: '진 켈리',
                                lang: 'ko'
                            }
                        ],
                        age: [
                            {
                                value: '23',
                                lang: 'ko'
                            }
                        ],
                        address: [
                            {
                                value: '서울, 대한민국',
                                lang: 'ko'
                            }
                        ]
                    }
                }
            }
        }
    },
    computed: {},
    mounted() {
        this.init()
    },
    unmounted() {},
    methods: {
        async init() {
            let result = {}

            this.web3 = new Web3(Web3.givenProvider)

            var isInjected = await this.web3.eth.net.isListening()
            var coinbase = await this.web3.eth.getCoinbase()
            var balance = await this.web3.eth.getBalance(coinbase)

            result = {
                ...result,
                isInjected,
                coinbase,
                balance
            }

            this.result = result
        },
        encryptedMessage() {
            const sigUtil = require('eth-sig-util')

            const msg = JSON.stringify(this.vp)

            const buf = Buffer.from(
                JSON.stringify(
                    sigUtil.encrypt(
                        this.otherPublicKey,
                        { data: msg },
                        'x25519-xsalsa20-poly1305'
                    )
                ),
                'utf8'
            )

            return (this.encMsg = '0x' + buf.toString('hex'))
        },

        async decrypt() {
            const decMsg = await window.ethereum.request({
                method: 'eth_decrypt',
                params: [this.encMsg, this.result.coinbase]
            })

            alert(decMsg)
        },
        async copyAddress() {
            try {
                const userAddress = this.userAddress
                await navigator.clipboard.writeText(userAddress)
                console.log('Successfully, Address Copy!')
            } catch (err) {
                console.error('Failed to copy: ', err)
            }
        },
        testAxios() {
            console.log(this.sampleData)
            this.$api('/test', 'post', {
                param: this.sampleData
            }).then(result => {
                console.log(result, 'resultOK')
            })
        },

        async testUpload(event) {
            console.log(event.target.files)
            // let name = ''
            // let data = null
            // if (files) {
            //     name = files[0].name
            //     data = this.$base64(files[0])
            //     console.log(name, data)
            // } else {
            //     console.log('no files')
            // }

            // const { error } = await this.$api(
            //     `/upload/${type}/${name}`,
            //     'post',
            //     {
            //         data
            //     }
            // )
            // if (error) {
            //     return alert('이미지 업로드 실패했습니다. 다시 시도하세요.')
            // }
            // alert('이미지가 업로드 되었습니다.')
        },
        async fileTransfer() {
            // var formData = new FormData() // Currently empty
            // formData.append(name, value, filename);
            // formData.append('userpic', myFileInput.files[0], 'chris.jpg')
        }
    }
}
</script>
