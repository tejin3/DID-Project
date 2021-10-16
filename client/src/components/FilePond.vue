<template>
    <div>
        <file-pond
            name="filepond"
            class="filepond"
            ref="pondUploadPicture"
            label-idle="Drag and Drop your picture or <span class='filepond--label-action'>Browse</span>"
            allow-file-type-validation="true"
            allow-multiple="false"
            instantUpload="false"
            accepted-file-types="image/png, image/jpeg, image/gif"
            allowImagePreview="true"
            allowImageCrop="true"
            allowImageEdit="true"
            allowImageResize="true"
            allowImageTransform="true"
            allowReplace="true"
            allowImageExifOrientation="true"
            checkValidity="true"
            maxFiles="1"
            imagePreviewHeight="170"
            imageCropAspectRatio="1:1"
            imageResizeTargetWidth="200"
            imageResizeTargetHeight="200"
            stylePanelLayout="compact circle"
            styleLoadIndicatorPosition="center bottom"
            styleProgressIndicatorPosition="right bottom"
            styleButtonProcessItemPosition="right bottom"
            styleButtonRemoveItemPosition="left bottom"
        />
    </div>
</template>
<script>
// import FilePond
import vueFilePond from 'vue-filepond'

// Import Css
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.esm.min.js'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.min.js'
import FilePondPluginImageResize from 'filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.min.js'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.min.js'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.esm.min.js'

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

export default {
    name: '',
    components: { FilePond },
    data() {
        return { myFiles: ['cat.jpeg'] }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized2')
            // FilePond instance methods are available on `this.$refs.pond`
        }
    }
}
</script>
