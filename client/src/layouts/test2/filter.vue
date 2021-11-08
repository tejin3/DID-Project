<template>
    <v-app>
        <div>
            <button @click="inputStore()">vcList만들기</button>
            <button @click="deleteStore()">지우기</button>
            <p>{{ vcItemList }}</p>
        </div>
        <div>
            <button @click="init()">화면 초기화</button>
        </div>
        <div>
            <button @click="matchSurvey()">매칭</button>
            <p>{{ passSurveyList }}</p>
            <p></p>
        </div>
        <!-- 버튼 -->
        <v-container fluid>
            <v-container class="my-10">
                <v-btn
                    @click="getSurvey"
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

            <v-container>
                <v-row>
                    <v-col
                        :key="i"
                        v-for="(d, i) in surveys"
                        sm="12"
                        md="6"
                        lg="3"
                    >
                        <v-card
                            elevation="3"
                            class="mx-auto"
                            max-width="344"
                            v-show="d.isShow"
                        >
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
    </v-app>
</template>
<script>
import survey from './survey.json'
import vc from './vc.json'

export default {
    name: '',
    components: {},
    computed: {
        vcList() {
            return this.$store.state.vcList
        }
    },
    data() {
        return {
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
                    isShow: false,
                    pass: false
                },
                {
                    id: 2,
                    title: '전자 제품 관련 조사',
                    image: 'surveyImg1.jpg',
                    price: '2,000원',
                    coupon: '1',
                    period: '2021.11.18 ~ 2021.11.26',
                    detail: '가전 제품 구입 관련 전반적 U&A 설문입니다.',
                    isShow: false,
                    pass: false
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
                    isShow: false,
                    pass: false
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
                    isShow: false,
                    pass: false
                },
                {
                    id: 5,
                    title: '인터넷 은행 관련 조사',
                    image: 'surveyImg4.jpg',
                    price: '4,500원',
                    coupon: '1',
                    period: '2021.11.16 ~ 2021.11.25',
                    detail:
                        '인터넷 은행을 이용하는 고객들을 대상으로 하는 U&A 설문입니다.',
                    isShow: false,
                    pass: false
                },
                {
                    id: 6,
                    title: '인터넷 은행 관련 조사',
                    image: 'surveyImg4.jpg',
                    price: '4,500원',
                    coupon: '1',
                    period: '2021.11.16 ~ 2021.11.25',
                    detail:
                        '인터넷 은행을 이용하는 고객들을 대상으로 하는 U&A 설문입니다.',
                    isShow: false,
                    pass: false
                }
            ],
            vc,
            survey,
            vcItemList: [],
            passSurveyList: [],
            countComputed: 0
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.getVC()
    },
    unmounted() {},
    methods: {
        getSurvey() {
            for (var e of this.surveys) {
                if (e.pass === true || e.pass === false) {
                    e.isShow = true
                }
            }
        },
        canSurvey() {
            for (var e of this.surveys) {
                if (e.pass === true) {
                    e.isShow = true
                }
            }
        },
        init() {
            for (var e of this.surveys) {
                e.isShow = false
            }
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

        // VC list 항목의 key/value을 담은 배열을 store에 저장
        inputStore: function() {
            this.$store.commit('addVcList', this.vcItemList)
        },
        deleteStore: function() {
            this.$store.commit('deleteVcList')
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
            console.log(this.passSurveyList)
            if (this.passSurveyList.length > 0) {
                for (var k = 0; k < this.passSurveyList.length; k++) {
                    const number = this.passSurveyList[k]
                    console.log(this.passSurveyList)
                    for (var l = 0; l < this.surveys.length; l++) {
                        if (number === this.surveys[l].id) {
                            this.surveys[l].pass = true
                            console.log(this.surveys[l].pass)
                        }
                    }
                }
            }
            for (var survey of this.surveys) {
                console.log(survey.pass)
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
    }
}
</script>
