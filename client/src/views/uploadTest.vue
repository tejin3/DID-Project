<template>
    <div>
        <link
            type="text/css"
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />

        <v-container>
            <div style="border: 3px black solid">
                <!-- title -->
                <h1>Image Upload Test</h1>

                <div style="border: 1px black solid">
                    <!-- 파일선택 -->
                    <label class="btn btn-default">
                        <input type="file" ref="file" @change="fileSelect" />
                    </label>
                    <button
                        class="btn btn-success"
                        :disabled="!selectedFiles"
                        @click="fileUpload"
                    >
                        Upload
                    </button>
                </div>

                <div class="card">
                    <div class="card-header">List of Files</div>
                    <ul class="list-group list-group-flush">
                        <li
                            class="list-group-item"
                            v-for="(file, index) in fileInfos"
                            :key="index"
                        >
                            {{ file }}
                            <img
                                :src="`http://localhost:3000/download/${file}`"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            selectedFiles: null,
            currentFile: null,
            progress: 0,
            message: '',
            fileInfos: ['surveyImg6.jpg']
            // surveyImg1.png surveyImg2.png 가능
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        fileSelect() {
            this.selectedFiles = this.$refs.file.files
        },
        async fileUpload() {
            this.progress = 0

            // 선택된 파일
            this.currentFile = this.selectedFiles.item(0)

            // 파일전송 (url, file, 추가사항)
            const result = await this.$upload(
                '/download/file',
                this.currentFile,
                'descriptions'
            )

            console.log(result)
            this.selectedFiles = null
        }
    }
}
</script>
