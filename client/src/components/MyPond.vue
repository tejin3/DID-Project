<template>
    <div>
        <file-pond
            name="attachment"
            className="filepond"
            ref="pond"
            allow-multiple="false"
            max-files="1"
            :server="server"
            labelIdle="Drag and Drop your picture or <span class='filepond--label-action'>Browse</span>"
            accepted-file-types="image/png, image/jpeg, image/gif"
            @init="handleFilePondInit"
            @updatefiles="fileUpdated"
            imagePreviewHeight="170"
            imageCropAspectRatio="1:1"
            imageResizeTargetWidth="200"
            imageResizeTargetHeight="200"
            instantUpload="false"
            stylePanelLayout="compact circle"
            styleLoadIndicatorPosition="center bottom"
            styleButtonRemoveItemPosition="left bottom"
            styleButtonProcessItemPosition="right bottom"
            styleButtonEdidItemPosition="bottom center"
            styleProgressIndicatorPosition="center"
        />
    </div>
</template>
<script>
// import FilePond
import vueFilePond from 'vue-filepond'

// Import css
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.min.css'

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.min.js'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.min.js'
import FilePondPluginImageResize from 'filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.min.js'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.min.js'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'

// Create FilePond component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform,
    FilePondPluginImageEdit
)
// setOptions({
// server: {
//     url: 'http://localhost:3000',
//     process: {
//         url: '/upload',
//         ondata: formData => {
//             formData.append('Hello', 'World')
//             return formData
//         }
//     }
// }
// })

export default {
    components: { FilePond },
    props: {
        uploadType: {
            type: String,
            default: 'test'
        }
    },
    data() {
        return {
            server: {
                url: 'http://localhost:3000',
                process: {
                    url: `/upload/${this.uploadType}`,
                    onload: res => {
                        console.log('response is', res)
                    }
                },
                delete: null
            }
        }
    },
    methods: {
        handleFilePondInit() {
            console.log('FilePond has initialized')
            // FilePond instance methods are available on `this.$refs.pond`
            //  this.$refs.pond.getFiles();
        },
        fileUpdated(e) {
            console.log(e[0].file.name, 'is Added')
        }
        // onload() {
        //     console.log('file is uploaded') }
    }
}
</script>
<style lang="scss">
.filepond--root {
    width: 170px;
    height: auto;
    margin: 0 auto;
}

.filepond--label-action {
    text-decoration-color: #babdc0;
}

.filepond--drop-label {
    color: #4c4e53;
}
</style>
