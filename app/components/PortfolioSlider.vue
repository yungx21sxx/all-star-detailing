<template>
  <div ref="lazyRoot">
    <div v-if="isLoading || (!hasFetched && !loadError)" class="portfolio-slider__placeholder">
      <v-progress-circular color="#f1aa34" indeterminate size="60" />
    </div>

    <swiper v-else-if="!loadError && clients.length > 0" :slidesPerView="'auto'" :navigation="true" :scrollbar="{
      enabled: true,
      draggable: true,
    }" :free-mode="true" :modules="modules" @swiper="getSwiperInstance" class="portfolio-slider">
      <swiper-slide v-for="car in clients" :key="car.id" class="portfolio-slider__slide">
        <div v-if="car.photos.length > 0" class="portfolio-item" @click="openDialog(car)">
          <div class="portfolio-item__info">
            <v-chip variant="flat" @click="openDialog(car)" color="#f1aa34" :append-icon="mdiChevronRight"
              class="portfolio-item__chip">Подробнее</v-chip>
            <h3 class="portfolio-item__name">{{ car.name }}</h3>
          </div>
          <img class="portfolio-item__img" :src="car.photos[0]?.urlMin" :alt="car.name">
        </div>
      </swiper-slide>
    </swiper>

    <div v-else class="portfolio__item">
      <v-alert type="error" title="Ошибка загрузки" :text="loadError || 'Не удалось загрузить данные'" variant="tonal">
        <v-btn size="small" @click="retryFetch" color="#f1aa34">Повторить</v-btn>
      </v-alert>
    </div>
  </div>

  <div class="portfolio-slider__footer" v-if="!isLoading && !loadError && clients.length > 0">
    <div class="btns">
      <v-btn color="#f1aa34" aria-label="Left" @click="swiperController?.slidePrev()" :icon="mdiArrowLeft"
        variant="tonal" :disabled="!swiperController"></v-btn>
      <v-btn color="#f1aa34" aria-label="Right" @click="swiperController?.slideNext()" :icon="mdiArrowRight"
        variant="tonal" :disabled="!swiperController"></v-btn>
    </div>

    <div class="action">
      <slot name="action" />
    </div>
  </div>

  <ModalPortfolio v-if="currentClient" v-model="dialog" :car="currentClient" />
</template>
<script setup lang="ts">
  import 'swiper/css';
  import ModalPortfolio from "~/components/modal/ModalPortfolio.vue";

  import { mdiArrowLeft, mdiArrowRight, mdiChevronRight } from '@mdi/js';
  import type { Swiper as SwiperType } from 'swiper';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import type { ICar } from '~/types/client';

  const modules = [Pagination, Navigation, Scrollbar, FreeMode];

  const swiperController = ref<SwiperType | null>(null);
  const { isMobile } = useDevice();
  const desktopHeight = computed(() => (isMobile ? '300px' : '350px'));
  const aspectRatio = '16 / 9';

  const getSwiperInstance = (swiper: SwiperType) => {
    swiperController.value = swiper;
  };

  const dialog = ref<boolean>(false);
  const currentClient = ref<ICar | null>(null);

  const clients = ref<ICar[]>([]);
  const isLoading = ref<boolean>(false);
  const loadError = ref<string | null>(null);
  const hasFetched = ref<boolean>(false);
  const lazyRoot = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;
  let delayTimer: ReturnType<typeof setTimeout> | null = null;

  const fetchCars = async () => {
    loadError.value = null;
    try {
      const response = await $fetch<ICar[]>('/api/portfolio/all?limit=10');
      clients.value = response;
    } catch (e) {
      loadError.value = 'Не удалось загрузить портфолио';
    } finally {
      isLoading.value = false;
      hasFetched.value = true;
    }
  };

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasFetched.value) {
            isLoading.value = true;
            if (delayTimer) clearTimeout(delayTimer);
            delayTimer = setTimeout(() => {
              void fetchCars();
            }, 400);
            break;
          }
        }
      },
      { rootMargin: '200px' },
    );
    if (lazyRoot.value) observer.observe(lazyRoot.value);
  });

  onUnmounted(() => {
    if (observer && lazyRoot.value) observer.unobserve(lazyRoot.value);
    observer = null;
    if (delayTimer) clearTimeout(delayTimer);
  });

  const retryFetch = async () => {
    isLoading.value = true;
    loadError.value = null;
    if (delayTimer) clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
      void fetchCars();
    }, 200);
  };

  const openDialog = (car: ICar) => {
    const found = clients.value.find((i) => i.id === car.id) || null;
    currentClient.value = found;
    dialog.value = !!found;
  };
</script>

<style lang="scss">

  .swiper-button-next,
  .swiper-button-prev {
    color: $accent !important;
  }

  .portfolio-slider {
    //height: v-bind(desktopHeight);
    border-radius: 7px;

    .swiper-scrollbar-drag {
      background: rgba($accent, 0.7) !important;
      height: 10px !important;
    }

    .swiper-scrollbar-horizontal {
      height: 10px;
    }

    .portfolio-slider__img--fixed-ratio {
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
      margin-bottom: 32px;
      border-radius: 7px;

      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    &__img {
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: 7px;

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
      &__slide {
        &:not(:last-child) {
          margin-right: 12px;
        }
      }
    }

    &__placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: v-bind(desktopHeight);
    }
  }

  .portfolio-item {
    position: relative;
    width: 450px;
    height: v-bind(desktopHeight);
    border-radius: 7px;

    @media screen and (max-width: 400px) {
      max-width: 100vw;
      height: 260px;
    }

    &__img,
    &__info {
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }

    &__img {
      object-fit: cover;
    }

    &__chip {
      width: fit-content;
    }

    &__info {
      box-sizing: border-box;
      position: absolute;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient(rgba(0, 4, 12, 0), rgb(0, 0, 0, .5));
    }

    &__name {
      text-shadow: 1px 4px 10px red;
      font-size: 22px;
    }
  }

  .clients {
    &__car-name {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 12px;
      margin-right: 16px;
      margin-left: 16px;
    }

    &__subtitle {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
