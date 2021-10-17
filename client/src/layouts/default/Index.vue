<template>
    <v-app>
        <default-bar @drawer="drawer = !drawer" />

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
    data: () => ({
        drawer: false
    })
}
</script>
