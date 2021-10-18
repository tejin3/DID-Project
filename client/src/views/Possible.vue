<template>
    <!-- 버튼 -->
    <v-container fluid>
        <v-container class="my-10">
            <v-btn color="warning" dark x-large>
                전체 설문
            </v-btn>
            <v-btn color="warning" dark x-large>
                참여 가능한 설문
            </v-btn>
        </v-container>
        <!-- 설문지 카드 섹션 -->
        <v-container>
            <v-card class="mx-auto" max-width="344">
                <v-img src="@/assets/surveyImg1.jpg" height="200px"></v-img>

                <v-card-title>
                    전자 제품 관련 조사
                </v-card-title>

                <v-card-subtitle> 적립금 | 쿠폰 </v-card-subtitle>

                <v-card-subtitle>
                    설문기간
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        상세 내용
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                        <v-icon>{{
                            show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                        }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            조사기간 :
                            <br />가전 제품 구입 관련 전반적 U&A 설문입니다.
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-container>
    </v-container>
</template>
<script>
export default {
    name: 'Possible',
    components: {},
    data: () => ({
        show: false
    }),
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
