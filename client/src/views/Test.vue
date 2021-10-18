<template>
    <div>
        <ProfileHeader />

        <!-- 유저 프로필 상세 내용 -->
        <v-row style="border:solid blue 3px">
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col sm="6" md="4">
                        <v-card outlined>
                            지급된 이더
                        </v-card>
                    </v-col>
                    <v-col sm="6" md="4">
                        <v-card outlined>
                            지급된 쿠폰
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col sm="6" md="4">
                        <v-card outlined>
                            지급된 이더
                        </v-card>
                    </v-col>
                    <v-col sm="6" md="4">
                        <v-card outlined>
                            지급된 쿠폰
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
// import MyPond from '@/components/Cards/MyPond'
import ProfileHeader from '@/components/MyPage/ProfileHeader'

export default {
    name: '',
    components: { ProfileHeader },
    data() {
        return {
            sampleData: 'abc'
        }
    },
    computed: {},
    mounted() {},
    unmounted() {},
    methods: {
        async copyAddress() {
            try {
                const userAddress = this.userAddress
                await navigator.clipboard.writeText(userAddress)
                console.log('Successfully, Address Copy!')
            } catch (err) {
                console.error('Failed to copy: ', err)
            }
        },
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
        },
        async fileTransfer() {
            // var formData = new FormData() // Currently empty
            // formData.append(name, value, filename);
            // formData.append('userpic', myFileInput.files[0], 'chris.jpg')
        }
    }
}
</script>
