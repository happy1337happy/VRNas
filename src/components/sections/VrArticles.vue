<template>
    <section class="articles-wrapper">
        <div class="articles-left"  data-aos="fade-left" data-aos-duration="1000">
            <h3>Recent Article</h3>
            <div class="article-elements">
                <div class="article-element" v-for=" article in articles" :key="article.id">
                    <div class="img-wrapp">
                        <img :src="article.image" alt="img">
                    </div>
                    <div class="article-text">
                        <div class="h4-box">
                            <h4>{{ article.title }}</h4>
                        </div>
                        <p>{{ article.text }}</p>
                    </div>
                    <div class="btn-wrapp-2">
                        <MyButton icon="arrow-right.svg" size="sm" :to="`/blog/${article.id}`"></MyButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="articles-wrapp">
                <div class="articles-header">
                    <div class="header-text">
                        <span  data-aos="fade-up" data-aos-duration="1000">OUR ARTICLES</span>
                        <h2  data-aos="fade-up" data-aos-duration="1000">Stay Up-to-Date with Our VR Insights</h2>
                    </div>
                    <div class="btn-wrapp"  data-aos="fade-up" data-aos-duration="1000">
                        <MyButton to="/blog">see all</MyButton>
                    </div>
                </div>
                <div class="articles-mane">
                    <div class="background-light"></div>
                    <h3  data-aos="fade-up" data-aos-duration="1000">Popular Article</h3>
                    <div class="slider-container"  data-aos="fade-right" data-aos-duration="1000">
                        <Swiper
                            :modules="modules"
                            :slides-per-view="1"
                            :space-between="0"
                            :loop="true"
                            :autoplay="{ delay: 3000, disableOnInteraction: false }"
                            :grab-cursor="false"
                            :pagination="{ el: '.custom-swiper-pagination', clickable: true }"
                            class="slide-1"
                        >
                            <SwiperSlide v-for=" article in articles.slice(0, 4)" key="articles.id">
                                <div class="slide-content":style="{ background: `linear-gradient(180deg, rgba(50, 70, 188, 0) 0%, #192883 100%), url(${article.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
                                    <div class="slide-text">
                                        <div class="slide-title">
                                            <h4>{{ article.title }}</h4>
                                        </div>
                                        <p>{{ article.text }}</p>
                                    </div>
                                    <div class="slide-button">
                                        <MyButton icon="arrow-right-2.svg" size="xlg" :to="`/blog/${article.id}`"></MyButton>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div class="custom-swiper-pagination"></div>
                    </div>
                </div>
                <Subscribe></Subscribe>
            </div>
        </div>
        <div class="backgroung">
            <img src="/src/assets/img/grid-2.svg" alt="img">
        </div>
    </section>
</template>

<script setup>
    import MyButton from '../ui/MyButton.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import { Autoplay, Pagination } from 'swiper/modules';
    import 'swiper/css/pagination';
    import { articles } from '../../utils/articles';
    import Subscribe from '../ui/Subscribe.vue';

    const modules = [Autoplay,Pagination];

</script>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .articles-wrapper{
        position: relative;
        margin-top: 150px;
        overflow: hidden;
        .articles-wrapp{
            .articles-header{
                display: flex;
                justify-content: space-between;
                margin-bottom: 104px;
                .header-text{
                    display: flex;
                    flex-direction: column;
                    span {
                        font-weight: 500;
                        line-height: 100%;
                        background: linear-gradient(90deg, #0CBAF1 0%, #E95CE9 12%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        display: inline-block;
                        margin-bottom: 12px;
                    }
                    h2 {
                        font-weight: 600;
                        font-size: 48px;
                        line-height: 58px;
                    }
                }
                .btn-wrapp{
                    display: flex;
                    flex-direction: column-reverse;
                }
            }
            .articles-mane{
                width: fit-content;
                position: relative;
                z-index: 2;
                margin-bottom: 230px;
                .background-light{
                    position: relative;
                    pointer-events: none;
                    &::before{
                        content: "";
                        position: absolute;
                        width: 454px;
                        height: 200px;
                        top: 0px;
                        left: -77px;
                        background: linear-gradient(90deg, #19B5F1 0%, #CA6AEB 100%);
                        border-radius: 50%;
                        z-index: -1;
                        filter: blur(43px);
                        opacity: 0.7;
                        pointer-events: none;
                        rotate: -12deg;
                    }
                }
                h3{
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 100%;
                    margin-bottom: 32px;
                }
                .slider-container{
                    width: 100%;
                    height: 100%;
                    max-height: 475px;
                    max-width: 636px;
                    position: relative;
                    .slide-content{
                        width: 100%;
                        max-width: 636px;
                        aspect-ratio: 3 / 2;
                        padding: 24px;
                        display: flex;
                        align-items: flex-end;
                        .slide-text{
                            .slide-title{
                                background-color: rgba(255, 255, 255, 0.3);
                                border-radius: 16px;
                                padding: 2px 10px;
                                width: fit-content;
                                margin-bottom: 12px;
                                h4{
                                    font-weight: 500;
                                    font-size: 14px;
                                    line-height: 20px;
                                    text-align: center;
                                }
                            }
                            p{
                                font-weight: 600;
                                font-size: 32px;
                                line-height: 100%;
                            }
                        }
                        .slide-button{
                            width: 100%;
                            height: 100%;
                            max-width: 50px;
                            max-height: 50px;
                            margin-bottom: 10px;
                        }
                    }
                    .custom-swiper-pagination{
                        position: absolute;
                        bottom: -44px;
                        left: 50%;
                        transform: translateX(-50%);
                        text-align: center;
                        z-index: 2;
                        display: flex;
                        justify-content: center;
                        gap: 12px;
                        .swiper-pagination-bullet {
                            width: 9px;
                            height: 3px;
                            background: rgba(255, 255, 255, 0.31);
                            opacity: 1;
                            border-radius: 32px;
                            transition: all 0.3s;
                            &.swiper-pagination-bullet-active {
                                background: #ffffff;
                                width: 17px;
                            }
                        }
                    }
                }
            }
        }
        .articles-left{
            position: absolute;
            top: 163px;
            right: 0;
            width: 730px;
            height: 605px;
            padding: 32px 72px 1px 97px;
            background-color: $black-50;
            border: 1px solid transparent;
            border-image-source: linear-gradient(
                94.92deg,
                rgba(255, 255, 255, 0.3) -0.29%,
                rgba(255, 255, 255, 0) 100%
            );
            border-image-slice: 1;
            h3{
                font-weight: 600;
                font-size: 28px;
                line-height: 100%;
                margin-bottom: 32px;
            }
            .article-elements{
                display: flex;
                flex-direction: column;
                gap: 32px;
                max-height: 504px;
                overflow-y: auto;
                overflow-x: hidden;
                position: relative;
                padding-right: 46px;
                &::-webkit-scrollbar {
                    width: 2px;
                }
                &::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.12);
                }
                &::-webkit-scrollbar-thumb {
                    background: #ffffff;
                    border-radius: 32px;
                    height: 31px;
                }
                .article-element{
                    position: relative;
                    display: flex;
                    padding-bottom: 32px;
                    &::before{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background-color: $white;
                        opacity: 15%;
                    }
                    .img-wrapp{
                        width: 100%;
                        height: 100%;
                        max-width: 142px;
                        max-height: 91px;
                        margin-right: 21px;
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .article-text{
                        margin-top: 5px;
                        margin-right: 13px;
                        padding: 6.5px 0;
                        .h4-box{
                            background-color: rgba(255, 255, 255, 0.3);
                            border-radius: 16px;
                            padding: 2px 10px;
                            width: fit-content;
                            margin-bottom: 8px;
                            h4{
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 20px;
                                text-align: center;
                            }
                        }
                        p{
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 100%;
                        }
                    }
                    .btn-wrapp-2{
                        width: 100%;
                        height: 100%;
                        max-width: 40px;
                        max-height: 40px;
                        margin-top: 26px;
                    }
                }
            }
        }
        .backgroung{
            position: absolute;
            bottom: 45px;
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