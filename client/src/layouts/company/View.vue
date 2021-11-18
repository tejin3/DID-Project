<template>
    <div>
        <!-- 맨 위에 맨트 -->
        <v-container>
            <p class="font-weight-bold text-h2 text-center">
                we :DID result
                <img width="80" src="@/assets/img/company/result.png" />
            </p>
        </v-container>
        <!--쿠폰교환 bn글씨 시작 -->
        <v-container class="d-flex justify-center align-center">
            <img
                src="@/assets/img/trade/test.png"
                alt=""
                class="img-bn-class"
                style="margin:auto;"
            />

            <div class="hi" style="justify-content:center; display:flex;">
                <div
                    align="left"
                    style="color:white; font-size:1.5em;"
                    class="d-flex align-center"
                >
                    설문 결과
                </div>
                <div align="left" style="color:white; flex:1; margin-left:10px">
                    <div style="font-size:1.2em">
                        weDIDsurvey의 정확한 설문 결과를 확인하세요
                    </div>
                    <div style="font-size:0.8em">
                        우리 WeDIDsurvey에서는 설문 참가자들이 제공한 신원증명을
                        확인 할 수 있습니다
                    </div>
                </div>
            </div>
        </v-container>
        <!-- 중간에 네비 처럼 생긴애-->
        <v-container>
            <v-bottom-navigation :value="value" color="deep-purple" horizontal>
                <v-btn>
                    <span>의뢰한 설문 : 4</span>

                    <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn>
                    <span>진행중 설문 : 3</span>

                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn>
                    <span>완료된 설문 : 1</span>

                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-container>
        <!-- 설문결과 카드 -->
        <v-container id="testing">
            <v-row>
                <v-col
                    v-for="(m, n) in surveyData"
                    :key="n"
                    class="d-flex child-flex"
                    cols="3"
                >
                    <v-card
                        style="border:"
                        class="mx-auto my-12"
                        max-width="374"
                        v-on:mouseover=";(m.hover = true), testPlz($event)"
                        @mouseout="m.hover = false"
                    >
                        <template slot="progress">
                            <v-progress-linear
                                color="deep-purple"
                                height="10"
                                indeterminate
                            ></v-progress-linear>
                        </template>

                        <!-- <v-img
                        :src="
                            `https://picsum.photos/500/300?image=${m * 5 + 10}`
                        "
                        :lazy-src="
                            `https://picsum.photos/10/6?image=${m * 5 + 10}`
                        "
                        aspect-ratio="1"
                        class="grey lighten-2"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img> -->

                        <v-card-title
                            >{{ m.survey_title }}
                            <br />
                            [설문번호 :{{ m.survey_id }}]</v-card-title
                        >
                        <v-card-text class="py-0">
                            <v-timeline align-top dense>
                                <!-- <v-timeline-item small>
                                <v-row class="pt-1">
                                    <v-col>
                                        <strong>
                                            설문시작 :
                                            {{
                                                m.survey_start_date.slice(0, 10)
                                            }}</strong
                                        >
                                    </v-col>
                                </v-row>
                            </v-timeline-item> -->
                                <v-timeline-item color="deep-purple">
                                    <v-row class="pt-1">
                                        <v-col>
                                            설문 종료까지
                                            <v-chip
                                                class="ma-1 font-weight-bold"
                                                color="deep-purple accent-3"
                                                outlined
                                                small
                                            >
                                                D-{{ m.dDay }}
                                            </v-chip>
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                                <v-timeline-item small>
                                    <v-row class="pt-1">
                                        <v-col>
                                            <strong>
                                                설문 종료 :
                                                {{
                                                    m.survey_end_date.slice(
                                                        0,
                                                        10
                                                    )
                                                }}</strong
                                            >
                                        </v-col>
                                    </v-row>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>

                        <v-card-text>
                            <div class="mt-6">
                                <v-slider
                                    class="mt-6"
                                    v-model="m.total_complte"
                                    label="설문진행률"
                                    thumb-color="red"
                                    thumb-label="always"
                                    readonly
                                ></v-slider>
                                <!-- v-model="`${n.val}`"
                        :label="`${n.label}`"
                        :label="`${n.color}`" -->
                            </div>
                            <v-chip-group
                                active-class="deep-purple accent-4 white--text"
                                column
                                mandatory
                                v-model="m.selection"
                            >
                                <v-chip small>설문중</v-chip>

                                <v-chip small>설문완료</v-chip>
                            </v-chip-group>
                        </v-card-text>

                        <v-divider
                            color="purple lighten-2 "
                            class="mx-4"
                        ></v-divider>
                    </v-card>

                    <!-- 호버창 -->
                    <v-card
                        class="mx-auto my-12"
                        max-width="374"
                        :style="
                            `position:absolute; z-index: 100; width: ${eventWidth}px; height: ${eventHeight}px; opacity: 0.9; padding: 100px 0 0 0`
                        "
                        @mouseover="m.hover = true"
                        @mouseout="m.hover = false"
                        v-show="m.hover"
                    >
                        <v-card-text>
                            <h1>요청 VC List</h1>
                            <v-chip-group column mandatory>
                                <!-- 요청한 vc list -->
                                <v-chip
                                    small
                                    :key="k"
                                    v-for="(w, k) in m.vcList"
                                >
                                    {{ w }}
                                </v-chip></v-chip-group
                            >
                        </v-card-text>
                        <v-card-text>
                            <v-chip-group column>
                                <!-- 설문조사 번호에 알맞은 vcList 만들기 -->
                                <!-- :key="k" v-for="(w, k) in m.vcList" -->

                                <v-chip>
                                    <!-- 설문 번호랑 완료한 사람 전체 리스트에서 같은 설문 번호 매칭 -->
                                    <DialogScroll
                                        title="vp 확인"
                                        :completePeople="
                                            users.filter(
                                                filtering =>
                                                    filtering.survey_id == n + 1
                                            )
                                        "
                                        :surveyId="m.survey_id"
                                /></v-chip>
                            </v-chip-group>
                        </v-card-text>
                    </v-card>
                    <!-- 호버창 -->
                </v-col>
            </v-row>
        </v-container>
        <!-- <button @click="getSurveyContractInstance()">survey</button> -->
        <!-- <button @click="test()">test</button> -->
        <!-- <div>{{ sC }}</div> -->
        <!-- <button @click="callData1(1)">
            test
        </button> -->
        <!-- <div>{{ callData }}</div>
        <button @click="vcCon()">vc</button> -->
        <!-- <img src="http://localhost:3000/download/surveyImg1.jpg" /> -->
    </div>
</template>
<script>
// import Slider from './Slider.vue'
import DialogScroll from './DialogScroll.vue'
// import getContract from '@/service/getContract'
// import getContract1 from '@/service/getContract1'

export default {
    el: '#testing',
    name: 'CompanyView',
    components: { DialogScroll },
    data() {
        return {
            surveyData: [],
            users: [],
            loading: false,
            companyAccount: '0x12',
            snippet: [],
            finalData: null,
            sC: null,
            callData: null,
            vC: null,
            value: 1,
            hover: false,
            eventWidth: 0,
            eventHeight: 0
        }
    },
    setup() {},
    created() {
        this.init()
    },
    mounted() {},
    unmounted() {},
    methods: {
        async init() {
            try {
                // 1. 회사 데이터를 불러와서 저장한다.
                const surveys = await this.$api('/survey/company', 'post', {
                    param: [this.companyAccount]
                })
                console.log(surveys)

                // 2. 설문지 조건들을 요청한다.
                const len1 = surveys.length
                const surveyId1 = []
                for (let ii = 0; ii < len1; ii++) {
                    surveyId1.push(parseInt(surveys[ii].survey_id))
                }
                // const output = await this.$api('/conditions', 'get')
                const output = await this.$api('/condition', 'post', {
                    param: surveyId1
                })
                const conditions = output.result
                console.log(conditions)
                this.surveyData = this.matchSurvey(surveys, conditions)
            } catch (err) {
                console.log('설문지 및 설문지 조건 데이터 불러오기 실패')
            }

            try {
                // 3. 완료된 목록을 불러와서 저장한다.
                this.users = await this.$api('/completes', 'get')
                console.log(this.users)
            } catch (err) {
                console.log('유저 데이터 불러오기 실패')
            }
        },
        matchSurvey(surveys, conditions) {
            const len = surveys.length

            for (let i = 0; i < len; i++) {
                var surveyId = parseInt(surveys[i].survey_id)
                var conditionId = parseInt(conditions[i].survey_id)

                // survey의 id랑 condition의 id랑 비교
                if (surveyId === conditionId) {
                    // 먼저 더미 배열 하나 생성
                    var vcList = []
                    var tempCondition = conditions[i].condition
                    // vc 정보만 잘래내서 배열에 담음
                    for (const vc of tempCondition) {
                        var key = vc.split(' ')[0]
                        vcList.push(key)
                    }
                    // 중복되는 애들 합친뒤 다시 배열 형태로 바꿔서 저장
                    var tempArray = new Set(vcList)
                    surveys[i].vcList = Array.from(tempArray)
                    surveys[i].hover = false
                }
            }

            return surveys
        },
        testPlz: function(event) {
            if (
                event.target.offsetParent._prevClass ===
                'mx-auto my-12 v-card v-sheet theme--light'
            ) {
                console.log('안녕')
                this.eventWidth = event.target.offsetParent.offsetWidth
                this.eventHeight = event.target.offsetParent.offsetHeight
            }

            //             if(event.target.offsetParent){
            // this.eventWidth = event.target.offsetParent.offsetWidth
            //             this.eventHeight = event.target.offsetParent.offsetHeight
            //             }
        }
        // surveyCon() {
        //     this.$store.dispatch('getSurveyContractInstance')
        //     // await this.$store.dispatch('web3Register')
        // },
        // vcCon() {
        //     this.$store.dispatch('getVcContractInstance')
        //     // await this.$store.dispatch('web3Register')
        // },
        // test() {
        //     console.log('hello')
        //     console.log(this.$store.state.surveyContract._address)

        //     this.sC = this.$store.state.surveyContract
        // },
        // 설문조사
        // getSurveyContractInstance() {
        //     console.log('startSurvey')
        //     var getContract21 = getContract()
        //     this.sC = getContract21
        //     console.log('surveyContractInstance', this.sC)
        //     this.sC.events.addUser({}, async (error, event) => {
        //         console.log(error)
        //         console.log(event)
        //         await this.$api('/CompletePeople', 'post', {
        //             param: {
        //                 survey_id: event.returnValues[0],
        //                 user_account: event.returnValues[1]
        //             }
        //         })
        //         // // 설문조사 번호
        //         // event.returnValues[0]
        //         // // 설문조사 완료한 사람의 주소
        //         // event.returnValues[1]
        //     })
        // },
        // callData1(_num) {
        //     this.sC.methods
        //         .recordSurvey(_num)
        //         .send({ from: '0xdD04984fbCBb732fe2C23fd40157619cad9b2511' })
        //         .then(receipt => {
        //             console.log(receipt)
        //         })
        // },
        // // 설문조사
        // // vc 요청
        // getVcContractInstance() {
        //     console.log('startVc')
        //     var getContract21 = getContract1()
        //     this.vC = getContract21
        //     console.log('vcContractInstance', this.vC)
        //     this.vC.events.vcCallApprovals({}, async (error, event) => {
        //         console.log(error)
        //         console.log(event)
        //         // // vc 요청한 사람 계정
        //         // event.returnValues[0]
        //         // // 요청한 vc 이름
        //         // event.returnValues[1]
        //         // // 요청한 시간
        //         // event.returnValues[2]
        //     })
        // },
        // vcData(vcName) {
        //     this.vC.methods
        //         .vcCall(vcName)
        //         .send({ from: '0xEd0d5B8250554Ca244e66b79A10252B9D804E979' })
        //         .then(receipt => {
        //             console.log(receipt)
        //         })
        // }
        // vp 요청 기록
    }
}
</script>
