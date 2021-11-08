<template
    ><div>
        <!-- <div>I'm a Test2<br /></div> -->
        <!-- questions가 배열인데 여기에 들어있는 값들을 question만 찍으면
        그대로 배열안에 객체형식인 key:value로 나온다 그래서 -->
        <div v-for="(question, i) in questions" :key="i">
            <!-- {{ question }} 이렇게하면 안에 한 번 더 접근을 해야되니까 data에 들어가야된다.-->
            {{ question.question }}
        </div>

        <!-- {{questions}} -->

        <v-btn @click="PostTest">Test</v-btn>
        <template>
            <div>
                <v-text-field
                    v-model="answer"
                    label="Main input"
                    :rules="rules"
                    hide-details="auto"
                ></v-text-field>
            </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: '',
    components: {},
    data() {
        return {
            answer: [],
            questions: [],
            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters'
            ]
        }
    },
    setup() {},
    created() {
        // const vm = this
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
    mounted() {},
    unmounted() {},
    methods: {
        PostTest() {
            console.log(this.answer)
            // axios
            //     .post(
            //         'https://ca6ec645-a4d6-4572-82a1-6768e39df010.mock.pstmn.io/getproducList',
            //         {
            //             answer: this.answer[0]
            //         }
            //     )
            //     .then(res => {
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
        }
    }
}
</script>
e
