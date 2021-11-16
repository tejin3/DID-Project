<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="500px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    {{ title }}
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Select DID</v-card-title>
                <v-divider></v-divider>
                <v-card-text
                    style="padding: 5px;"
                    :key="i"
                    v-for="(n, i) in completePeople"
                >
                    <v-checkbox
                        v-model="selected"
                        :label="n.user_account"
                        :value="n.user_account"
                    ></v-checkbox>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                    </v-btn>
                    <Loader />
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import Loader from './Loader.vue'
export default {
    components: { Loader },
    props: {
        title: {
            type: String,
            default: '페이지 제목'
        },
        completePeople: {
            type: Array,
            default: function() {
                return []
            }
        },
        surveyId: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            dialogm1: '',
            dialog: false,
            selected: [],
            surveyData1: []
        }
    },
    methods: {}
}
</script>
