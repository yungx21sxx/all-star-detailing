<script setup lang="ts">
  const slideBottomAnimation = {
    initial: {
      y: 28,
      opacity: 0,
      scale: 0.96,
      rotateX: -3,
      filter: 'blur(8px)',
    },
    visibleOnce: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 26,
        mass: 0.6,
        delay: 100,
      },
    },
  };
</script>
<template>
  <div v-motion :initial="slideBottomAnimation.initial" :visibleOnce="slideBottomAnimation.visibleOnce">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  div {
    will-change: transform, opacity, filter;
    transform-style: preserve-3d;
  }
</style>
