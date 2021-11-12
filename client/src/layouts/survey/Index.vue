<template style="border:5px  red solid">
    <v-container style="border:5px  yellow solid">
        <!--left _ 맞춤설문조사 시작-->
        <v-row
            style="border:5px  blue solid"
            class="d-flex justify-center mb-6"
        >
            <!-- <div style="border:5px  black solid"> -->
            <v-col md="3">
                <!-- <v-card class="mx-sauto" max-width="400"> -->
                <v-card>
                    <v-container fluid>
                        <v-row dense>
                            <v-col
                                v-for="card in cards"
                                :questions="card.questions"
                                :key="card.title"
                                :cols="card.flex"
                            >
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
                </v-card>

                <br />
                <br />
                <br />
                <br />

                <!-- <v-card class="mx-sauto" max-width="400"> -->
                <v-card>
                    <v-app-bar dark color="pink">
                        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                        <v-icon>mdi-account-check</v-icon>
                        <v-toolbar-title>맞춤 설문조사</v-toolbar-title>
                        <!-- <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn> -->
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
                                                class="ml-5 mt-5 mb-5"
                                                outlined
                                                rounded
                                                small
                                            >
                                                설문시작
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
                <main-survey style="border:5px  red solid" />
            </v-col>
            <!-- {{ $store.state.matchedSurvey }}
            {{ surveys }} -->
            <!-- </div> -->
        </v-row>
    </v-container>
</template>
<script>
import MainSurvey from './MainSurvey.vue'
export default {
    name: 'SurveyLayout',
    components: { MainSurvey },
    created() {
        this.canSurvey()
    },
    data: () => ({
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
        }
    }
}
</script>
