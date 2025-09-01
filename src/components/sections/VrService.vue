<template>
    <section class="service-wrapper">
        <div class="background-light"></div>
        <div class="container">
            <div class="service-wrapp">
                <div class="service-top">
                    <div class="top-wrapp">
                        <span  data-aos="fade-up" data-aos-duration="1000">OUR SERVICE</span>
                        <h2  data-aos="fade-up" data-aos-duration="1000">Our Service</h2>
                    </div>
                    <p  data-aos="fade-up" data-aos-duration="1000">We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
                </div>
                <div class="secvice-bot">
                    <div class="column column-1">
                        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                            <div class="img-wrapp">
                                <img src="/src/assets/img/card-img-1.svg" alt="img" class="card-img">
                            </div>
                            <h2 class="title">VR Development</h2>
                            <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
                            <div class="card-bottom">
                                <RouterLink to="/detail-service">
                                    <MyButton>LEARN MORE</MyButton>
                                </RouterLink>
                            </div>
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="20">
                            <div class="img-wrapp">
                                <img src="/src/assets/img/card-img-2.svg" alt="img" class="card-img">
                            </div>
                            <h2 class="title">VR Development</h2>
                            <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
                            <div class="card-bottom">
                                <RouterLink to="/detail-service">
                                    <MyButton>LEARN MORE</MyButton>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="column column-2">
                        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="40">
                            <div class="img-wrapp">
                                <img src="/src/assets/img/card-img-3.svg" alt="img" class="card-img">
                            </div>
                            <h2 class="title">VR Development</h2>
                            <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
                            <div class="card-bottom">
                                <RouterLink to="/detail-service">
                                    <MyButton>LEARN MORE</MyButton>
                                </RouterLink>
                            </div>
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="60">
                            <div class="img-wrapp">
                                <img src="/src/assets/img/card-img-4.svg" alt="img" class="card-img">
                            </div>
                            <h2 class="title">VR Development</h2>
                            <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
                            <div class="card-bottom">
                                <RouterLink to="/detail-service">
                                    <MyButton>LEARN MORE</MyButton>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="column column-3">
                        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="80">
                            <div class="img-wrapp">
                                <img src="/src/assets/img/card-img-5.svg" alt="img" class="card-img">
                            </div>
                            <h2 class="title">VR Development</h2>
                            <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
                            <div class="card-bottom">
                                <RouterLink to="/detail-service">
                                    <MyButton>LEARN MORE</MyButton>
                                </RouterLink>
                            </div>
                        </div>
                        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <div class="img-wrapp">
                                <img src="/src/assets/img/card-img-6.svg" alt="img" class="card-img">
                            </div>
                            <h2 class="title">VR Development</h2>
                            <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
                            <div class="card-bottom">
                                <RouterLink to="/detail-service">
                                    <MyButton>LEARN MORE</MyButton>
                                </RouterLink>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import MyButton from '../ui/MyButton.vue';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .service-wrapper{
        overflow: hidden;
        padding-top: 160px;
        .service-wrapp{
            .service-top{
                margin-bottom: 46px;
                display: flex;
                justify-content: space-between;
                .top-wrapp{
                    display: flex;
                    flex-direction: column;
                    span{
                        font-weight: 500;
                        line-height: 100%;
                        background: $main-gradient;
                        background-clip: text;            
                        -webkit-background-clip: text;        
                        -webkit-text-fill-color: transparent;
                        display: inline-block;
                        margin-bottom: 12px;
                        width: 40%;
                    }
                    h2{
                        font-weight: 600;
                        font-size: 48px;
                        line-height: 58px;
                        margin-bottom: 24px;
                    }
                }
                p{
                    font-weight: 300;
                    line-height: 28px;
                    color: $grey-2;
                    width: 51%;
                }
            }
            .secvice-bot{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
                position: relative;
                .column{
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    &.column-1{
                        padding-top: 0;
                    }
                    &.column-2{
                        padding-top: 57px; 
                    }
                    &.column-3{
                        padding-top: 135px;
                    }
                    .card{
                        padding: 38px 32px 51px 32px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        background-color: $black-50;
                        border: 1px solid transparent;
                        border-image-source: linear-gradient(
                            94.92deg,
                            rgba(255, 255, 255, 0.3) -0.29%,
                            rgba(255, 255, 255, 0) 100%
                        );
                        border-image-slice: 1;
                        width: 100%;
                        height: 100%;
                        max-width: 379px;
                        max-height: 291px;
                        position: relative;
                        transition: .3s ease;
                        &:hover{
                            border: 1px solid;
                            border-image: $main-gradient 1;
                            .card-bottom{
                                opacity: 1;
                                transform: translateX(-50%) translateY(0);
                            }
                            &:before {
                                content: '';
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 50%;
                                background: linear-gradient(180deg, rgba(37, 37, 50, 0) 0%, rgba(37, 37, 50, 0.91) 53.06%, #252532 100%);
                                z-index: 1;
                            }
                        }
                        .img-wrapp{
                            width: 48px;
                            height: 48px;
                            margin-bottom: 60px;
                            z-index: 2;
                            .card-img{
                                object-fit: cover;
                            }
                        }
                        .title{
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 100%;
                            margin-bottom: 12px;
                            z-index: 2;
                        }
                        .description{
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 28px;
                            color: $grey-1;
                        }
                        .card-bottom{
                            position: absolute;
                            bottom: 28px;
                            left: 50%;
                            transform: translateX(-50%) translateY(20px);
                            z-index: 2;
                            opacity: 0;
                            transition: opacity 0.3s ease, transform 0.3s ease
                        }
                    }
                }
            }
        }
        .background-light{
            position: relative;
            &::before{
                content: '';
                position: absolute;
                width: 454px;
                height: 200px;
                top: -25px;
                right: 0;
                background: $main-gradient;
                border-radius: 50%;
                z-index: -1;
                filter: blur(60px);
                opacity: 0.5;
                pointer-events: none;
                rotate: -10deg;
            }
        }
    }
</style>