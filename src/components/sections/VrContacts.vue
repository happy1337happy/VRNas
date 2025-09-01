<template>
    <section class="contacts-wrapper">
        <div class="container">
            <div class="contacts-wrapp" data-aos="fade-up" data-aos-duration="1000">
                <div class="contact-card">
                    <div class="img-wrapp">
                        <img src="/src/assets/img/contact-icon-1.svg" alt="icon">
                    </div>
                    <span>EMAIL</span>
                    <p>Support@VRNas.com</p>
                </div>
                <div class="contact-card">
                    <div class="img-wrapp">
                        <img src="/src/assets/img/contact-icon-2.svg" alt="icon">
                    </div>
                    <span>ADDRESS</span>
                    <p>Tanjung Sari Street no.48, Pontianak City</p>
                </div>
                <div class="contact-card">
                    <div class="img-wrapp">
                        <img src="/src/assets/img/contact-icon-3.svg" alt="icon">
                    </div>
                    <span>PHONE</span>
                    <p>+123 456 7890</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .contacts-wrapper{
        margin-top: 64px;
        .contacts-wrapp{
            display: flex;
            gap: 32px;
            .contact-card{
                padding: 25px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: $black-50;
                border: 1px solid transparent;
                border-image-source: linear-gradient(
                    94.92deg,
                    rgba(255, 255, 255, 0.3) -0.29%,
                    rgba(255, 255, 255, 0) 100%
                );
                border-image-slice: 1;
                width: 100%;
                height: 291px;
                max-width: 379px;
                position: relative;
                transition: .3s ease;
                &:hover{
                    border: 1px solid;
                    border-image: $main-gradient 1;
                }
                .img-wrapp{
                    margin: 30px 0;
                    width: 65px;
                    height: 65px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
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
                p {
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }
    }
</style>