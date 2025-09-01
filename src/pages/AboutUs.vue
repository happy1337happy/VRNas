<script setup>
  import SmallHeader from '../components/ui/SmallHeader.vue';
  import VrAboutBanner from '../components/sections/VrAboutBanner.vue';
  import VrAboutChoose from '../components/sections/VrAboutChoose.vue';
  import VrAboutNeed from '../components/sections/VrAboutNeed.vue';
  import VrAboutProfessionals from '../components/sections/VrAboutProfessionals.vue';
  import VrPartners from '../components/sections/VrPartners.vue';
  import VrFAQ from '../components/sections/VrFAQ.vue';
  import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
  <SmallHeader title="About Us" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'About Us' }]"/>
  <VrAboutBanner></VrAboutBanner>
  <VrAboutChoose></VrAboutChoose>
  <VrAboutNeed></VrAboutNeed>
  <VrAboutProfessionals></VrAboutProfessionals>
  <VrPartners></VrPartners>
  <VrFAQ></VrFAQ>
  <VrSubscribe></VrSubscribe>
</template>