<template>
    <section class="pricing-wrapper">
        <div class="container">
            <div class="pricing-wrapp">
                <div class="pricing-header">
                    <span  data-aos="fade-up" data-aos-duration="1000">OUR PRICING</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Affordable VR Services for Everyone</h2>
                    <p data-aos="fade-up" data-aos-duration="1000">At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>
                </div>
                <div class="pricing-box" data-aos="fade-up" data-aos-duration="1000">
                    <div class="pricing-left">
                        <div class="pricing-unit">
                            <div class="svg-wrapp"><img src="/src/assets/img/cloud-icon.svg" alt="icon"></div>
                            <div class="text-wrapp">
                                <h3>Customizable Packages</h3>
                                <p>We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                            </div>
                        </div>
                        <div class="pricing-unit">
                            <div class="svg-wrapp"><img src="/src/assets/img/cloud-icon.svg" alt="icon"></div>
                            <div class="text-wrapp">
                                <h3>Flexible Payment Options</h3>
                                <p>We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.</p>
                            </div>
                        </div>
                        <div class="pricing-unit">
                            <div class="svg-wrapp"><img src="/src/assets/img/cloud-icon.svg" alt="icon"></div>
                            <div class="text-wrapp">
                                <h3>Satisfaction Guarantee</h3>
                                <p>We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.</p>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-right">
                        <div class="face-wrapp">
                            <img src="/src/assets/img/boy-5.png" alt="img">
                        </div>
                    </div>
                    <div class="start-price" data-aos="zoom-in" data-aos-duration="1000">
                        <p class="from">Start from</p>
                        <p class="price">$99</p>
                        <MyButton variant="gradient" to="/pricing-plan">get started</MyButton>
                        <p class="moneyback">30 Days Moneyback Guarantee</p>
                    </div>
                    <div class="background-light"></div>
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
    .pricing-wrapper{
        margin-bottom: 198px;
        .pricing-wrapp{
           .pricing-header{
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
                P{
                    font-weight: 300;
                    line-height: 28px;
                    color: $grey-2;
                    width: 52%;
                    margin-bottom: 40px;
                }
            } 
            .pricing-box{
                background-color: rgba(37, 37, 50, 0.7);
                border: 1px solid transparent;
                border-image-source: linear-gradient(94.92deg, rgba(255, 255, 255, 0.3) -0.29%, rgba(255, 255, 255, 0) 100%);
                border-image-slice: 1;
                display: flex;
                position: relative;
                .pricing-left{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    padding: 55px 0 55px 42px;
                    .pricing-unit{
                        display: flex;
                        gap: 16px;
                        .svg-wrapp{
                            width: 42px;
                            height: 42px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .text-wrapp{
                            width: fit-content;
                            h3{
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 100%;
                                margin-bottom: 12px;
                            }
                            p{ 
                                color: $grey-1;
                                font-weight: 400;
                                line-height: 28px;
                                width: 81%;
                            }
                        }
                    }
                }
                .pricing-right{
                    position: relative;
                    width: 50%;
                    &::before{
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 85%;
                        width: 1px;
                        background-color: $white;
                        opacity: 10%;
                        margin-top: 40px;
                    }
                    .face-wrapp{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        max-width: 360px;
                        max-height: 520px;
                    }
                }
                .start-price{
                    position: absolute;
                    right: 172px;
                    bottom: -48px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 19px 70px;
                    background-color: $black-50;
                    border: 1px solid;
                    border-image: $main-gradient 1;
                    .from{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                        color: $grey-2;
                    }
                    .price{
                        font-weight: 600;
                        font-size: 60px;
                        line-height: 66px;
                        margin-bottom: 14px;
                    }
                    .moneyback{
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 20px;
                        color: $grey-1;
                        margin-top: 14px;
                    }
                }
                .background-light{
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        width: 826px;
                        height: 363px;
                        top: 40px;
                        left: -750px;
                        background: $main-gradient;
                        border-radius: 50%;
                        z-index: -1;
                        filter: blur(60px);
                        opacity: .5;
                        pointer-events: none;
                    }
                }
            }
        }
    }
</style>