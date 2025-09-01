<!-- <template>
    <div class="background-light"></div>
</template>

<script setup>
</script>

<style scoped>
    .background-light{
        position: absolute;
        width: 340px;
        height: 567px;
        background-image: url('/src/assets/img/light-1.svg');
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
        pointer-events: none;
    }
</style> -->
<template>
  <div
    class="background-light"
    :style="computedStyle"
  ></div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '340px',
  },
  height: {
    type: String,
    default: '567px',
  },
  image: {
    type: String,
    default: '/src/assets/img/light-1.svg',
  },
  blur: {
    type: [String, Number],
    default: 100, // px
  },
  top: String,
  bottom: String,
  left: String,
  right: String,
  zIndex: {
    type: [String, Number],
    default: -1,
  },
})

const computedStyle = computed(() => ({
  position: 'absolute',
  width: props.width,
  height: props.height,
  backgroundImage: `url(${props.image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  filter: `blur(${props.blur}px)`,
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
  zIndex: props.zIndex,
  pointerEvents: 'none',
}))
</script>

<style scoped>
.background-light {
  display: block;
}
</style>