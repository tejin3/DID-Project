<template>
    <!-- 네비바 전체 윤곽 -->
    <div>
        <!-- drawer is true -->
        <v-app-bar elevation="0" color="transparent">
            <!-- 네비바 왼쪽 부분 -->
            <router-link class="text-decoration-none" to="/">
                <v-toolbar-title class="font-weight-bold white--text">
                    {{ title }}
                </v-toolbar-title>
            </router-link>
            <!-- 네비바 중간 채우기 -->
            <v-spacer></v-spacer>

            <!-- 네비바 오른쪽 부분 2 : 화면이 클 때 -->
            <v-toolbar-items class="hidden-xs-only">
                <span
                    to="mypage"
                    text
                    class="py-2 mr-2 mt-1 white--text"
                    v-if="this.loginStatus == true"
                >
                    <v-avatar class="avatar" size="40">
                        <img src="@/assets/img/profile.jpg" alt="John" />
                    </v-avatar>
                    <v-chip
                        class="address pl-7 pr-4 pt-2"
                        color="#Fee440"
                        style="color:black;font-weight:bold"
                    >
                        {{
                            `${this.$store.state.web3.coinbase.substr(
                                0,
                                2
                            )}  ...
                                ${this.$store.state.web3.coinbase.substr(
                                    38,
                                    41
                                )}`
                        }}
                    </v-chip>
                </span>
                <v-btn to="possible" text class="white--text">
                    About
                </v-btn>
                <v-btn
                    to="company"
                    text
                    plain="false"
                    class="white--text"
                    v-if="
                        this.$store.state.web3.coinbase ==
                            0x68993b9454f760e81c8e7630ace72b3638f6f6f7
                    "
                >
                    설문결과
                </v-btn>
                <v-btn to="possible" text class="white--text">
                    조사참여
                </v-btn>
                <v-btn to="trade" text class="white--text">
                    쿠폰교환
                </v-btn>
                <v-btn
                    text
                    class="white--text"
                    @click="login()"
                    v-if="this.loginStatus == false"
                >
                    지갑연결
                </v-btn>

                <v-btn
                    to="mypage"
                    text
                    class="white--text"
                    v-if="this.loginStatus == true"
                >
                    마이페이지
                </v-btn>

                <v-btn
                    text
                    class="white--text"
                    @click="logout()"
                    v-if="this.loginStatus == true"
                >
                    로그아웃
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
module.exports = {
    name: 'DefaultBar',
    computed: {
        loginStatus() {
            return this.$store.state.loginStatus
        }
    },
    data() {
        return {
            title: 'weDIDsurvey'
        }
    },
    methods: {
        async login() {
            console.log('login click')
            await this.$store.dispatch('registerWeb3')
            this.$store.commit('loginStatus', true)
        },
        logout() {
            console.log('logout click')
            this.$store.commit('loginStatus', false)
        }
    }
}
</script>
<style>
.avatar {
    position: fixed;
    left: 1.2rem;
    bottom: 0.01rem;
    z-index: 1;
    border: 4px solid #ffd233;
}
</style>
