<template>
  <header class="hero">
    <div class="hero__overlay">
      <MenuMain class="hero__nav" />

      <div class="hero__wrapper wrapper">
        <div class="hero__content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>

    <div class="hero__background">
      <slot name="background"></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
  defineProps({
    gradient: {
      type: String,
      required: false,
      default: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))',
    },
  });
</script>

<style lang="scss" scoped>
  .hero {
    height: 100svh;
    position: relative;
    width: 100%;
    @media (max-width: 768px) {
      height: 100svh;
    }

    &__nav {
      position: absolute;
      top: 0;
      width: 100%;
    }

    &__overlay {
      background: v-bind(gradient);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &__wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      z-index: 2;
    }
    &__background {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
</style>
