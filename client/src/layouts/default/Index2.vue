<template>
    <v-app>
        <default-bar2 v-if="path === '/' ? false : true" />
        <default-view />
        <default-footer v-if="path === '/' ? false : true" />
    </v-app>
</template>
<script>
import DefaultBar2 from './Navbar2'
import DefaultView from './View'
import DefaultFooter from './Footer'
export default {
    name: 'DefaultLayout2',
    components: {
        DefaultBar2,
        DefaultView,
        DefaultFooter
    },
    data: () => ({}),
    computed: {
        path() {
            return this.$route.path
        }
    }
}
</script>
<style scoped>
.bg-primary {
    background-color: white;
}
</style>
