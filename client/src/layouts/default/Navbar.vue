<template>
    <!-- 네비바 전체 윤곽 -->
    <div>
        <!-- drawer is true -->
        <v-app-bar elevation="0" color="transparent" class="mt-3">
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
                <v-btn
                    to="company"
                    text
                    plain="false"
                    class="white--text"
                    v-if="
                        this.$store.state.web3.coinbase ==
                            0xb6f945dfafbc1b9f728d8bc3c34d25178d0c6c71
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

            <!-- 네비바 오른쪽 부분 1 : 화면이 작을 때-->
            <span class="hidden-sm-and-up">
                <v-btn @click.stop="drawer = !drawer">
                    Menu
                </v-btn>
            </span>
        </v-app-bar>

        <!-- drawer is true -->
        <v-navigation-drawer v-model="drawer" absolute temporary right>
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
                >
                    <v-list-item-icon>
                        <v-icon small>fa-{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
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
            title: 'weDIDsurvey',
            drawer: false,
            items: [
                { title: 'Home', link: '/', icon: 'home' },
                { title: 'Store', link: 'store', icon: 'shopping-basket' },
                { title: 'Cart', link: 'cart', icon: 'shopping-cart' }
            ]
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
    z-index: 1;
    border: 4px solid #ffd233;
}
</style>
