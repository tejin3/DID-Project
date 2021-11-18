<template>
    <v-app>
        <possible-view />
    </v-app>
</template>

<script>
import PossibleView from './View.vue'
export default {
    name: 'PossibleLayout',
    components: { PossibleView }
}
</script>

<style>
.container {
    padding: 0px;
}
</style>
