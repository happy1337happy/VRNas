<template>
    <section class="need-wrapper">
        <div class="container">
            <div class="need-wrapp">
                <div class="need-left"data-aos="fade-right" data-aos-duration="1000">
                    <div class="img-wrapper">
                        <div class="img-wrapp">
                            <img src="/src/assets/img/boy-8.png" alt="img">
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
                <div class="need-right">
                    <span  data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Why Choose Us for Your VR Needs</h2>
                    <div class="accordion"  data-aos="fade-up" data-aos-duration="1000">
                        <div class="accordion-item" v-for="(item, index) in items" :key="index">
                            <div class="accordion-header" @click="toggleAccordion(index)" :class="{active: activeIndex === index}">
                                <h3>{{ item.title }}</h3>
                                <img src="/src/assets/img/arrow-bot.svg" alt="icon" class="arrow" :class="{active: activeIndex === index}">
                            </div>
                            <div class="accordion-content" :class="{ active: activeIndex === index }">
                                <p>{{ item.content }}</p>
                            </div>
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

    const activeIndex = ref(null);

    const items = ref([
        {
            title: 'Passionate and Experienced Team',
            content: 'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.'
        },
        {
            title: 'Customized Solutions',
            content: 'We are dedicated to delivering tailored VR solutions that meet your specific needs. Our expert designers and technologists work closely with you to create innovative, customized experiences that stand out.'
        },
        {
            title: 'Exceptional Customer Service',
            content: 'We pride ourselves on providing top-notch support for all your VR needs. Our committed team is always ready to assist, ensuring a seamless and satisfying experience from start to finish.'
        },
    ])

    function toggleAccordion(index){
        activeIndex.value = activeIndex.value === index ? null : index;
    };
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .need-wrapper{
        padding-top: 150px;
        overflow: hidden;
        padding-bottom: 240px;
        .need-wrapp{
            display: flex;
            justify-content: space-between;
            .need-right{
                width: 77%;
                margin-top: 67px;
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
                    margin-bottom: 32px;
                }
                .accordion{
                    width: 100%;
                    .accordion-item{
                        margin-bottom: 48px;
                        .accordion-header{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 10px;
                            position: relative;
                            cursor: pointer;
                            &::before{
                                content: '';
                                position: absolute;
                                bottom: -12px;
                                left: 0;
                                width: 100%;
                                height: 1px;
                                background-color: rgba(255, 255, 255, 0.35);
                            }
                            h3{
                                font-weight: 400;
                                font-size: 20px;
                                line-height: 100%;
                            }
                            .arrow{
                                width: 6px;
                                height: 3.5px;
                                transition: transform 0.3s ease;
                                transform: rotate(0deg);
                                &.active{
                                    transform: rotate(180deg);
                                }
                            }
                        }
                        .accordion-content{
                            margin-top: 24px;
                            overflow: hidden;
                            max-height: 0;
                            transition: max-height 0.5s ease-in-out;
                            p{
                                font-weight: 400;
                                line-height: 28px;
                                color: $grey-2;
                            }
                            &.active{
                                max-height: 300px;
                            }
                        }
                    }
                }
            }
            .need-left{
                position: relative;
                width: 100%;
                height: 100%;
                .img-wrapper{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    .img-wrapp{
                        position: absolute;
                        width: 563px;
                        height: 662px;
                        left: 30px;
                        top: 0;
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
                        left: 45.7px;
                        top: 165px;
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
                    top: 570px;
                    left: 318px;
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