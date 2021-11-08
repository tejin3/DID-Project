<template>
    <div>
        <section>
            <svg
                class="blob-motion"
                id="visual"
                viewBox="0 0 960 540"
                width="960"
                height="540"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <g transform="translate(450.7256843113689 283.4942824330989)">
                    <path
                        id="blob1"
                        d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
                        fill="#BB004B"
                    ></path>
                </g>
                <g
                    transform="translate(509.54377535978017 281.49390864595887)"
                    style="visibility: hidden"
                >
                    <path
                        id="blob2"
                        d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                        fill="#BB004B"
                    ></path>
                </g>
            </svg>
        </section>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>
<script>
const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
).start()
</script>
<script>
export default {
    name: 'TestIm',
    components: {},
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
<style>
body {
    margin: 0;
    font-family: 'Prompt', sans-serif;
    color: white;
    background: #202731;
    overflow-x: hidden;
}

section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding-top: 100px;
}

.blue {
    background: #3c31dd;
}

.red {
    background: #dd3f31;
}

.pink {
    background: #ff0066;
    overflow: hidden;
}

.dark {
    background: #0f0f10;
}

.flip {
    transform: rotate(180deg);
}

/* Blobs SVG background image via https://haikei.app/ */

.blob-motion {
    position: absolute;
    transform: translateY(-20%);
    z-index: 0;
}

.blob-content {
    z-index: 1;
}

.blobs {
    width: 100%;
    /* background: url('../assets/img/blobs.svg') no-repeat bottom / cover; */
}
</style>
