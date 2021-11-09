<template>
    <!-- 버튼 -->
    <v-container fluid>
        <v-container class="my-10">
            <v-btn
                @click="allSurvey"
                class="ma-5"
                elevation="5"
                color="purple lighten-1"
                dark
                large
            >
                전체 설문
            </v-btn>

            <v-btn disabled elevation="2">참여 가능한 설문</v-btn>

            <!-- <v-btn
                @click=";[matchSurvey(), canSurvey()]"
                elevation="5"
                color="purple lighten-1"
                dark
                large
            >
                <!-- {{ hello }} -->
                참여 가능한 설문
            </v-btn> -->
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
                    <v-card elevation="3" class="mx-auto" max-width="344">
                        <!-- {{ $vuetify.breakpoint.name }} -->
                        <!-- <v-img>{{ d.survey_image_path }}</v-img> -->
                        <router-link
                            class="text-decoration-none"
                            :to="`/survey?surveyId=${d.survey_id}`"
                        >
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
                            설문 기간 <br />
                            {{ d.survey_start_date }}
                            ~ {{ d.survey_end_date }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                                @click="d.survey_isShow = !d.survey_isShow"
                            >
                                상세 내용
                            </v-btn>

                            <v-spacer></v-spacer>
                            <v-btn
                                icon
                                @click="d.survey_isShow = !d.survey_isShow"
                            >
                                <v-icon>{{
                                    isShow
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="d.survey_isShow">
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
import survey from './survey.json'
import vc from './vc.json'

export default {
    name: 'PossibleView',

    data: () => ({
        vc,
        survey,
        vcItemList: [],
        passSurveyList: [],
        isShow: false,
        surveys: [],
        proofSurveys: []
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
        this.getVC()
        // this.$api('survey')

        // 첫 화면에 보여진다
        this.getSurvey()
    },
    unmounted() {},
    methods: {
        // getVC() {
        //     var vc  = localStorage.adssadadadsa
        //     복호화

        // },
        // 제일 처음 모든 설문지 보여준다
        async getSurvey() {
            // console.log('hi', this.$get())

            this.surveys = await this.$get('/surveys')

            // console.log(this.surveys)
        },

        // 로그인없이 이 페이지에 들어온 경우, 참여가능한설문 버튼 누르면 메타마스크 연결
        async canSurvey() {
            if (this.$store.state.web3.coinbase === '') {
                await this.$store.dispatch('registerWeb3')
                console.log(this.$store.web3)
            }
            // if (this.$store.state.web3.coinbase === '')
            // 설문 조건 넣는 함수
            this.surveys = await this.$api('/survey', 'post', {
                param: this.passSurveyList
            })
            console.log(this.passSurveyList)
        },
        // 모든 설문지 보여준다
        allSurvey() {
            this.getSurvey()
        },

        // vcList.json에서 항목의 key/value를 가져와 vcItemList에 담기
        getVC: function() {
            for (var i = 0; i < vc.verifiableCredentials.data.length; i++) {
                const vcItem =
                    vc.verifiableCredentials.data[i].credentialSubject
                        .infomation.value

                // 항목의 key와 value값 추출
                var key = Object.keys(vcItem)[0]
                var value = vcItem[Object.keys(vcItem)[0]]

                // 추출한 key/value를 객체로 담아 배열에 넣기
                var obj = {}
                obj[key] = value
                this.vcItemList.push(obj)
            }
        },

        // 설문 조건과 VC항목을 비교
        matchSurvey: function() {
            // 설문 아이디별로 불러오기
            for (var i = 0; i < this.survey.length; i++) {
                const condition = this.survey[i].condition
                // 조건을 통과한 항목이 담기는 배열
                const pass = []

                // 설문 아이디에 해당하는 조건 불러오기
                for (var j = 0; j < condition.length; j++) {
                    // 조건을 항목, 연산자, 값으로 나누기
                    const snippet = condition[j].split(' ')
                    // vcList에서 조건의 항목과 일치하는 key 찾기
                    for (const vc of this.vcItemList) {
                        // vcList에 조건의 항목이 있는지 검증
                        if (
                            Object.prototype.hasOwnProperty.call(vc, snippet[0])
                        ) {
                            // 있는 항목의 경우 값이 담김
                            snippet[0] = vc[snippet[0]]
                        }
                    }
                    // check함수에 해당 VC값, 조건 연산자, 조건 값을 넣어 검증하기
                    const checkResult = this.check(
                        snippet[0],
                        snippet[2],
                        snippet[1]
                    )
                    if (checkResult === true || checkResult === 0) {
                        pass.push(snippet[0])
                    }
                }
                // 통과한 항목 개수와 조건 개수와 같을 경우 해당 설문 아이디 통과, 번호 배열에 담기
                if (pass.length === condition.length) {
                    this.passSurveyList.push(i + 1)
                }
            }
        },

        // 값과 연산자와 조건값을 넣어서 true/false or 0/-1 반환
        check(param1, param2, operation) {
            switch (operation) {
                case '>=':
                    return param1 >= param2
                case '<=':
                    return param1 <= param2
                case '===':
                    return param1 === param2
                case '==':
                    return param1.indexOf(param2)
            }
        }
        // methods에 추가하는 함수 넣으면 화면에 보여진다.
        // async createSurvey() {
        //     const r = await this.$post('/surveys', {
        //         survey_title: '문화 생활 관련 조사2',
        //         survey_image_path: 'surveyImg2.jpg',
        //         survey_price: '1,500원',
        //         survey_coupon: '1',
        //         survey_period: '2021.11.15 ~ 2021.11.30',
        //         survey_description: '문화 및 여가 생활 관련 전반적 U&A 설문입니다.',
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
