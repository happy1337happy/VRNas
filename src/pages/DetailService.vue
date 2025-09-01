<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import VrDesign from '../components/sections/VrDesign.vue';
    import VrDesignVideo from '../components/sections/VrDesignVideo.vue';
    import VrPricing from '../components/sections/VrPricing.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Detail Service" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Detail Service' }]"/>
    <VrDesign></VrDesign>
    <VrDesignVideo></VrDesignVideo>
    <VrPricing></VrPricing>
    <VrSubscribe></VrSubscribe>
</template>