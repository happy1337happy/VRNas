<template>
    <section class="pricing-wrapper">
        <div class="container">
            <div class="pricing-wrapp">
                <span class="gradient"  data-aos="fade-up" data-aos-duration="1000">PRICING</span>
                <h2  data-aos="fade-up" data-aos-duration="1000">Pricing Plans</h2>
                <p class="pricing-text" data-aos="fade-up" data-aos-duration="1000">Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you can test out our service and see which plan works best for you.</p>
                <div class="box-wrapp" data-aos="fade-up" data-aos-duration="1000">
                    <div class="box">
                        <p class="box-head">Basic Plan</p>
                        <h3>$99<span class="span">/ month</span></h3>
                        <p class="box-text">All the basic features to boost your freelance career</p>
                        <ul>
                            <li>Access to a selection of VR games and experiences</li>
                            <li>Limited access to educational content</li>
                            <li>Limited access to architecture and design tools</li>
                            <li>No access to exclusive events or promotions</li>
                        </ul>
                        <div class="btn-wrapp">
                            <MyButton size="super">Get 14 Days Free Trial</MyButton>
                        </div>
                    </div>
                    <div class="box">
                        <p class="box-head">Basic Plan</p>
                        <h3>$149<span class="span">/ month</span></h3>
                        <p class="box-text">All the basic features to boost your freelance career</p>
                        <ul>
                            <li>Access to a selection of VR games and experiences</li>
                            <li>Limited access to educational content</li>
                            <li>Limited access to architecture and design tools</li>
                            <li>No access to exclusive events or promotions</li>
                        </ul>
                        <div class="btn-wrapp">
                            <MyButton size="super">Get 14 Days Free Trial</MyButton>
                        </div>
                    </div>
                    <div class="box">
                        <p class="box-head">Basic Plan</p>
                        <h3>$199<span class="span">/ month</span></h3>
                        <p class="box-text">All the basic features to boost your freelance career</p>
                        <ul>
                            <li>Access to a selection of VR games and experiences</li>
                            <li>Limited access to educational content</li>
                            <li>Limited access to architecture and design tools</li>
                            <li>No access to exclusive events or promotions</li>
                        </ul>
                        <div class="btn-wrapp">
                            <MyButton size="super">Get 14 Days Free Trial</MyButton>
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
    .pricing-wrapper{
        margin-top: 150px;
        .pricing-wrapp{
            display: flex;
            flex-direction: column;
            align-items: center;
            .gradient{
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
                margin-bottom: 16px;
                width: 68%;
                text-align: center;
            }
            .pricing-text{
                font-weight: 400;
                line-height: 28px;
                text-align: center;
                width: 63%;
                margin-bottom: 40px;
                color: $grey-2;
            }
            .box-wrapp{
                display: flex;
                gap: 62px;
                justify-content: space-between;
                .box{
                    padding: 35px 34px 39px 34px;
                    background-color: $black-50;
                    border-radius: 2px;
                    width: 100%;
                    max-width: 359px;
                    border: 1px solid transparent;
                      transition: border-image 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease;
                    &:hover{
                        border-image: $main-gradient 1;
                        box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
                        transform: translateY(-2px);
                    }
                    .box-head{
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 100%;
                        margin-bottom: 9px;
                    }
                    h3{
                        font-weight: 600;
                        font-size: 64px;
                        line-height: 100%;
                        margin-bottom: 9px;
                        .span{
                            font-size: 16px;
                            font-weight: 300;
                            line-height: 28px;
                            color: #71717A;
                        }
                    }
                    .box-text{
                        font-weight: 400;
                        line-height: 28px;
                        color: $grey-1;
                        margin-bottom: 16px;
                    }
                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        li{
                            font-weight: 600;
                            line-height: 100%;
                            position: relative;
                            padding-left: 26px;
                            &::before{
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 2px;
                                width: 16px;
                                height: 16px;
                                background-image: url(/src/assets/img/galka-mini.svg);
                            }
                        }
                    }
                    .btn-wrapp{
                        width: 100%;
                        height: 100%;
                        margin-top: 36px;
                    }
                }
            }
        }
    }
</style>