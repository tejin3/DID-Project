<template>
    <v-sheet>
        <!-- <v-container class="fill-height"> -->
        <v-container>
            <!-- defalut cols is 12 -->
            <!-- 탭 제목 영역 -->
            <v-toolbar elevation="3">
                <!-- 화면이 클 때 -->
                <v-tabs class="hidden-xs-only" v-model="tab" align-with-title>
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <!-- tap value = 0 -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-account-box</v-icon>
                        개인정보
                    </v-tab>
                    <!-- tap value = -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-image-multiple</v-icon>
                        소유한 NFT</v-tab
                    >
                </v-tabs>
                <!-- 화면이 작을 때 -->
                <v-tabs class="hidden-sm-and-up" v-model="tab" grow>
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <!-- tap value = 0 -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-account-box</v-icon>
                        개인정보
                    </v-tab>
                    <!-- tap value = -->
                    <v-tab class="font-weight-bold">
                        <v-icon class="mr-2">mdi-image-multiple</v-icon>
                        소유한 NFT</v-tab
                    >
                </v-tabs>
            </v-toolbar>
            <!-- 탭 컨텐츠 영역 -->
            <v-card elevation="3">
                <v-tabs-items v-model="tab">
                    <!-- tap value = 0, 개인정보 탭 일 때 -->
                    <v-tab-item>
                        <v-row>
                            <v-col
                                cols="6"
                                class="d-flex justify-center pa-12"
                                v-for="item in personalItems"
                                :key="item"
                            >
                                <v-card
                                    class="mx-auto grey lighten-2"
                                    elevation="6"
                                    width="250"
                                    height="200"
                                >
                                    <v-card-title
                                        class="justify-center font-weight-bold my-3"
                                    >
                                        <p class="text-subtittle">
                                            {{ item.name }}
                                        </p>
                                    </v-card-title>
                                    <v-card-text
                                        class="d-flex justify-center align-bottom my-3"
                                    >
                                        <Icon :icon="item.icon" />
                                        <p class="text-h6 ml-2">
                                            {{ item.value }} {{ item.unit }}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!-- tap value = 1, 소유한 NFT 탭일 때 -->
                    <v-tab-item>
                        <v-row justify="space-between">
                            <v-col
                                class="testLine ma-12"
                                cols="3"
                                v-for="item in personalItems"
                                :key="item"
                            >
                                <v-card class="mx-auto" max-width="400">
                                    <v-img
                                        class="white--text align-end"
                                        height="200px"
                                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    >
                                        <v-card-title
                                            >Top 10 Australian
                                            beaches</v-card-title
                                        >
                                    </v-img>

                                    <v-card-subtitle class="pb-0">
                                        Number 10
                                    </v-card-subtitle>

                                    <v-card-text class="text--primary">
                                        <div>Whitehaven Beach</div>

                                        <div>
                                            Whitsunday Island, Whitsunday
                                            Islands
                                        </div>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn color="orange" text>
                                            Share
                                        </v-btn>

                                        <v-btn color="orange" text>
                                            Explore
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-container>
    </v-sheet>
</template>
<script>
import { Icon } from '@iconify/vue2'
export default {
    components: {
        Icon
    },
    data() {
        return {
            tab: null,
            personalItems: [
                {
                    name: '지급된 이더',
                    value: '7.5',
                    unit: 'ETH',
                    icon: 'mdi:ethereum'
                },
                {
                    name: '지급된 쿠폰',
                    value: '10',
                    unit: '개',
                    icon: 'mdi:ticket-percent'
                },
                {
                    name: '참여가능한 설문',
                    value: '5',
                    unit: '개',
                    icon: 'ri:survey-fill'
                },
                {
                    name: '참여한 설문',
                    value: '20',
                    unit: '개',
                    icon: 'ri:survey-fill'
                }
            ],
            nftItems: [],
            items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },

    computed: {}
}
</script>
<style scoped>
.testLine {
    border: solid 3px orange;
}
</style>
<style scoped>
svg {
    font-size: 2rem;
    line-height: 1em;
}
</style>
