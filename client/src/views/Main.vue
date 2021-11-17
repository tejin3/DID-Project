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
                    <v-sheet
                        class="my-10"
                        color="hsl(258, 98%, 70%)"
                        height="100vh"
                    >
                        <Flicking
                            :options="{
                                align: 'center',
                                circular: true
                            }"
                            :viewportTag="'div'"
                            :cameraTag="'div'"
                            :plugins="plugins"
                            @move-end="onMoveEnd"
                        >
                            <div
                                :key="i"
                                v-for="(d, i) in surveys"
                                class="panel mx-10"
                            >
                                <v-card
                                    elevation="3"
                                    class="mx-auto"
                                    max-width="344"
                                >
                                    <v-img
                                        :src="
                                            `http://localhost:3000/download/${d.survey_image_path}`
                                        "
                                        height="200px"
                                        style="border-radius: 25% 25% 25% 25"
                                    ></v-img>
                                </v-card>
                            </div>
                        </Flicking>
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
            <div class="scrollSelect d-flex justify-center"></div>
        </v-card>
    </v-sheet>
</template>
<script>
import DefaultBar from '../layouts/default/Navbar.vue'
import { Flicking } from '@egjs/vue-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'
const plugins = [
    new AutoPlay({ duration: 1000, direction: 'NEXT', stopOnHover: true })
]

export default {
    name: '',
    components: { DefaultBar, Flicking },
    data() {
        return {
            surveys: [],
            plugins,
            model: 0,
            list: [0, 1, 2, 3, 4],
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
    created() {
        this.getSurvey()
    },
    unmounted() {},
    methods: {
        async getSurvey() {
            // console.log('hi', this.$get()
            this.surveys = await this.$get('/surveys')
        },
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
<style lang="scss">
@import '~@egjs/vue-flicking/dist/flicking.css';
@import '~@egjs/flicking-plugins/dist/flicking-plugins.css';
@keyframes sample-ani {
    0% {
        transform: translate(10, 10);
    }
    100% {
        transform: translate(0, 20px);
    }
}

.outline {
    border: 2px solid black;
}
.container-fluid {
    max-width: 500px;
}

.scrollSelect {
    /* background: url('../assets/img/shapes/sc_img.png') no-repeat 0 0 / cover; */
    background: url('../assets/img/shapes/sc_img.png') no-repeat 0 0;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 150px;
    margin: auto;
    animation: sample-ani 3s linear infinite alternate;
}
.scrollSelect:hover {
    animation-play-state: paused;
}
.panel {
    background-color: white;
    width: 25rem;
    height: 30rem;
    border-radius: 5rem 5rem 5rem 5rem;
}
</style>
