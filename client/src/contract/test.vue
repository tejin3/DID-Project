<template>
    <div></div>
</template>
<script>
import surveyAbi from './surveyAbi.json'
import vcCallAbi from './vcCallAbi.json'
export default {
    name: '',
    components: {},
    data() {
        return {
            surveyAbi,
            vcCallAbi,
            surveyCa: '',
            surbey_id: 0,
            eventResult: null
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      first() {
            console.log("first");
            var contract = new this.$store.state.web3.eth.Contract(
                this.surveyAbi,
                this.surveyCa
            )

            contract.events.addUser({}, function(error, event){
      console.log(event)
    //   콜솔 찍어보고 결정
      this.eventResult = event.returnValues.name+", "+event.returnValues.sender
    })


            // console.log("mainc", mainC);
            this.surveyRecord(contract);
            // console.log("mainc", mainC);
        },
      asyncsurveyRecord(contract) {
            await contract.methods
                .recordSurvey(this.surbey_id)
                .send({from: account})
                // this.$store.state.web3.coinbase
        },
    }
}
</script>
