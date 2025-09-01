<template>
    <section class="about-choose-wrapper">
        <div class="container">
            <div class="about-choose-wrapp">
                <div class="about-choose-head">
                    <span data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
                    <h2 data-aos="fade-up" data-aos-duration="1000">Empowering Your Virtual Reality Experience</h2>
                </div>
                <div class="about-choose-bottom" data-aos="fade-up" data-aos-duration="1000">
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
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .about-choose-wrapper{
        .about-choose-wrapp{
            .about-choose-head{
                margin-bottom: 54px;
                display: flex;
                flex-direction: column;
                align-items: center;
                span {
                    font-weight: 500;
                    line-height: 100%;
                    background: $main-gradient;
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
                    width: 60%;
                    text-align: center;
                }
            }
            .about-choose-bottom{
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
    }
</style>