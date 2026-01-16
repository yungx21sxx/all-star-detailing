<template>
  <v-app>
    <MenuFixed />
    <div class="main">
      <slot />
    </div>
    <CFooter />
  </v-app>
</template>

<style lang="scss">
  .main {
    min-height: calc(100svh - 64px - 220px);
  }
</style>
<script setup lang="ts"></script>
