<template>
    <section class="about-wrapper">
        <div class="container">
            <div class="about-wrapp">
                <div class="about-left" data-aos="fade-right" data-aos-duration="1000">
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/boy-2.png" alt="img">
                        </div>
                        <div class="background"></div>
                    </div>
                    <div  class="video-wrapp" @click="playVideo" :class="{playing : isPlaying}">
                        <img v-if="!isPlaying" class="preview" src="/src/assets/img/glasses.png" alt="video">
                        <div class="video-cotainer" v-if="isPlaying">
                            <iframe :src="videoSrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="about-right">
                    <span  data-aos="fade-up" data-aos-duration="1000">ABOUT US</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Bring your events to life like never before with our VR services.</h2>
                    <p  data-aos="fade-up" data-aos-duration="1000">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                    <ul  data-aos="fade-up" data-aos-duration="1000">
                        <li>Cutting-Edge Technology</li>
                        <li>Versatile Applications</li>
                        <li>Affordable and Accessible</li>
                    </ul>
                    <div class="btn-wrapp" data-aos="fade-up" data-aos-duration="1000">
                        <MyButton variant="gradient" to="/about-us">read more</MyButton>
                    </div>
                </div>
            </div>
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
    .about-wrapper{
        margin-top: 120px;
        .about-wrapp{
            display: flex;
            justify-content: space-between;
            .about-left{
                position: relative;
                width: 100%;
                height: 100%;
                .img-wrapper{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    .img-wrapp{
                        position: absolute;
                        width: 518px;
                        height: 622px;
                        left: 24px;
                        top: 0;
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
                            filter: blur(90px);
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
                    .background{
                        position: absolute;
                        z-index: -2;
                        background-color: $black-50;
                        left: 0;
                        top: 126px;
                        width: 399px;
                        height: 496.5px;
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
                    top: 520px;
                    left: 330px;
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
            .about-right{
                width: 84%;
                margin-top: 81px;
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
                    margin-bottom: 12px;
                }
                p{
                    font-weight: 300;
                    line-height: 28px;
                    color: $grey-2;
                    margin-bottom: 24px;
                    width: 93%;
                }
                ul{
                    margin-bottom: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    li{
                        font-weight: 400;
                        line-height: 28px;
                        position: relative;
                        margin-left: 28px;
                        &::before{
                            content: '';
                            position: absolute;
                            width: 16px;
                            height: 16px;
                            background-image: url(/src/assets/img/list-icon.svg);
                            left: -26px;
                            top: 5.5px;
                        }
                    }
                }
            }
        }
    }
</style>