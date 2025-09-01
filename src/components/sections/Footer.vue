<template>
    <footer class="footer-wrapper" data-aos="fade-up" data-aos-duration="1000"
 >
        <div class="container">
            <div class="footer-wrapp">
                <div class="footer-top">
                    <div class="logo-social">
                        <div class="logo"><a href="#"><img src="/src/assets/img/VRNas.logo.svg" alt="logo"></a></div>
                        <ul class="social">
                            <li><a href="https://x.com/" target="_blank"><img src="/src/assets/img/twiter.svg" alt="icon"></a></li>
                            <li><a href="https://www.facebook.com/" target="_blank"><img src="/src/assets/img/facebook.svg" alt="icon"></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><img src="/src/assets/img/instagram.svg" alt="icon"></a></li>
                            <li><a href="#"><img src="/src/assets/img/git.svg" alt="icon"></a></li>
                        </ul>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>Quicklinks</li>
                            <li><RouterLink to="/">Home</RouterLink></li>
                            <li><RouterLink to="/pricing-plan">Pricing Plan</RouterLink></li>
                            <li><RouterLink to="/service">Service</RouterLink></li>
                            <li><RouterLink to="/blog">Blog</RouterLink></li>
                            <li><RouterLink to="/team">Our Team</RouterLink></li>
                        </ul>
                        <ul>
                            <li>Support</li>
                            <li><RouterLink to="/about-us">About us</RouterLink></li>
                            <li><RouterLink to="/contact-us">Contact Us</RouterLink></li>
                            <li><RouterLink to="/faq">FAQ</RouterLink></li>
                            <li><RouterLink to="/tems-conditions">Tems & Conditions</RouterLink></li>
                            <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
                        </ul>
                        <ul>
                            <li>Need Help?</li>
                            <li><a href="#" class="combo"><img src="/src/assets/img/marker.svg" alt="logo">Tanjung Sari Street no.48, Pontianak City</a></li>
                            <li><a href="#" class="combo"><img src="/src/assets/img/mail.svg" alt="logo">Support@VRNas.com</a></li>
                            <li><a href="#" class="combo"><img src="/src/assets/img/coll.svg" alt="logo">+123 456 7890</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="copyright">
                        © Copyright 2023, All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { useRouter } from 'vue-router';
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .footer-wrapper{
        padding: 117px 0 47px 0;
        .footer-wrapp{
            display: flex;
            flex-direction: column;
            .footer-top{
                display: flex;
                justify-content: space-between;
                gap: 50px;
                padding-bottom: 33px;
                .logo-social{
                    display: flex;
                    flex-direction: column;
                    gap: 139px;
                    .social{
                        display: flex;
                        gap: 20px;
                        li{
                            a{
                            background-image: url(/src/assets/img/circle-bg.svg);
                            width: 46px;
                            height: 46px;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden;
                                img{
                                    padding: 10px;
                                    transition: 0.3s ease;
                                    &:hover{
                                        transform: scale(1.15);
                                    }
                                }
                            }
                        }
                    }
                }
                .menu{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 100px;
                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        li{
                            font-weight: 600;
                            line-height: 28px;
                            a{
                                font-weight: 300;
                                opacity: 0.9;
                                transition: 0.3s ease;
                                &:hover{
                                    color: $grey-2;
                            }
                            }
                            .combo{
                                display: flex;
                                gap: 8px;
                            }
                        }
                    }
                }
            }
            .footer-bottom{
                display: flex;
                justify-content: center;
                padding-top: 32px;
                position: relative;
                &::before{
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-image: $main-gradient;
                    opacity: .5;
                }
                .copyright{
                    font-weight: 300;
                    line-height: 28px;
                }
            }
        }
    }
</style>