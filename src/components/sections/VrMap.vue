<template>
  <section class="map-wrapper">
    <div class="container">
      <div class="map-wrapp" data-aos="fade-up" data-aos-duration="1000">
        <div ref="mapRef" style="height: 473px; width: 100%;"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';

const mapRef = ref(null);

onMounted(() => {
  if (mapRef.value) {
    const map = L.map(mapRef.value).setView([-0.0267, 109.3425], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-0.0267, 109.3425]).addTo(map)
      .bindPopup('Pontianak')
      .openPopup();
  }
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.map-wrapper {
  margin-bottom: 77px;
  .map-wrapp {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>