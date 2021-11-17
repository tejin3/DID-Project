<template>
    <v-sheet class="bg-primary" height="100vh">
        <v-card
            elevation="0"
            width="1200px"
            class="mt-10 mx-auto"
            color="hsl(258, 98%, 70%)"
        >
            <DefaultBar />
            <v-carousel
                v-model="model"
                vertical-delimiters="right"
                :vertical="true"
                :show-arrows="false"
                :hide-delimiter-background="true"
                height="75vh"
            >
                <v-carousel-item>
                    <v-sheet
                        class="flicking mt-16"
                        height="40vh"
                        width="100vh"
                        color="hsl(258, 98%, 70%)"
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
                            class="Viewport"
                        >
                            <v-card
                                :key="i"
                                v-for="(d, i) in surveys"
                                :class="[
                                    i % 2 === 1
                                        ? 'scrollSelect2'
                                        : 'scrollSelect3'
                                ]"
                                class="panel mx-5 rounded-xl card-panel"
                                max-width="200"
                                max-height="300"
                            >
                                <v-img
                                    :src="
                                        `http://localhost:3000/download/${d.survey_image_path}`
                                    "
                                    height="150"
                                ></v-img>

                                <v-card-title class="text-h7">
                                    {{ d.survey_title }}
                                </v-card-title>
                                <v-chip
                                    close-icon="mdi-close-outline"
                                    color="grey"
                                    small
                                    class="white--text pa-0 ml-2"
                                >
                                    <v-card-subtitle class="text-subtitle-2">
                                        적립금: {{ d.survey_price }} | 쿠폰:
                                        {{ d.survey_coupon }}
                                    </v-card-subtitle>
                                </v-chip>
                                <v-card-subtitle>
                                    <v-icon v-text="icon"></v-icon>남은 기간
                                    <v-chip
                                        class="ma-1 font-weight-bold text-subtitle-2"
                                        color="deep-purple accent-3"
                                        outlined
                                        defalut
                                    >
                                        D-{{ dDays[i].dday }}
                                    </v-chip>
                                </v-card-subtitle>
                            </v-card>
                            <span
                                slot="viewport"
                                class="flicking-arrow-prev is-circle"
                            ></span>
                            <span
                                slot="viewport"
                                class="flicking-arrow-next is-circle"
                            ></span>
                        </Flicking>
                    </v-sheet>
                    <v-sheet
                        class="d-flex justify-sm-space-around align-center mt-5"
                        color="hsl(258, 98%, 70%)"
                        width="100vh"
                    >
                        <v-img
                            class="custom-img"
                            src="@/assets/img/main/mainImg5.png"
                            aspect-ratio="1"
                            contain
                            height="200"
                        ></v-img>
                        <router-link
                            to="/possible"
                            style="text-decoration: none;"
                        >
                            <v-btn
                                large
                                rounded
                                color="#Fee440"
                                style="font-weight:bold;"
                                class="pt-2"
                            >
                                시작하기
                            </v-btn>
                        </router-link>
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
import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'

const plugins = [
    new AutoPlay({ duration: 4000, direction: 'NEXT', stopOnHover: true }),
    new Arrow()
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
            dDays: ''
        }
    },
    setup() {},
    mounted() {},
    created() {
        this.getSurvey()
        this.discountDay()
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
        },
        async discountDay() {
            this.dDays = await this.$api('/date', 'get')
            console.log(this.dDays)
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
@keyframes sample-ani2 {
    0% {
        transform: translate(0, 20px);
    }
    100% {
        transform: translate(10, 10);
    }
}
@keyframes sample-ani3 {
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
    animation: sample-ani 5s linear infinite alternate;
}
.scrollSelect:hover {
    animation-play-state: paused;
}

.scrollSelect2 {
    animation: sample-ani2 2s linear infinite alternate;
}
.scrollSelect2:hover {
    animation-play-state: paused;
}

.scrollSelect3 {
    animation: sample-ani3 3s linear infinite alternate;
}
.scrollSelect3:hover {
    animation-play-state: paused;
}
.panel {
    background-color: white;
    width: 25rem;
    height: 30rem;
    border-radius: 5rem 5rem 5rem 5rem;
}

.flicking {
    margin: 0 auto;
}
.Viewport {
    height: 350px;
}
@keyframes sample-ani-test {
    0% {
        transform: translate(0, 50);
    }
    50% {
    }
    100% {
        transform: translate(0, -50px);
    }
}

.test {
    align-items: center;
    justify-content: center;
    margin: auto;
    animation: sample-ani-test 3s linear infinite alternate;
}
</style>
