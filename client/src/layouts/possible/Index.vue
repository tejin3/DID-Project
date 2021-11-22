<template>
    <v-app>
        <possible-view />
        <SurveyStartModal :surveymodalOfen="surveymodalOfen" @child="parents" />
    </v-app>
</template>

<script>
import PossibleView from './View.vue'
import SurveyStartModal from './SurveyStartModal.vue'
export default {
    name: 'PossibleLayout',
    components: { PossibleView, SurveyStartModal },
    data() {
        return {
            surveymodalOfen: true
            }
    },
    methods: {
           parents(modal) {
            this.surveymodalOfen = modal
        }
    }
}
</script>

<style>
.container {
    padding: 0px;
}
</style>
