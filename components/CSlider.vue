<template>
    <swiper
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        :grabCursor="true"
        :modules="modules"
        :pagination="true"
        :navigation="true"
        class="swiper"
    >
        <swiper-slide
            v-for="photo of photos"
        >
            <v-img class="swiper__img" :src="photo" cover/>
        </swiper-slide>
    </swiper>
</template>
<script setup lang="ts">
    import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

    const modules = [EffectCreative, Pagination, Navigation]

    defineProps<{
        photos: string[]
    }>()


</script>


<style lang="scss">
.swiper {

    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.swiper-button-next, .swiper-button-prev,  {
    color: #FFFFFF;
}

.swiper-pagination-bullet {
    background: #FFFFFF;
}

.swiper-pagination-bullet-active {
    background: #f1aa34;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}


</style>