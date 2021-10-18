<template>
    <div>
        <v-container>
            <v-card fluid class="mb-10">
                <v-img src="../assets/img/banner.jpg"> </v-img>
            </v-card>
            <v-row justify="space-around">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card
                        width="300"
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                        class="mx-auto"
                        max-width="350"
                    >
                        <v-img
                            height="300px"
                            src="../assets/img/bucks-cafe.png"
                        >
                            <v-app-bar flat color="rgba(0, 0, 0, 0)">
                            </v-app-bar>
                        </v-img>

                        <v-card-text>
                            <v-card-title>
                                coupon 20장
                            </v-card-title>

                            <v-card-subtitle>
                                스타벅스 아메리카노
                            </v-card-subtitle>
                            <div class="font-weight-bold ml-8 mb-2"></div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {}
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
