<template>
    <!-- 버튼 -->
    <v-container fluid>
        <v-container>
            <p class="font-weight-bold text-h2 text-center">
                we :DID shop
            </p>
            <p class="text-center">
                더 많이 참여하고 더 많이 받아가세요
            </p>
        </v-container>
        <v-btn color="purple lighten-1" dark @click="decrypt()">복호화</v-btn>
        <v-container>
            <!-- 지갑 연결 전 참여가능한 설문 버튼 누르면 modal창 뜬다 -->
            <v-dialog v-model="dialog" max-width="400">
                <v-card>
                    <img width="50" src="@/assets/img/metamask.svg" />
                    <v-card-text class="text-h6 text-center">
                        지갑 연결 후 맞춤 설문 <br />확인이 가능합니다.
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="purple darken-1"
                            text
                            @click=";[connectMask(), (dialog = false)]"
                        >
                            지갑 연결하기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>

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
                <v-tabs-slider color="orange lighten-2"></v-tabs-slider>
                <!-- tap value = 0 -->
                <v-tab class="font-weight-bold">
                    전체 설문
                </v-tab>
                <!-- tap value = -->
                <v-tab
                    class="font-weight-bold"
                    @click.stop="dialog = true"
                    v-if="this.$store.state.web3.coinbase === null"
                >
                    참여 가능한 설문</v-tab
                >
                <v-tab
                    class="font-weight-bold"
                    @click=";[matchSurvey(), canSurvey()]"
                    v-else
                >
                    참여 가능한 설문</v-tab
                >
            </v-tabs>
            <!-- 화면이 작을 때 -->
            <v-tabs class="hidden-sm-and-up" v-model="tab" grow>
                <v-tabs-slider color="primary"></v-tabs-slider>
                <!-- tap value = 0 -->
                <v-tab class="font-weight-bold">
                    전체 설문
                </v-tab>
                <!-- tap value = -->
                <v-tab
                    class="font-weight-bold"
                    @click.stop="dialog = true"
                    v-if="this.$store.state.web3.coinbase === null"
                >
                    참여 가능한 설문</v-tab
                >
                <v-tab
                    class="font-weight-bold"
                    @click=";[matchSurvey(), canSurvey()]"
                    v-else
                >
                    참여 가능한 설문</v-tab
                >
            </v-tabs>
        </v-toolbar>

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
                                    `http://localhost:3000/download/${d.survey_image_path}`
                                "
                                height="200px"
                            ></v-img>
                        </router-link>

                        <v-card-title class="text-h6">
                            {{ d.survey_title }}
                        </v-card-title>
                        <v-chip
                            close-icon="mdi-close-outline"
                            color="grey"
                            fill
                            class="white--text pa-0 ml-2"
                        >
                            <v-card-subtitle class="text-subtitle-1">
                                적립금: {{ d.survey_price }} | 쿠폰:
                                {{ d.survey_coupon }}
                            </v-card-subtitle>
                        </v-chip>
                        <v-card-subtitle>
                            <!-- <v-icon> mdi-alarm-check </v-icon>소요 시간:
                            {{ d.survey_time.slice(4, 5) }}분
                            <br />
                            <br /> -->
                            <v-icon v-text="icon"></v-icon>남은 기간
                            <v-chip
                                class="ma-1 font-weight-bold text-subtitle-2"
                                color="deep-purple accent-3"
                                outlined
                                small
                            >
                                <!-- dDays배열 dday 오브젝트 하나씩 접근해서 for문 돌린다 -->
                                D-{{ dDays[i].dday }}
                            </v-chip>

                            <!-- <br />
                            {{ d.survey_start_date.slice(0, 10) }}
                            ~ {{ d.survey_end_date.slice(0, 10) }} -->
                            <br /><br />
                            <v-icon> mdi-alarm-check </v-icon>소요 시간: 약
                            {{
                                d.survey_time.slice(3, 5).replace(/(^0+)/, '')
                            }}분
                            <!-- <br /><br />
                            <v-icon> mdi-alarm-check </v-icon>소요 시간:
                            {{ d.survey_time.slice(4, 5) }}분 -->
                        </v-card-subtitle>

                        <!-- <v-card-subtitle>
                            {{ d.survey_time }}
                        </v-card-subtitle> -->

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
                                    d.isShow
                                        ? 'mdi-chevron-up'
                                        : 'mdi-chevron-down'
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <!-- xcvxcvxcvxv {{ $store.state.matchedSurvey }} -->
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
import getContract1 from '@/service/getContract1'

export default {
    name: 'PossibleView',

    data() {
        return {
            dialog: false,
            decryptVc: [],
            vc: [],
            vC: null,
            conditions: [],
            vcItemList: [],
            passSurveyList: [],
            surveys: [],
            proofSurveys: [],
            dDays: '',
            icon: 'mdi-calendar-range',
            isShow: false,
            keyList: [],
            web3: {}
        }
    },

    setup() {},
    created() {
        this.decrypt()
        this.getSurvey()
        this.discountDay()
        this.getIsShow()
        this.getVcContractInstance()
    },
    mounted() {
        // this.$api('survey')

        // 첫 화면에 보여진다
        this.getCondition()
    },
    unmounted() {},
    methods: {
        // getVC() {
        //     var vc  = localStorage.adssadadadsa
        //     복호화

        // },
        // 제일 처음 모든 설문지 보여준다
        async getSurvey() {
            // console.log('hi', this.$get()
            this.surveys = await this.$get('/surveys')
        },

        // 로그인없이 이 페이지에 들어온 경우, 참여가능한설문 버튼 누르면 메타마스크 연결
        async canSurvey() {
            if (this.$store.state.web3.coinbase === '') {
                await this.$store.dispatch('registerWeb3')
                console.log(this.$store.web3)
            }

            // 설문 조건 넣는 함수
            await this.$api('/survey', 'post', {
                param: this.passSurveyList
            }).then(res => {
                console.log('whatIsIt', res)
                res.forEach(item => {
                    console.log('kkk', item)
                    this.$set(item, 'isShow', false)
                })
                console.log('hoho', res)
                this.surveys = res
                // this.$set(res[0], 'isShow', false)
                // console.log(res)
                // this.surveys = res
                // console.log('vvv', this.surveys)
            })
            console.log(this.surveys)
        },

        // 모든 설문지 보여준다
        allSurvey() {
            this.getSurvey()
        },
        // d-day 보여준다
        async discountDay() {
            this.dDays = await this.$get('/date')
            // result =>
            // [
            // { dday: 19 },
            // { dday: 15 },
            // { dday: 32 },
            // { dday: 14 },
            // { dday: 17 },
            // { dday: 26 }
            // ]
        },

        // 설문 조건을 가져온다
        async getCondition() {
            this.conditions = await this.$api('/conditions', 'get')
        },

        async connectMask() {
            if (this.$store.state.web3.coinbase === null) {
                await this.$store.dispatch('registerWeb3')
                console.log(this.$store.web3)
            }
        },

        // vcList.json에서 항목의 key/value를 가져와 vcItemList에 담기
        getVC: function() {
            for (
                var i = 0;
                i < this.vc.verifiableCredentials.data.length;
                i++
            ) {
                const vcItem = this.vc.verifiableCredentials.data[i]
                    .credentialSubject.infomation.value

                // 항목의 key와 value값 추출
                var key = Object.keys(vcItem)[0]
                var value = vcItem[Object.keys(vcItem)[0]]

                // 추출한 key/value를 객체로 담아 배열에 넣기
                var obj = {}
                var keykey
                // var keyTohex = key
                // keyTohex = this.web3.utils.asciiToHex(key)
                this.keyList.push(key)
                keykey = keykey + ',' + key
                obj[key] = value
                this.vcItemList.push(obj)
            }
            this.$store.commit('addVcItemList', this.vcItemList)
            console.log('key', this.keyList)
            console.log('key1', keykey.slice(10))

            // this.keyList.map((arg) => web3.utils.asciiToHex(arg))
            this.vcData(keykey.slice(10))
        },

        // 설문 조건과 VC항목을 비교
        matchSurvey: function() {
            // 설문 아이디별로 불러오기
            for (var i = 0; i < this.conditions.result.length; i++) {
                const condition = this.conditions.result[i].condition
                // 조건을 통과한 항목이 담기는 배열
                const pass = []

                // 설문 아이디에 해당하는 조건 불러오기
                for (var j = 0; j < condition.length; j++) {
                    // 조건을 항목, 연산자, 값으로 나누기
                    const snippet = condition[j].split(' ')
                    console.log(snippet)
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

                    console.log(checkResult)
                    if (checkResult === true || checkResult === 0) {
                        pass.push(snippet[0])
                    }
                }
                // 통과한 항목 개수와 조건 개수와 같을 경우 해당 설문 아이디 통과, 번호 배열에 담기
                if (pass.length === condition.length) {
                    this.passSurveyList.push(i + 1)
                }
            }
            this.$store.commit('addMatchedSurvey', this.passSurveyList)
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
        },

        // Local Storage에서 암호화 VC 파일을 불러서 복호화 한다
        async decrypt() {
            this.decryptVc = await window.ethereum.request({
                method: 'eth_decrypt',
                params: [
                    localStorage.getItem('intoVp'),
                    this.$store.state.web3.coinbase
                ]
            })

            // 복호화된 string VC를 다시 Json object로 바꾼다
            this.vc = JSON.parse(this.decryptVc)
            // 복호화 VC를 store에 저장
            this.$store.commit('addDecryptVc', this.vc)
            this.getVC()
        },

        // isShow 넣기
        async getIsShow() {
            await this.$api('/surveys', 'get').then(res => {
                console.log('whatIsIt', res)
                res.forEach(item => {
                    console.log('kkk', item)
                    this.$set(item, 'isShow', false)
                })
                console.log('hoho', res)
                this.surveys = res
                // this.$set(res[0], 'isShow', false)
                // console.log(res)
                // this.surveys = res
                // console.log('vvv', this.surveys)
            })
            console.log(this.surveys)
        },

        getVcContractInstance() {
            console.log('startVc')
            var getContract21 = getContract1()
            this.vC = getContract21
            console.log('vcContractInstance', this.vC)
            this.vC.events.vcCallApprovals({}, async (error, event) => {
                console.log(error)
                console.log(event)
                // // vc 요청한 사람 계정
                // event.returnValues[0]
                // // 요청한 vc 이름
                // event.returnValues[1]
                // // 요청한 시간
                // event.returnValues[2]
            })
        },
        vcData(vcName) {
            console.log('왔다')
            this.vC.methods
                .vcCall(vcName)
                .send({ from: this.$store.state.web3.coinbase })
                .then(receipt => {
                    console.log(receipt)
                })
        }
    }
}
</script>
<style></style>
