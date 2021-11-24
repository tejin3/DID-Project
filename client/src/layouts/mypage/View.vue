<template>
    <div>
        <!-- 유저 프로필 헤더 -->
        <!-- props로 넣어줘야 할 데이터는 유저 어드레스, 유저네임, 유저 프로필 이미지 패스 -->
        <ProfileHeader />
        <!-- 유저 프로필 상세 내용 -->
        <ProfileMain />
    </div>
</template>
<script>
import ProfileHeader from '@/layouts/mypage/ProfileHeader'
import ProfileMain from '@/layouts/mypage/ProfileMain'

export default {
    name: 'MypageView',
    components: { ProfileHeader, ProfileMain },
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
