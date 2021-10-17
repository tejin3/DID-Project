<template>
    <v-main>
        <!--router-view 를 감쌌다.-->
        <v-container fluid>
            <router-view />
        </v-container>
    </v-main>
</template>
<script>
export default {
    name: 'DefaultView'
}
</script>
