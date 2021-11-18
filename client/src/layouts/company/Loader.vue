<template>
    <div class="text-center">
        <v-btn
            :disabled="dialog"
            :loading="dialog"
            class="white--text"
            color="purple darken-2"
            @click="dialog = true"
        >
            검증
        </v-btn>
        <!-- 첫번째 모달창 -->
        <v-dialog v-model="dialog" hide-overlay persistent width="500">
            <v-card color="primary" light>
                <v-card-text>
                    잠시만 기다려 주세요 해당 유저의 정보를 불러오는 중입니다.
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- 두번째 모달창 -->
        <v-dialog v-model="dialog1" hide-overlay width="500" @>
            <v-card color="primary" light>
                <v-card-text class="pa-5">
                    검증자 : 행정안정부(0x12223fsd12121),
                    BC카드(0xd12df33232343)
                    {{ decMsg }}
                    <!-- <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear> -->
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props: {
        userVp: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            dialog: false,
            dialog1: false,
            decMsg: null
        }
    },

    watch: {
        dialog(val) {
            if (!val) return
            this.decrypt()
            setTimeout(() => this.modalUp(), 4000)
            // alert('hello')
        }
    },
    methods: {
        // 모달창을 번갈아 가면서 띄우기 위해
        modalUp() {
            this.dialog = false
            this.dialog1 = true

            // alert('검증결과 : 정상')
        },
        // 암호화된 VC 파일을 가져와 복호화 한다
        async decrypt() {
            this.decMsg = await window.ethereum.request({
                method: 'eth_decrypt',
                params: [this.userVp, this.$store.state.web3.coinbase]
            })
        }
    }
}
</script>
