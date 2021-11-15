<template>
    <v-app class="bg-primary">
        <default-bar v-if="path === '/' ? false : true" />
        <default-view />
    </v-app>
</template>
<script>
import DefaultBar from './Navbar'
import DefaultView from './View'
export default {
    name: 'DefaultLayout',
    components: {
        DefaultBar,
        DefaultView
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
