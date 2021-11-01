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
            <v-btn
                @click="createSurvey"
                elevation="5"
                color="warning"
                dark
                x-large
            >
                설문 생성
            </v-btn>
        </v-container>

        <v-container>
            <v-row>
                <v-col :key="i" v-for="(d, i) in surveys" sm="12" md="6" lg="3">
                    <v-card elevation="3" class="mx-auto" max-width="344">
                        <!-- <v-img>{{ d.image }}</v-img> -->
                        <v-img
                            :src="require(`@/assets/img/${d.image}`)"
                            height="200px"
                        ></v-img>

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
        isShow: false,
        surveys: []
    }),
    setup() {},
    created() {},
    mounted() {
        // 첫 화면에 보여진다
        console.log('안녕')

        this.getSurvey()
    },
    unmounted() {},
    methods: {
        // 모든 젤 처음 설문지 보여준다
        async getSurvey() {
            console.log('여기')
            this.surveys = await this.$get('/surveys')
            console.log('여기1')
        },
        // isShow가 true인 것만 보여준다 (조건)
        async canSurvey() {
            this.surveys = await this.$get('/surveys?isShow=true')
            console.log('여기2')
        },
        // 모든 설문지 보여준다
        allSurvey() {
            this.getSurvey()
            console.log('여기3')
        },
        async createSurvey() {
            const r = await this.$post('/surveys', {
                title: '문화 생활 관련 조사2',
                image: 'surveyImg2.jpg',
                price: '1,500원',
                coupon: '1',
                period: '2021.11.15 ~ 2021.11.30',
                detail: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
                isShow: true
            })
            console.log('여기4')

            console.log(r)
            // 새로 데이터를 만들어줬으니, 다시 한번 전체 설문지 보기
            this.getSurvey()
            console.log('여기5')
        }
    }
}
</script>
<style></style>
