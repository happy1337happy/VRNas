<template>
    <div class="subscribe-wrapper" data-aos="fade-up" data-aos-duration="1000">
        <h2>Subscribe to our newsletter for latest updates</h2>
        <div class="input-wrapp">
            <input type="email" placeholder="Enter your email address" class="email-input">
            <button class="input-btn"><img src="/src/assets/img/send.svg" alt=""></button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .subscribe-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 38px 77px 31px 74px;
        background-image: $main-gradient;
        border-radius: 4px;
        margin-bottom: 64px;
        h2{
            font-weight: 600;
            font-size: 40px;
            line-height: 58px;
            width: 50%;
        }
        .input-wrapp{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 0.07);
            width: 365px;
            height: 56px;
            padding: 3px 3px 3px 15px;
            border-radius: 2px;
            .email-input{
                flex: 1;
                color: $white;
                font-weight: 400;
                line-height: 28px;
                padding-left: 32px;
                background-image: url(/src/assets/img/mail-2.svg);
                background-repeat: no-repeat;
                background-size: 21.5px;
                background-position: left center;
                &::placeholder {
                    color: $white;
                    font-weight: 400;
                    line-height: 28px;
                }
            }
            .input-btn{
                width: 49.3px;
                height: 49.3px;
                background-color: rgba(255, 255, 255, 0.21);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .3s ease;
                &:hover{
                    transform: scale(1.05);
                }
            }
        }
    }
</style>