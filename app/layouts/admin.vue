<template>
  <v-app>
    <div class="wrapper wrapper_admin">
      <slot />
    </div>
    <v-bottom-navigation v-model="currentPage">
      <v-btn value="clients" href="/">
        <v-icon :icon="mdiHome"></v-icon>
        <span>Назад</span>
      </v-btn>
      <v-btn value="clients" href="/admin/clients" :active="route.fullPath === '/admin/clients'">
        <v-icon :icon="mdiAccountEdit"></v-icon>
        <span>Пользователи</span>
      </v-btn>
      <v-btn
        value="portfolio"
        href="/admin/portfolio"
        :active="route.fullPath === '/admin/portfolio'"
      >
        <v-icon :icon="mdiCar"></v-icon>
        <span>Портфолио</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup lang="ts">
  import { mdiAccountEdit, mdiCar, mdiHome } from '@mdi/js';
  const route = useRoute();
  const linkParts = route.fullPath.split('/');
  const currentPage = ref<string>(linkParts[linkParts.length - 1]);
</script>

<style scoped>
  .wrapper_admin {
    margin-bottom: 100px;
  }
</style>
