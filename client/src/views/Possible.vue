<template>
    <v-app>
        <PossibleLayout />
        <img
            src="@/assets/img/blob.svg"
            alt="some file"
            height="300"
            width="300"
        />
    </v-app>
</template>
<script>
import PossibleLayout from '../layouts/possible/Index'
export default {
    name: '',
    components: { PossibleLayout }
}
</script>
