<template>
    <div class="text-center">
        <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="checked()"
        >
            검증
        </v-btn>
        <!-- 첫번째 모달창 -->
        <Dialog
            :ment="'잠시만 기다려 주세요 해당 유저의 정보를 불러오는 중입니다.'"
            :dialog00="dialog"
        />
        <!-- <v-dialog v-model="dialog" hide-overlay persistent width="500">
            <v-card class="deep-purple accent-4">
                <v-card-text class="white--text">
                    잠시만 기다려 주세요 해당 유저의 정보를 불러오는 중입니다.
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog> -->
        <!-- 두번째 모달창 -->
        <v-dialog v-model="dialog1" width="500">
            <v-card>
                <v-card-title class="white--text deep-purple accent-4">
                    검증 결과
                </v-card-title>

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
        <Dialog1
            :ment="'선택한 설문조사 참가자가 없습니다.'"
            :dialog11="dialog2"
            @close-modal1="dialog2 = false"
        />
        <!-- <v-dialog v-model="dialog2" width="500">
            <v-card class="deep-purple accent-4">
                <v-card-title class="white--text deep-purple accent-4">
                    선택한 설문조사 참가자가 없습니다
                </v-card-title>
            </v-card>
        </v-dialog> -->
        <Dialog
            :ment="
                '잠시만 기다려 주세요 선택한 유저들의 정보를 불러오는 중입니다.'
            "
            :dialog00="dialog3"
        />
        <Dialog1
            :ment="'검증결과 모두 정상입니다.'"
            :dialog11="dialog4"
            @close-modal1="dialog4 = false"
        />
        <!-- <v-dialog v-model="dialog1" hide-overlay width="500" @>
            <v-card color="primary" light>
                <v-card-text class="pa-5">
                    검증자 : 행정안정부(0x12223fsd12121),
                    BC카드(0xd12df33232343)
                    {{ decMsg }} -->
        <!-- <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear> -->
        <!-- </v-card-text>
            </v-card>
        </v-dialog> -->
    </div>
</template>
<script>
import Dialog from './Dialog.vue'
import Dialog1 from './Dialog1.vue'

export default {
    components: { Dialog, Dialog1 },
    props: {
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
        dialog(val) {
            if (!val) return
            this.decrypt()
            setTimeout(() => this.modalUp(), 4000)
            // alert('hello')
        },
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
        // 암호화된 VC 파일을 가져와 복호화 한다
        async decrypt() {
            this.decMsg = await window.ethereum.request({
                method: 'eth_decrypt',
                params: [this.userVp, this.$store.state.web3.coinbase]
            })
        },
        checked() {
            if (this.selected1.length === 0) {
                console.log('여기0')

                this.dialog2 = true
            } else if (this.selected1.length === 1) {
                console.log('여기1')

                this.dialog = true
                this.decrypt()
                setTimeout(() => this.modalUp(), 4000)
            } else {
                console.log('여기2')
                this.dialog3 = true
                setTimeout(() => this.modalUp1(), 4000)
            }
        },
        diaTest1() {
            this.dialog2 = false
        }
    }
}
</script>
<style scoped>
.loaderColor {
    background-color: slateblue;
}
</style>
