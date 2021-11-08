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
                <v-btn to="possible" text class="white--text">
                    조사참여
                </v-btn>
                <v-btn to="trade" text class="white--text">
                    쿠폰교환
                </v-btn>
                <v-btn text class="white--text">
                    지갑연결
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
    data() {
        return {
            drawer: false,
            // company: false,
            items: [
                { title: 'Home', link: '/', icon: 'home' },
                { title: 'Store', link: 'store', icon: 'shopping-basket' },
                { title: 'Cart', link: 'cart', icon: 'shopping-cart' }
            ]
        }
    }
}
</script>
