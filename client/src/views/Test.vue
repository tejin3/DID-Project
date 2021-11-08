<template>
    <div>
        <ProfileHeader />
        <!-- 유저 프로필 상세 내용 -->
        <v-row>
            <!-- <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <p>{{ verifiableCredentials }}</p>
                <p>{{ vc }}</p>
            </v-col> -->
            {{ web3 }}
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="encryptHandler">
                    암호화된 공개키 획득
                </v-btn>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="decrypt">
                    로컬 VC 획득
                </v-btn>
                <h2>
                    {{ myVC }}
                </h2>
            </v-col>
            <!-- <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="getEncryptionPublicKey">
                    암호화된 공개키
                </v-btn>
                <h2>
                    {{ encryptionPublicKey }}
                </h2>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="encryptedMessage">
                    암호화
                </v-btn>
                <h2>
                    {{ encMsg }}
                </h2>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="setLocal">
                    로컬스토리지에 저장
                </v-btn>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-btn elevation="2" @click="decrypt1">
                    Click me(복호화)
                </v-btn>
                <h2>
                    {{ decMsg1 }}
                </h2>
            </v-col> -->
        </v-row>
    </div>
</template>
<script>
import ProfileHeader from '@/components/MyPage/ProfileHeader'

export default {
    name: '',
    components: { ProfileHeader },
    data() {
        return {
            verifiableCredentials: {
                data: [
                    {
                        name: '주민등록증',
                        issuer: 'https://public.administration/issuers/982349',
                        id: 'http://public.administration/credentials/24532',
                        type: ['VerifiableCredential', 'IDCredential'],
                        issuanceDate: '2021-10-01T19:73:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebfeb1f712ebc6f1',
                                value: { age: '23', lang: 'ko' }
                            }
                        }
                    },
                    {
                        name: '주민등록증',
                        issuer: 'https://public.administration/issuers/982349',
                        id: 'http://public.administration/credentials/24532',
                        type: ['VerifiableCredential', 'IDCredential'],
                        issuanceDate: '2021-10-01T19:73:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebfeb1f712ebc6f1',
                                value: { name: '진켈리', lang: 'ko' }
                            }
                        }
                    },
                    {
                        name: '패션VC',
                        id: 'http://mushinsa/credentials/14532',
                        type: ['VerifiableCredential', 'ShopCredential'],
                        issuer: 'https://mushinsa/issuers/562349',
                        issuanceDate: '2021-09-01T13:55:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebfeb1f712ebc6f1',
                                value: {
                                    ammount: '500000',
                                    lang: 'ko'
                                }
                            }
                        }
                    },
                    {
                        name: '패션VC',
                        id: 'http://mushinsa/credentials/14532',
                        type: ['VerifiableCredential', 'ShopCredential'],
                        issuer: 'https://mushinsa/issuers/562349',
                        issuanceDate: '2021-09-01T13:55:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebfeb1f712ebc6f1',
                                value: {
                                    onOffline: true,
                                    lang: 'ko'
                                }
                            }
                        }
                    },
                    {
                        name: '패션VC',
                        id: 'http://mushinsa/credentials/14532',
                        type: ['VerifiableCredential', 'ShopCredential'],
                        issuer: 'https://mushinsa/issuers/562349',
                        issuanceDate: '2021-09-01T13:55:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebfeb1f712ebc6f1',
                                value: {
                                    product: '액세서리',
                                    lang: 'ko'
                                }
                            }
                        }
                    },
                    {
                        name: '보험VC',
                        id: 'http://job.insurance/credentials/14532',
                        type: ['VerifiableCredential', 'InsuranceCredential'],
                        issuer: 'https://job.insurance/issuers/2362349',
                        issuanceDate: '2021-10-01T19:73:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebffdre6712ebc6f1',
                                value: {
                                    occupation: 'IT',
                                    lang: 'ko'
                                }
                            }
                        }
                    },
                    {
                        name: '보험VC',
                        id: 'http://job.insurance/credentials/14532',
                        type: ['VerifiableCredential', 'InsuranceCredential'],
                        issuer: 'https://job.insurance/issuers/2362349',
                        issuanceDate: '2021-10-01T19:73:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebffdre6712ebc6f1',
                                value: {
                                    income: '80000000',
                                    lang: 'ko'
                                }
                            }
                        }
                    },
                    {
                        name: '보험VC',
                        id: 'http://job.insurance/credentials/14532',
                        type: ['VerifiableCredential', 'InsuranceCredential'],
                        issuer: 'https://job.insurance/issuers/2362349',
                        issuanceDate: '2021-10-01T19:73:24Z',
                        credentialSubject: {
                            id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
                            information: {
                                id: 'did:example:c276e12ec21ebffdre6712ebc6f1',
                                value: {
                                    location: '서울',
                                    lang: 'ko'
                                }
                            }
                        }
                    }
                ]
            },
            myVC: null
        }
    },
    beforeCreate() {
        console.log('register Web3 Action')
        this.$store.dispatch('registerWeb3')
    },
    computed: {
        web3() {
            return this.$store.state.web3
        },
        vc() {
            return this.verifiableCredentials.data
        }
    },
    mounted() {},
    unmounted() {},
    methods: {
        async getPublicKey() {
            const provider = window.ethereum

            const encryptionPublicKey = await provider.request({
                method: 'eth_getEncryptionPublicKey',
                params: [this.web3.coinbase]
            })

            return encryptionPublicKey
        },
        async encryptedMessage() {
            const encryptionPublicKey = await this.getPublicKey()
            const sigUtil = require('eth-sig-util')

            const encMsg = JSON.stringify(this.verifiableCredentials)
            const buf = Buffer.from(
                JSON.stringify(
                    sigUtil.encrypt(
                        encryptionPublicKey,
                        { data: encMsg },
                        'x25519-xsalsa20-poly1305'
                    )
                ),
                'utf8'
            )
            return '0x' + buf.toString('hex')
        },
        async encryptHandler() {
            try {
                const envVC = await this.encryptedMessage()
                window.localStorage.setItem('myVC', envVC)
            } catch (err) {
                console.error(err)
            }
        },

        async decrypt() {
            const envVC = window.localStorage.getItem('myVC')
            const provider = window.ethereum

            const decMsg = await provider.request({
                method: 'eth_decrypt',
                params: [envVC, this.web3.coinbase]
            })

            console.log(decMsg)
            this.myVC = decMsg
        }
        // async copyAddress() {
        //     try {
        //         const userAddress = this.userAddress
        //         await navigator.clipboard.writeText(userAddress)
        //         console.log('Successfully, Address Copy!')
        //     } catch (err) {
        //         console.error('Failed to copy: ', err)
        //     }
        // },
        // testAxios() {
        //     console.log(this.sampleData)
        //     this.$api('/test', 'post', {
        //         param: this.sampleData
        //     }).then(result => {
        //         console.log(result, 'resultOK')
        //     })
        // },
        // async testUpload(event) {
        //     console.log(event.target.files)
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
        // }
        // async fileTransfer() {
        //     // var formData = new FormData() // Currently empty
        //     // formData.append(name, value, filename);
        //     // formData.append('userpic', myFileInput.files[0], 'chris.jpg')
        // }
    }
}
</script>
