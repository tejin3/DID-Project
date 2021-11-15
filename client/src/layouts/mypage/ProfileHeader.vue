<template>
    <v-sheet>
        <v-container class="fill-height">
            <v-row justify="center" class="text-center">
                <v-col>
                    <!-- 프로필 카드 -->
                    <v-card class="text-center">
                        <!-- 유저 프로필 이미지 -->
                        <v-col>
                            <!-- 화면이 클 때 -->
                            <v-avatar
                                class="hidden-xs-only"
                                color="primary"
                                size="150"
                            >
                            <v-img
                                max-height="150"
                                max-width="250"
                                src="@/assets/img/mypage/profile.png"></v-img>
                            </v-avatar>
                            <!-- 화면이 작을 때 -->
                            <v-avatar
                                class="hidden-sm-and-up"
                                color="primary"
                                size="100"
                            >
                                 <v-img
                                max-height="150"
                                max-width="250"
                                src="@/assets/img/mypage/profile.png"></v-img>
                            </v-avatar>
                        </v-col>
                        <!-- 유저 프로필 이름 -->
                        <v-card-title class="justify-center">
                            <!-- 화면이 클 때 -->
                            <h1 class="tittle mb-3 hidden-xs-only">
                                이성실 <span style="font-size: 0.5em">회원님</span>
                            </h1>
                            <!-- 화면이 작을 때 -->
                            <h1
                                class="display-1 font-weight-bold mb-3 hidden-sm-and-up"
                            >
                                이성실 <span style="font-size: 0.5em">회원님</span>
                            </h1>
                        </v-card-title>
                        <!-- 유저 어드레스 -->
                        <v-card-text>
                            <!-- 화면이 클 때-->
                            <v-btn class=" hidden-xs-only" @click="copyAddress">
                                <span class="mr-3">{{
                                    truncatedUserAddress2
                                }}</span>
                                <v-icon>mdi-content-copy</v-icon>
                            </v-btn>
                            <!-- 화면이 작을 때 -->
                            <v-btn
                                class="hidden-sm-and-up"
                                @click="copyAddress"
                            >
                                <span class="mr-3">{{
                                    truncatedUserAddress
                                }}</span>
                                <v-icon>mdi-content-copy</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
module.exports = {
    data() {
        return {
            userAddress: this.$store.state.web3.coinbase
        }
    },
    methods: {
        async copyAddress() {
            try {
                const userAddress = this.userAddress
                await navigator.clipboard.writeText(userAddress)
                console.log('Successfully, Address Copy!')
            } catch (err) {
                console.error('Failed to copy: ', err)
            }
        }
    },
    computed: {
        truncatedUserAddress() {
            return (
                this.userAddress.slice(0, 5) +
                '...' +
                this.userAddress.slice(-3)
            )
        },
        truncatedUserAddress2() {
            return (
                this.userAddress.slice(0, 7) +
                '......' +
                this.userAddress.slice(-7)
            )
        }
    }
}
</script>
<style scoped>
/* #profile h1:after {
    content: '';
    border-bottom: 3px solid grey;
    width: 8rem;
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
} */
</style>
