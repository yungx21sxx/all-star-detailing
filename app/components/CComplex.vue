<script setup lang="ts">
  import type { IComplex } from '~/types/client';
  import { mdiArrowRight, mdiCheckCircleOutline } from '@mdi/js';

  defineProps<{
    complex: IComplex;
  }>();

  const { openSubmitModal } = useModal();
</script>

<template>
  <v-card class="complex" itemscope itemtype="https://schema.org/Offer">
    <h3 class="complex__title" itemprop="name">{{ complex.title }}</h3>

    <div class="complex__price">
      <div class="complex__price_prev" itemprop="priceValidUntil">
        <meta itemprop="priceValidUntil" content="2025-12-31" />
        <s>{{ complex.price.previous }}</s>
      </div>
      <div class="complex__price_current" itemprop="price">
        <meta itemprop="price" :content="complex.price.current" />
        <meta itemprop="priceCurrency" content="RUB" />
        {{ complex.price.current }}
      </div>
    </div>

    <v-divider class="" />

    <ul
      class="complex__list"
      itemprop="itemOffered"
      itemscope
      itemtype="https://schema.org/Service"
    >
      <li class="list-item" v-for="service of complex.included" itemprop="name">
        <v-icon :icon="mdiCheckCircleOutline" color="#f1aa34" />
        <span>{{ service }}</span>
      </li>
    </ul>

    <v-btn color="#f1aa34" class="complex__btn" :href="`/complex/${complex.id}`" itemprop="url"
      >Подробнее</v-btn
    >
    <v-btn @click="openSubmitModal(complex.title)" color="#f1aa34" variant="tonal" class="mt-4"
      >Записаться</v-btn
    >
  </v-card>
</template>

<style scoped lang="scss">
  .complex {
    padding: 16px;
    border-radius: 4px;
    min-height: 260px;
    display: flex;
    flex-direction: column;

    &__list {
      list-style: none;
      margin: 16px 0;

      .list-item {
        font-size: 14px;
        display: flex;
        gap: 8px;
        margin-bottom: 12px;
      }
    }

    &__title {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    &__services {
      margin-left: 16px;
      margin-bottom: 16px;
      font-size: 14px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }

    &__price {
      display: flex;
      gap: 12px;
      font-size: 20px;
      margin-bottom: 12px;
      &_prev {
        text-decoration: line-through;
      }

      &_current {
        color: #f1aa34;
      }
    }

    &__btn {
      margin-top: auto;
    }
  }
</style>
