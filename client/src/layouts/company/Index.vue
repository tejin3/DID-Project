<template>
    <v-app>
        <!-- <company-view :ex3="sliderData" /> -->
        <company-view />
    </v-app>
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
