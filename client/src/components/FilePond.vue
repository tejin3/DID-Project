<template>
    <div>
        <file-pond
            name="test"
            ref="pond"
            class-name="my-pond"
            label-idle="Drop files here..."
            accepted-file-types="image/jpeg,image/png"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"
        />
    </div>
</template>
<script>
// import FilePond
import vueFilePond from 'vue-filepond'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js'

// Create FilePond component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
)

export default {
    name: '',
    components: { FilePond },
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
