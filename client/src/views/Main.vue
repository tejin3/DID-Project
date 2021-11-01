<template>
    <v-app>
        <v-main>
            <v-row>
                <v-col
                    class="align-content-space-between layout wrap"
                    cols="12"
                    md="6"
                >
                    <base-bubble-1
                        style="transform: rotate(180deg) translateY(25%)"
                    />

                    <v-row align="center" justify="center">
                        <v-col cols="10" md="6">
                            <h2>We DID survey</h2>
                            <p class="mt-2">
                                = 당신의 똑똑한 생각을 나눠주세요! 지금 서베이에
                                참여해서 맡겨놓은 상금과 상품을 가져가세요
                            </p>
                            <v-btn color="secondary" elevation="2"
                                >Get start!</v-btn
                            >
                        </v-col>
                    </v-row>

                    <base-bubble-2
                        style="transform: rotate(180deg) translate(-200px, -15%)"
                    />
                </v-col>

                <v-col md="5">
                    <MainCarousel />
                </v-col>
            </v-row>

            <v-container fluid>
                <v-sheet
                    class="d-flex align-center py-16 mt-6"
                    color="#F9EFE5"
                    height="420"
                >
                    <v-container>
                        <v-responsive width="300">
                            <h3 class="text-h4">
                                Try experimental new features
                            </h3>

                            <p class="mt-4 text-medium-emphasis">
                                For a limited time, Premium members can try out
                                new features that we’re working on. Share your
                                feedback to help us build a better YouTube.
                            </p>
                        </v-responsive>
                    </v-container>
                </v-sheet>
            </v-container>
            <v-container fluid>
                <v-sheet
                    class="d-flex align-center py-16"
                    color="#F3D4D0"
                    height="420"
                >
                    <v-container class="pl-12">
                        <v-responsive width="700">
                            <v-img
                                src="https://picsum.photos/id/11/500/300"
                                max-height="300"
                                max-width="500"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            ></v-img>
                        </v-responsive>
                    </v-container>
                    <v-container>
                        <v-responsive width="300">
                            <h3 class="text-h4">
                                Try experimental new features
                            </h3>

                            <p class="mt-4 text-medium-emphasis">
                                For a limited time, Premium members can try out
                                new features that we’re working on. Share your
                                feedback to help us build a better YouTube.
                            </p>
                        </v-responsive>
                    </v-container>
                </v-sheet>
            </v-container>
            <v-container fluid>
                <v-sheet
                    class="d-flex align-center py-16"
                    color="#FEF9F3"
                    height="420"
                >
                    <v-container>
                        <v-responsive width="300">
                            <h3 class="text-h4">
                                Try experimental new features
                            </h3>

                            <p class="mt-4 text-medium-emphasis">
                                For a limited time, Premium members can try out
                                new features that we’re working on. Share your
                                feedback to help us build a better YouTube.
                            </p>
                        </v-responsive>
                    </v-container>
                </v-sheet>
            </v-container>
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
    data: () => ({})
}
</script>
