<template>
    <section class="banner-wrapper">
        <div class="container">
            <div class="banner-wrapp">
                <div class="banner-top">
                    <h1 data-aos="fade-up" data-aos-duration="1000">Immerse Yourself <br> in Virtual Reality</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
                    <div class="btn-wrapp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                        <MyButton variant="gradient" to="/about-us">discover more</MyButton>
                    </div>
                </div>
                <div class="banner-mid">
                    <div class="mid-left" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                        <div class="extra-wrapper">
                            <div class="dudes">
                                <img src="/src/assets/img/face-1.png" alt="dude" class="dude-1">
                                <img src="/src/assets/img/face-2.png" alt="dude" class="dude-2">
                                <img src="/src/assets/img/face-3.png" alt="dude" class="dude-3">
                            </div>
                            <div class="happy"><span>32k+ </span>Happy Client</div>
                        </div>
                        <div  class="video-wrapp" @click="playVideo" :class="{playing : isPlaying}">
                            <img v-if="!isPlaying" class="preview" src="/src/assets/img/video-dude.png" alt="video">
                            <div class="video-cotainer" v-if="isPlaying">
                                <iframe :src="videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="mid-right" data-aos="fade-left" data-aos-duration="1000">
                        <div class="vr-dude-wrapper">
                            <div class="vr-dude">
                                <img src="/src/assets/img/boy-1.png" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-bottom" data-aos="fade-left" data-aos-duration="1000">
                    <div class="block">
                        <img src="/src/assets/img/tech-1.svg" alt="img">
                        <h2>Expertise</h2>
                        <p>Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
                    </div>
                    <div class="block">
                        <img src="/src/assets/img/tech-2.svg" alt="img">
                        <h2>Customization</h2>
                        <p>Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
                    </div>
                    <div class="block">
                        <img src="/src/assets/img/tech-3.svg" alt="img">
                        <h2>Service</h2>
                        <p>We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="backgroung">
            <img src="/src/assets/img/grid.svg" alt="img">
        </div>
    </section>
</template>

<script setup>
import MyButton from '../ui/MyButton.vue';
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
    .banner-wrapper{
        padding-top: 87px;
        position: relative;
        overflow-x: hidden;
        .banner-wrapp{
            .banner-top{
                h1{
                    font-weight: 600;
                    font-size: 64px;
                    line-height: 130%;
                    margin-bottom: 12px;
                }
                p{
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 28px;
                    color: $grey-2;
                    width: 38%;
                    margin-bottom: 32px;
                }
            }
            .banner-mid{
                margin-top: 81px;
                display: flex;
                justify-content: space-between;
                .mid-left{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 66px;
                    .extra-wrapper{
                        display: flex;
                        align-items: center;
                        gap: 18px;
                        .dudes{
                            display: flex;
                            img{
                                object-fit: cover;
                                margin-left: -12px;
                                &:first-child{
                                    margin-left: 0;
                                }
                            }
                        }
                        .happy{
                            font-weight: 300;
                            line-height: 28px;
                            color: $grey-2;
                            span{
                                font-weight: 600;
                                color: $white;
                                position: relative;
                                &::before{
                                    content: '';
                                    position: absolute;
                                    bottom: -2px;
                                    left: 50%;
                                    width: 48px;
                                    height: 7px;
                                    background-image: url(/src/assets/img/underline.svg);
                                    transform: translateX(-50%);
                                }
                            }
                        }
                    }
                    .video-wrapp{
                        position: relative;
                        width: 196px;
                        height: 128px;
                        overflow: hidden;
                        transition: transform 0.8s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
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
                .mid-right{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    .vr-dude-wrapper{
                        position: absolute;
                        bottom: -194px;
                        right: 0px;
                        width: 100%;
                        height: 100%;
                        .vr-dude{
                            position: absolute;
                            width: 526px;
                            height: 626px;
                            bottom: 0;
                            right: 0;
                            z-index: 1;
                            &::before{
                                content: '';
                                position: absolute;
                                width: 600px;
                                height: 340px;
                                top: 150px;
                                left: -55px;
                                background: $main-gradient;
                                border-radius: 50%;
                                z-index: -1;
                                filter: blur(50px);
                                opacity: 0.5;
                                pointer-events: none;
                                rotate: -15deg;
                            }
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }

                    }
                }
            }
            .banner-bottom{
                display: flex;
                padding: 42px 64px 53px 64px;
                background-color: $black-50;
                gap: 50px;
                border: 1px solid transparent;
                border-image-source: linear-gradient(
                    94.92deg,
                    rgba(255, 255, 255, 0.3) -0.29%,
                    rgba(255, 255, 255, 0) 100%
                );
                border-image-slice: 1;
                .block{
                    display: flex;
                    flex-direction: column;
                    img{
                        width: 65px;
                        height: 65px;
                        margin-bottom: 54.16px;
                    }
                    h2{
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 100%;
                        margin-bottom: 12px;
                    }
                    p{
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 28px;
                        color: $grey-1;
                    }
               } 
            }
        }
        .backgroung{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -2;
            width: 80vw;
            height: 100vh;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>