<template>
    <!-- 버튼 -->
    <v-container fluid>
        <v-container class="my-10">
            <v-btn class="ma-5" elevation="5" color="warning" dark x-large>
                전체 설문
            </v-btn>
            <v-btn elevation="5" color="warning" dark x-large>
                참여 가능한 설문
            </v-btn>
        </v-container>
        <!-- 설문지 카드 섹션 -->
        <v-container>
            <v-row>
                <v-col :key="i" v-for="(d, i) in surveys">
                    <v-card elevation="3" class="mx-auto" max-width="344">
                        <v-img
                            src="@/assets/surveyImg1.jpg"
                            height="200px"
                        ></v-img>

                        <v-card-title> {{ d.title }} </v-card-title>

                        <v-card-subtitle>
                            적립금: {{ d.price }} | 쿠폰: {{ d.coupon }}
                        </v-card-subtitle>

                        <v-card-subtitle>
                            {{ d.period }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn color="orange lighten-2" text>
                                상세 내용
                            </v-btn>

                            <v-spacer></v-spacer>
                            <v-btn icon @click="show = !show">
                                <v-icon>{{
                                    show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>

                                <v-card-text>
                                    {{ d.detail }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'PossibleView',

    data: () => ({
        show: false,
        surveys: [
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '0.03ETH',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.'
                isShow:false
            },
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '0.03ETH',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.'
                isShow:false

            },
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '0.03ETH',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.'
                isShow:false

            },
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '0.03ETH',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.'
                isShow:false
            }
        ]
    }),
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style></style>
