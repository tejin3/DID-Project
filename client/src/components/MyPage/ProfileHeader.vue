<template>
    <v-sheet>
        <v-container class="fill-height">
            <v-row>
                <v-col>
                    <!-- 프로필 카드 -->
                    <v-card>
                        <!-- 유저 프로필 이미지 -->
                        <v-col class="text-center">
                            <v-avatar color="primary" size="150">
                                <span class="white--text display-2">User</span>
                            </v-avatar>
                        </v-col>
                        <!-- 유저 프로필 이름 -->
                        <v-card-title id="profile" class="justify-center">
                            <h1 class="tittle mb-3 hidden-xs-only">
                                User name
                            </h1>
                            <!-- 화면이 작을 때 -->
                            <h1 class="display-1 mb-3 hidden-sm-and-up">
                                My Profile
                            </h1>
                        </v-card-title>
                        <!-- 유저 어드레스 -->
                        <v-card-text class="text-center">
                            <v-btn @click="copyAddress">
                                <span class="mr-3">{{
                                    trucatedUserAddress
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
            userAddress: '0x965ca4F0648c223C3B09e1E8bA46F9f71f7df1b8'
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
        trucatedUserAddress() {
            return (
                this.userAddress.slice(0, 7) +
                '...' +
                this.userAddress.slice(-4)
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
