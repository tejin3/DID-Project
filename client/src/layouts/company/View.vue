<template>
    <div>
        <v-row>
            <v-col
                v-for="(n, m) of surveyData"
                :key="n"
                class="d-flex child-flex"
                cols="4"
            >
                <v-card
                    :loading="loading"
                    class="mx-auto my-12"
                    max-width="374"
                >
                    <template slot="progress">
                        <v-progress-linear
                            color="deep-purple"
                            height="10"
                            indeterminate
                        ></v-progress-linear>
                    </template>

                    <v-img
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
                    </v-img>

                    <v-card-title
                        >{{ surveyData[m].survey_title }} <br />[설문번호 :{{
                            surveyData[m].survey_id
                        }}]</v-card-title
                    >
                    <v-card-text class="py-0">
                        <v-timeline align-top dense>
                            <v-timeline-item color="teal lighten-3" small>
                                <v-row class="pt-1">
                                    <v-col>
                                        <strong>{{
                                            surveyData[
                                                m
                                            ].survey_start_date.slice(0, 10)
                                        }}</strong>
                                    </v-col>
                                </v-row>
                            </v-timeline-item>
                            <v-timeline-item color="pink" small>
                                <v-row class="pt-1">
                                    <v-col>
                                        <strong>{{
                                            surveyData[m].survey_end_date.slice(
                                                0,
                                                10
                                            )
                                        }}</strong>
                                    </v-col>
                                </v-row>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>

                    <v-card-text>
                        <div class="mt-6">
                            <v-slider
                                class="mt-6"
                                v-model="surveyData[m].total_complte"
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
                        >
                            <v-chip>설문중</v-chip>

                            <v-chip>설문완료</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>요청 VC List</v-card-title>

                    <v-card-text>
                        <v-chip-group
                            active-class="deep-purple accent-4 white--text"
                            column
                        >
                            <!-- v-for="(n, vc) in vcList" :key="n"  아님-->
                            <!-- 그냥 돌리면됨 -->
                            <v-chip :key="w" v-for="w of surveyData[m].vcList"
                                ><DialogScroll
                                    :title="w"
                                    :completePeople="
                                        users.filter(
                                            filtering =>
                                                filtering.survey_id == m + 1
                                        )
                                    "
                                    :surveyId="surveyData[m].survey_id"
                            /></v-chip>
                            <!-- <v-chip>{{vc}}</v-chip> -->

                            <!-- <v-chip v-if="surveyData[m].vc_age"
                            ><DialogScroll
                                title="나이 자료 요청[300원]"
                                :completePeople="
                                    test1.filter(
                                        filtering =>
                                            filtering.survey_id == m + 1
                                    )
                                "
                                :surveyId="surveyData[m].survey_id"
                        /></v-chip> -->

                            <!-- <v-chip>소득VC[1000원]</v-chip>

                        <v-chip>학력VC[300원]</v-chip> -->

                            <!-- <v-chip><DialogScroll /></v-chip> -->
                        </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <img src="http://localhost:3000/download/surveyImg1.jpg" />
    </div>
</template>
<script>
// import Slider from './Slider.vue'
import DialogScroll from './DialogScroll.vue'
export default {
    name: 'CompanyView',
    components: { DialogScroll },
    data() {
        return {
            surveyData: [],
            users: [],
            loading: false,
            ex3: {
                val: 50
            },
            companyAccount: '0x12',
            snippet: [],
            finalData: null
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
                const output = await this.$api('/conditions', 'get')
                // const output = await this.$api('/conditions', 'post', {
                //     param: [this.companyAccount]
                // })
                const conditions = output.result
                console.log(conditions)
                this.surveyData = this.matchSurvey(surveys, conditions)
            } catch (err) {
                console.log('설문지 및 설문지 조건 데이터 불러오기 실패')
            }

            try {
                // 3. 완료된 목록을 불러와서 저장한다.
                this.users = await this.$api('/completes', 'get')
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

                    for (const vc of tempCondition) {
                        var key = vc.split(' ')[0]
                        vcList.push(key)
                    }

                    var tempArray = new Set(vcList)
                    surveys[i].vcList = Array.from(tempArray)
                }
            }

            return surveys
        }
    }
}
</script>
