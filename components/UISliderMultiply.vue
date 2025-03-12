<template>
	<swiper
		:slidesPerView="'auto'"
		:navigation="true"
		:scrollbar="{
	        enabled: true,
	        draggable: true,
	    }"
		:free-mode="true"
		:modules="modules"
		@swiper="getSwiperInstance"
		class="swiper-multiply"
	>
		<swiper-slide
			v-for="photo of photos"
			class="swiper-multiply__slide"
		>
			<img
				:class="[
					'swiper-multiply__img',
					{
						'swiper-multiply__img--fixed-ratio': fixedRatio,
					}
				]"
				:loading="fixedRatio ? 'lazy' : null"
				:key="photo + forceUpdateKey"
				@load="(e) => e.target.classList.add('loaded')"
				:src="photo"
				alt="All Star Detailing"
			/>
		</swiper-slide>
	</swiper>
	<div class="swiper-multiply__footer">
		<div class="btns">
			<v-btn color="#f1aa34" aria-label="Left" @click="swiperController.slidePrev()" :icon="mdiArrowLeft" variant="tonal"></v-btn>
			<v-btn color="#f1aa34" aria-label="Right" @click="swiperController.slideNext()" :icon="mdiArrowRight" variant="tonal"></v-btn>
		</div>
		
		<div class="action">
			<slot name="action"/>
		</div>
	</div>
	
	

</template>
<script setup lang="ts">
// Import Swiper Vue.js components
	import 'swiper/css';
	
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import 'swiper/css/free-mode';
	import 'swiper/css/scrollbar';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import {FreeMode, Scrollbar} from 'swiper/modules';
	import type {Photo} from "~/types/client";
	
	const swiperController = ref();
	
	const getSwiperInstance = (swiper) => {
		swiperController.value = swiper;
	}

	const forceUpdateKey = ref(0);
	
	onMounted(() => {
		forceUpdateKey.value += 1;
	});
	
	withDefaults(
		defineProps<{
			photos: string[]
			fixedRatio?: boolean,
			aspectRatio?: string
		}>(),
		{
			fixedRatio: false,
			aspectRatio: '1/1'
		}
	)

	// import required modules
	import { Pagination, Navigation } from 'swiper/modules';
	import {mdiArrowLeft, mdiArrowRight} from "@mdi/js";
	
	const modules = [Pagination, Navigation, Scrollbar, FreeMode, Scrollbar]
</script>


<style lang="scss">
	.swiper-button-next:after, .swiper-button-prev:after,  {
	    color: $accent !important;
		padding: 16px;
	}
	.swiper-multiply {
		height: 450px;
		border-radius: 7px;
		.swiper-scrollbar-drag {
			background: rgba($accent, .7) !important;
			height: 5px !important;
		}
		
		.swiper-multiply__img--fixed-ratio {
			aspect-ratio: v-bind(aspectRatio);
			object-fit: cover;
			object-position: center;
			opacity: 0;
			transition: opacity .4s ease-out;
			
			&.loaded {
				opacity: 1;
			}
		}
		
		&__slide {
			width: fit-content !important;
			display: flex !important;
			justify-content: center !important;
			align-items: center !important;
			&:not(nth-last-child) {
				margin-right: 20px;
			}
		}
		
		&__img {
			display: block;
			height: 100%;
			object-fit: cover;
			
			&--fixed {
				object-fit: cover;
				//aspect-ratio: 1/1;
			}
			
			
		}
		
		&__footer {
			
			@media screen and (max-width: 400px){
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
			}
			display: flex;
			align-items: center;
			gap: 16px;
			margin-top: 16px;
		}
		
		@media screen and (max-width: 500px) {
			height: 340px;
			max-width: calc(100vw - 32px);
			&__img {
				//height: 300px !important;
				max-width: calc(100vw - 32px);
				object-fit: cover !important;
			}
		}
		
	}
	
	.btns {
		
		display: flex;
		align-items: center;
		gap: 16px;
		
	}
</style>