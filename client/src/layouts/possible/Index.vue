<template>
    <div>
        <possible-header />
        <possible-main />
        <possible-modal />
        <survey-start-modal />
    </div>
</template>

<script>
// import getContract1 from '@/service/getContract1'

import PossibleHeader from '@/layouts/possible/PossibleHeader.vue'
import PossibleMain from '@/layouts/possible/PossibleMain.vue'
import PossibleModal from '@/layouts/possible/PossibleModal.vue'

export default {
    name: 'PossibleLayout',

    components: {
        PossibleHeader,
        PossibleMain,
        PossibleModal
    },
    data() {
        return {}
    }
}
</script>
