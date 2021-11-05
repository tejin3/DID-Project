<template>
    <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>

                <v-card-title>패션 설문[설문번호 :10]</v-card-title>
                <!-- <v-card-title>{{n.title}}패션 설문[설문번호 :10]</v-card-title> -->

                <v-card-text>
                    <v-chip-group
                        active-class="deep-purple accent-4 white--text"
                        column
                        mandatory
                    >
                        <v-chip>설문중</v-chip>

                        <v-chip>설문완료</v-chip>
                    </v-chip-group>

                    <div class="mt-10">
                        <v-slider
                            class="mt-10"
                            v-model="ex3.val"
                            label="설문진행률"
                            thumb-color="red"
                            thumb-label="always"
                            readonly
                        ></v-slider>
                        <!-- v-model="`${n.val}`"
                        :label="`${n.label}`"
                        :label="`${n.color}`" -->
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>요청 VC List</v-card-title>

                <v-card-text>
                    <v-chip-group
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <!-- v-for="(n, vc) in vcList" :key="n"  아님-->
                        <!-- 그냥 돌리면됨 -->
                        <v-chip>연령VC[200원]</v-chip>
                        <!-- <v-chip>{{vc}}</v-chip> -->

                        <v-chip>성별VC[200원]</v-chip>

                        <v-chip>소득VC[1000원]</v-chip>

                        <v-chip>학력VC[300원]</v-chip>

                        <v-chip><DialogScroll /></v-chip>
                    </v-chip-group>
                </v-card-text>
            </v-card>
        </v-col>
        <button @click="init()">hello</button>
    </v-row>
</template>
<script>
// import Slider from './Slider.vue'
import DialogScroll from './DialogScroll.vue'
export default {
    // props: {
    //     ex3: {
    //         type: Array,
    //         default: function() {
    //             return [
    //                 {
    //                     label: '설문진행률',
    //                     val: 50,
    //                     color: 'red'
    //                 }
    //             ]
    //         }
    //     }
    // },
    name: 'CompanyView',
    components: { DialogScroll },
    data() {
        return {
            loading: false,
            ex3: {
                val: 50
            },
            test: [],
            test1: [],
            test2: []
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.init()
    },
    unmounted() {},
    methods: {
        async init() {
            await this.$api('/surveys/data', 'get').then(result => {
                console.log(result)
                this.test = result
            })
            await this.$api('/surveys/test', 'get').then(result => {
                console.log(result)
                this.test = result
            })
            await this.$api('/surveys/testvc', 'get').then(result => {
                console.log(result)
                this.test = result
            })
        }
    }
}
</script>
