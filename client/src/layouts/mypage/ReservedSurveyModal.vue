<template>
    <div>
        <v-dialog class="modalblack-bg" persistent v-model="this.modalOpen">
            <div class="white-bg">
                <v-row class="d-flex justify-space-between px-8 my-1">
                    <div align="left">
                        <img
                            src="../../assets/img/logo.png"
                            width="20px"
                            alt=""
                        />
                    </div>
                    <v-btn class="pb-2" icon @click="$emit('close-modal')">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>

                <div style="border:3px solid pink; margin-bottom:30px"></div>
                <h1>예약한 설문 📑</h1>
                <br />

                <div v-if="this.survey.length >= 1">
                    <v-row>

                        <v-col cols="4" :key="i" v-for="(d, i) in survey">
                            <v-card
                                class="panel mx-5 rounded-xl card-panel"
                                max-width="200"
                                max-height="330"
                            >
                             <v-system-bar
      color="white"
      dark
    >
      <v-spacer></v-spacer>



      <v-icon>mdi-close</v-icon>
    </v-system-bar>
                                <v-img
                                    :src="
                                        `http://localhost:3000/download/${d.survey_image_path}`
                                    "
                                    height="130"
                                ></v-img>

                                <v-card-title class="text-h7">
                                    {{ d.survey_title }}
                                </v-card-title>
                                <v-chip
                                    close-icon="mdi-close-outline"
                                    color="grey"
                                    small
                                    class="white--text pa-0 ml-2"
                                >
                                    <v-card-subtitle class="text-subtitle-2">
                                        적립금: {{ d.survey_price }} | 쿠폰:
                                        {{ d.survey_coupon }}
                                    </v-card-subtitle>
                                </v-chip>
                                <v-card-subtitle>
                                    <v-icon v-text="icon"></v-icon>남은 기간
                                    <v-chip
                                        class="ma-1 font-weight-bold text-subtitle-2"
                                        color="deep-purple accent-3"
                                        outlined
                                        defalut
                                    >
                                        D-{{ dDays[i] }}
                                    </v-chip>
                                </v-card-subtitle>
                                <v-btn
                                    dark
                                    color="deep-purple accent-2"
                                    class="pt-1"
                                    >지금하기</v-btn
                                >
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <div v-else>
                    <p class="text-h5 font-weight-black align-self-center mt-10">
                    하고싶은 설문들을 예약해보세요
                    </p>
                    <v-img width="200" src="@/assets/img/main/pngegg.png"></v-img>
                </div>
            </div>
        </v-dialog>
    </div>
</template>
<script>
export default {
    name: '',
    props: ['modalOpen'],
    components: {},
    data() {
        return {
            survey: null,
            dDays: [4, 21],
            isReserved: false
        }
    },
    setup() {},
    created() {
        this.getSurveyById()
        // this.discountDay()
    },
    mounted() {},
    unmounted() {},
    methods: {
        async getSurveyById() {
            try {
                var survey = await this.$api('/survey', 'post', {
                    param: this.$store.state.reservedSurvey
                })
                this.survey = survey
                console.log(this.survey)
            } catch (err) {
                console.log(err)
            }
        }
        // async discountDay() {
        //     if (this.$store.state.reservedSurvey !== 0) {
        //     this.dDays = await this.$api('/date', 'get')
        //     } else {
        //         console.log('no dday')
        //     }
        // }
    }
}
</script>
<style scoped>
.margin-s {
    margin: auto 5px;
}
.modalblack-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: rgb(33, 33, 33); */
    /* opacity: 0.9; */
    padding: 20px;
    z-index: 2;
}
.white-bg {
    background: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 550px;
    border-radius: 10px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
}
table {
    border: 2px solid black;
    border-collapse: collapse;
    text-align: center;
}
th,
td {
    border: 0.5px solid;
    padding: 10px 5px;
    width: 200px;
}
th {
    background-color: pink;
    color: white;
}
</style>
