<script setup>
  import Header from '@/components/sections/Header.vue'
  import Footer from '@/components/sections/Footer.vue'
  import BackgroundDecor from '@/components/ui/BackgroundDecor.vue';
</script>

<template>
  <div class="app-wrapper">
      <BackgroundDecor ></BackgroundDecor>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>