<template>
    <v-container class="mt-16 bg-half">
        <!-- 왼쪽 layout -->

        <v-row no-gutters>
            <v-col cols="6" md="2" class="trade-bg-color ">
                <v-card width="200" height="141" class="border">
                    <v-card-text>
                        <br />
                        <div class="text-h4 text--primary text-center ">
                            🎫
                            {{ coupon[0].user_coupon }}
                        </div>
                        <br />
                        <p class="text-center">
                            현재 내 쿠폰
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- 오른쪽 layout -->
            <v-col cols="12" sm="10" ma="4">
                <v-card>
                    <!-- <div class="d-flex child-flex" style="justify-content: center;">
            <div
                class="font-weight-bold text-h2 text-center"
                style=" margin:auto;"
            >
                we :DID shop
                <img width="50" src="@/assets/img/trade/cart.png" />
            </div>
        </div> -->
                    <!--쿠폰교환 bn글씨 시작 -->
                    <v-container
                        class="d-flex justify-center align-center"
                        style="margin-left:50"
                    >
                        <img
                            src="@/assets/img/trade/test.png"
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
                                    우리 WeDIDsurvey에서는 의뢰업체들과 협력하에
                                    보다 할인된 가격으로 만나보실 수 있습니다.
                                </div>
                            </div>
                        </div>
                    </v-container>

                    <!-- <p class="text-center">
            weDIDsurvey의 다양한 상품을 할인된 가격으로 실속있게 교환하세요
        </p> -->

                    <!-- <v-container>
            <v-card class="mb-10">
                <v-img src="@/assets/img/banner.jpg"> </v-img>
            </v-card>
        </v-container> -->
                    <!-- <TradeHeader />
        <TradeCategory />
        <TradeMain /> -->
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
                            <!-- class="testLine ma-6 pa-0 " -->
                            <v-col
                                class="testLine text-center"
                                v-for="(good, i) in goods"
                                :key="i"
                            >
                                <v-card-subtitle
                                    class="purple--text font-weight-bold text-subtitle-1 text-center pr-0 pl-0 pb-1 pt-1"
                                >
                                    <v-card width="200" hover height="200">
                                        <v-img
                                            class="white--text align-end"
                                            :src="
                                                require(`@/assets/img/trade/${good.goods_image_path}`)
                                            "
                                        >
                                        </v-img>
                                    </v-card>
                                </v-card-subtitle>
                                <v-card-subtitle>
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
                                </v-card-subtitle>

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
                </v-card>
            </v-col>
            <!-- 오른쪽 layout -->
            <!-- <v-col cols="6" md="2" class="trade-bg-color">
                <v-card width="200" height="141" class="border">
                    <v-card-text>
                        <br />
                        <div class="text-h4 text--primary text-center ">
                            🎫
                            {{ coupon[0].user_coupon }}
                        </div>
                        <br />
                        <p class="text-center">
                            현재 내 쿠폰
                        </p>
                    </v-card-text>
                </v-card>
            </v-col> -->
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
            value: 1,
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
            console.log(this.goods)
            await this.$api('/users', 'get').then(res => {
                console.log(res)
                for (var user of res) {
                    if ((user.user_account = this.$store.state.web3.coinbase)) {
                        this.user = user
                    }
                }
                console.log(this.user)
            })
        },
        tradeCompleted() {},

        // 트레이드 버튼 클릭시 쿠폰과 상품이 교환된다
        async exchangeGoods(goodId, goodsCoupon) {
            // 보유 쿠폰 개수가 교환할 상품의 쿠폰 개수보다 많아야 한다
            // if (this.user.user_coupon >= goodsCoupon) {
            await this.$api('/exchange', 'post', {
                param: {
                    goods_id: goodId,
                    user_account: this.$store.state.web3.coinbase,
                    user_coupon: goodsCoupon
                }
            })
            // } else {
            //     alert('보유하신 쿠폰이 부족합니다')
            // }
        },
        async getUser() {
            var result = await this.$api('/user', 'post', {
                param: '0x15B21E6b74c88AC8cA39F9e3Ad4B2ff5Faccc513'
            })
            this.coupon = result
            console.log('ggggg', this.coupon)
        },

        async goodsDrink() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (
                        item.goods_id === 1 ||
                        item.goods_id === 3 ||
                        item.goods_id === 15
                    ) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        },
        async goodsBread() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (item.goods_id === 2 || item.goods_id === 5) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        },
        async goodsIcecream() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (item.goods_id === 4) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        },
        async goodsFood() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (
                        item.goods_id === 6 ||
                        item.goods_id === 7 ||
                        item.goods_id === 8
                    ) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        },
        async goodsMart() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (item.goods_id === 13 || item.goods_id === 14) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        },
        async goodsGiftCard() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (
                        item.goods_id === 9 ||
                        item.goods_id === 10 ||
                        item.goods_id === 11
                    ) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        },
        async goodsMovie() {
            // goods배열 초기화
            this.goods = []
            await this.$api('/trade', 'get').then(res => {
                console.log('goods', res)
                res.forEach(item => {
                    console.log('bev', item)
                    if (item.goods_id === 12) {
                        this.goods.push(item)
                        console.log(this.goods)
                    }

                    for (var user of res) {
                        if (
                            (user.user_account = this.$store.state.web3.coinbase)
                        ) {
                            this.user = user
                        }
                    }
                    console.log(this.user)
                })
            })
        }
    }
}
</script>
<style scoped>
.grey-bg {
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
}
.img-bn-class {
    display: flex;
    align-items: center;
    justify-content: center;
}
.hi {
    position: absolute;
    left: 30%;
}

.trade-bg-color {
    background-color: #f8f8f9;
}

.border {
    top: 250px;
    left: 40px;
}

.bg-half {
    width: 1523px;
    background: linear-gradient(red 50%, white 50%);
}
</style>
