<template>
    <v-sheet>
        <!-- <v-container class="fill-height"> -->
        <v-container>
            <!-- defalut cols is 12 -->
            <!-- 탭 제목 영역 -->
            <v-toolbar elevation="3">
                <!-- 화면이 클 때 -->
                <v-tabs class="hidden-xs-only" v-model="tab" align-with-title>
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
            <v-card elevation="3">
                <v-tabs-items v-model="tab">
                    <!-- tap value = 0, 개인정보 탭 일 때 -->
                    <v-tab-item>
                        <v-row>
                            <v-col
                                cols="3"
                                class="d-flex justify-center pa-12"
                                v-for="item in personalItems"
                                :key="item"
                            >
                                <v-card
                                    class="mx-auto grey lighten-2"
                                    elevation="6"
                                    width="250"
                                    height="200"
                                >
                                    <v-card-title
                                        class="justify-center font-weight-bold my-3"
                                    >
                                        <p class="text-subtittle">
                                            {{ item.name }}
                                        </p>
                                    </v-card-title>
                                    <v-card-text
                                        class="d-flex justify-center align-bottom my-3"
                                    >
                                        <Icon :icon="item.icon" />
                                        <p class="text-h6 ml-2">
                                            {{ item.value }} {{ item.unit }}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!-- tap value = 1, 소유한 NFT 탭일 때 -->
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
                                            require(`@/assets/img/${card.src}`)
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
            // icon: 'mdi-tag',
            tab: null,
            personalItems: [
                {
                    name: '지급된 이더',
                    value: '7.5',
                    unit: 'ETH',
                    icon: 'mdi:ethereum'
                },
                {
                    name: '지급된 쿠폰',
                    value: '10',
                    unit: '개',
                    icon: 'mdi:ticket-percent'
                },
                {
                    name: '참여가능한 설문',
                    value: '5',
                    unit: '개',
                    icon: 'ri:survey-fill'
                },
                {
                    name: '참여한 설문',
                    value: '20',
                    unit: '개',
                    icon: 'ri:survey-fill'
                }
            ],
            cards: [
                // {
                //     title: 'Favorite road trips',
                //     src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                //     flex: 6
                // },
                // {
                //     title: '스타벅스',
                //     src: '.../assets/img/coupon1.jpg'
                // }
                // {
                //     title: 'Best airlines',
                //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'
                // }
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
            ],
            nftItems: [],
            items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
        }
    },

    computed: {}
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
