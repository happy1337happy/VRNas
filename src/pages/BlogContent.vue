<script setup>
import VrBlogContent from '../components/sections/VrBlogContent.vue';
import VrSubscribe from '../components/sections/VrSubscribe.vue';
import { useRoute } from 'vue-router';
import { articles } from '../utils/articles';
import { watch, ref } from 'vue';

const route = useRoute();
const id = ref(Number(route.params.id));
const article = ref(articles.find(a => a.id === id.value) || {}); 


watch(
  () => route.params.id,
  (newId) => {
    id.value = Number(newId);
    article.value = articles.find(a => a.id === id.value) || {};
    console.log('Updated article:', article.value);
  }
);

console.log('Articles in BlogContent:', articles);

defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <VrBlogContent :article="article" :articles="articles" />
  <VrSubscribe />
</template>