<template>
    <div>
        <ProfileHeader />

        <!-- 유저 프로필 상세 내용 -->
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h1>계정</h1>
                <h2>{{ web3.coinbase }}</h2>
            </v-col>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
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
                <v-btn elevation="2" @click="decrypt">
                    복호화
                </v-btn>
                <h2>
                    {{ decMsg }}
                </h2>
            </v-col>
        </v-row>
    </div>
</template>
<script>
// import MyPond from '@/components/Cards/MyPond'
import ProfileHeader from '@/layouts/mypage/ProfileHeader'
import vc from '@/assets/vc/vc.json'
import { mapState } from 'vuex'

export default {
    name: '',
    components: { ProfileHeader },
    data() {
        return {
            sampleData: 'abc',
            result: null,
            encryptionPublicKey: '',
            test: null,
            encMsg: '',
            decMsg: '',
            localData: '',
            localDataList: [],
            vc
        }
    },
    computed: {
        ...mapState([
            'web3' // store에 저장된 web3를 mapState 헬퍼를 사용해서 가져온다
        ])
    },
    mounted() {},
    unmounted() {},
    methods: {
        // 계정 주소를 복사한다
        async copyAddress() {
            try {
                const userAddress = this.userAddress
                // 브라우저에서 클립보드 데이터 읽어오기
                await navigator.clipboard.writeText(userAddress)
                console.log('Successfully, Address Copy!')
            } catch (err) {
                console.error('Failed to copy: ', err)
            }
        },

        // 공개키를 암호화 한다
        getEncryptionPublicKey() {
            console.log(this.$store.state.web3.coinbase)
            window.ethereum
                .request({
                    method: 'eth_getEncryptionPublicKey',
                    params: [this.$store.state.web3.coinbase] // 계정의 퍼블릭 키
                })
                .then(result => {
                    this.encryptionPublicKey = result
                })
                .catch(error => {
                    if (error.code === 4001) {
                        // EIP-1193 userRejectedRequest error
                        console.log(
                            "We can't encrypt anything without the key."
                        )
                    } else {
                        console.error(error)
                    }
                })
        },

        // 암호화된 공개키로 vc 파일을 앙호화한다
        encryptedMessage() {
            const sigUtil = require('eth-sig-util')
            // eth-sig-util: A small collection of Ethereum signing functions
            const msg = JSON.stringify(this.vc)
            // Buffer는 binary의 데이터를 담을 수 있는 object
            const buf = Buffer.from(
                JSON.stringify(
                    sigUtil.encrypt(
                        this.encryptionPublicKey,
                        { data: msg },
                        'x25519-xsalsa20-poly1305'
                    )
                ),
                'utf8'
            )
            return (this.encMsg = '0x' + buf.toString('hex'))
        },

        // local Storage에 암호화된 VC 파일을 key/value로 저장한다
        setLocal() {
            localStorage.setItem('intoVp', this.encMsg)
        },
        // // Local Storage에 있는 암호화된 VC 파일을 가져온다
        // getLocal() {
        //     this.localData = localStorage.getItem('intoVp')
        //     this.decrypt1(this.localData)
        // },

        // 암호화된 VC 파일을 가져와 복호화 한다
        async decrypt() {
            this.decMsg = await window.ethereum.request({
                method: 'eth_decrypt',
                params: [
                    localStorage.getItem('intoVp'),
                    this.$store.state.web3.coinbase
                ]
            })
            alert(this.decMsg)
        },

        async fileTransfer() {
            // var formData = new FormData() // Currently empty
            // formData.append(name, value, filename);
            // formData.append('userpic', myFileInput.files[0], 'chris.jpg')
        }
    }
}
</script>
