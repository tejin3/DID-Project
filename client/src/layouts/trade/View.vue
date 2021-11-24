<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>
            <!-- 왼쪽 layout -->
            <v-col cols="6" md="2" class="trade-bg-color">
                <v-card width="200" height="141" class="border">
                    <v-card-text>
                        <br />
                        <div class="text-h4 text--primary text-center ">
                            {{ coupon[0].user_coupon }}
                        </div>
                        <br />
                        <p class="text-center">
                            🎫 현재 내 쿠폰
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- 오른쪽 layout -->
            <v-col cols="12" sm="10" ma="4">
                <v-card>
                    <!-- 상단 배너 -->
                    <v-container
                        class="d-flex justify-center align-center "
                        style="padding-bottom:20px; padding-top:23px"
                    >
                        <img
                            src="@/assets/img/trade/banner-2.png"
                            alt=""
                            class="img-bn-class"
                            style=" margin-right:0;"
                        />

                        <div
                            class="hi"
                            style="justify-content:center; display:flex;"
                        >
                            <div
                                style="color:white; font-size:1.5em;"
                                class="d-flex align-center"
                            >
                                쿠폰교환
                            </div>
                            <div style="color:white; flex:1; margin-left:20px">
                                <div style="font-size:1.2em">
                                    설문 완료 후 받은 쿠폰으로 다양한 상품을
                                    교환하세요!
                                </div>
                                <div style="font-size:0.8em">
                                    우리 weDIDsurvey에서는 의뢰업체들과 협력하에
                                    보다 할인된 가격으로 만나보실 수 있습니다.
                                </div>
                            </div>
                        </div>
                    </v-container>
                    <v-container class="mb-5">
                        <v-bottom-navigation
                            :value="value"
                            color="hsl(258, 98%, 70%)"
                            class="d-flex justify-space-around"
                        >
                            <v-btn @click="showGoods">
                                <span>전체</span>

                                <v-icon>mdi-widgets</v-icon>
                            </v-btn>

                            <v-btn @click="goodsDrink">
                                <span>커피/음료</span>

                                <v-icon>
                                    mdi-glass-wine
                                </v-icon>
                            </v-btn>

                            <v-btn @click="goodsBread">
                                <span>베이커리/도넛</span>

                                <v-icon>mdi-cake-variant</v-icon>
                            </v-btn>
                            <v-btn @click="goodsIcecream">
                                <span>아이스크림</span>

                                <v-icon>mdi-ice-cream</v-icon>
                            </v-btn>
                            <v-btn @click="goodsFood">
                                <span>햄버거/치킨/피자</span>

                                <v-icon>mdi-food</v-icon>
                            </v-btn>
                            <v-btn @click="goodsMart">
                                <span>마트/편의점</span>

                                <v-icon>mdi-store</v-icon>
                            </v-btn>
                            <v-btn @click="goodsGiftCard">
                                <span>상품권</span>

                                <v-icon>mdi-ticket</v-icon>
                            </v-btn>
                            <v-btn @click="goodsMovie">
                                <span>영화</span>

                                <v-icon>mdi-video</v-icon>
                            </v-btn>
                        </v-bottom-navigation>
                    </v-container>

                    <!--hover했을떄 효과 및 카드-->
                    <v-container>
                        <v-row>
                            <v-col
                                class="testLine text-center"
                                v-for="(good, i) in goods"
                                :key="i"
                            >
                                <v-card
                                    width="200"
                                    hover
                                    elevation="0"
                                    class="pb-2"
                                >
                                    <v-card>
                                        <v-card-subtitle
                                            class="purple--text font-weight-bold text-subtitle-1 text-center pr-0 pl-0 pb-1 pt-1"
                                        >
                                            <v-img
                                                class="white--text align-end"
                                                :src="
                                                    require(`@/assets/img/trade/${good.goods_image_path}`)
                                                "
                                            >
                                            </v-img>
                                        </v-card-subtitle>
                                    </v-card>
                                    <v-card-subtitle
                                        class="purple--text font-weight-bold text-subtitle-1 text-center pb-1 pt-1"
                                    >
                                        <v-icon color="hsl(258, 98%, 70%)"
                                            >mdi-tag</v-icon
                                        >
                                        {{ good.goods_coupon }}
                                    </v-card-subtitle>
                                    <v-card-subtitle
                                        class="pb-1 pt-1 text-center text-body-3"
                                    >
                                        {{ good.goods_issuer }}
                                    </v-card-subtitle>
                                    <v-card-subtitle
                                        class="pb-0 pt-0 black--text font-weight-bold text-body-2 text-center"
                                        style="height:50px"
                                    >
                                        {{ good.goods_name }}
                                    </v-card-subtitle>
                                    <div
                                        class="text-decoration-line-through text--disabled text-caption"
                                    >
                                        {{ good.goods_original_price }}원
                                    </div>
                                    <div
                                        class="font-weight-black font-weight-bold"
                                    >
                                        {{ good.goods_discounted_price }}원
                                    </div>
                                    <v-btn
                                        color="hsl(258, 98%, 70%)"
                                        class="pt-1"
                                        outlined
                                        small
                                        @click="
                                            ;[
                                                (dialog = true),
                                                exchangeGoods(
                                                    i + 1,
                                                    good.goods_coupon
                                                )
                                            ]
                                        "
                                    >
                                        교환하기
                                    </v-btn>
                                </v-card>

                                <!-- </v-card> -->
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-dialog v-model="dialog" max-width="300">
                                <v-card>
                                    <v-card-title class="text-h6">
                                        🥳 교환이 완료되었습니다.
                                    </v-card-title>
                                    <v-card-text class="text-center">
                                        교환된 쿠폰은
                                        <strong>마이페이지</strong>에서
                                        <br />확인 가능합니다.
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="dialog = false"
                                        >
                                            확인
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
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
            user: {},
            value: 0,
            overlay: false,
            coupon: [],
            drink: []
        }
    },
    setup() {},
    created() {
        this.getUser()
    },
    mounted() {
        this.showGoods()
    },
    unmounted() {},
    methods: {
        async showGoods() {
            this.goods = await this.$api('/trade', 'get')

            await this.$api('/users', 'get').then(res => {
                for (var user of res) {
                    if ((user.user_account = this.$store.state.web3.coinbase)) {
                        this.user = user
                    }
                }
            })
        },
        tradeCompleted() {},

        // 트레이드 버튼 클릭시 쿠폰과 상품이 교환된다
        async exchangeGoods(goodId, goodsCoupon) {
            // 보유 쿠폰 개수가 교환할 상품의 쿠폰 개수보다 많아야 한다
            await this.$api('/exchange', 'post', {
                param: {
                    goods_id: goodId,
                    user_account: this.$store.state.web3.coinbase,
                    user_coupon: goodsCoupon
                }
            })
        },
        async getUser() {
            var result = await this.$api('/user', 'post', {
                param: '0x15B21E6b74c88AC8cA39F9e3Ad4B2ff5Faccc513'
            })
            this.coupon = result
        },

        async goodsDrink() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (
                        item.goods_id === 1 ||
                        item.goods_id === 3 ||
                        item.goods_id === 15
                    ) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        },
        async goodsBread() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (item.goods_id === 2 || item.goods_id === 5) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        },
        async goodsIcecream() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (item.goods_id === 4) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        },
        async goodsFood() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (
                        item.goods_id === 6 ||
                        item.goods_id === 7 ||
                        item.goods_id === 8
                    ) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        },
        async goodsMart() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (item.goods_id === 13 || item.goods_id === 14) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        },
        async goodsGiftCard() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (
                        item.goods_id === 9 ||
                        item.goods_id === 10 ||
                        item.goods_id === 11
                    ) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        },
        async goodsMovie() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                res.forEach(item => {
                    if (item.goods_id === 12) {
                        this.goods.push(item)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                })
            })
        }
    }
}
</script>
<style scoped>
.img-bn-class {
    display: flex;
    align-items: center;
    justify-content: center;
}
.hi {
    position: absolute;
    left: 28%;
}

.trade-bg-color {
    background-color: #f8f8f9;
}

.border {
    top: 250px;
    left: 23.5px;
}
</style>
