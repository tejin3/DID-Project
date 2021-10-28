<template>
    <!-- 버튼 -->
    <v-container fluid>
        <v-container class="my-10">
            <v-btn
                click="revealAll == true"
                class="ma-5"
                elevation="5"
                color="warning"
                dark
                x-large
            >
                전체 설문
            </v-btn>
            <v-btn
                click="revealPart == true"
                elevation="5"
                color="warning"
                dark
                x-large
            >
                참여 가능한 설문
            </v-btn>
        </v-container>
        <!-- 전체 설문 -->
        <v-container v-if="revealAll === revealAll">
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
        <!-- 맞춤 설문 -->
        <v-container v-if="revealPart === revealPart">
            <v-row>
                <v-col :key="i" v-for="(d, i) in surveys2">
                    <v-card elevation="3" class="mx-auto" max-width="344">
                        <v-img
                            src="@/assets/surveyImg2.jpg"
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
                            <v-btn icon @click="d.show = !d.show">
                                <v-icon>{{
                                    d.show
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="d.show">
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
        revealCard1: true,
        revealCard2: false,
        surveys: [
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '2,000원',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '2,000원',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '2,000원',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '전자 제품 관련 조사',
                image: './assets/surveyImg1.jpg',
                price: '2,000원',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                isShow: false
            }
        ],
        survey2: [
            {
                title: '문화 및 여가 생활 관련 조사',
                image: './assets/surveyImg2.jpg',
                price: '1,500원',
                coupon: '1',
                period: '2021.11.15 ~ 2021.11.30',
                detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '문화 및 여가 생활 관련 조사',
                image: './assets/surveyImg2.jpg',
                price: '1,500원',
                coupon: '1',
                period: '2021.11.15 ~ 2021.11.30',
                detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
                isShow: false
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
