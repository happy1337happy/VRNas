<template>
    <section class="design-wrapper">
        <div class="circle-wrapper">
            <div class="circle circle-1"></div>
            <div class="circle circle-2">
                <div class="ball item-1"><p>VR<br>Development</p></div>
                <div class="ball item-2"><p>VR<br>Games</p></div>
                <div class="ball item-3"><p>VR<br>Events</p></div>
                <div class="ball item-4"><p>VR<br>Design</p></div>
                <div class="ball item-5"><p>VR<br>Consulting</p></div>
                <div class="ball item-6"><p>VR<br>Entertainment</p></div>
                <div class="ball item-7"><p>Client<br>Testimony</p></div>
            </div>
            <div class="circle circle-3"></div>
            <div class="circle circle-4"></div>
            <div class="circle circle-5"></div>
            <div class="circle circle-6"></div>
        </div>
        <div class="container">
            <div class="design-wrapp">
                <span  data-aos="fade-up" data-aos-duration="1000">SERVICE</span>
                <h2  data-aos="fade-up" data-aos-duration="1000">VR Design</h2>
                <p class="text-1" data-aos="fade-up" data-aos-duration="1000">At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.</p>
                <p class="text-2" data-aos="fade-up" data-aos-duration="1000">We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.</p>
                <div class="design-tabl" data-aos="fade-up" data-aos-duration="1000">
                    <p class="tabl-title">Our VR design services include:</p>
                    <ul>
                        <li><p class="tabl-text">Concept development and ideation</p></li>
                        <li><p class="tabl-text">Storyboarding and scriptwriting</p></li>
                        <li><p class="tabl-text">3D modeling and animation</p></li>
                        <li><p class="tabl-text">User interface design and development</p></li>
                        <li><p class="tabl-text">Sound design and effects</p></li>
                        <li><p class="tabl-text">Quality assurance testing and optimization</p></li>
                    </ul>
                </div>
                <p class="text-3" data-aos="fade-up" data-aos-duration="1000">We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.</p>
                <p class="text-4" data-aos="fade-up" data-aos-duration="1000">At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.</p>
                <div class="btn-wrapp" data-aos="fade-up" data-aos-duration="1000">
                    <MyButton variant="gradient">Contact us</MyButton>
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
    .design-wrapper{
        position: relative;
        padding-top: 296px;
        overflow: hidden;
        .circle-wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            aspect-ratio: 1/1;
            top: 584px;
            left: 50%;
            transform: translateX(-50%);
            .circle{
                border: 1px solid rgba(255, 255, 255, 0.17);
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .circle-1{
                width: 1055px;
                height: 1055px;
            }
            .circle-2 {
            width: 917px;
            height: 917px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            
            $orbit-radius: 456.5px;

            .ball {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 102px;
                height: 102px;
                display: flex;
                align-items: center;
                justify-content: center;
                transform-origin: center center;
                z-index: 3;
                transition: transform 0.0s;
                cursor: pointer;

                &::before {
                content: '';
                position: absolute;
                width: 102px;
                height: 102px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-image: url('/src/assets/img/circle-bg.png');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                z-index: 2;
                }
                &::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    padding: 2px;
                    background: linear-gradient(45deg, #ff00ff, #00ffff);
                    -webkit-mask:
                    linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask:
                    linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                    mask-composite: exclude;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                &:hover::after {
                    opacity: 1;
                }

                p {
                margin: 0;
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                z-index: 4;
                transform-origin: center center;
                }
            }
                    .item-1 { transform: translate(-50%, -50%) rotate(-90deg) translateY(-#{$orbit-radius}); }
                    .item-1 p { transform: rotate(90deg); }

                    .item-2 { transform: translate(-50%, -50%) rotate(-60deg) translateY(-#{$orbit-radius}); }
                    .item-2 p { transform: rotate(60deg); }

                    .item-3 { transform: translate(-50%, -50%) rotate(-30deg) translateY(-#{$orbit-radius}); }
                    .item-3 p { transform: rotate(30deg); }

                    .item-4 { transform: translate(-50%, -50%) rotate(0deg) translateY(-#{$orbit-radius}); }
                    .item-4 p { transform: rotate(0deg); }

                    .item-5 { transform: translate(-50%, -50%) rotate(30deg) translateY(-#{$orbit-radius}); }
                    .item-5 p { transform: rotate(-30deg); }

                    .item-6 { transform: translate(-50%, -50%) rotate(60deg) translateY(-#{$orbit-radius}); }
                    .item-6 p { transform: rotate(-60deg); }

                    .item-7 { transform: translate(-50%, -50%) rotate(90deg) translateY(-#{$orbit-radius}); }
                    .item-7 p { transform: rotate(-90deg); }
                }
            .circle-3{
                width: 760px;
                height: 760px;
            }
            .circle-4{
                width: 622px;
                height: 622px;
            }
            .circle-5{
                width: 477px;
                height: 477px;
            }
            .circle-6{
                width: 329px;
                height: 329px;
            }
        }
        .design-wrapp{
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
                margin-bottom: 16px;
            }
            p{
                font-weight: 300;
                line-height: 28px;
                color: $grey-2;
                width: 52%;
            }
            .text-1{
                margin-bottom: 30px;
            }
            .text-2{
                margin-bottom: 54px;
            }
            .text-3{
                margin-bottom: 30px;
            }
            .text-4{
                margin-bottom: 32px;
            }
            .design-tabl{
                padding: 30px 30px 35px 32px;
                display: flex;
                flex-direction: column;
                background-color: rgba(37, 37, 50, .5);
                border: 1px solid transparent;
                border-image-source: linear-gradient(
                    94.92deg,
                    rgba(255, 255, 255, 0.3) -0.29%,
                    rgba(255, 255, 255, 0) 100%
                );
                border-image-slice: 1;
                width: 100%;
                height: 100%;
                max-width: 431px;
                margin-bottom: 32px;
                p{
                    font-weight: 300;
                    line-height: 28px;
                    color: $white;
                    width: 100%;
                }
                .tabl-title{
                    margin-bottom: 24px;
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    li{
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