<template>
    <div class="background-head-wrapp">
        <div class="img-wrapp">
            <img src="/src/assets/img/background-head.png" alt="img" class="img-left">
        </div>
        <div class="img-wrapp">
            <img src="/src/assets/img/background-head.png" alt="img" class="img-right">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .background-head-wrapp {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        top: 547px;
        pointer-events: none;
    }
    .background-head-wrapp .img-wrapp {
        width: clamp(69px, 13vw, 194px);
        height: clamp(155px, 30vw, 520px);
        position: relative;
    }
    .background-head-wrapp .img-wrapp .img-left {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .background-head-wrapp .img-wrapp .img-right {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: scaleX(-1);
    }
    .background-head-wrapp .img-wrapp::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: linear-gradient(180deg, rgba(24, 24, 27, 0) 0%, #18181B 55.93%, #18181B 100%);
        pointer-events: none;
    }
</style>