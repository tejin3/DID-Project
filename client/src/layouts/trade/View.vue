<template>
    <v-container fluid>
        <v-container>
            <v-card class="mb-10">
                <v-img src="@/assets/img/banner.jpg"> </v-img>
            </v-card>
        </v-container>
        <!-- <TradeHeader />
        <TradeCategory />
        <TradeMain /> -->
        <v-container>
            <v-bottom-navigation :value="value" color="primary">
                <v-btn>
                    <span>전체</span>

                    <v-icon>mdi-widgets</v-icon>
                </v-btn>

                <v-btn>
                    <span>커피/음료</span>

                    <v-icon>
                        mdi-glass-wine
                    </v-icon>
                </v-btn>

                <v-btn>
                    <span>베이커리/도넛</span>

                    <v-icon>mdi-cake-variant</v-icon>
                </v-btn>
                <v-btn>
                    <span>아이스크림</span>

                    <v-icon>mdi-ice-cream</v-icon>
                </v-btn>
                <v-btn>
                    <span>햄버거/치킨/피자</span>

                    <v-icon>mdi-food</v-icon>
                </v-btn>
                <v-btn>
                    <span>마트/편의점</span>

                    <v-icon>mdi-store</v-icon>
                </v-btn>
                <v-btn>
                    <span>상품권</span>

                    <v-icon>mdi-ticket</v-icon>
                </v-btn>
                <v-btn>
                    <span>영화</span>

                    <v-icon>mdi-video</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-container>

        <!--hover했을떄 효과 및 카드-->
        <v-container>
            <v-row>
                <v-col
                    class="testLine ma-6 pa-0"
                    v-for="good in goods"
                    :key="good.list"
                >
                    <v-card max-width="200" height="325">
                        <!-- <v-img
                            class="white--text align-end"
                            height="170px"
                            :src="
                                require(`@/assets/img/${good.goods_image_path}`)
                            "
                        >
                        </v-img> -->
                        <v-img
                            class="white--text align-end"
                            height="170px"
                            :src="
                                require(`@/assets/img/coupon/${good.goods_image_path}`)
                            "
                        >
                        </v-img>
                        <v-card-subtitle
                            class="purple--text font-weight-bold text-20 text-center pb-1 pt-1"
                        >
                            <v-icon size="small" class="purple--text"
                                >mdi-tag</v-icon
                            >
                            {{ good.goods_coupon }} 쿠폰
                        </v-card-subtitle>
                        <v-card-subtitle class="pb-0 pt-0 text-center">
                            {{ good.goods_issuer }}
                        </v-card-subtitle>
                        <v-card-subtitle
                            class="pb-1 pt-1 black--text font-weight-bold text-center"
                            style="height:50px"
                        >
                            {{ good.goods_name }}
                        </v-card-subtitle>

                        <v-card-text class="text--primary text-center">
                            <!-- <v-icon size="small">mdi-tag</v-icon>
                            {{ card.point }} 포인트 -->
                            <v-btn
                                dark
                                @click.stop="dialog = true"
                                text
                                color="deep-purple accent-4"
                            >
                                Trade
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-row justify="center">
                    <v-dialog v-model="dialog" max-width="290">
                        <v-card>
                            <v-card-title class="text-h6">
                                교환이 완료되었습니다.
                            </v-card-title>
                            <v-card-text>
                                교환된 쿠폰은 마이페이지에서 확인 가능합니다.
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                    color="purple darken-1"
                                    text
                                    @click="dialog = false"
                                >
                                    확인
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>

                <!-- <v-alert
                    class="tradeAlert"
                    max-width="300"
                    :value="alert"
                    color="purple"
                    dense
                    elevation="13"
                    outlined
                    prominent
                    dismissible
                    text
                    type="success"
                    align-content-center
                    >교환이 완료되었습니다.</v-alert
                > -->
            </v-row>
            <!-- <v-row>
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
                            </v-img> -->
            <!--텍스트부분-->
            <!-- <v-card-text>
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
            </v-row> -->
        </v-container>
    </v-container>
</template>
<script>
export default {
    name: 'TradeView',
    components: {},
    data() {
        return {
            dialog: false,
            goods: [],
            value: 1
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.showGoods()
    },
    unmounted() {},
    methods: {
        async showGoods() {
            this.goods = await this.$api('/trade', 'get')
            console.log(this.goods)
        },
        tradeCompleted() {}
    }
}
</script>
