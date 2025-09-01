<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import BackgroundHead from '../components/ui/BackgroundHead.vue';
    import VrFAQAccordion from '../components/sections/VrFAQAccordion.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="FAQ" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'FAQ' }]"/>
    <BackgroundHead></BackgroundHead>
    <VrFAQAccordion></VrFAQAccordion>
    <VrSubscribe></VrSubscribe>
</template>
