<template>
    <v-row>
        <v-col
            v-for="(n, m) of surveyData"
            :key="n"
            class="d-flex child-flex"
            cols="4"
        >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-img
                    :src="`https://picsum.photos/500/300?image=${m * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${m * 5 + 10}`"
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
                        surveyData[m].survey_count
                    }}]</v-card-title
                >
                <v-card-text class="py-0">
                    <v-timeline align-top dense>
                        <v-timeline-item color="teal lighten-3" small>
                            <v-row class="pt-1">
                                <v-col>
                                    <strong>{{
                                        surveyData[m].survey_start_date.slice(
                                            0,
                                            10
                                        )
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
                                    test1.filter(
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
        <button @click="init()">hello</button>
    </v-row>
</template>
<script>
// import Slider from './Slider.vue'
import DialogScroll from './DialogScroll.vue'
export default {
    name: 'CompanyView',
    components: { DialogScroll },
    data() {
        return {
            loading: false,
            ex3: {
                val: 50
            },
            surveyData: [],
            test1: [],
            test2: [],
            companyAccount: '0x12',
            snippet: [],
            condition1: []
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.init()
    },
    unmounted() {},
    methods: {
        async init() {
            await this.$api('/survey/company', 'post', {
                param: [this.companyAccount]
            }).then(result => {
                console.log('hello', result)
                this.surveyData = result
            })
            await this.$api('/completes', 'get').then(result => {
                console.log(result)
                this.test1 = result
            })
            await this.$api('/conditions', 'get').then(result => {
                // console.log('test2', result)
                this.test2 = result.result
                console.log('test2', this.test2)
            })
            this.matchSurvey2()
        },
        matchSurvey2() {
            const oTest2 = {}
            for (const item of this.test2) {
                oTest2[item.survey_id] = item
            }

            console.log('oTest2', oTest2)
            const data = this.surveyData

            this.matchSurvey3(data, oTest2)
        },
        matchSurvey3(data, oTest2) {
            for (const item of data) {
                if (oTest2[item.survey_id]) {
                    item.vcList = []

                    for (const vc of oTest2[item.survey_id].condition) {
                        item.vcList.push(vc.split(' ')[0])
                    }
                    var myArray = new Set(item.vcList)
                    console.log('aa', myArray)
                    item.vcList = Array.from(myArray)
                    console.log('bb', item.vcList)
                }
            }
            this.surveyData = data
            console.log('1', this.surveyData)
            console.log('2', this.surveyData[0])
            console.log('3', this.surveyData[0].vcList)
            console.log('4', this.surveyData[0].vcList[0])
        }
    }
}
</script>
