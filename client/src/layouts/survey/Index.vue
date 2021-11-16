<template>
    <div>
        <div class="black-bg" v-if="모달창열렸니 == true">
            <div class="white-bg">
                <h2>✨예약완료✨</h2>
                <br />
                <p>
                    <strong>'마이페이지 > 개인정보 > 맞춤설문 예약확인'</strong
                    >에 들어가시면<br />
                    예약하신 설문조사를 계속해서 진행하실 수 있습니다.
                </p>
                <br />
                <v-btn
                    @click=";[(모달창열렸니 = false), changeTest()]"
                    color="warning"
                    dark
                    class="my-2"
                    elevation="3"
                    >확인</v-btn
                >
            </div>
        </div>
        <img
            src="../../assets/img/surveyP.png"
            alt=""
            style="width:150px; height:150px; position: absolute; margin:100px; margin-top:-16px;"
        />

        <!--left _ 맞춤설문조사 시작-->
        <!-- style="border:5px  blue solid" -->
        <v-row class="d-flex justify-center mt-5">
            <div class="d-flex justify-center">
                <v-col
                    md="3"
                    class="mt-30"
                    style="width:2px; height=2px; margin-top:110px"
                >
                    <v-card>
                        <!-- <v-card> -->
                        <!-- <v-app-bar dark color="light-blue darken-4"> -->
                        <v-app-bar
                            dark
                            class="d-flex justify-center mb-1"
                            color="#263238"
                            height="40px"
                        >
                            <div>
                                <v-icon>mdi-account-check</v-icon>맞춤 설문조사
                            </div>
                        </v-app-bar>

                        <v-container>
                            <!--맞춤설문조사 그리는 영역  -->
                            <v-row style>
                                <v-col
                                    v-for="(survey, i) in surveys"
                                    :key="i"
                                    cols="12"
                                >
                                    <v-card max-width="180" max-height="150">
                                        <v-img
                                            class="white--text align-end"
                                            height="60px"
                                            :src="
                                                `http://localhost:3000/download/${survey.survey_image_path}`
                                            "
                                        >
                                            <div style="font-size:0.9em;">
                                                {{ survey.survey_title }}
                                            </div>
                                        </v-img>

                                        <v-card-text
                                            class="grey--text text-darken-1 mb-2"
                                        >
                                            <div style="height=40px  ">
                                                <p style="font-size:0.5em;">
                                                    {{
                                                        survey.survey_description
                                                    }}
                                                </p>
                                            </div>
                                        </v-card-text>

                                        {{ survey.isBooked }}
                                        <!-- {{ surveys[i].isBooked }} -->
                                        <!-- {{ surveys }} -->
                                        <!-- {{ surveys[i].survey_id }} -->

                                        <!-- 얘가 지금 따로 놀고있는거?....오키.. -->
                                        <div>
                                            <v-btn
                                                @click="test(i)"
                                                v-if="survey.isBooked == true"
                                                class="ml-2 mb-13 reservationBtn"
                                                outlined
                                                rounded
                                                color="white"
                                                x-small
                                            >
                                                예약하기
                                            </v-btn>
                                            <v-btn
                                                v-else
                                                class="ml-2 disabledBtn"
                                                outlined
                                                disabled
                                                rounded
                                                x-small
                                            >
                                                예약완료
                                            </v-btn>
                                        </div>

                                        <!-- <v-card-actions>
                                        <v-btn color="orange" text>
                                            Share
                                        </v-btn>
                                    </v-card-actions> -->
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
                <!--left _ 맞춤설문조사 끝-->
                <v-col class="d-flex align-center mb-6">
                    <main-survey />
                </v-col>
                <!-- {{ $store.state.matchedSurvey }}
            {{ surveys }} -->
            </div>
        </v-row>
    </div>
</template>
<script>
import MainSurvey from './MainSurvey.vue'
export default {
    name: 'SurveyLayout',
    components: { MainSurvey },
    created() {
        this.canSurvey()
        this.isBooked = true
    },
    mounted() {},

    data: () => ({
        // 예약완료: true,
        모달창열렸니: false,
        surveys: [],
        cards: [
            {
                title: 'Questions',
                number: '12'
            },
            {
                title: 'Time to answer',
                number: '3'
            }
        ]
    }),
    methods: {
        // 맞춤설문지 가져오기
        async canSurvey() {
            this.surveys = await this.$api('/survey', 'post', {
                param: [2, 4]
            })
            console.log('canSurvey', this.surveys) //

            var myObject = {}
            // var surveysNum = this.surveys.length // 0,1 총 2번
            // this.surveys [{},{}]
            // [0] 배열은 무조건 인덱스 !

            for (let i = 0; i < this.surveys.length; i++) {
                this.surveys[i].isBooked = true
                console.log('dfdfdfdfdf2222', this.surveys[i])
                // 배열의 인덱스 0,1 이있는데, 그거에맞춰서
                // 예약하기 버튼을 누른 것이있다면, 예약완료 라고 띄워줌.

                // console.log(this.surveys[i]['isBooked'])
                // break
            }
            console.log('myObject _ for문dddd', myObject)

            // 방금전에 빈객체에 한것처럼,
            // 반복하면서 isBooked = false 를하고, ....
            // myObject.isBooked = false
        },
        changeTest() {
            console.log('test')
            this.isBooked = false
        },
        test(_num) {
            this.모달창열렸니 = true
            this.surveys[_num].isBooked = false
        }
    }
}
</script>
<style>
body {
    margin: 0;
}
div {
    box-sizing: border-box;
}
.black-bg {
    /* position: fixed; */
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    z-index: 2;
}
.white-bg {
    position: absolute;
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 230px;
    border-radius: 10px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
}

.reservationBtn {
    background: #9568fd;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 45px;
}
.disabledBtn {
    background: rgb(192, 192, 192);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 45px;
}
.v-card__text {
    padding: 10px;
}
</style>
