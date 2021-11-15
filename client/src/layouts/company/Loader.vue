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
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
            <v-card color="primary" light>
                <v-card-text>
                    잠시만 기다려 주세요 검증 중 입니다
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog1" hide-overlay width="300">
            <v-card color="primary" light>
                <v-card-text class="pa-5">
                    검증 결과 : 정상
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
    data() {
        return {
            dialog: false,
            dialog1: false
        }
    },

    watch: {
        dialog(val) {
            if (!val) return

            setTimeout(() => this.modalUp(), 4000)
            // alert('hello')
        }
    },
    methods: {
        modalUp() {
            this.dialog = false
            this.dialog1 = true
            // alert('검증결과 : 정상')
        }
    }
}
</script>
