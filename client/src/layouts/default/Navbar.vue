<template>
    <div>
        <v-app-bar app class="purple lighten-2">
            <router-link class="text-decoration-none" to="/">
                <div class="white--text font-weight-bold">WeDIDsurvey</div>
            </router-link>

            <v-spacer></v-spacer>

            <!-- <span class="hidden-sm-and-up">
                <v-btn @click.stop="drawer = !drawer">
                    Menu
                </v-btn>
            </span> -->

            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    to="company"
                    text
                    class="white--text"
                    v-if="
                        this.$store.state.web3.coinbase ==
                            0xb6f945dfafbc1b9f728d8bc3c34d25178d0c6c71
                    "
                >
                    <!-- v-if="
                        this.$store.state.web3.coinbase ==
                            0xb6f945dfafbc1b9f728d8bc3c34d25178d0c6c71
                    " -->
                    <!-- v-if="this.$store.state.show" -->
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
                    @click="metamask()"
                    v-show="this.$store.state.web3.coinbase === null"
                >
                    지갑연결
                </v-btn>
                <v-btn
                    text
                    class="white--text"
                    v-show="this.$store.state.web3.coinbase !== null"
                >
                    로그아웃
                </v-btn>

                <!-- <v-btn text v-show="listUp">
                    <v-icon small left>fa-shopping-cart</v-icon>
                    요청한 설문 리스트
                </v-btn> -->
            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary right>
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
                >
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
module.exports = {
    name: 'DefaultBar',
    props: {
        listUp: {
            type: Boolean,
            defalut: false
        }
    },
    computed: {
        // web3() {
        //     return this.$store.state.web3
        // }
        // vc() {
        //     return this.verifiableCredentials.data
        // }
    },
    mounted() {
        // console.log('1', this.$store.state.web3.coinbase)
        // if (
        //     this.$store.state.web3.coinbase ===
        //     0xee442796570052932841b7588ab037255ce81183
        // ) {
        //     this.$store.commit('showSave', true)
        // } else {
        //     this.$store.commit('showSave', false)
        // }
        // setInterval(async () => {
        //     // // 계정이 바뀌었는지 확인
        //     // console.log("web3", this.$store.state.web3);
        //     // console.log("어카운트", this.$store.state.account);
        //     await this.$store.dispatch('registerWeb3')
        // }, 5000)
    },
    data() {
        return {
            drawer: false,
            // company: false,
            items: [
                { title: 'Home', link: '/', icon: 'home' },
                { title: 'Store', link: 'store', icon: 'shopping-basket' },
                { title: 'Cart', link: 'cart', icon: 'shopping-cart' }
            ],
            currentAccount: ''
            // company: false
        }
    },
    methods: {
        async metamask() {
            await this.$store.dispatch('registerWeb3')
            await this.$store.dispatch('web3Register')
        }
    }
}
</script>
