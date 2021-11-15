<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({})
}
</script>
<style>
@font-face {
    font-family: 'OTWelcomeRA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeRA.woff2')
        format('woff2');
    font-weight: normal;
    font-style: normal;
}

#app {
    font-family: 'OTWelcomeRA';
}
</style>
