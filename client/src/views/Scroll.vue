<template>
    <div>ddd</div>
</template>
<script>
export default {
    name: 'scroll',
    components: {},
    data() {
        return {
            scrollY: 0,
            timer: null
        }
    },
    setup() {},
    created: function() {
        // 핸들러 등록하기
        window.addEventListener('scroll', this.handleScroll)
    },
    mounted() {},
    unmounted() {},
    beforeDestroy: function() {
        // 핸들러 제거하기(컴포넌트 또는 SPA의 경우 절대 잊지 말아 주세요!)
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        // 위화감을 느끼지 않을 200ms 간격으로 scroll 데이터를 변경하는 예
        handleScroll: function() {
            if (this.timer === null) {
                this.timer = setTimeout(
                    function() {
                        this.scrollY = window.scrollY
                        clearTimeout(this.timer)
                        this.timer = null
                    }.bind(this),
                    200
                )
            }
        }
    }
}
</script>
