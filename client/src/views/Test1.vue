<template>
    <div>
        <div>{{ surveyAbi }}</div>
        <div>{{ vcCallAbi }}</div>
        <button @click="test()">teste</button>
    </div>
</template>
<script>
import surveyAbi from '../contract/surveyAbi.json'
import vcCallAbi from '../contract/vcCallAbi.json'
import Web3 from 'web3'

export default {
    name: '',
    components: {},
    data() {
        return {
            surveyAbi,
            vcCallAbi,
            web3: {},
            surveyCa: '0x6B2F1B687FF1F0fcA519aAf45818e67Afc4137E5',
            surbey_id: 0,
            eventResult: null,
            surveyContract: {}
        }
    },
    setup() {},
    created() {
        this.web3 = new Web3(window.ethereum || Web3.givenProvider)
    },
    mounted() {
        this.first()
    },
    unmounted() {},
    methods: {
        async metamask() {
            await this.$store.dispatch('registerWeb3')
        },
        test() {
            // console.log(this.$store.state.web3.web3)

            console.log(this.$store.state.web3.coinbase)
            console.log(this.$store.state.web3.isInjected)
            console.log(this.$store.state.surveyContract)
        },
        async first() {
            console.log('first')
            // console.log(new this.web3.eth.Contract())
            this.surveyContract = await new this.web3.eth.Contract(
                this.surveyAbi,
                this.surveyCa
            )
            console.log(this.surveyContract)
            this.$store.commit('makeSurveyContract', this.surveyContract)

            // surveyContract.events.addUser({}, function(error, event) {
            //     console.log(event)
            //     //   콜솔 찍어보고 결정
            //     // this.eventResult =
            //     //     event.returnValues.name + ', ' + event.returnValues.sender
            // })
            // console.log("mainc", mainC);
            // this.surveyRecord(contract)
            // console.log("mainc", mainC);
        },
        async asyncsurveyRecord() {
            await this.surveyContract.methods
                .recordSurvey(this.surbey_id)
                .send({ from: this.$store.state.web3.coinbase })
            // this.$store.state.web3.coinbase
        }
    }
}
</script>
