<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import BackgroundHead from '../components/ui/BackgroundHead.vue';
    import VrPrivacyPolicy from '../components/sections/VrPrivacyPolicy.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Privacy Policy" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Privacy Policy' }]"/>
    <BackgroundHead></BackgroundHead>
    <VrPrivacyPolicy></VrPrivacyPolicy>
    <VrSubscribe></VrSubscribe>
</template>