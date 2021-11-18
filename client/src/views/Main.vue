<template>
    <v-sheet class="bg-primary" height="auto">
        <v-card
            elevation="0"
            width="1200px"
            class="mx-auto"
            height="350"
            color="hsl(258, 98%, 70%)"
        >
            <DefaultBar />
            <v-carousel
                v-model="model"
                vertical-delimiters="right"
                :vertical="true"
                :show-arrows="false"
                :hide-delimiter-background="true"
                height="73vh"
            >
                <v-carousel-item @wheel.prevent="test($event)">
                    <!--투잡해? 문구 시작-->
                    <!-- src="@/assets/img/main/mainImg.png" -->
                    <v-sheet
                        class="d-flex justify-space-between align-center mt-5"
                        color="hsl(258, 98%, 70%)"
                        width="100vh"
                    >
                        <v-img
                            class="custom-img"
                            src="@/assets/img/main/mainImg.png"
                            aspect-ratio="1"
                            contain
                            height="500"
                        ></v-img>
                        <router-link
                            to="/possible"
                            style="text-decoration: none;"
                        >
                            <!-- <v-btn
                                large
                                rounded
                                color="#Fee440"
                                style="font-weight:bold; "
                                class="pt-2"
                            >
                                시작하기
                            </v-btn> -->
                        </router-link>
                    </v-sheet>
                    <!--투잡해? 문구 끝-->
                </v-carousel-item>

                <v-carousel-item @wheel.prevent="test($event)">
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

                <v-carousel-item @wheel.prevent="test($event)">
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
// import { Flicking } from '@egjs/vue-flicking'
import { AutoPlay, Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'

const plugins = [
    new AutoPlay({ duration: 4000, direction: 'NEXT', stopOnHover: true }),
    new Arrow()
]

export default {
    name: '',
    // components: { DefaultBar, Flicking },
    components: { DefaultBar },
    data() {
        return {
            surveys: [],
            plugins,
            model: 0,
            wheelTimer: null,
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
        // onScroll() {
        //     this.model++
        // },
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
        },
        test(event) {
            console.log(event)
            clearTimeout(this.wheelTimer)

            this.wheelTimer = setTimeout(() => {
                if (event.deltaY > 0) {
                    console.log('down')
                    console.log(this.model, ++this.model)
                } else {
                    console.log('up')
                    console.log(this.model, --this.model)
                }
            }, 300)
        },
        doScroll(sidx) {
            console.log(sidx)
            // sidx = sidx < 0 ? 0 : sidx
            // sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx
        }
    }
}
</script>
<style lang="scss">
@import '~@egjs/vue-flicking/dist/flicking.css';
@import '~@egjs/flicking-plugins/dist/flicking-plugins.css';
@keyframes sample-ani {
    0% {
        transform: translate(0, -50px);
    }
    100% {
        transform: translate(0, -30px);
    }
}
// @keyframes sample-ani2 {
//     0% {
//         transform: translate(0, 20px);
//     }
//     100% {
//         transform: translate(10, 10);
//     }
// }
// @keyframes sample-ani3 {
//     0% {
//         transform: translate(10, 10);
//     }
//     100% {
//         transform: translate(0, 20px);
//     }
// }

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
// @keyframes sample-ani-test {
//     0% {
//         transform: translate(0, 50);
//     }
//     50% {
//     }
//     100% {
//         transform: translate(0, -50px);
//     }
// }

.test {
    align-items: center;
    justify-content: center;
    margin: auto;
    animation: sample-ani-test 3s linear infinite alternate;
}
</style>
