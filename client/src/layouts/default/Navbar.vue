<template>
    <v-app-bar app color="primary">
        <!-- icon-mdi-menu -->
        <v-app-bar-nav-icon @click="$emit('drawer')"></v-app-bar-nav-icon>

        <!-- <v-spacer /> -->
        <!-- <parallax class="page-header header-filter" :style="headerStyle">
        </parallax> -->
    </v-app-bar>
</template>

<script>
export default {
    name: 'DefaultBar',
    props: {
        image: {
            type: String,
            default: require('@/assets/img/vue-mk-header.jpg')
        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.image})`
            }
        }
    }
}
</script>

<style></style>
