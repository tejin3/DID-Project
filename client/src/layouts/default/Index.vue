<template>
    <v-app :class="[path === '/' ? 'bg-primary' : null]">
        <default-bar v-if="path === '/' ? false : true" />
        <default-view />
        <default-footer v-if="path === '/' ? false : true" />
    </v-app>
</template>
<script>
import DefaultBar from './Navbar2'
import DefaultView from './View'
import DefaultFooter from './Footer'
export default {
    name: 'DefaultLayout',
    components: {
        DefaultBar,
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
    background-color: #9568fd;
}
</style>
