<template>
  <swiper :slidesPerView="'auto'" :navigation="true" :scrollbar="{
    enabled: true,
    draggable: true,
  }" :free-mode="true" :modules="modules" @swiper="getSwiperInstance" class="swiper-multiply">
    <swiper-slide v-for="photo of photos" class="swiper-multiply__slide">
      <img :class="[
        'swiper-multiply__img',
        {
          'swiper-multiply__img--fixed-ratio': fixedRatio,
        },
      ]" :loading="fixedRatio ? 'lazy' : null" :key="photo + forceUpdateKey"
        @load="(e) => e.target.classList.add('loaded')" :src="photo" alt="All Star Detailing" />
    </swiper-slide>
  </swiper>
  <div class="swiper-multiply__footer">
    <div class="btns">
      <v-btn color="#f1aa34" aria-label="Left" @click="swiperController.slidePrev()" :icon="mdiArrowLeft"
        variant="tonal"></v-btn>
      <v-btn color="#f1aa34" aria-label="Right" @click="swiperController.slideNext()" :icon="mdiArrowRight"
        variant="tonal"></v-btn>
    </div>

    <div class="action">
      <slot name="action" />
    </div>
  </div>
</template>
<script setup lang="ts">
  // Import Swiper Vue.js components
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { FreeMode, Scrollbar } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  const swiperController = ref();

  const getSwiperInstance = (swiper) => {
    swiperController.value = swiper;
  };

  const forceUpdateKey = ref(0);

  onMounted(() => {
    forceUpdateKey.value += 1;
  });

  withDefaults(
    defineProps<{
      photos: string[];
      fixedRatio?: boolean;
      aspectRatio?: string;
      desktopHeight?: string;
      mobileHeight?: string;
    }>(),
    {
      fixedRatio: false,
      aspectRatio: '1/1',
      desktopHeight: '450px',
      mobileHeight: '340px',
    },
  );

  // import required modules
  import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
  import { Navigation, Pagination } from 'swiper/modules';

  const modules = [Pagination, Navigation, Scrollbar, FreeMode, Scrollbar];
</script>

<style lang="scss">

  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: $accent !important;
    // padding: 16px;
  }

  .swiper-multiply {
    height: v-bind(desktopHeight);
    border-radius: 7px;

    .swiper-scrollbar-drag {
      background: rgba($accent, 0.7) !important;
      height: 8px !important;
    }

    .swiper-scrollbar-horizontal {
      height: 8px !important;
    }

    .swiper-multiply__img--fixed-ratio {
      aspect-ratio: v-bind(aspectRatio);
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transition: opacity 0.4s ease-out;

      &.loaded {
        opacity: 1;
      }
    }

    &__slide {
      width: fit-content !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;

      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    &__img {
      display: block;
      height: 100%;
      object-fit: cover;

      &--fixed {
        object-fit: cover;
      }
    }

    &__footer {
      @media screen and (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }

      display: flex;
      align-items: center;
      gap: 16px;
      padding-left: 16px;
      margin-top: 24px;
    }

    @media screen and (max-width: 500px) {
      height: v-bind(mobileHeight);
      max-width: 100vw;

      &__img {
        max-width: 100vw;
        object-fit: cover !important;
      }

      &__slide {
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
