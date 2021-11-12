<template>
    <v-app>
        <v-main class="pa-0">
            <v-row class="bg height">
                <v-col class="layout wrap mb-6" cols="12" md="6">
                    <!-- <base-bubble-1
                        style="transform: rotate(180deg) translateY(25%)"
                    /> -->

                    <v-row align="center" justify="center">
                        <v-col cols="10" md="6" mb="0">
                            <h2>We DID survey</h2>
                            <p class="mt-4">
                                당신의 똑똑한 생각을 나눠주세요! 지금 서베이에
                                참여해서 맡겨놓은 상금과 상품을 가져가세요
                            </p>
                            <v-btn
                                color="secondary"
                                elevation="2"
                                @click="metamask()"
                                >시작하기!</v-btn
                            >
                            <br /><br />
                            <!-- <div class="box"></div> -->
                        </v-col>
                        <div class="blueBox"></div>
                    </v-row>

                    <!-- <base-bubble-2
                        style="transform: rotate(180deg) translate(-200px, -15%)"
                    /> -->
                </v-col>

                <v-col md="5">
                    <MainCarousel />
                </v-col>
                <!-- <v-row class="py-10 px-16 mt-16 pink lighten-5"> -->
                <!-- <v-row class="py-10 px-16 mt-16">
                <v-col>
                    <v-responsive
                        width="500"
                        height="300"
                        class="px-10 explain"
                    >
                        <h3 class="text-h4">
                            Try experimental new features
                        </h3>

                        <p class="mt-4 text-medium-emphasis">
                            For a limited time, Premium members can try out new
                            features that we’re working on. Share your feedback
                            to help us build a better YouTube.
                        </p>
                    </v-responsive>
                </v-col>
            </v-row> -->
            </v-row>

            <v-row class="py-16 px-16">
                <v-col sm="12" md="6" lg="6">
                    <v-img
                        src="https://picsum.photos/id/11/500/300"
                        max-height="300"
                        max-width="500"
                    ></v-img>
                </v-col>
                <v-col sm="12" md="6" lg="6">
                    <v-responsive
                        width="500"
                        height="300"
                        class="px-10 explain"
                    >
                        <div class="box"></div>
                        <h3 class="text-h4">
                            Try experimental new features
                        </h3>

                        <p class="mt-4 text-medium-emphasis">
                            For a limited time, Premium members can try out new
                            features that we’re working on. Share your feedback
                            to help us build a better YouTube.
                        </p>
                    </v-responsive>
                </v-col>
            </v-row>
            <v-row class="py-16 px-16 orange lighten-5">
                <v-col>
                    <v-responsive
                        width="500"
                        height="300"
                        class="px-10 explain"
                    >
                        <h3 class="text-h4">
                            Try experimental new features
                        </h3>

                        <p class="mt-4 text-medium-emphasis">
                            For a limited time, Premium members can try out new
                            features that we’re working on. Share your feedback
                            to help us build a better YouTube.
                        </p>
                    </v-responsive>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script>
import MainCarousel from '../layouts/main/Carousel.vue'

export default {
    name: 'Main',

    components: {
        MainCarousel
    },
    data: () => ({}),
    computed: {},
    methods: {
        async metamask() {
            await this.$store.dispatch('registerWeb3')
            await this.$store.dispatch('web3Register')
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
        // repeat() {
        //     setInterval(async () => {
        //         // // 계정이 바뀌었는지 확인
        //         // console.log("web3", this.$store.state.web3);
        //         // console.log("어카운트", this.$store.state.account);
        //         await this.$store.dispatch('registerWeb3')
        //     }, 5000)
        // }
    }
}
</script>
<style>
@import '../styles/main.css';

@keyframes sample-ani {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(50px, -10px);
    }
    100% {
        transform: translate(100px, 50px);
    }
}
.blueBox {
    background: url('../assets/img/shapes/test1.png') no-repeat 0 0 / cover;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 70px;
    height: 70px;
    animation: sample-ani 3s linear infinite alternate;
}
.blueBox:hover {
    animation-play-state: paused;
}

@keyframes sample-ani1 {
    0% {
        /* background: url("images/sprite_test1.png") no-repeat 0 0 / */
        /* cover; */
        transform: translate(0, 0px);
    }
    100% {
        transform: translate(0, 30px);
    }
}
.box {
    position: absolute;
    background: url('../assets/img/shapes/one.png') no-repeat 0 0 / cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    /* border: 2px solid #000; */
    /* background: #fff000; */

    /* forwards는 타임라인이 끝나는 100%위치에 box가 위치해있으면 좋겠을때 사용 */
    animation: sample-ani1 3s linear infinite alternate;

    /* infinite = 계속 반복적 / reverse = 거꾸로  / alternate = 왔다갔다 */
    /* animation: sample-ani 3s linear infinite alternate; */
    /* animation: sample-ani 3s linear infinite reverse; */

    /* 출발을 꺼꾸로했다. */
    /* animation: sample-ani 3s linear infinite alternate-reverse; */
}
.box:hover {
    /* running과 paused가 있는데 , paused를 사용하면 마우스를 호버했을때 멈춘다. */
    animation-play-state: paused;
}
</style>
