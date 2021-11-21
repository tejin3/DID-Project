<template>
    <div class="text-center">
        <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="checked()"
        >
            검증
        </v-btn>
        <!-- 하나만 선택했을때 첫번째 모달창 -->
        <Dialog
            :ment="'잠시만 기다려 주세요 해당 유저의 정보를 불러오는 중입니다.'"
            :dialog00="dialog"
        />

        <!-- 하나만 선택했을때 두번째 모달창 -->
        <v-dialog v-model="dialog1" width="500">
            <v-card>
                <v-card-title class="white--text deep-purple accent-4">
                    검증 결과
                </v-card-title>

                <!-- 검증자 : 행정안정부(0x12223fsd12121),
                    BC카드(0xd12df33232343)
                    {{ decMsg }} -->
                <v-card-text>
                    {{ decMsg }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="white--text deep-purple accent-4"
                        text
                        @click="dialog1 = false"
                    >
                        확인
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- 아무것도 선택 안했을때 모달창 -->
        <Dialog1
            :ment="'선택한 설문조사 참가자가 없습니다.'"
            :dialog11="dialog2"
            @close-modal1="dialog2 = false"
        />

        <!-- 중복체크 했을때 첫번째 모달창 -->
        <Dialog
            :ment="
                '잠시만 기다려 주세요 선택한 유저들의 정보를 불러오는 중입니다.'
            "
            :dialog00="dialog3"
        />
        <!-- 중복체크 했을 때 두번째 모달창 -->
        <Dialog1
            :ment="'검증결과 모두 정상입니다.'"
            :dialog11="dialog4"
            @close-modal1="dialog4 = false"
        />
    </div>
</template>
<script>
import Dialog from './Dialog.vue'
import Dialog1 from './Dialog1.vue'

export default {
    components: { Dialog, Dialog1 },
    props: {
        // 암호화된 유저 vp 정보
        userVp: {
            type: String,
            default: ''
        },
        selected1: {
            type: Array,
            default: function() {
                return []
            }
        }
    },

    data() {
        return {
            dialog: false,
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            decMsg: null
        }
    },

    watch: {
        // 하나만 선택했을 때 모달창 온오프
        dialog(val) {
            if (!val) return
            // this.decrypt()
            setTimeout(() => this.modalUp(), 4000)
            // alert('hello')
        },
        // 중복선택 했을때 모달창 온오프
        dialog3(val) {
            if (!val) return

            setTimeout(() => this.modalUp1(), 4000)
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
        modalUp1() {
            this.dialog3 = false
            this.dialog4 = true

            // alert('검증결과 : 정상')
        },
        // 암호화된 Vp 파일을 가져와 복호화 한다
        async decrypt() {
            try {
                this.decMsg = await window.ethereum.request({
                    method: 'eth_decrypt',
                    params: [this.userVp, this.$store.state.web3.coinbase]
                })
                this.dialog = true
                setTimeout(() => this.modalUp(), 4000)
            } catch {
                alert('암호를 풀 수 없습니다')
            }
        },
        // 하나 선택, 중복 선택, 선택x 를 판별 후 적절한 모달창 오픈
        checked() {
            if (this.selected1.length === 0) {
                console.log('여기0')

                this.dialog2 = true
            } else if (this.selected1.length === 1) {
                console.log('여기1')

                this.decrypt()
            } else {
                console.log('여기2')
                this.dialog3 = true
                setTimeout(() => this.modalUp1(), 4000)
            }
        }
    }
}
</script>
<style scoped>
.loaderColor {
    background-color: slateblue;
}
</style>
