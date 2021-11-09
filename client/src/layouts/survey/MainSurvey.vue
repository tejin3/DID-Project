<template>
    <!-- https://github.com/Jeongseup/Course-Evaluation-System/blob/main/client/src/views/AnswerTable.vue -->
    <!--오른쪽 설문조사 시작 -->
    <div>
            <v-carousel hide-delimiters>
                <v-carousel-item v-for="(question, i) in questions" :key="i">
                    <v-parallax
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    >
                        <div class="text-h2">
                            {{ question.quesiton_content }}
                        </div>
                        <!-- <template>
                            <v-container fluid> -->
                        <v-text-field
                            v-model="answers"
                            color="yellow  darken-2"
                            label="입력해주세요"
                            placeholder="Start typing..."
                            loading
                        >
                            <!-- <p v-for="(question, i) in answers" :key="i"></p> -->
                        </v-text-field>
                        <v-btn @click="complete">
                            확인
                        </v-btn>
                        <!-- </v-container>
                        </template> -->
                    </v-parallax>
                </v-carousel-item>
                <!-- <v-card-title v-text="item.question"> </v-card-title> -->
            </v-carousel>
        <div>
            {{ answers }}
        </div>
        <SurveyModal :dialog="dialog" :dialog2="dialog2" v-if="dialog" @next-modal="dialog2=true, dialog=false"></SurveyModal>
         <SurveyModal :dialog="dialog" :dialog2="dialog2" v-if="dialog2" @close-modal="dialog2=false"></SurveyModal>
        <v-btn  color="primary"
      dark @click.stop="dialog=true">open</v-btn>

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
            answers: '',
            dialog: false,
            dialog2: false
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
            console.log('answer is', this.answers)
            //     // await this.$api(url, method, this.answer)

            this.$api('/survey', 'post', {
                param: [
                    {
                        question_id: 1,
                        answer_value: this.answers,
                        answer_account: 'bye'
                    }
                ]
            })
        }

        // this.$api(/)
        // console.log('answer is', this.answers)
        // await this.$api(url, method, this.answer)
    }
}
</script>
