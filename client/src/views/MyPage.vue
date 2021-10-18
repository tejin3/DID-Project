<template>
    <div>
        <!-- 유저 프로필 헤더 -->
        <ProfileHeader />
        <!-- 유저 프로필 상세 내용 -->
        <v-container>
            <v-row style="border:solid blue 3px">
                <v-col
                    class="d-flex"
                    sm="10"
                    offset-sm="1"
                    md="8"
                    offset-md="2"
                >
                    <v-tabs>
                        <v-tab>개인 정보</v-tab>
                        <v-tab>소유한 NFT</v-tab>
                    </v-tabs>
                </v-col>
                <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                    <v-row>
                        <v-col sm="6" md="4">
                            <v-card outlined>
                                지급된 이더
                            </v-card>
                        </v-col>
                        <v-col sm="6" md="4">
                            <v-card outlined>
                                지급된 쿠폰
                            </v-card>
                        </v-col>

                        <v-tabs-items v-model="tab">
                            <v-tab-item v-for="item in items" :key="item">
                                <v-card flat>
                                    <v-card-text v-text="text"></v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-row>
                </v-col>
            </v-row>
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
            sampleData: 'abc'
        }
    },
    computed: {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
