<template>
    <section class="touch-wrapper">
        <div class="touch-left" data-aos="fade-up" data-aos-duration="1000">
            <div class="circle circle-1">
                <a href="#" class="soc-wrapp icon-1"><img src="/src/assets/img/twiter.svg" alt="icon" class="icon-one"></a>
                <a href="#" class="soc-wrapp icon-2"><img src="/src/assets/img/facebook.svg" alt="icon" class="icon-two"></a>
                <a href="#" class="soc-wrapp icon-3"><img src="/src/assets/img/instagram.svg" alt="icon" class="icon-three"></a>
            </div>
            <div class="circle circle-2">
                <a href="#" class="soc-wrapp icon-4"><img src="/src/assets/img/git.svg" alt="icon" class="icon-four"></a>
            </div>
            <div class="circle circle-3">
                <div class="background-light"></div>
                <div class="bomj-wrapp-1">
                    <img src="/src/assets/img/krug-bomja.png" alt="img" class="bomj-1">
                </div>
                <div class="bomj-wrapp-2">
                    <img src="/src/assets/img/bomj-v-kruge.png" alt="img" class="bomj-2">
                </div>
                <div class="bomj-wrapp-3">
                    <img src="/src/assets/img/bomj.png" alt="img" class="bomj-3">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="touch-wrapp">
                <div class="touch-right">
                    <span  data-aos="fade-up" data-aos-duration="1000">CONTACT US</span>
                    <h2  data-aos="fade-up" data-aos-duration="1000">Get in Touch</h2>
                    <p class="touch-text" data-aos="fade-up" data-aos-duration="1000">At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.</p>
                    <div class="contact-form">
                        <div class="form-row" data-aos="fade-up" data-aos-duration="1000">
                            <input type="text" placeholder="First Name" class="input-field input" required>
                            <input type="text" placeholder="Last Name" class="input-field input" required>
                        </div>
                        <div class="form-row" data-aos="fade-up" data-aos-duration="1000">
                            <input type="email" placeholder="Email" class="input-field input" required>
                            <input type="tel" placeholder="Phone Number" class="input-field input" required>
                        </div>
                        <textarea placeholder="Message" class="input-field textarea" data-aos="fade-up" data-aos-duration="1000"></textarea>
                        <div class="btn-wrapp" data-aos="fade-up" data-aos-duration="1000">
                            <MyButton variant="gradient">send message</MyButton>
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

.touch-wrapper {
    padding-top: 200px;
    padding-bottom: 164px;
    position: relative;
    overflow: hidden;

    .touch-left {
        position: absolute;
        top: 493px;
        left: 377px;

        .circle {
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.17);
            aspect-ratio: 1/1;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .circle-1 {
            width: 686px;
            height: 686px;
            $orbit-radius-1: 343px;

            .soc-wrapp {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 46px;
                height: 46px;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-origin: center center;
                z-index: 3;
                transition: transform 0.3s;
                cursor: pointer;
                background-image: url(/src/assets/img/circle-bg.svg);
                border-radius: 50%;
                overflow: hidden;
                img {
                    padding: 10px;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: scale 0.3s ease;
                }
                &:hover img {
                    scale: 1.2;
                }
            }

            .icon-1 {
                transform: translate(-50%, -50%) rotate(-50deg) translateY(-#{$orbit-radius-1}) ;
                z-index: 4;

                .icon-one {
                    transform: rotate(50deg);
                }
            }

            .icon-2 {
                transform: translate(-50%, -50%) rotate(250deg) translateY(-#{$orbit-radius-1}) ;
                z-index: 4;

                .icon-two {
                    transform: rotate(-250deg);
                }
            }

            .icon-3 {
                transform: translate(-50%, -50%) rotate(205deg) translateY(-#{$orbit-radius-1});
                z-index: 4;

                .icon-three {
                    transform: rotate(-205deg);
                }
            }
        }

        .circle-2 {
            width: 564px;
            height: 564px;
            $orbit-radius-2: 282px;

            .soc-wrapp {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 46px;
                height: 46px;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-origin: center center;
                z-index: 3;
                transition: transform 0.3s;
                cursor: pointer;
                background-image: url(/src/assets/img/circle-bg.svg);
                border-radius: 50%;
                overflow: hidden;
                img {
                    padding: 10px;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: scale 0.3s ease;
                }
                &:hover img {
                    scale: 1.2;
                }
            }

            .icon-4 {
                transform: translate(-50%, -50%) rotate(130deg) translateY(-#{$orbit-radius-2}) ;
                z-index: 4;

                .icon-four {
                    transform: rotate(-130deg);
                }
            }
        }

        .circle-3 {
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;

            .background-light {
                position: relative;
                z-index: 1;
                &::before {
                    content: '';
                    position: absolute;
                    width: 618px;
                    height: 330px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(90deg, #19B5F1 0%, #CA6AEB 50%);
                    border-radius: 50%;
                    filter: blur(45px);
                    opacity: 0.3;
                    pointer-events: none;
                    rotate: -10deg;
                }
            }

            .bomj-wrapp-1 {
                position: absolute;
                width: 452.9px;
                height: 452.9px;
                z-index: -1;

                .bomj-1 {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .bomj-wrapp-2 {
                position: absolute;
                width: 457px;
                height: auto;
                z-index: 2;
                bottom: -110px;
                right: -285px;

                .bomj-2 {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .bomj-wrapp-3 {
                position: absolute;
                width: 457px;
                height: 457px;
                z-index: 1;
                top: -231px;

                .bomj-3 {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }

    .touch-wrapp {
        display: flex;
        justify-content: end;

        .touch-right {
            width: 55%;
            z-index: 2;

            span {
                font-weight: 500;
                line-height: 100%;
                background: linear-gradient(90deg, #19B5F1 0%, #CA6AEB 26%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
                margin-bottom: 12px;
                width: 40%;
            }

            h2 {
                font-weight: 600;
                font-size: 48px;
                line-height: 58px;
                margin-bottom: 15px;
            }

            .touch-text {
                font-weight: 300;
                line-height: 28px;
                color: $grey-2;
                margin-bottom: 32px;
            }

            .contact-form {
                display: flex;
                flex-direction: column;

                .form-row {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    justify-content: space-between;
                    margin-bottom: 24px;
                }

                .input-field {
                    background-color: rgba(37, 37, 50, 0.6);
                    border: 1px solid transparent;
                    border-image-source: linear-gradient(
                        94.92deg,
                        rgba(255, 255, 255, 0.3) -0.29%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    border-image-slice: 1;
                    padding: 11px 15px;
                    width: 100%;
                    font-weight: 300;
                    line-height: 28px;
                    color: $white;

                    &::placeholder {
                        font-weight: 300;
                        line-height: 28px;
                        color: $grey-2;
                    }
                }

                .input {
                    max-width: 306px;
                }

                .textarea {
                    height: 137px;
                    margin-bottom: 32px;
                    font-weight: 300;
                    line-height: 28px;
                    resize: none;
                }
            }
        }
    }
}
</style>