<template>
    <v-sheet class="bg-primary" height="100vh">
        <v-card
            elevation="0"
            width="1200px"
            class="mt-10 mx-auto"
            color="hsl(258, 98%, 70%)"
        >
            <v-carousel
                v-model="model"
                vertical-delimiters="right"
                :vertical="true"
                :show-arrows="false"
                :hide-delimiter-background="true"
                height="80vh"
            >
                <DefaultBar />
                <v-carousel-item>
                    <v-sheet class="my-16" color="hsl(258, 98%, 70%)">
                        <h2>We DID survey</h2>
                        <p class="mt-4">
                            시작해보세요
                        </p>
                        <v-btn
                            color="secondary"
                            elevation="2"
                            @click="metamask()"
                            >시작하기!</v-btn
                        >
                    </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                    <v-sheet
                        class="my-16"
                        color="hsl(258, 98%, 70%)"
                        height="100vh"
                    >
                        <v-row class="fill-height">
                            <v-col cols="12" sm="6" md="8">
                                <v-img
                                    width="700px"
                                    src="@/assets/img/main/mainImg1.png"
                                    aspect-ratio="2.4"
                                    style="margin-left:-2rem; margin-top:1rem"
                                ></v-img>
                            </v-col>
                            <v-col cols="6" md="4" class="">
                                <v-img
                                    class="custom-img"
                                    src="@/assets/img/main/mainImg2.png"
                                    aspect-ratio="1"
                                    style="margin-top:10rem"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                    <v-sheet
                        class="my-16"
                        color="hsl(258, 98%, 70%)"
                        height="100vh"
                        ><v-row class="fill-height">
                            <v-col cols="12" sm="6" md="8">
                                <v-img
                                    width="700px"
                                    src="@/assets/img/main/mainImg3.png"
                                    aspect-ratio="2.4"
                                    style="margin-left:-2rem; margin-top:1rem"
                                ></v-img>
                            </v-col>
                            <v-col cols="6" md="4" class="">
                                <v-img
                                    class="custom-img"
                                    src="@/assets/img/main/mainImg4.png"
                                    aspect-ratio="1"
                                    style="margin-top:10rem"
                                ></v-img>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </v-sheet>
</template>
<script>
import DefaultBar from '../layouts/default/Navbar.vue'

export default {
    name: '',
    components: { DefaultBar },
    data() {
        return {
            sampleData: '',
            model: 0,
            items: [
                {
                    src:
                        'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ]
        }
    },
    setup() {},
    mounted() {},

    unmounted() {},
    methods: {
        onScroll() {
            this.model++
        },
        async metamask() {
            await this.$store.dispatch('registerWeb3')
            // await this.$store.dispatch('web3Register')
            this.goPossible()
        },
        goPossible() {
            if (this.$store.state.web3.coinbase) {
                this.$router.push({ path: 'possible' })
            } else {
                window.alert('조금만 더 기다려주세요 ^^')
            }
            // this.repeat()
        }
    }
}
</script>
<style scoped>
.outline {
    border: 3px solid black;
}
.container-fluid {
    max-width: 500px;
}
</style>
