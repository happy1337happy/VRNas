<script setup>
    import SmallHeader from '../components/ui/SmallHeader.vue';
    import VrContacts from '../components/sections/VrContacts.vue';
    import VrTouch from '../components/sections/VrTouch.vue';
    import VrMap from '../components/sections/VrMap.vue';
    import VrSubscribe from '../components/sections/VrSubscribe.vue';
</script>

<template>
    <SmallHeader title="Contact Us" :breadcrumbs="[{ text: 'Home', to: '/' },{ text: 'Contact Us' }]"/>
    <VrContacts></VrContacts>
    <VrTouch></VrTouch>
    <VrMap></VrMap>
    <VrSubscribe></VrSubscribe>
</template>