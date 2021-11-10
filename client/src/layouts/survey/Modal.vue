<template>
    <v-app>
        <v-row justify="center">
            <v-dialog v-model="this.dialog" persistent max-width="450">
                <v-card>
                    <v-toolbar color="primary" dark>
                        VP를 추가 공개해 보실래요?</v-toolbar
                    >
                    <!-- <v-card-title class="text-h5" >
          VP를 추가 공개해 보실래요?
        </v-card-title> -->

                    <v-card-text>
                        <v-chip-group
                            v-model="selection"
                            active-class="deep-purple accent-4 white--text"
                            column
                            multiple
                            show-arrows="true"
                            class="pt-5"
                        >
                            <v-chip large filter>이름<br />100원</v-chip>
                            <v-chip large filter>나이<br />300원</v-chip>
                            <v-chip large filter>소득<br />500원</v-chip>
                        </v-chip-group>

                        <p></p>
                        <p>
                            * 위 항목 선택시 조사업체에 설문 기간동안 VP 제공에
                            동의한 것으로 간주합니다.
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="primary"
                            dark
                            @click="$emit('next-modal')"
                        >
                            비동의
                        </v-btn>

                        <v-btn
                            color="primary"
                            dark
                            @click="$emit('next-modal')"
                        >
                            동의
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="this.dialog2" persistent max-width="450">
                <v-card>
                    <v-toolbar color="primary" dark></v-toolbar>
                    <v-sheet class="d-flex justify-center pt-6">
                        <v-card
                            width="150"
                            elevation="3"
                            class="mx-auto element-center pb-5"
                            max-width="150"
                        >
                            <v-img height="150" src="@/assets/img/point.png">
                                <v-app-bar
                                    flat="flat"
                                    color="rgba(0, 0, 0, 0) "
                                ></v-app-bar>
                            </v-img>
                            <!--텍스트부분-->
                            <v-card-text>
                                <div class="text--primary">
                                    + 1000 포인트
                                </div>
                                <p style="height:4em">
                                    내가 받는 총 보상 1500 포인트
                                </p>
                            </v-card-text>
                            <v-btn
                                color="primary"
                                dark="dark"
                                small="small"
                                @click="$emit('close-modal')"
                            >
                                포인트 받기
                            </v-btn>
                        </v-card>
                        <v-card
                            width="150"
                            elevation="3"
                            class="mx-auto element-center pb-5"
                            max-width="150"
                        >
                            <v-img
                                height="150"
                                src="@/assets/img/bucks-cafe.png"
                            >
                                <v-app-bar
                                    flat="flat"
                                    color="rgba(0, 0, 0, 0) "
                                ></v-app-bar>
                            </v-img>
                            <!--텍스트부분-->
                            <v-card-text>
                                <div class="text--primary">
                                    + 1 쿠폰
                                </div>
                                <p style="height:4em;">
                                    내가 받는 총 보상 1000 포인트
                                    <br />
                                    1 쿠폰
                                </p>
                            </v-card-text>
                            <v-btn
                                color="primary"
                                dark="dark"
                                small="small"
                                @click="$emit('close-modal')"
                            >
                                쿠폰 받기
                            </v-btn>
                        </v-card>
                    </v-sheet>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-app>
</template>
<script>
export default {
    name: 'SurveyModal',
    components: {},
    props: ['dialog', 'dialog2'],
    data() {
        return {}
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style lang="css">
.element-center {
    text-align: center;
    margin: 0 auto;
}
</style>
