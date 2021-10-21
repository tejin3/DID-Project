<template>
    <v-app>
        <TradeView />
    </v-app>
</template>
<script>
import TradeView from './View.vue'
export default {
    name: 'TradeLayout',
    components: { TradeView },
    data() {
        return {
            sampleData: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
