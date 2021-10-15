<template>
    <div>
        <v-container>
            <input type="text" name="" id="" />
            <v-btn block>
                Block Button
            </v-btn>

            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                <v-card-title>
                    TITLE
                </v-card-title>
                <v-card-text class="text-h5 font-weight-bold">
                    {{ sampleData }}
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn class="mx-auto" @click="testAxios">
                        Click
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-file-input
                counter
                show-size
                truncate-length="15"
                @change="testUpload"
            >
                abc
            </v-file-input>
            <FilePond />
        </v-container>
    </div>
</template>
<script>
import FilePond from '@/components/FilePond'
export default {
    components: { FilePond },
    name: '',
    Components: {
        FilePond
    },
    data() {
        return {
            sampleData: 'abc'
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        testAxios() {
            console.log(this.sampleData)
            this.$api('/test', 'post', {
                param: this.sampleData
            }).then(result => {
                console.log(result, 'resultOK')
            })
        },

        async testUpload(event) {
            console.log(event.target.files)
            // let name = ''
            // let data = null

            // if (files) {
            //     name = files[0].name
            //     data = this.$base64(files[0])
            //     console.log(name, data)
            // } else {
            //     console.log('no files')
            // }

            // const { error } = await this.$api(
            //     `/upload/${type}/${name}`,
            //     'post',
            //     {
            //         data
            //     }
            // )
            // if (error) {
            //     return alert('이미지 업로드 실패했습니다. 다시 시도하세요.')
            // }

            // alert('이미지가 업로드 되었습니다.')
        }
    }
}
</script>
