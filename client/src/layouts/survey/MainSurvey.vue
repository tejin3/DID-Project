<template>
    <!-- https://github.com/Jeongseup/Course-Evaluation-System/blob/main/client/src/views/AnswerTable.vue -->
    <!--오른쪽 설문조사 시작 -->
    <div>
        <!-- <v-container>
            <v-card>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                >
                    <div v-for="(question, i) in questions" :key="i">
                        <div class="text-h2">
                            {{ question.quesiton_order }},
                            {{ question.quesiton_content }}
                        </div>
                        <v-text-field
                            v-model="answers"
                            color="yellow  darken-2"
                            label="입력해주세요"
                            placeholder="Start_nexting..."
                            loading
                            @keyup.enter="complete"
                        >
                        </v-text-field>
                        <v-row align="center" justify="space-between">
                            <v-btn
                                class="mx-2 ml-7"
                                right
                                fab
                                small
                                color="primary"
                            >
                                <v-icon dark>
                                    mdi-arrow-left-thick
                                </v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-2  mr-7"
                                left
                                fab
                                small
                                color="primary"
                            >
                                <v-icon dark>
                                    mdi-arrow-right-thick
                                </v-icon>
                            </v-btn>
                        </v-row>
                    </div>
                </v-img>
            </v-card>
        </v-container> -->
        <br />
        <v-carousel hide-delimiters v-model="model" :continuous="continuous">
            <!--continuous="continuous"를 준 이유 : enter 자꾸 넘어가서 시작과 동시에적용될 수 있도록 created()적용해줬다-->
            <v-carousel-item v-for="(question, i) in questions" :key="i">
                <v-parallax
                    class="NextQuestion"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                >
                    <div class="text-h2">
                        {{ question.quesiton_order }},
                        {{ question.quesiton_content }}
                    </div>
                    <v-text-field
                        v-model="userInput"
                        color="yellow  darken-2"
                        label="입력해주세요"
                        placeholder="Start_nexting..."
                        loading
                        @keyup.enter="complete"
                    >
                    </v-text-field>
                </v-parallax>
            </v-carousel-item>
        </v-carousel>
        <v-btn @click="submit">
            확인
        </v-btn>

        <SurveyModal
            :dialog="dialog"
            :dialog2="dialog2"
            v-if="dialog"
            @next-modal=";(dialog2 = true), (dialog = false)"
        ></SurveyModal>
        <SurveyModal
            :dialog="dialog"
            :dialog2="dialog2"
            v-if="dialog2"
            @close-modal="dialog2 = false"
        ></SurveyModal>
        <v-btn color="primary" dark @click.stop="dialog = true">open</v-btn>
    </div>
    <!--오른쪽 설문조사 끝-->
</template>

<script>
import SurveyModal from './Modal.vue'

export default {
    name: 'MainSurvey',
    components: { SurveyModal },
    data() {
        return {
            questions: null,
            value: '',
            custom: true,
            userInput: '',
            answers: ['test'],
            dialog: false,
            dialog2: false,
            model: 0

            // check: 11
        }
    },
    computed: {
        progress() {
            return Math.min(100, this.value.length * 10)
        }
    },
    setup() {},
    created() {
        this.surveyId = this.$route.query.surveyId
        this.getQuestions()
        this.continuous = false
    },
    mounted() {},
    unmounted() {},
    methods: {
        async getQuestions() {
            try {
                this.questions = await this.$api('/questions', 'post', {
                    param: [this.surveyId]
                })
                console.log(this.questions[0].quesiton_content)
            } catch (err) {
                console.log(err)
            }
        },
        async complete() {
            if (this.model + 1 !== this.questions.length) {
                console.log('if문_this.model', this.model)
                console.log('if문_this.check', this.check)

                this.answers.push(this.userInput)
                this.userInput = ''
                this.model++
                // this.$refs.focus.focus() ->  ref="focus" <-이후에 작업해보기
            } else {
                this.answers.push(this.userInput)
                this.$api('/answers', 'post', {
                    param: [
                        { answers: this.answers },
                        { userAccount: this.$store.state.web3.coinbase },
                        { questionId: 1 }
                    ]
                })
            }
        }
        // submit() {
        //     console.log(this.model, this.question, this.i)
        // }
    }
}
</script>
