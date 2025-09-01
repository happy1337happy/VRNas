<template>
    <div class="accordion" data-aos="fade-up" data-aos-duration="1000">
        <div
        class="accordion-item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: activeIndex === index }"
        >
        <div
            class="accordion-header"
            @click="toggleAccordion(index)"
            :class="{ active: activeIndex === index }"
        >
            <h3>{{ item.title }}</h3>
            <img
            src="/src/assets/img/arrow-bot.svg"
            alt="icon"
            class="arrow"
            :class="{ active: activeIndex === index }"
            />
        </div>
        <div
            class="accordion-content"
            :class="{ active: activeIndex === index }"
        >
            <p>{{ item.content }}</p>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => [],
        validator: (items) =>
        items.every((item) => typeof item.title === 'string' && typeof item.content === 'string'),
    },
    });

    const activeIndex = ref(null);

    function toggleAccordion(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
    }
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

    .accordion {
      width: 100%;
      max-width: 790px;
      margin-bottom: 150px;

      .accordion-item {
        margin-bottom: 48px;
        background-color: rgba(37, 37, 50, 0.81);
        border: 1px solid transparent;
        border-image-source: linear-gradient(
          94.92deg,
          rgba(255, 255, 255, 0.3) -0.29%,
          rgba(255, 255, 255, 0) 100%
        );
        border-image-slice: 1;
        padding: 24px;

        &.active {
          border-image-source: linear-gradient(-45deg, #ff00ff, #00ffff);
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          cursor: pointer;

          h3 {
            font-weight: 500;
            font-size: 20px;
            line-height: 100%;
          }

          .arrow {
            width: 6px;
            height: 3.5px;
            transition: transform 0.3s ease;
            transform: rotate(0deg);

            &.active {
              transform: rotate(180deg);
            }
          }
        }

        .accordion-content {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s ease-in-out;
          position: relative;

          &::before {
            content: '';
            display: block;
            height: 24px;
            transform: scaleY(0);
            transition: transform 0.3s ease;
          }

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 14px;
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.35);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
          }

          &.active {
            max-height: 300px;

            &::before {
              transform: scaleY(1);
            }

            &::after {
              transform: scaleX(1);
            }
          }

          p {
            font-weight: 400;
            line-height: 28px;
            color: $grey-2;
          }
        }
      }
    }
</style>