<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import BackgroundHead from '../components/ui/BackgroundHead.vue';
    import VrTemsConditions from '../components/sections/VrTemsConditions.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Tems & Conditions" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Tems & Conditions' }]"/>
    <BackgroundHead></BackgroundHead>
    <VrTemsConditions></VrTemsConditions>
    <VrSubscribe></VrSubscribe>
</template>