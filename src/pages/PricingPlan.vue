<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import VrPricingPlans from '../components/sections/VrPricingPlans.vue';
    import VrAboutNeed from '../components/sections/VrAboutNeed.vue';
    import VrFAQ from '../components/sections/VrFAQ.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Pricing Plan" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Pricing Plan' }]"/>
    <VrPricingPlans></VrPricingPlans>
    <VrAboutNeed></VrAboutNeed>
    <VrFAQ></VrFAQ>
    <VrSubscribe></VrSubscribe>
</template>