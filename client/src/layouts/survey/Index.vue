<template style="border:5px  red solid">
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

        <!--left _ 맞춤설문조사 시작-->

        <!-- style="border:5px  blue solid" -->
        <v-row class="d-flex justify-center mb-6">
            <!-- <div style="border:5px  black solid"> -->
            <v-col md="3">
                <!-- <v-card class="mx-sauto" max-width="400"> -->
                <!-- <v-card>
                    <v-container fluid>
                        <v-row dense>
                            <v-col v-for="card in cards" :key="card.title">
                                <v-card>
                                    <v-img
                                        :src="card.src"
                                        class="white--text align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                        height="150px"
                                    >
                                        <v-card-title
                                            v-text="card.title"
                                        ></v-card-title>

                                        <v-card-title
                                            v-text="card.number"
                                        ></v-card-title>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card> -->

                <br />
                <br />
                <br />
                <br />

                <v-card max-width="400">
                    <!-- <v-card> -->
                    <v-app-bar dark color="pink">
                        <v-icon>mdi-account-check</v-icon>
                        <v-toolbar-title>맞춤 설문조사</v-toolbar-title>
                    </v-app-bar>

                    <v-container>
                        <!-- test  -->
                        <v-row>
                            <v-col
                                v-for="(survey, i) in surveys"
                                :key="i"
                                cols="12"
                            >
                                <v-card
                                    height="250px"
                                    width="mx-auto"
                                    class="d-flex align-center mb-6"
                                >
                                    <div
                                        class="d-flex flex-no-wrap justify-space-between"
                                    >
                                        <div>
                                            <v-card-title>
                                                {{
                                                    survey.survey_title
                                                }}</v-card-title
                                            >
                                            <v-card-subtitle>
                                                {{ survey.survey_description }}
                                            </v-card-subtitle>
                                            <v-btn
                                                @click="모달창열렸니 = true"
                                                v-if="예약여부 == true"
                                                class="ml-5 mt-5 mb-5"
                                                outlined
                                                rounded
                                                color="warning"
                                                small
                                            >
                                                예약하기
                                            </v-btn>
                                            <v-btn
                                                v-else
                                                class="ml-5 mt-5 mb-5 Rezcheckd"
                                                outlined
                                                disabled
                                                rounded
                                                small
                                            >
                                                예약완료
                                            </v-btn>
                                        </div>
                                        <v-img
                                            class="mt-5 mr-5"
                                            :src="
                                                `http://localhost:3000/download/${survey.survey_image_path}`
                                            "
                                            height="100px"
                                            width="150px"
                                        ></v-img>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
            <!--left _ 맞춤설문조사 끝-->

            <v-col md="8" mb-6 class="d-flex align-center mb-6">
                <main-survey />
            </v-col>
            <!-- {{ $store.state.matchedSurvey }}
            {{ surveys }} -->
            <!-- </div> -->
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
    },
    mounted() {
        this.예약여부 = true
    },

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
            console.log(this.surveys)
        },
        changeTest() {
            console.log('test')
            this.예약여부 = false
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
</style>
