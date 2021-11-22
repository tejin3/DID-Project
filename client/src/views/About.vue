<template>
    <v-container class="mt-16">
        <div
            style="border:3px solid #9568fd; background-color:#9568fd; margin-top:10px"
        ></div>
        <!--조사참여 bn글씨 시작 -->
        <v-container
            class="d-flex justify-center align-center"
            style="margin-bottom:20px; margin-top:85px"
        >
            <div class="hi" style="justify-content:center; display:flex;">
                <div
                    align="center"
                    style="color:black; flex:1; margin-left:20px;"
                >
                    <div style="font-size:2.5em">
                        블록체인 기반 맞춤 설문조사 플랫폼 weDIDsurvey
                    </div>
                    <br />
                    <!-- <div style="font-size:1.2em">
                        weDIDsurvey에서 설문하면? 개인이 원하는 VC들만 모아 VP를
                        만들어 공개됩니다.
                    </div> -->
                    <br />
                    <img
                        src="../assets/img/about/brand_concept.png"
                        alt=""
                        width="auto"
                        height="30px"
                    />
                </div>
            </div>
        </v-container>
        <br />
        <div
            style="border:3px solid #9568fd; background-color:#9568fd; margin-top:30px"
        ></div>

        <v-row no-gutters align="center" class="testLine">
            <v-col align="center">
                <h1 class="textColor">
                    보상은 왜 다른데 보다 더 많은 거죠!?
                </h1>
                <br />
                <h2>
                    <v-icon class="text-h4 textColor mb-1"
                        >mdi-arrow-right-thick</v-icon
                    >
                    저희 weDIDsurvey는 맞춤형 설문조사 플랫폼으로,<br />
                    의뢰금이 보다 효율적으로 전달될 수 있어서 그렇습니다.
                </h2>
            </v-col>
            <v-col align="center">
                <v-img
                    transition="scale-transition"
                    width="350"
                    src="@/assets/img/main/Money.png"
                />
            </v-col>
        </v-row>
        <v-row no-gutters align="center" class="testLine">
            <v-col align="center">
                <!-- Technology vector created by macrovector -->
                <v-img
                    transition="scale-transition"
                    width="350"
                    src="@/assets/img/security.png"
                />
            </v-col>
            <v-col align="center" class="pa-6">
                <h1 class="textColor">
                    내 개인정보는 정말 안전한건가요?
                </h1>
                <br />
                <h2>
                    <v-icon class="text-h4 textColor mb-1"
                        >mdi-arrow-right-thick</v-icon
                    >
                    네, 그럼요! 저희 서비스는 DID 기반이기 때문에 플랫폼 내<br />
                    고객님의 개인정보는 고객님의 개인키 없이는 누구도 알아볼 수
                    없습니다.
                </h2>
            </v-col>
        </v-row>
        <v-row no-gutters align="center" class="testLine">
            <v-col align="center" class="pa-6">
                <h1 class="textColor">
                    맞춤설문은 어떻게 이뤄지는거죠?
                </h1>
                <br />
                <h2>
                    <v-icon class="text-h4 textColor mb-1"
                        >mdi-arrow-right-thick</v-icon
                    >
                    고객님께서 서비스 이용시, <br />저희 플랫폼 내 유치된 모든
                    설문지 조건들과 고객님 개인PC 내 안전하게 보관되어 있는
                    신원자격을 비교하여 스크리닝됩니다!
                </h2>
            </v-col>
            <v-col align="center">
                <!-- Technology vector created by macrovector -->
                <v-img
                    transition="scale-transition"
                    width="350"
                    src="@/assets/img/surveyP.png"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            sampleData: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped>
.outline {
    border: 3px solid black;
}
.testLine {
    height: 30rem;
}
.textColor {
    color: #9568fd;
}
</style>
