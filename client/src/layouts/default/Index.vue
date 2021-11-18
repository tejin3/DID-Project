<template>
    <v-app class="bg-primary">
        <default-bar v-if="path === '/' ? false : true" />
        <default-view />
        <default-footer v-if="path === '/' ? false : true" />
    </v-app>
</template>
<script>
import DefaultBar from './Navbar'
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
    background-color: hsl(258, 98%, 70%);
}
</style>
