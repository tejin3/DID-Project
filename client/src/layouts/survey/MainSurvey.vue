<template>
    <!-- https://github.com/Jeongseup/Course-Evaluation-System/blob/main/client/src/views/AnswerTable.vue -->
    <!--오른쪽 설문조사 시작 -->
    <div>
        <template>
            <v-carousel hide-delimiters>
                <v-carousel-item v-for="(question, i) in questions" :key="i">
                    <v-parallax
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    >
                        <div class="text-h2">
                            {{ question.question }}
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
        </template>
        <div>
            {{ answers }}
        </div>
    </div>
    <!--오른쪽 설문조사 끝-->
</template>

<script>
import axios from 'axios'
export default {
    name: 'MainSurvey',
    components: {},
    data() {
        return {
            value: '',
            custom: true,
            answers: '',
            items: [
                {
                    question: '1.온라인쇼핑을 자주 하는 이유는 무엇입니까?',
                    answer: 'testtext1'
                },
                {
                    question: '2.무신사를 좋아하는 이유는?',
                    answer: 'testtext2'
                },
                {
                    question:
                        '3.다른 온라인 쇼핑몰에 돈을 얼마나 사용하십니까?',
                    answer: 'testtext3'
                },
                {
                    question: '4.쇼핑을 할때 가장 고려하는 점이 무엇입니까?',
                    answer: 'testtext4'
                },
                {
                    question:
                        '설문이 안전하게 전송되었습니다. 참여해주셔서 감사합니다.'
                }
            ]
        }
    },
    computed: {
        progress() {
            return Math.min(100, this.value.length * 10)
        }
    },
    setup() {},
    created() {
        axios
            .get(
                'https://ca6ec645-a4d6-4572-82a1-6768e39df010.mock.pstmn.io/getproducList'
            )
            .then(response => {
                // console.log('response.data', response.data) Object => data:Array 즉, data라는키로 Array값을가지고있따.
                // console.log('response.data.data', response.data.data) Array 배열만 5개 가지고있다.
                console.log('response.data.data', response.data.data)
                // 배열 = Array5개
                this.questions = response.data.data
                // console.log('response', vm.questions)
                console.log('this.response', this.questions)
            })
            .catch(function(error) {
                console.log(error)
            })
    },
    mounted() {
        // this.getQuestion()
    },
    unmounted() {},
    methods: {
        // async getQuestion() {
        // 아직 '/...' 뭐 가져와야될지몰라요-> 정습님한테말씀드리기
        // this.questions = await this.$get('/')
        // console.log(this.questions)
        // }
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
