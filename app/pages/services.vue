<script setup lang="ts">
  import { services, servicesCustom } from '~/data/services.data';
  import { complexes } from '~/data/complexes.data';
  import { mdiChevronRight } from '@mdi/js';

  const allServices = [...servicesCustom, ...services].sort(
    (serviceA, serviceB) => serviceA.position - serviceB.position,
  );

  useSeoMeta({
    title: 'Услуги | All Star Detailing',
    description:
      'В All Star Detailing мы предлагаем широкий спектр услуг по уходу за автомобилями: полировка кузова, химчистка салона, нанесение керамических покрытий и оклейка защитной пленкой.',
    ogTitle: 'Услуги | All Star Detailing',
    ogDescription:
      'All Star Detailing предлагает различные услуги по детейлингу автомобилей в Санкт-Петербурге, включая полировку, химчистку и защитные покрытия.',
    ogImage: 'https://all-star-detailing.ru/main-banner-desktop.webp',
    ogType: 'website',
    ogImageAlt: 'All Star Detailing — Услуги',
    ogSiteName: 'All Star Detailing',
    ogLocale: 'ru_RU',
  });

  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: [
        { name: 'Главная', item: '/' },
        { name: 'Услуги', item: '/services' },
      ],
    }),
  ]);

  const breadcrumbs = [
    {
      title: 'Главная',
      disabled: false,
      href: '/',
    },
    {
      title: 'Услуги',
      disabled: true,
      href: '/services',
    },
  ];
</script>

<template>
  <MenuMain />
  <div class="wrapper services mt-4">
    <VBreadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
      </template>
    </VBreadcrumbs>
    <h1 class="title services__title">Наши услуги</h1>
    <div class="under-line"></div>
    <p class="subtitle mb-8 mt-4">Полный спектр услуг для Вашего автомобиля</p>
    <div class="grid block-end-margin">
      <CService v-for="service of allServices" :service="service" :key="service.id" />
    </div>
    <h1 class="title">Комлексы услуг</h1>
    <div class="under-line"></div>
    <h2 class="subtitle mb-8 mt-4">Экономия до 30% при заказе комплекса услуг</h2>

    <div class="grid">
      <CComplex v-for="complex of complexes" :complex="complex" :key="complex.id" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .services {
    &__subtitle {
      color: #fff;
      font-size: 20px;
      margin-top: 16px;
      font-weight: 400;
      margin-bottom: 24px;
    }

    &__title_complex {
      margin-top: 24px;
    }
  }
</style>
