<template>
    <div>
        <!-- 유저 프로필 헤더 -->
        <!-- props로 넣어줘야 할 데이터는 유저 어드레스, 유저네임, 유저 프로필 이미지 패스 -->
        <ProfileHeader />
        <!-- 유저 프로필 상세 내용 -->
        <v-container>
            <!-- defalut cols is 12 -->
            <!-- 탭 제목 영역 -->
            <v-toolbar elevation="3">
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <!-- tap value = 0 -->
                    <v-tab>개인 정보</v-tab>
                    <!-- tap value = -->
                    <v-tab>소유한 NFT</v-tab>
                </v-tabs>
            </v-toolbar>
            <!-- 탭 컨텐츠 영역 -->
            <v-card elevation="3">
                <v-tabs-items v-model="tab">
                    <!-- tap value = 0, 개인정보 탭 일 때 -->
                    <v-tab-item>
                        <v-row justify="space-around">
                            <v-col
                                class="testLine ma-2"
                                cols="4"
                                v-for="item in personalItems"
                                :key="item"
                            >
                                <v-card width="300" height="200">
                                    <v-card-title>
                                        {{ item.name }}
                                    </v-card-title>
                                    <v-card-text>
                                        {{ item.value }} {{ item.unit }}
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
    </div>
</template>
<script>
// import MyPond from '@/components/Cards/MyPond'
import ProfileHeader from '@/components/MyPage/ProfileHeader'

export default {
    name: '',
    components: { ProfileHeader },
    data() {
        return {
            tab: null,
            tab2: null,
            personalItems: [
                { name: '지급된 이더', value: '7.5', unit: 'ETH' },
                { name: '지급된 쿠폰', value: '10', unit: '개' },
                { name: '참여가능한 설문', value: '5', unit: '개' },
                { name: '참여한 설문', value: '20', unit: '개' }
            ],
            nftItems: [],
            items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
            text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    computed: {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>
.testLine {
    border: solid 3px orange;
}
</style>
