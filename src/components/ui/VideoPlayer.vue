<template>
    <div  class="video-wrapp" @click="playVideo" :class="{playing : isPlaying}">
        <img v-if="!isPlaying" class="preview" :src="previewImg" alt="video">
        <div class="text-video" v-if="!isPlaying">
            <div class="oval">{{ label }}</div>
            <h3>{{ videoTitle }}</h3>
        </div>
        <div class="video-cotainer" v-show="isPlaying">
            <iframe :src="videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup>
    import { ref,defineProps } from 'vue';

    const props = defineProps({
        previewImg: String,
        label: String,
        videoTitle: String,
        videoLink: String,
    });

    const isPlaying = ref(false);

    const videoSrc = ref('');

    function playVideo(){
        if(!isPlaying.value){
            videoSrc.value=`${props.videoLink}?autoplay=1&mute=1`;
            isPlaying.value=true;
        }
    }
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
.video-wrapp{
    position: relative;
    width: 100%;
    height: 522px;
    overflow: hidden;
    transition: transform 0.8s ease;
    cursor: pointer;
    border-radius: 12px;
    margin-bottom: 48px;
    &:hover{
        .preview{
            transform: scale(1.1);
        }
        &::before{
            transform: translate(-50%, -50%) scale(1.1);
        }
    }
    &::before{
        content: '';
        position: absolute;
        background-image: url(/src/assets/img/big-video-play.svg);
        width: 100px;
        height: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.2s ease;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        z-index: 1;
    }
    &.playing::before {
        opacity: 0;
    }
    .preview{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    .text-video{
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 52px;
        left: 34px;
        z-index: 1;
        .oval{
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            border-radius: 16px;
            background-color: rgba(255, 255, 255, 0.3);
            width: fit-content;
            padding: 2px 10px;
            margin-bottom: 12px;
        }
        h3{
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
        }
    }
    .video-cotainer{
        width: 100%;
        height: 100%;
        iframe{
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }
    }
}
</style>