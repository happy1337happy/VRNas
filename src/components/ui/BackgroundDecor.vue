<template>
    <div class="background-decor top-right"></div>
    <div class="background-decor bottom-left"></div>
</template>

<script setup>

</script>

<style scoped>
    .background-decor{
        position: absolute;
        width: 755px;
        height: 100%;
        background-image: url('/src/assets/img/vave-header.svg');
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
        pointer-events: none;
        opacity: .2;
    }
    .top-right{
        top: 0;
        right: 0;
    }
    .bottom-left{
        bottom: 0;
        left: 0;
        transform: scale(-1,-1);
        width: 990px;
    }
</style>
