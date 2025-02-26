<template>
	<swiper
		:slidesPerView="'auto'"
		:spaceBetween="20"
		:navigation="true"
		:scrollbar="{
	        hide: true,
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
			<img class="swiper-multiply__img" :src="photo" alt="All Star Detailing"/>
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
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import {FreeMode, Scrollbar} from 'swiper/modules';
	
	const swiperController = ref();
	
	const getSwiperInstance = (swiper) => {
		swiperController.value = swiper;
	}
	
	
	
	
	defineProps<{
		photos: string[]
	}>()
	
	// Import Swiper styles

	
	// import required modules
	import { Pagination, Navigation } from 'swiper/modules';
	import {mdiArrowLeft, mdiArrowRight} from "@mdi/js";
	
	const modules = [Pagination, Navigation, Scrollbar, FreeMode]
</script>


<style lang="scss">
	.action {
		margin-left: auto;
		@media screen and (max-width: 370px){
			margin-left: 0;
		}
	}
	.swiper-button-next:after, .swiper-button-prev:after,  {
	    color: $accent !important;
		padding: 16px;
	}
	.swiper-multiply {
		height: 400px;
		
		&__slide {
			width: fit-content !important;
			display: flex !important;
			justify-content: center !important;
			align-items: center !important;
		}
		
		&__img {
			display: block;
			height: 400px;
		}
		
		&__footer {
			
			@media screen and (max-width: 370px){
				flex-direction: column;
				align-items: flex-start;
			}
			display: flex;
			align-items: center;
			gap: 16px;
			margin-top: 16px;
		}
		
		@media screen and (max-width: 500px) {
			height: 300px;
			
			&__img {
				height: 300px !important;
				max-width: 80vw;
			}
		}
		
	}
	
	.btns {
		
		display: flex;
		align-items: center;
		gap: 16px;
		
	}
</style>