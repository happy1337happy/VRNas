<template>
    <div class="card-wrapp">
        <div class="img-wrapp">
            <img src="/src/assets/img/card-img-1" alt="" class="card-img">
        </div>
        <h2 class="title">VR Development</h2>
        <p class="description">From concept to creation, our team of VR developers will bring your vision to life.</p>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
    .card-wrapp{
        display: flex;
        justify-content: flex-start;
        background-color: $black-50;
        border: 1px solid transparent;
        border-image-source: linear-gradient(
            94.92deg,
            rgba(255, 255, 255, 0.3) -0.29%,
            rgba(255, 255, 255, 0) 100%
        );
        border-image-slice: 1;
        .img-wrapp{
            width: 48px;
            height: 48px;
            .card-img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .title{
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
        }
        .description{
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
        }
    }
</style>