<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import VrService from '../components/sections/VrService.vue';
    import VrServStat from '../components/sections/VrServStat.vue';
    import VrPricing from '../components/sections/VrPricing.vue';
    import VrTestimonial from '../components/sections/VrTestimonial.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Our Service" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Our Service' }]"/>
    <VrService></VrService>
    <VrServStat></VrServStat>
    <VrPricing></VrPricing>
    <VrTestimonial></VrTestimonial>
    <VrSubscribe></VrSubscribe>
</template>