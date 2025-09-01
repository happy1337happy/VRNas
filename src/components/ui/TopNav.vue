<template>
  <nav class="top-nav">
    <div class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <span class="nav-arrow"></span>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <span class="nav-arrow"></span>
      <span class="nav-title">{{ blogText }}</span>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  blogText: {
    type: String,
    required: true
  }
});

const router = useRouter();
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.top-nav {
    display: flex;
    margin-bottom: 52px;
    .nav-links {
        display: flex;
        align-items: center;
        gap: 10px;
        .nav-link{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .nav-arrow {
            background-image: url(/src/assets/img/smal-arrow-right.svg);
            background-repeat: no-repeat;
            background-size: 8px;
            background-position: center;
            width: 9px;
            height: 9px;
        }
        .nav-title {
            font-size: 16px;
            font-weight: 400;
            color: $grey-2;
        }
    }
}
</style>