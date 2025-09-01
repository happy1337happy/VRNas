<template>
  <section class="page-header-wrapper">
    <div class="container">
      <div class="page-header-wrapp">
        <div class="background-light"></div>
        <div class="page-header-box">
          <h1 data-aos="fade-up" data-aos-duration="1000">{{ title }}</h1>
          <div class="navigation" data-aos="fade-up" data-aos-duration="1000">
            <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
              <template v-if="breadcrumb.to">
                <RouterLink :to="breadcrumb.to">
                  <div class="breadcrumb-link" :class="{ arrow: index !== breadcrumbs.length - 1 }">
                    {{ breadcrumb.text }}
                  </div>
                </RouterLink>
              </template>
              <template v-else>
                <p class="breadcrumb-current">{{ breadcrumb.text }}</p>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  breadcrumbs: {
    type: Array,
    required: true,
    validator: (val) =>
      val.every(
        (b) =>
          typeof b.text === 'string' &&
          (typeof b.to === 'string' || b.to === undefined)
      ),
  },
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.page-header-wrapper {
  margin-top: 80px;

  .page-header-wrapp {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.5px;
      background-image: $main-gradient;
      bottom: 0;
      left: 0;
      opacity: 0.5;
    }

    .page-header-box {
      display: flex;
      flex-direction: column;

      h1 {
        font-weight: 600;
        font-size: 64px;
        line-height: 100%;
        text-align: center;
        margin-bottom: 28px;
      }

      .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 80px;
        gap: 8px;

        .breadcrumb-link {
          font-weight: 600;
          line-height: 100%;
          padding-right: 28px;

          &.arrow {
            background-image: url(/src/assets/img/smal-arrow-right.svg);
            background-repeat: no-repeat;
            background-size: 8px;
            background-position: right 10px center;
          }
        }

        .breadcrumb-current {
          font-weight: 300;
          line-height: 28px;
          color: $grey-2;
        }
      }
    }

    .background-light {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 454px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $main-gradient;
        border-radius: 50%;
        z-index: -1;
        filter: blur(45px);
        opacity: 0.6;
        pointer-events: none;
        rotate: -10deg;
      }
    }
  }
}
</style>