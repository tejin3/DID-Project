<template>
    <v-container>
        <!-- <company-view :ex3="sliderData" /> -->
        <company-view />
    </v-container>
</template>

<script>
import CompanyView from './View.vue'
export default {
    name: 'CompanyLayout',
    components: { CompanyView }
    // data() {
    //     return {
    //         sliderData: []
    //     }
    // }
}
</script>

<style></style>
