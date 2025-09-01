<script setup>
  import SmallHeader from '../components/ui/SmallHeader.vue';
  import VrMeetTeam from '../components/sections/VrMeetTeam.vue';
  import VrServStat from '../components/sections/VrServStat.vue';
  import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
  <SmallHeader title="Our Team" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Our Team' }]"/>
  <VrMeetTeam></VrMeetTeam>
  <VrServStat></VrServStat>
  <VrSubscribe></VrSubscribe>
</template>