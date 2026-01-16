<script setup lang="ts">
  import { complexes } from '~/data/complexes.data';
</script>

<template>
  <div class="wrapper complexes margin-block-end">
    <h2 class="title">Комлексы услуг</h2>
    <div class="under-line"></div>
    <p class="complexes__description subtitle">
      Экономия до <strong>30%</strong> при заказе комплекса услуг
    </p>
    <div class="grid">
      <CComplex v-for="complex of complexes" :complex="complex" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .complexes {
    strong {
      color: $accent;
    }
    &__description {
      margin-bottom: 32px;
      margin-top: 16px;
    }
  }
</style>
