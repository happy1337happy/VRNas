<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import VrBlogWrapp from '../components/sections/VrBlogWrapp.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Blog" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Blog' }]"/>
    <VrBlogWrapp></VrBlogWrapp>
    <VrSubscribe></VrSubscribe>
</template>