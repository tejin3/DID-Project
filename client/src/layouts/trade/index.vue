<template>
    <v-container>
        <TradeView />
    </v-container>
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
