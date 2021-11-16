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
                <v-btn
                    to="company"
                    text
                    plain="false"
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
            title: 'WeDIDsurvey',
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
