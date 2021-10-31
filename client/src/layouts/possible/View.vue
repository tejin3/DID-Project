<template>
    <!-- 버튼 -->
    <v-container fluid>
        <v-container class="my-10">
            <v-btn
                @click="allSurvey"
                class="ma-5"
                elevation="5"
                color="warning"
                dark
                x-large
            >
                전체 설문
            </v-btn>
            <v-btn
                @click="canSurvey"
                elevation="5"
                color="warning"
                dark
                x-large
            >
                참여 가능한 설문
            </v-btn>
        </v-container>

        <!-- 전체 설문 -->
        <v-container v-if="showBtn">
            <v-row>
                <v-col :key="i" v-for="(d, i) in surveys" sm="12" md="6" lg="3">
                    <v-card elevation="3" class="mx-auto" max-width="344">
                        <!-- <v-img>{{ d.image }}</v-img> -->
                        <v-img :src="`${d.image}`" height="200px"></v-img>

                        <v-card-title>
                            {{ d.title }}
                        </v-card-title>

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
                            <v-btn icon @click="isShow = !isShow">
                                <v-icon>{{
                                    isShow
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="isShow">
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
        <v-container v-if="showFitBtn">
            <v-row>
                <v-col
                    :key="i"
                    v-for="(d, i) in fitSurveys"
                    sm="12"
                    md="6"
                    lg="3"
                >
                    <v-card elevation="3" class="mx-auto" max-width="344">
                        <v-img :src="`${d.image}`" height="200px"></v-img>
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
        showBtn: true,
        isShow: false,
        surveys: [
            {
                title: '패션 관련 조사',
                image: require('../../assets/img/surveyImg3.jpg'),
                price: '5,000원',
                coupon: '1',
                period: '2021.11.23 ~ 2021.12.13',
                detail:
                    '무신사를 이용하는 고객들을 대상으로 하는 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '인터넷 은행 관련 조사',
                image: require('../../assets/img/surveyImg4.jpg'),
                price: '4,500원',
                coupon: '1',
                period: '2021.11.16 ~ 2021.11.25',
                detail:
                    '인터넷 은행을 이용하는 고객들을 대상으로 하는 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '문화 및 여가 생활 관련 조사',
                image: require('../../assets/img/surveyImg2.jpg'),
                price: '1,500원',
                coupon: '1',
                period: '2021.11.15 ~ 2021.11.30',
                detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                title: '전자 제품 관련 조사',
                image: require('../../assets/img/surveyImg1.jpg'),
                price: '2,000원',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                isShow: false
            }
        ],
        fitSurveys: [
            {
                title: '패션 관련 조사',
                image: require('../../assets/img/surveyImg3.jpg'),
                price: '5,000원',
                coupon: '1',
                period: '2021.11.23 ~ 2021.12.13',
                detail:
                    '무신사를 이용하는 고객들을 대상으로 하는 U&A 설문입니다.'
            },
            {
                title: '문화 및 여가 생활 관련 조사',
                image: require('../../assets/img/surveyImg2.jpg'),
                price: '1,500원',
                coupon: '1',
                period: '2021.11.15 ~ 2021.11.30',
                detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.'
            }
        ]
    }),
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        // 전체 설문 버튼 누를 때 불러올 데이터
        canSurvey() {
            this.showBtn = false
            this.showFitBtn = true
        },
        // 참여 가능한 설문 버튼 누를 때 불러올 데이터
        allSurvey() {
            this.showBtn = true
            this.showFitBtn = false
        }
    }
}
</script>

<style></style>
