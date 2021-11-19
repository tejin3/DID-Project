<template>
    <v-container class="mt-5">
        <mypage-view />
    </v-container>
</template>

<script>
import MypageView from './View.vue'
export default {
    props: ['dialog'],
    name: 'PossibleLayout',
    components: { MypageView }
}
</script>

<style></style>
