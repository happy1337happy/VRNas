<template>
    <section class="about-banner-wrapper">
        <div class="container">
            <div class="about-banner-wrapp">
                <div class="about-banner-left">
                    <span  data-aos="fade-up" data-aos-duration="1000">ABOUT US</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Bringing Your Vision to Life: Learn About VRNas</h2>
                    <div class="about-us-text"  data-aos="fade-up" data-aos-duration="1000">
                        <p>VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                        <p>Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs.</p>
                        <p>From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.</p>
                    </div>
                </div>
                <div class="about-banner-right"  data-aos="fade-right" data-aos-duration="1000">
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/boy-7.png" alt="img">
                        </div>
                        <div class="background"></div>
                    </div>
                    <div  class="video-wrapp" @click="playVideo" :class="{playing : isPlaying}">
                        <img v-if="!isPlaying" class="preview" src="/src/assets/img/video-dude.png" alt="video">
                        <div class="video-cotainer" v-if="isPlaying">
                            <iframe :src="videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    const isPlaying = ref(false);

    const videoSrc = ref('');

    function playVideo(){
        if(!isPlaying.value){
            videoSrc.value=
            'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1';
            isPlaying.value=true;
        }
    }
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .about-banner-wrapper{
        padding-bottom: 241px;
        .about-banner-wrapp{
            display: flex;
            .about-banner-left{
                margin-top: 190px;
                width: 100%;
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
                    margin-bottom: 18px;
                }
                .about-us-text{
                    font-weight: 300;
                    line-height: 28px;
                    color: $grey-2;
                }
            }
            .about-banner-right{
                position: relative;
                width: 93%;
                height: 100%;
                .img-wrapper{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    .img-wrapp{
                        position: absolute;
                        width: 398.6px;
                        height: 574px;
                        right: 47px;
                        top: 148px;
                        z-index: 1;
                        &::before{
                            content: '';
                            position: absolute;
                            width: 600px;
                            height: 340px;
                            top: 150px;
                            right: -55px;
                            background: $main-gradient;
                            border-radius: 50%;
                            z-index: -1;
                            filter: blur(90px);
                            opacity: 0.5;
                            pointer-events: none;
                            rotate: -15deg;
                        }
                        img{
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .background{
                        position: absolute;
                        z-index: -2;
                        background-color: $black-50;
                        right: 28px;
                        top: 226px;
                        width: 399px;
                        height: 497px;
                    }
                }
                .video-wrapp{
                    position: absolute;
                    width: 196px;
                    height: 128px;
                    overflow: hidden;
                    transition: transform 0.8s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    top: 629px;
                    right: 330px;
                    z-index: 2;
                    &:hover{
                        .preview{
                            transform: scale(1.1);
                        }
                        &::before{
                            transform: scale(1.1);
                        }
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        background-image: url(/src/assets/img/play-btn.svg);
                        width: 28px;
                        height: 28px;
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
                    .video-cotainer{
                        width: 100%;
                        height: 100%;
                        iframe{
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                    }
                }
            }
        }
    }
</style>