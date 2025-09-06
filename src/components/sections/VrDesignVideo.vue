<template>
    <section class="design-video-wrapper">
        <div class="container">
            <div class="design-video-wrapp">
                <span  data-aos="fade-up" data-aos-duration="1000">OUR VR DESIGN PROJECT</span>
                <h2  data-aos="fade-up" data-aos-duration="1000">Revolutionize Your Experience with Our Cutting-Edge VR Design Project</h2>
                <div class="background-light"></div>
                <VideoPlayer
                    :previewImg="previewImage"
                    videoLink="https://www.youtube.com/embed/QbgGIy3kKiM"
                    label="VR Service"
                    videoTitle="How to get started"
                >    
                </VideoPlayer>
                <div class="btn-wrapp" data-aos="fade-up" data-aos-duration="1000">
                    <MyButton variant="gradient">GET STARTED</MyButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import VideoPlayer from '../ui/VideoPlayer.vue';
    import MyButton from '../ui/MyButton.vue';
    import { useImageLoader } from '../../composables/useImageLoader';
    
    const previewImage = useImageLoader('@/assets/img/big-video-img-2.png');
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .design-video-wrapper{
        margin: 150px 0;
        .design-video-wrapp{
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                font-weight: 500;
                line-height: 100%;
                background: $main-gradient;
                background-clip: text;            
                -webkit-background-clip: text;        
                -webkit-text-fill-color: transparent;
                display: inline-block;
                margin-bottom: 12px;
            }
            h2{
                font-weight: 600;
                font-size: 48px;
                line-height: 58px;
                margin-bottom: 48px;
                width: 68%;
                text-align: center;
            }
            .background-light{
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    width: 454px;
                    height: 200px;
                    top: -90px;
                    left: -755px;
                    background: $main-gradient;
                    border-radius: 50%;
                    z-index: -1;
                    filter: blur(60px);
                    opacity: .5;
                    pointer-events: none;
                    rotate: -10deg;
                }
            }
        }
    }
</style>