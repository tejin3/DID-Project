<template>
    <v-container class="bg-primary">
        <v-carousel
            v-model="model"
            v-on:scroll.passive="onScroll"
            vertical-delimiters="right"
            :vertical="true"
            :show-arrows="false"
            :hide-delimiter-background="true"
            height="100vh"
        >
            <DefaultBar />
            <v-carousel-item>
                <h2>We DID survey</h2>
                <p class="mt-4">
                    당신의 똑똑한 생각을 나눠주세요! 지금 서베이에 참여해서
                    맡겨놓은 상금과 상품을 가져가세요
                </p>
                <v-btn color="secondary" elevation="2" @click="metamask()"
                    >시작하기!</v-btn
                >
            </v-carousel-item>
            <v-carousel-item>
                <v-row class="fill-height">
                    <v-col cols="12" sm="6" md="8">
                        <v-img
                            width="700px"
                            src="@/assets/img/main/mainImg1.png"
                            aspect-ratio="2.4"
                            style="margin-left:-2rem; margin-top:3rem"
                        ></v-img>
                        <p class="white--text">
                            홍보용 멘트를 적습니다. {{ i }}
                        </p>
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
            </v-carousel-item>
            <v-carousel-item>
                <h1 class="white--text">지금 폰트 웰컴체 입니다. {{ i }}</h1>
            </v-carousel-item>
        </v-carousel>
    </v-container>
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
</style>
