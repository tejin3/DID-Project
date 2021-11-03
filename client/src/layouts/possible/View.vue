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
            <!-- <v-btn
                @click="createSurvey"
                elevation="5"
                color="warning"
                dark
                x-large
            >
                설문 생성
            </v-btn> -->
        </v-container>

        <v-container>
            <v-row>
                <v-col :key="i" v-for="(d, i) in surveys" sm="12" md="6" lg="3">
                    <v-card
                        elevation="3"
                        class="mx-auto"
                        max-width="344"
                        :height="height"
                    >
                        <!-- {{ $vuetify.breakpoint.name }} -->
                        <!-- <v-img>{{ d.image }}</v-img> -->
                        <router-link class="text-decoration-none" to="/survey">
                            <v-img
                                :src="require(`@/assets/img/${d.image}`)"
                                height="200px"
                            ></v-img>
                        </router-link>

                        <v-card-title class="text-h6">
                            {{ d.title }}
                        </v-card-title>

                        <v-card-subtitle>
                            적립금: {{ d.price }} | 쿠폰: {{ d.coupon }}
                        </v-card-subtitle>

                        <v-card-subtitle>
                            {{ d.period }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                                @click="d.isShow = !d.isShow"
                            >
                                상세 내용
                            </v-btn>

                            <v-spacer></v-spacer>
                            <v-btn icon @click="d.isShow = !d.isShow">
                                <v-icon>{{
                                    isShow
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="d.isShow">
                                <v-divider></v-divider>
                                <v-card-text class="text-justify">
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
        isShow: false,
        surveys: [
            {
                id: 1,
                title: '문화 생활 관련 조사',
                image: 'surveyImg2.jpg',
                price: '1,500원',
                coupon: '1',
                period: '2021.11.15 ~ 2021.11.30',
                detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                id: 2,
                title: '전자 제품 관련 조사',
                image: 'surveyImg1.jpg',
                price: '2,000원',
                coupon: '1',
                period: '2021.11.18 ~ 2021.11.26',
                detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                isShow: false
            },
            {
                id: 3,
                title: '패션 관련 조사',
                image: 'surveyImg3.jpg',
                price: '5,000원',
                coupon: '1',
                period: '2021.11.23 ~ 2021.12.13',
                detail:
                    '무신사를 이용하는 고객들을 대상으로 하는 U&A 설문입니다.',
                isShow: true
            },
            {
                id: 4,
                title: '인터넷 은행 관련 조사',
                image: 'surveyImg4.jpg',
                price: '4,500원',
                coupon: '1',
                period: '2021.11.16 ~ 2021.11.25',
                detail:
                    '인터넷 은행을 이용하는 고객들을 대상으로 하는 U&A 설문입니다.',
                isShow: false
            }
        ]
    }),
    // computed: {
    //     height() {
    //         switch (this.$vuetify.breakpoint.name) {
    //             case 'xs':
    //                 return 100
    //             case 'md':
    //                 return 200
    //             case 'lg':
    //                 return 300
    //             default:
    //                 return 300
    //         }
    //     }
    // },
    setup() {},
    created() {},
    mounted() {
        // 첫 화면에 보여진다
        this.getSurvey()
    },
    unmounted() {},
    methods: {
        // getVC() {
        //     var vc  = localStorage.adssadadadsa
        //     복호화

        // },
        // 제일  처음 모든 설문지 보여준다
        async getSurvey() {
            this.surveys = await this.$get('/surveys')
        },
        // isShow가 true인 것만 보여준다 (조건)
        // 설문 조건 넣는 함수
        async canSurvey() {
            this.surveys = await this.$get('/surveys?isShow=false')
        },
        // 모든 설문지 보여준다
        allSurvey() {
            this.getSurvey()
        }
        // async createSurvey() {
        //     const r = await this.$post('/surveys', {
        //         title: '문화 생활 관련 조사2',
        //         image: 'surveyImg2.jpg',
        //         price: '1,500원',
        //         coupon: '1',
        //         period: '2021.11.15 ~ 2021.11.30',
        //         detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
        //         isShow: true
        //     })

        // console.log(r)
        // 새로 데이터를 만들어줬으니, 다시 한번 전체 설문지 보기
        // this.getSurvey()

        // }
    }
}
</script>
<style></style>
