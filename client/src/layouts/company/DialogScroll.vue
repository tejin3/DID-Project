<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    '지역' VC 검증
                </v-btn>
            </template>
            <v-card>
                <v-card-title>Select Country</v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <v-checkbox
                        v-model="selected"
                        label="Bahamas, The"
                        value="bahamas"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Bahrain"
                        value="bahrain"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Bangladesh"
                        value="bangladesh"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Barbados"
                        value="barbados"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Belarus"
                        value="belarus"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Belgium"
                        value="belgium"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Belize"
                        value="belize"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Benin"
                        value="benin"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Bhutan"
                        value="bhutan"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Bolivia"
                        value="bolivia"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Bosnia and Herzegovina"
                        value="bosnia"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Botswana"
                        value="botswana"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Brazil"
                        value="brazil"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Brunei"
                        value="brunei"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Bulgaria"
                        value="bulgaria"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Burkina Faso"
                        value="burkina"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Burma"
                        value="burma"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="selected"
                        label="Burundi"
                        value="burundi"
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
    data() {
        return {
            dialogm1: '',
            dialog: false,
            selected: []
        }
    }
}
</script>
