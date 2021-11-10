<template style="border:5px  red solid">
    <v-container style="border:5px  yellow solid">
        <!--left _ 맞춤설문조사 시작-->
        <v-row
            style="border:5px  blue solid"
            class="d-flex justify-center mb-6"
        >
            <!-- <div style="border:5px  black solid"> -->
            <v-col md="3">
                <!-- <v-card class="mx-sauto" max-width="400"> -->
                <v-card>
                    <v-container fluid>
                        <v-row dense>
                            <v-col
                                v-for="card in cards"
                                :questions="card.questions"
                                :key="card.title"
                                :cols="card.flex"
                            >
                                <v-card>
                                    <v-img
                                        :src="card.src"
                                        class="white--text align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                        height="150px"
                                    >
                                        <v-card-title
                                            v-text="card.title"
                                        ></v-card-title>

                                        <v-card-title
                                            v-text="card.number"
                                        ></v-card-title>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

                <br />
                <br />
                <br />
                <br />

                <!-- <v-card class="mx-sauto" max-width="400"> -->
                <v-card>
                    <v-app-bar dark color="pink">
                        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
                        <v-icon>mdi-account-check</v-icon>
                        <v-toolbar-title>맞춤 설문조사</v-toolbar-title>
                        <!-- <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn> -->
                    </v-app-bar>

                    <v-container>
                        <v-row dense>
                            <v-col
                                v-for="(item, i) in items"
                                :key="i"
                                cols="12"
                            >
                                <v-card :color="item.color" dark>
                                    <div
                                        class="d-flex flex-no-wrap justify-space-between"
                                    >
                                        <div>
                                            <v-card-title
                                                class="text-h5"
                                                v-text="item.title"
                                            ></v-card-title>

                                            <v-card-subtitle
                                                v-text="item.artist"
                                            ></v-card-subtitle>

                                            <v-card-actions>
                                                <v-btn
                                                    v-if="
                                                        item.artist ===
                                                            'Ellie Goulding'
                                                    "
                                                    class="ml-2 mt-3"
                                                    fab
                                                    icon
                                                    height="40px"
                                                    right
                                                    width="40px"
                                                >
                                                    <v-icon>mdi-play</v-icon>
                                                </v-btn>
                                                <v-btn
                                                    v-else
                                                    class="ml-2 mt-5"
                                                    outlined
                                                    rounded
                                                    small
                                                >
                                                    설문시작
                                                </v-btn>
                                            </v-card-actions>
                                        </div>

                                        <v-avatar class="ma-3" size="125" tile>
                                            <v-img :src="item.src"></v-img>
                                        </v-avatar>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
            <!--left _ 맞춤설문조사 끝-->

            <v-col md="8" mb-6 class="d-flex align-center mb-6">
                <main-survey style="border:5px  red solid" />
            </v-col>
            <!-- </div> -->
        </v-row>
    </v-container>
</template>
<script>
import MainSurvey from './MainSurvey.vue'
export default {
    name: 'SurveyLayout',
    components: { MainSurvey },
    data: () => ({
        items: [
            {
                color: '#1F7087',
                title: '패션',
                artist: '무신사를 좋아하는 이유는?'
            },
            {
                color: '#952175',
                title: '패션',
                artist: '무신사에서 의류도 구매하...'
            },
            {
                color: '#922179',
                title: '패션',
                artist: '무신사를 알게된 경로는? '
            }
        ],
        cards: [
            {
                title: 'Questions',
                number: '12'
            },
            {
                title: 'Time to answer',
                number: '3'
            }
        ]
    })
}
</script>
