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

                <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                        mandatory
                    >
                        <v-chip>설문중</v-chip>

                        <v-chip>설문완료</v-chip>
                    </v-chip-group>

                    <Slider />
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>요청 VC List</v-card-title>

                <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <v-chip>연령VC[검증]</v-chip>

                        <v-chip>성별VC[검증]</v-chip>

                        <v-chip>소득VC[검증]</v-chip>

                        <v-chip>학력VC[검증]</v-chip>

                        <v-chip><DialogScroll /></v-chip>
                    </v-chip-group>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
import Slider from './Slider.vue'
import DialogScroll from './DialogScroll.vue'
export default {
    name: 'CompanyView',
    components: { Slider, DialogScroll },
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
