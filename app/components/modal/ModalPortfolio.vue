<script setup lang="ts">
  import type { ICar } from '~/types/client';
  import { mdiClose } from '@mdi/js';

  const modelValue = defineModel<boolean>();
  defineProps<{
    car: ICar;
  }>();

  const { isMobile } = useDevice();
</script>

<template>
  <v-dialog v-model="modelValue" class="modal" fullscreen>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          <div class="logo">
            <img src="@/assets/icons/logo.webp" class="logo__img" alt="logo" />
            <span class="logo__title">ALL STAR</span>
          </div>
        </v-toolbar-title>
        <v-btn :icon="mdiClose" @click="modelValue = false"></v-btn>
      </v-toolbar>
      <div class="modal__body wrapper mt-4">
        <UISliderMultiply
          class="modal__slider"
          :photos="car.photos.sort((a, b) => a.position - b.position).map((photo) => photo.urlFull)"
          fixed-ratio
        />
        <h3 class="modal__title">{{ car.name }}</h3>
        <p>
          {{
            car.date
              ? new Date(car.date).toLocaleDateString('ru-RU', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })
              : new Date(car.date)
          }}
        </p>
        <v-divider class="mt-4" />
        <p class="modal__text server-html" v-html="car.description"></p>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
  .logo {
    display: flex;
    align-items: center;
    &__img {
      height: 26px;
      width: auto;
    }
    &__title {
      color: #f1aa34;
      font-size: 20px;
      margin-left: 8px;
    }
  }
  .modal {
    &__slider {
      height: 400px;
    }

    &__title {
      font-size: 20px;
      margin-top: 16px;
      color: #f1aa34;
    }

    &__text {
      margin-top: 24px;
      margin-bottom: 24px;
      max-height: 400px;
      overflow-y: auto;
    }
  }
</style>
