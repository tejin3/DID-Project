<template>
    <v-app>
        <default-bar />
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
    data: () => ({})
}
</script>
