<template>
    <v-container fluid class="mt-16">
        <v-row no-gutters>
            <!-- 왼쪽 layout -->
            <v-col cols="6" md="2" class="possible-bg-color">
                <v-row justify="center" class="pa-0 mt-15">
                    <v-col cols="2" sm="12" md="10" lg="10">
                        <v-sheet elevation="5">
                            <v-sheet
                                class="pa-3  text-left white--text"
                                color="hsl(258, 98%, 70%)"
                                light
                            >
                                <span>카테고리</span>
                            </v-sheet>
                            <div class="pa-4">
                                <v-chip-group active-class="warning" column>
                                    <v-chip
                                        color="hsl(258, 98%, 70%)"
                                        class="white--text"
                                        v-for="tag in tags"
                                        :key="tag"
                                        @click="category"
                                    >
                                        {{ tag }}
                                    </v-chip>
                                </v-chip-group>
                            </div>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
            <!-- 오른쪽 layout -->
            <v-col cols="12" sm="10" ma="4">
                <!-- <p class="font-weight-bold text-h2 text-center" style="margin:0 auto;">
            we :DID survey
        </p> -->
                <!--조사참여 bn글씨 시작 -->
                <v-container class="d-flex justify-center align-center">
                    <img
                        src="@/assets/img/trade/test.png"
                        alt=""
                        class="img-bn-class"
                    />
                    <!-- style="margin:auto;" -->

                    <div
                        class="hi"
                        style="justify-content:center; display:flex;"
                    >
                        <div
                            align="left"
                            style="color:white; font-size:1.5em;"
                            class="d-flex align-center"
                        >
                            조사참여
                        </div>
                        <div
                            align="left"
                            style="color:white; flex:1; margin-left:20px"
                        >
                            <div style="font-size:1.2em">
                                더 많이 참여하고 더 많이 받아가세요
                            </div>
                            <div style="font-size:0.8em">
                                지금 서베이에 참여하고 더 많은 WeDIDsurvey
                                포인트를 쌓아보세요.
                            </div>
                        </div>
                    </div>
                </v-container>
                <!-- <v-btn color="purple lighten-1" dark @click="decrypt()">복호화</v-btn> -->
                <!-- 지갑 연결 전 참여가능한 설문 버튼 누르면 modal창 뜬다 -->
                <v-dialog v-model="dialog" max-width="340">
                    <v-card>
                        <img
                            class="metamaskCenter"
                            width="50"
                            src="@/assets/img/metamask.svg"
                        />
                        <br />
                        <br />
                        <v-card-text class="text-h6 text-center">
                            지갑 연결 후 맞춤 설문 <br />확인이 가능합니다.
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                color="blue darken-1"
                                text
                                @click=";[connectMask(), (dialog = false)]"
                            >
                                지갑 연결하기
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-container class="mb-5">
                    <v-bottom-navigation
                        :value="value"
                        color="hsl(258, 98%, 70%)"
                        class="d-flex justify-start"
                    >
                        <v-btn
                            class="ml-10 font-weight-bold text-subtitle-1"
                            @click="getSurvey()"
                        >
                            <span>전체 설문</span>
                        </v-btn>

                        <v-btn
                            class="ml-5 font-weight-bold text-subtitle-1"
                            @click="dialog = true"
                            v-if="this.loginStatus == false"
                        >
                            <span>참여 가능한 설문</span>
                        </v-btn>

                        <v-btn
                            class="ml-5 font-weight-bold text-subtitle-1"
                            @click=";[matchSurvey(), canSurvey()]"
                            v-else
                        >
                            <span>참여 가능한 설문</span>
                        </v-btn>
                    </v-bottom-navigation>
                </v-container>

                <!-- 탭 제목 영역 -->
                <!-- <v-toolbar elevation="3" color="#94B3FD"> -->
                <!-- <v-toolbar elevation="3" class="mb-5"> -->
                <!-- 화면이 클 때 -->
                <!-- <v-tabs
                class="hidden-xs-only "
                v-model="tab"
                align-with-title
                center-active
            >
                <v-tabs-slider color="deep-purple accent-3"></v-tabs-slider> -->

                <!-- tap value = 0 -->
                <!-- <v-tab class="font-weight-bold black--text">
                    전체 설문
                </v-tab> -->
                <!-- tap value = -->
                <!-- <v-tab
                    class="font-weight-bold black--text"
                    @click="dialog = true"
                    v-if="this.loginStatus == false"
                >
                    참여 가능한 설문</v-tab
                >
                <v-tab
                    class="font-weight-bold black--text"
                    @click=";[matchSurvey(), canSurvey()]"
                    v-else
                >
                    참여 가능한 설문</v-tab
                > -->

                <!-- tap value = 0 -->
                <!-- <v-tab
                    class="font-weight-bold black--text tabColor"
                    style="font-size:1.1em;"
                >
                    전체 설문
                </v-tab> -->
                <!-- tap value = -->
                <!-- <v-tab
                    class="font-weight-bold black--text"
                    style="font-size:1.1em;"
                    @click="dialog = true"
                    v-if="this.loginStatus == false"
                >
                    참여 가능한 설문</v-tab
                >
                <v-tab
                    class="font-weight-bold black--text"
                    style="font-size:1.1em;"
                    @click=";[matchSurvey(), canSurvey()]"
                    v-else
                >
                    참여 가능한 설문</v-tab
                >
            </v-tabs> -->
                <!-- 화면이 작을 때 -->

                <!-- <v-tabs color="black" class="hidden-sm-and-up" v-model="tab" grow>
                <v-tabs-slider color="primary"></v-tabs-slider> -->
                <!-- tap value = 0 -->
                <!-- <v-tab class="font-weight-bold black--text">
                    전체 설문
                </v-tab> -->
                <!-- tap value = -->
                <!-- <v-tab
                    class="font-weight-bold black--text"
                    @click="dialog = true"
                    v-if="this.loginStatus == false"
                >
                    참여 가능한 설문</v-tab
                >
                <v-tab
                    class="font-weight-bold black--text"
                    @click=";[matchSurvey(), canSurvey()]"
                    v-else
                >
                    참여 가능한 설문</v-tab
                >
            </v-tabs>
        </v-toolbar> -->
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
                            >
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

                                <v-card-title>
                                    {{ d.survey_title }}
                                </v-card-title>
                                <v-chip
                                    close-icon="mdi-close-outline"
                                    color="black"
                                    fill
                                    outlined
                                    class="black--text pa-0 ml-2"
                                >
                                    <v-card-subtitle
                                        class="text-subtitle-1 font-weight-bold"
                                    >
                                        적립금:
                                        {{ d.survey_price }}
                                        | 쿠폰:
                                        {{ d.survey_coupon }}
                                    </v-card-subtitle>
                                </v-chip>
                                <v-card-subtitle>
                                    <!-- <v-icon> mdi-alarm-check </v-icon>소요 시간:
                            {{ d.survey_time.slice(4, 5) }}분
                            <br />
                            <br /> -->
                                    <v-icon v-text="icon"></v-icon>남은 기간
                                    <!-- <v-chip
                                class="ma-1 font-weight-bold text-subtitle-2"
                                color="deep-purple accent-3"
                                outlined
                                small
                            > -->
                                    <!-- dDays배열 dday 오브젝트 하나씩 접근해서 for문 돌린다 -->
                                    <span
                                        class="font-weight-bold deep-purple--text ml-1 mr-2"
                                        >D-{{ dDays[i].dday }}</span
                                    >
                                    <br />
                                    <v-icon>mdi-account-circle-outline</v-icon
                                    >참여 현황<span
                                        class="text-caption font-weight-bold deep-purple--text ml-1"
                                        >{{ d.survey_done_number }} /
                                        {{ d.survey_total_number }}</span
                                    >
                                    <!-- </v-chip> -->

                                    <!-- <br />
                            {{ d.survey_start_date.slice(0, 10) }}
                            ~ {{ d.survey_end_date.slice(0, 10) }} -->
                                    <br />
                                    <v-icon> mdi-alarm-check </v-icon>소요 시간
                                    <span
                                        class="text-caption font-weight-bold deep-purple--text ml-1"
                                        >약

                                        {{
                                            d.survey_time
                                                .slice(3, 5)
                                                .replace(/(^0+)/, '')
                                        }}분</span
                                    >
                                    <!-- <br /><br />
                            <v-icon> mdi-alarm-check </v-icon>소요 시간:
                            {{ d.survey_time.slice(4, 5) }}분 -->
                                </v-card-subtitle>

                                <!-- <v-card-subtitle>
                            {{ d.survey_time }}
                        </v-card-subtitle> -->

                                <v-card-actions>
                                    <v-btn
                                        color="deep-purple accent-3"
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
                        <!-- <Navbar /> -->
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// import getContract1 from '@/service/getContract1'

export default {
    name: 'PossibleView',
    computed: {
        loginStatus() {
            return this.$store.state.loginStatus
        }
    },
    data() {
        return {
            tags: [
                '쇼핑',
                '문화',
                '자동차',
                '음식',
                '아트',
                '주택',
                '인터넷',
                '전자제품'
            ],
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
            web3: {},
            surveyCategory: []
        }
    },

    setup() {},
    created() {
        this.decrypt()
        this.getSurvey()
        this.discountDay()
        this.getIsShow()
        // this.getVcContractInstance()
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
            this.surveys = await this.$api('/surveys', 'get')
            this.getIsShow()
        },

        // 로그인없이 이 페이지에 들어온 경우, 참여가능한설문 버튼 누르면 메타마스크 연결
        async canSurvey() {
            // if (this.$store.state.web3.coinbase === '') {
            //     await this.$store.dispatch('registerWeb3')
            //     console.log(this.$store.web3)
            // }
            // await this.$store.dispatch('registerWeb3')
            // if (this.loginStatus === false) {
            //     await this.$store.dispatch('registerWeb3')
            // }

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
            this.getIsShow()
        },
        // d-day 보여준다
        async discountDay() {
            this.dDays = await this.$api('/date', 'get')
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
            if (this.loginStatus === false) {
                await this.$store.dispatch('registerWeb3')
                console.log(this.$store.state.web3)
                this.$store.commit('loginStatus', true)
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

                this.keyList.push(key)
                obj[key] = value
                this.vcItemList.push(obj)

                // 로컬에서 vC 꺼낸 기록
                // var keykey
                // keykey = keykey + ',' + key
            }
            this.$store.commit('addVcItemList', this.vcItemList)
            console.log('key', this.keyList)

            // 로컬에서 vC 꺼낸 기록
            // console.log('key1', keykey.slice(10))
            // // this.keyList.map((arg) => web3.utils.asciiToHex(arg))
            // this.vcData(keykey.slice(10))
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

        async category() {
            await this.$api('/surveys', 'get').then(res => {
                console.log('hello', res)
                res.forEach(item => {
                    console.log('qq', item)
                    for (var tag of this.tags) {
                        console.log('tag', tag)
                        if ((tag[0] === item.survey_id) === 3) {
                            this.surveyCategory.push(item)
                            console.log('abc', this.surveyCategory)
                        }
                    }
                })
            })
        }

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
        //     console.log('왔다')
        //     this.vC.methods
        //         .vcCall(vcName)
        //         .send({ from: this.$store.state.web3.coinbase })
        //         .then(receipt => {
        //             console.log(receipt)
        //         })
        // }
    }
}
</script>
<style>
.hi {
    position: absolute;
}

.metamaskCenter {
    position: absolute;
    left: 42%;
}

/* .tabColor {
    background-color: purple;
} */

.possible-bg-color {
    background-color: #f8f8f9;
}

.categoryBox {
    top: 120px;
}
</style>
