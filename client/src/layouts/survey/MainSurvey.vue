<template>
    <!-- https://github.com/Jeongseup/Course-Evaluation-System/blob/main/client/src/views/AnswerTable.vue -->
    <!--오른쪽 설문조사 시작 -->
    <div>
        <v-card
            style="width: 100%; height: 100%; subheading mt-16 "
            elevation="16"
        >
            <!-- <v-carousel hide-delimiters v-model="model" :continuous="false"> -->
            <v-carousel
                v-model="model"
                :continuous="false"
                style="width: 800px; height: 500px; mt-16 subheadings"
            >
                <!--continuous="continuous"를 준 이유 : enter 자꾸 넘어가서 시작과 동시에적용될 수 있도록 created()적용해줬다-->
                <v-parallax
                    style="height:100%;"
                    aspect-ratio="1.4"
                    src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fkbdmaster%2F90145613585&psig=AOvVaw1gT0aOnn-kx_aR0kdPrUtB&ust=1637132177018000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj4wOemnPQCFQAAAAAdAAAAABAD"
                >
                    <!-- style="width: 100%; height: 100%; " -->
                    <v-carousel-item
                        v-for="(question, i) in questions"
                        :key="i"
                    >
                        <div style="font-size: 2.5em; margin-top:50px;">
                            <!-- <div class="text-h3 mt-10 ml-5"> -->
                            {{ question.quesiton_order }}.
                            {{ question.quesiton_content }}
                            <!-- {{ model }} 0~5개 총 6개 -->
                            <!-- </div> -->
                        </div>

                        <!-- {{ t_orders[i] }}

                        <p v-for="(orders, i) in t_orders[i]" :key="i">
                            {{ orders }}
                        </p> -->
                        <!-- radios로 default 설정합니다.-->

                        <v-radio-group
                            class="d-flex align-center mb-6 "
                            v-model="radios"
                            v-if="model < questions.length - 1"
                        >
                            <v-radio
                                class="ml-10 mt-6 "
                                color="orange lighten-1"
                                :value="t_order.uniq"
                                @click="checkRadioUnique"
                                v-for="(orders, i) in t_orders[i]"
                                :key="i"
                            >
                                <template v-slot:label>
                                    <div>
                                        <h3>
                                            {{ orders }}
                                        </h3>
                                    </div>
                                </template>
                            </v-radio>
                        </v-radio-group>
                        <v-text-field
                            v-else
                            class="d-flex align-center"
                            flat
                            height="100"
                            v-model="userInput"
                            color="yellow  darken-2"
                            label="입력해주세요"
                            placeholder="Start_nexting..."
                            loading
                        >
                        </v-text-field>
                    </v-carousel-item>
                    <div
                        style="margin-bottom:20%;"
                        align="center "
                        justify="space-around"
                        class="position"
                    >
                        <v-btn
                            @click="complete"
                            color="#9568FD"
                            dark
                            class="my-2 mb-1 "
                            x-large
                            elevation="7"
                        >
                            확인
                        </v-btn>
                    </div>
                </v-parallax>
            </v-carousel>
        </v-card>

        <!-- test -->
        <!-- <v-card
            style="width: 100%; height: 100%; subheading mt-16 "
            elevation="16   "
        >
            <v-carousel style="width: 1000px; height: 800px; mt-16 subheadings">
                <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    style="width: 100%; height: 100%;"
                >
                <v-parallax
                    style="height:100%;"
                    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                    aspect-ratio="1.4"
                ></v-parallax>
                </v-carousel-item>
            </v-carousel>
        </v-card> -->
        <br />
        <SurveyModal
            :dialog="dialog"
            :dialog2="dialog2"
            :vp="vp"
            :price="price"
            v-if="dialog"
            @next-modal=";(dialog2 = true), (dialog = false)"
        ></SurveyModal>
        <SurveyModal
            :dialog="dialog"
            :dialog2="dialog2"
            :price="price"
            :coupon="coupon"
            v-if="dialog2"
            @close-modal="dialog2 = false"
        ></SurveyModal>
        {{ this.$store.state.matchedSurvey }}
        <v-btn color="primary" dark @click.stop="dialog = true">open</v-btn>
    </div>

    <!--오른쪽 설문조사 끝-->
</template>

<script>
import SurveyModal from './Modal.vue'
import vc from '../possible/vc.json'
import getContract from '@/service/getContract'

export default {
    name: 'MainSurvey',
    components: { SurveyModal },
    data() {
        return {
            items: [
                {
                    src:
                        'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ],
            sC: null,
            t_order: 0, // t_orders에서 가져온  { } 하나를 관리
            radios: 0,
            vc,
            questions: null,
            value: '',
            custom: true,
            userInput: '',
            answers: ['test'],
            dialog: false,
            dialog2: false,
            model: 0,
            condition: {},
            vp: [],
            price: 0,
            coupon: 0,
            t_orders: [
                // 질문1 아래는, 질문1에대한 질문지?
                {
                    // uniq: 0,
                    // 1번문제
                    question1: '1~2회',
                    question2: '2~3회',
                    question3: '5회',
                    question4: '7회 이상'
                },
                {
                    // 2번문제
                    question1: '매우좋다',
                    question2: '좋다',
                    question3: '보통이다',
                    question4: '그저그렇다'
                },

                {
                    // 3번문제
                    question1: '50000원 ~ 100000원',
                    question2: '100000원 ~ 300000원',
                    question3: '300000원 ~ 500000원',
                    question4: '500000원 이상'
                },
                {
                    // 4번문제
                    question1: '오프라인 매장 유무',
                    question2: '후기',
                    question3: '지인추천',
                    question4: '인지도'
                },
                {
                    // 5번문제
                    question1: '매우 만족한다',
                    question2: '만족한다',
                    question3: '보통이다',
                    question4: '인지도'
                }
            ]
            // continuous = false

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
        // this.questionsId = this.$route.query.question_id

        this.surveyId = this.$route.query.surveyId
        this.getQuestions()
        this.userInput = ''
        this.answerValue = []
        this.answers = []
        this.getSurveyById()
        this.test()
        this.getSurveyContractInstance()
    },
    mounted() {
        this.selectedCondition()
    },
    unmounted() {},
    methods: {
        test() {
            console.log(
                'this.t_ordersthis.t_ordersthis.t_ordersthis.t_orders',
                this.t_orders
            )
            // this.model==0 === t_orders [0]
        },
        checkRadioUnique() {
            console.log('checkRadioUnique()', this.radios)
        },
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
            console.log('this.radios.length', this.radios.length)
            if (this.model + 1 !== this.questions.length) {
                console.log(this.questions.length)
                // 만약 model이 this.questions.length와 같지않으면
                console.log('if문_this.model', this.radios)
                var tempObj = {}
                tempObj.questionsId = this.radios
                tempObj.answerValue = this.userInput // userInput을 담는것은 answerValue이다.

                console.log('this.tempObjthis.tempObjthis.tempObj', tempObj)

                this.answers.push(tempObj) // ansers로 가니까 this.tempObj가 초기화

                console.log('this.answers', this.answers)
                this.userInput = ''
                this.model++

                // this.$refs.focus.focus() ->  ref="focus" <-이후에 작업해보기
            } else {
                // 임시객체만든다.
                // var tempObj = {}
                // 키값에 맞춰 값을 넣어준다.
                // tempObj.questionsId = this.questionsId
                // tempObj.answers = this.answers[0]
                tempObj = {}
                tempObj.questionsId = this.model
                tempObj.answerValue = this.userInput

                this.answers.push(tempObj)
                console.log(' this.answers.push', this.answers)
                this.userInput = ''

                this.$api('/answers', 'post', {
                    param: {
                        answers: this.answers,
                        // {
                        //     questionsId: this.questionsId,
                        //     answer: this.answers
                        // }
                        userAccount: this.$store.state.web3.coinbase,
                        surveyId: this.surveyId
                    }
                })
                this.callData1(this.surveyId)
            }
        },

        getSurveyContractInstance() {
            console.log('startSurvey')
            var getContract21 = getContract()
            this.sC = getContract21
            console.log('surveyContractInstance', this.sC)
            this.sC.events.addUser({}, async (error, event) => {
                console.log(error)
                console.log(event)
                await this.$api('/CompletePeople', 'post', {
                    param: {
                        survey_id: event.returnValues[0],
                        user_account: event.returnValues[1]
                    }
                })
                // // 설문조사 번호
                // event.returnValues[0]
                // // 설문조사 완료한 사람의 주소
                // event.returnValues[1]
            })
        },
        callData1(_num) {
            this.sC.methods
                .recordSurvey(_num)
                .send({ from: this.$store.state.web3.coinbase })
                .then(receipt => {
                    console.log(receipt)
                })
        },
        // submit() {
        //     console.log(this.model, this.question, this.i)
        // },

        // 선택한 설문 조건 가져오기
        async selectedCondition() {
            var surveyIdArray = []
            surveyIdArray.push(parseInt(this.surveyId))
            this.condition = await this.$api('/condition', 'post', {
                param: surveyIdArray
            })

            // 가져온 설문 조건에 해당하는 VC 항목 필터링해서 배열에 담기
            const vcItemList = this.$store.state.vcItemList
            const rawVp = []
            for (var i = 0; i < this.condition.result.condition.length; i++) {
                const snippet = this.condition.result.condition[i].split(' ')
                const result = vcItemList.filter(
                    e => Object.keys(e)[0] === snippet[0]
                )
                rawVp.push(result[0])
            }

            // vp 배열의 중복값 제거
            this.vp = rawVp.filter((element, index) => {
                return rawVp.indexOf(element) === index
            })
            console.log(this.vp)
        },

        // 해당 설문의 보상 포인트와 쿠폰을 가져온다
        async getSurveyById() {
            console.log(this.surveyId)
            try {
                const survey = await this.$api('/survey', 'post', {
                    param: [this.surveyId]
                })
                this.price = survey[0].survey_price
                this.coupon = survey[0].survey_coupon
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style>
.position {
    /* background: greenyellow; */
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    margin-top: 17%;
    transform: translate(-50%, -50%);
}
.title-style {
    background: hotpink;
}
</style>
