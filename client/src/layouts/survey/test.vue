<template>
    <div></div>
</template>
<script>
import abi from './surveyAbi.json'
export default {
    name: '',
    components: {},
    data() {
        return {
            abi,
            ca: 0xe6e22f385242536cf08b3f7b4ac921768c935638,
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
                this.abi,
                this.ca
            )

            contract.events.addUser({}, function(error, event){
      console.log(event)
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
        },
    }
}
</script>
