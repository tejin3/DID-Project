<template>
    <v-container fluid>
        <v-container>
            <v-card class="mb-10" fluid>
                <v-img src="@/assets/img/banner.jpg"> </v-img>
            </v-card>
        </v-container>

        <!--hover했을떄 효과 및 카드-->
        <v-container>
            <v-row>
                <v-col
                    class="mr-auto"
                    v-for="count in 4"
                    :key="count"
                    cols="12"
                    sm="4"
                    md="2"
                >
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card
                            width="150"
                            :elevation="hover ? 16 : 2"
                            :class="{ 'on-hover': hover }"
                            class="mx-auto"
                            max-width="150"
                        >
                            <v-img
                                height="150"
                                src="@/assets/img/bucks-cafe.png"
                            >
                                <v-app-bar flat color="rgba(0, 0, 0, 0) ">
                                </v-app-bar>
                            </v-img>
                            <!--텍스트부분-->
                            <v-card-text>
                                <div class="text--primary">
                                    10 coupons
                                </div>
                                <p>
                                    Starbucks Americano
                                </p>

                                <v-btn text color="deep-purple accent-4">
                                    Trade
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
export default {
    name: 'TradeView',
    components: {},
    data() {
        return {
            sampleData: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
