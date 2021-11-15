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
                    class="testLine ma-10 pa-0"
                    v-for="card in cards"
                    :key="card.title"
                >
                    <v-card max-width="200">
                        <v-img
                            class="white--text align-end"
                            height="170px"
                            :src="require(`@/assets/img/${card.src}`)"
                        >
                            <!-- <v-card-title
                                            class="black--text font-weight-bold"
                                            >{{ card.title }}</v-card-title
                                        > -->
                        </v-img>
                        <v-card-subtitle
                            class="purple--text font-weight-bold text-20 text-center pb-1 pt-1"
                        >
                            <v-icon size="small" class="purple--text"
                                >mdi-tag</v-icon
                            >
                            {{ card.point }} 포인트
                        </v-card-subtitle>
                        <v-card-subtitle class="pb-0 pt-0 text-center">
                            {{ card.title }}
                        </v-card-subtitle>
                        <v-card-subtitle
                            class="pb-1 pt-1 black--text font-weight-bold"
                        >
                            {{ card.menu }}
                        </v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-text class="text--primary text-center">
                            <!-- <v-icon size="small">mdi-tag</v-icon>
                            {{ card.point }} 포인트 -->
                            <v-btn text color="deep-purple accent-4">
                                Trade
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
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
            value: 1,
            cards: [
                {
                    title: '스타벅스',
                    src: 'coupon1.jpg',
                    menu: '아이스 카페 아메리카노 Tall',
                    point: '1',
                    valid: '2022년 01월 31일'
                },
                {
                    title: '할리스',
                    src: 'coupon2.jpg',
                    menu: '민트 초코칩 할리치노 R',
                    point: '2',
                    valid: '2022년 03월 28일'
                },
                {
                    title: '굽네치킨',
                    src: 'coupon3.jpg',
                    menu: '굽네 오리지널+콜라1.25L',
                    point: '5',
                    valid: '2022년 02월 15일'
                },
                {
                    title: '도미노피자',
                    src: 'coupon4.jpg',
                    menu: '포테이토(오리지널)L+콜라1.25L',
                    point: '7',
                    valid: '2022년 04월 22일'
                },
                {
                    title: '크리스피크림도넛',
                    src: 'coupon5.jpg',
                    menu: '오리지널 글레이즈드 하프더즌',
                    point: '2',
                    valid: '2021년 12월 31일'
                }
            ]
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
