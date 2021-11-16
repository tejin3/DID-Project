<template>
    <v-sheet>
        <!-- <v-container class="fill-height"> -->
        <v-container>
            <!-- defalut cols is 12 -->
            <!-- 탭 제목 영역 -->
            <v-toolbar elevation="3" color="#94B3FD">
                <!-- 화면이 클 때 -->
                <v-tabs
                    class="hidden-xs-only"
                    v-model="tab"
                    align-with-title
                    center-active
                    dark
                >
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <!-- tap value = 0 -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-account-box</v-icon>
                        개인정보
                    </v-tab>
                    <!-- tap value = -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-tag</v-icon>
                        쿠폰함</v-tab
                    >
                </v-tabs>
                <!-- 화면이 작을 때 -->
                <v-tabs class="hidden-sm-and-up" v-model="tab" grow>
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <!-- tap value = 0 -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-account-box</v-icon>
                        개인정보
                    </v-tab>
                    <!-- tap value = -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-tag</v-icon>
                        쿠폰함</v-tab
                    >
                </v-tabs>
            </v-toolbar>
            <!-- 탭 컨텐츠 영역 -->
            <v-card elevation="3" max-height="500px" height="500px">
                <v-tabs-items v-model="tab">
                    <!-- tap value = 0, 개인정보 탭 일 때 -->
                    <v-tab-item>
                        <v-row>
                            <v-col cols="6" class="px-10 py-5" height="400px">
                                <v-img
                                    src="@/assets/img/mypage/main.jpg"
                                ></v-img
                                >0x965ca4F0648c223C3B09e1E8bA46F9f71f7df1b8
                            </v-col>
                            <v-col cols="6" class="px-10 py-5">
                                <v-container>
                                    <v-row dense>
                                        <v-col cols="12" class="pt-6">
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-card-title
                                                        class="text-h5"
                                                    >
                                                        나의 보상
                                                    </v-card-title></v-col
                                                >
                                                <v-col
                                                    cols="6"
                                                    class="d-flex justify-end"
                                                    ><v-btn color="#FEF9EF"
                                                        >적립금 신청</v-btn
                                                    ></v-col
                                                >
                                            </v-row>
                                            <v-progress-linear
                                                color="#94B3FD"
                                                rounded
                                                value="100"
                                                class="pb-5"
                                            ></v-progress-linear>
                                            <v-card-subtitle class="text-h5">
                                                <v-icon x-large color="#1597E5">
                                                    mdi-file-powerpoint-box
                                                </v-icon>
                                                4500 포인트
                                                <v-icon x-large color="#1597E5">
                                                    mdi-tag-multiple
                                                </v-icon>
                                                9 쿠폰</v-card-subtitle
                                            >
                                            <v-progress-linear
                                                color="#94B3FD"
                                                rounded
                                                value="100"
                                                class="py-5"
                                            ></v-progress-linear>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-card
                                                color="#FFB085"
                                                height="150px"
                                            >
                                                <v-card-title class="text-h5">
                                                    참여완료한 설문
                                                </v-card-title>
                                                <v-card-subtitle class="text-h4"
                                                    ><v-text
                                                        class="blue--text font-weight-bold"
                                                        >22</v-text
                                                    >개</v-card-subtitle
                                                >
                                                <Icon />
                                            </v-card>
                                        </v-col>

                                        <v-col cols="6">
                                            <v-card
                                                color="#FEF9EF"
                                                height="150px"
                                            >
                                                <v-card-title class="text-h5">
                                                    참여가능한 설문
                                                </v-card-title>
                                                <v-card-subtitle class="text-h4"
                                                    ><v-text
                                                        class="blue--text font-weight-bold"
                                                        >10</v-text
                                                    >개</v-card-subtitle
                                                >
                                                <v-card-actions>
                                                    <v-btn>
                                                        지금 하러가기
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-card
                                                color="#FEF9EF"
                                                height="150px"
                                            >
                                                <v-card-title class="text-h5">
                                                    예약한 설문
                                                </v-card-title>
                                                <v-card-subtitle class="text-h4"
                                                    ><v-text
                                                        class="blue--text font-weight-bold"
                                                        >3</v-text
                                                    >개</v-card-subtitle
                                                >
                                                <v-card-actions>
                                                    <v-btn>
                                                        지금 하러가기
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-card
                                                color="#FEE440"
                                                height="150px"
                                            >
                                                <v-card-title class="text-h5">
                                                    보유한 VC
                                                </v-card-title>
                                                <v-card-subtitle class="text-h4"
                                                    ><v-text
                                                        class="blue--text font-weight-bold"
                                                        >10</v-text
                                                    >개</v-card-subtitle
                                                >
                                            </v-card>
                                        </v-col>

                                        <v-col
                                            v-for="(item, i) in cardItems"
                                            :key="i"
                                            cols="6"
                                        >
                                            <v-card :color="item.color" dark>
                                                <div
                                                    class="d-flex flex-no-wrap justify-space-between"
                                                >
                                                    <div>
                                                        <v-card-title
                                                            class="text-h5"
                                                            v-text="item.title"
                                                        ></v-card-title>

                                                        <v-card-subtitle
                                                            v-text="item.artist"
                                                        ></v-card-subtitle>

                                                        <v-card-actions>
                                                            <v-btn
                                                                v-if="
                                                                    item.artist ===
                                                                        'Ellie Goulding'
                                                                "
                                                                class="ml-2 mt-3"
                                                                fab
                                                                icon
                                                                height="40px"
                                                                right
                                                                width="40px"
                                                            >
                                                                <v-icon
                                                                    >mdi-play</v-icon
                                                                >
                                                            </v-btn>

                                                            <v-btn
                                                                v-else
                                                                class="ml-2 mt-5"
                                                                outlined
                                                                rounded
                                                                small
                                                            >
                                                                START RADIO
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </div>

                                                    <v-avatar
                                                        class="ma-3"
                                                        size="125"
                                                        tile
                                                    >
                                                        <v-img
                                                            :src="item.src"
                                                        ></v-img>
                                                    </v-avatar>
                                                </div>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!-- tap value = 1, 쿠폰 탭일 때 -->
                    <v-tab-item>
                        <br />
                        <v-text class="ma-10 text-h6"
                            >현재, 미사용 쿠폰
                            <v-text class="red--text font-weight-bold">5</v-text
                            >개가 있어요!</v-text
                        >

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
                                        :src="
                                            require(`@/assets/img/trade/${card.src}`)
                                        "
                                    >
                                        <!-- <v-card-title
                                            class="black--text font-weight-bold"
                                            >{{ card.title }}</v-card-title
                                        > -->
                                    </v-img>

                                    <v-card-subtitle class="pb-0 text-center">
                                        {{ card.title }}
                                    </v-card-subtitle>
                                    <v-card-subtitle
                                        class="black--text font-weight-bold"
                                    >
                                        {{ card.menu }}
                                    </v-card-subtitle>
                                    <v-divider></v-divider>
                                    <v-card-text
                                        class="text--primary text-center"
                                    >
                                        유효기간 <br />{{ card.valid }}
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-container>
    </v-sheet>
</template>
<script>
import { Icon } from '@iconify/vue2'

export default {
    components: {
        Icon
    },
    data() {
        return {
            // goods:[],
            // icon: 'mdi-tag',
            tab: null,
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
                    src: 'coupon3.jpg',
                    menu: '민트 초코칩 할리치노 R',
                    point: '2',
                    valid: '2022년 03월 28일'
                },
                {
                    title: '굽네치킨',
                    src: 'coupon7.jpg',
                    menu: '굽네 오리지널+콜라1.25L',
                    point: '5',
                    valid: '2022년 02월 15일'
                },
                {
                    title: '도미노피자',
                    src: 'coupon8.jpg',
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
            ],
            nftItems: [],
            items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
        }
    }

    //     methods:{
    //         async getGoods() {
    //             // console.log('hi', this.$get()

    //             this.goods = await this.$get('/trade')
    //     }
    // }
}
</script>
<style scoped>
/* .testLine {
    border: solid 3px orange;
} */
</style>
<style scoped>
svg {
    font-size: 2rem;
    line-height: 1em;
}
</style>
