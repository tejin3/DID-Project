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
                {{ hello }}
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
                <v-col :key="i" v-for="(d, i) in survey" sm="12" md="6" lg="3">
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
                                :src="
                                    require(`@/assets/img/${d.survey_image_path}`)
                                "
                                height="200px"
                            ></v-img>
                        </router-link>

                        <v-card-title class="text-h6">
                            {{ d.survey_title }}
                        </v-card-title>

                        <v-card-subtitle>
                            적립금: {{ d.survey_price }} | 쿠폰:
                            {{ d.survey_coupon }}
                        </v-card-subtitle>

                        <v-card-subtitle>
                            {{ d.survey_period }}
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
                                    {{ d.survey_description }}
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
        survey: [],
        hello: ''
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
            console.log('hi', this.$get())

            this.survey = await this.$get('/survey')

            console.log(this.survey)
        },
        // isShow가 true인 것만 보여준다 (조건)
        // 설문 조건 넣는 함수
        async canSurvey() {
            this.hello = 'hello'
            // console.log(this.hello)
            // this.survey = await this.$get('/survey?isShow=false')
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
