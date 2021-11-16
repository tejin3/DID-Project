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
                            class="pt-5"
                        >
                            <div v-for="(aa, i) in aa" :key="i">
                                <v-chip large filter
                                    >{{ aa.item }}<br />{{ aa.price }}원</v-chip
                                >
                                <!-- <v-chip large filter>나이<br />300원</v-chip>
                            <v-chip large filter>소득<br />500원</v-chip> -->
                            </div>
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
                            @click="
                                ;[$emit('next-modal'), createVP(), totalPoint()]
                            "
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
                                    + {{ price }} 포인트
                                </div>
                                <p style="height:4em">
                                    내가 받는 총 보상 {{ point }} 포인트
                                </p>
                            </v-card-text>
                            <v-btn
                                color="primary"
                                dark="dark"
                                small="small"
                                @click=";[$emit('close-modal'), saveReward()]"
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
                                    + {{ coupon }} 쿠폰
                                </div>
                                <p style="height:4em;">
                                    내가 받는 총 보상 {{ price }} 포인트
                                    <br />
                                    {{ coupon }} 쿠폰
                                </p>
                            </v-card-text>
                            <v-btn
                                color="primary"
                                dark="dark"
                                small="small"
                                @click=";[$emit('close-modal'), saveReward()]"
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
    props: [
        'dialog',
        'dialog2',
        'vp',
        'price',
        'coupon',
        'sC',
        'surveyId',
        'companyAccount'
    ],
    data() {
        return {
            aa: [
                {
                    item: '구매금액',
                    price: 500
                },
                {
                    item: '온오프라인',
                    price: 300
                },
                {
                    item: '상품종류',
                    price: 400
                }
            ],
            selection: [],
            selectVp: [],
            point: 0
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        // 동의 버튼을 누를시 선택한 VP 생성
        createVP() {
            // 넘겨받은 VP리스트에 선택한 VC가 담긴 VP를 생성
            var stringVp
            for (var index of this.selection) {
                this.selectVp.push(this.vp[parseInt(index)])
                console.log(this.selectVp)
            }
            for (var het of this.selectVp) {
                stringVp = stringVp + ',' + Object.keys(het)
            }
            console.log(stringVp)
            console.log(this.sC)
            this.sC.methods
                .recordVP(
                    this.surveyId,
                    stringVp.slice(10),
                    '0xb6f945dfafbc1b9f728d8bc3c34d25178d0c6c71'
                )
                .send({ from: this.$store.state.web3.coinbase })
                .then(receipt => {
                    console.log(receipt)
                })
        },

        // 동의 버튼을 누를시 적립되는 포인트
        totalPoint() {
            for (var index of this.selection) {
                this.point += this.aa[index].price
            }
            this.point += this.price
            console.log(this.price)
        },
        // 받기 버튼을 누르면 DB로 포인트와 쿠폰 전달
        async saveReward() {
            this.$api('/reward', 'post', {
                param: {
                    account: this.$store.state.web3.coinbase,
                    point: this.point,
                    coupon: this.coupon
                }
            })
        },

        record(surveyId, vpName, companyAccount) {
            this.sC.methods
                .recordVP(surveyId, vpName, companyAccount)
                .send({ from: this.$store.state.web3.coinbase })
                .then(receipt => {
                    console.log(receipt)
                })
        }
    }
}
</script>

<style lang="css">
.element-center {
    text-align: center;
    margin: 0 auto;
}
</style>
