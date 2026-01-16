<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    overlay: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)',
    },
    adaptive: {
      type: Array as () => Array<{ minWidth: number; url: string; overlay?: string }>,
      default: () => [],
    },
  });

  const backgroundStyles = computed(() => {
    const base = `linear-gradient(${props.overlay}, ${props.overlay}), url(${props.url})`;
    const mediaQueries = props.adaptive
      .sort((a, b) => b.minWidth - a.minWidth)
      .map(
        (breakpoint) => `
      @media (max-width: ${breakpoint.minWidth}px) {
        background-image: linear-gradient(${breakpoint.overlay || props.overlay},
        ${breakpoint.overlay || props.overlay}), url(${breakpoint.url});
      }
    `,
      )
      .join('');

    return { base, mediaQueries };
  });
</script>

<template>
  <div
    class="bg-image"
    :style="`background-image: ${backgroundStyles.base}; ${backgroundStyles.mediaQueries}`"
  >
    <div class="hero__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .bg-image {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: fadeIn 0.5s ease-in-out forwards;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
