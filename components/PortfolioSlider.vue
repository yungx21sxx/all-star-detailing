<template>
	<swiper
		:slidesPerView="'auto'"
		:navigation="true"
		:scrollbar="{
	        enabled: true,
	        draggable: true,
	    }"
		v-if="!pending"
		:free-mode="true"
		:modules="modules"
		@swiper="getSwiperInstance"
		class="portfolio-slider"
	>
		<swiper-slide
			v-for="car in clients"
			class="portfolio-slider__slide"
		>
			<v-card
				:key="car.id"
				@click="openDialog(car)"
			>
				<v-img
					v-if="car.photos.length > 0"
					class="portfolio__item"
				
					gradient="to bottom, rgba(0,0,0,0.2), rgba(0,0,0,.8)"
					:src="car.photos[0].urlMin"
					cover
				>
					<v-chip variant="flat" @click="openDialog(car)" color="#f1aa34" :append-icon="mdiChevronRight" class="portfolio__chip">Подробнее</v-chip>
					<h3 class="clients__car-name">{{ car.name }}</h3>
				</v-img>
			</v-card>
		</swiper-slide>
	</swiper>
	<div class="portfolio__item" v-else>
	</div>
	<div class="portfolio-slider__footer">
		<div class="btns">
			<v-btn color="#f1aa34" aria-label="Left" @click="swiperController.slidePrev()" :icon="mdiArrowLeft" variant="tonal"></v-btn>
			<v-btn color="#f1aa34" aria-label="Right" @click="swiperController.slideNext()" :icon="mdiArrowRight" variant="tonal"></v-btn>
		</div>
		
		<div class="action">
			<slot name="action"/>
		</div>
	</div>
	
	<ModalPortfolio
		v-model="dialog"
		:car="currentClient"
	/>

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
import type {ICar, Photo} from "~/types/client";
import { Pagination, Navigation } from 'swiper/modules';
import {mdiArrowLeft, mdiArrowRight, mdiChevronRight} from "@mdi/js";

const modules = [Pagination, Navigation, Scrollbar, FreeMode, Scrollbar]

const swiperController = ref();

const getSwiperInstance = (swiper) => {
	swiperController.value = swiper;
}

const forceUpdateKey = ref(0);

onMounted(() => {
	forceUpdateKey.value += 1;
});
const dialog = ref<boolean>(false)
const currentClient = ref<ICar>();
const {data: clients, pending} = await useLazyFetch('/api/portfolio/all')
const openDialog = (car: ICar) => {
	currentClient.value = clients.value.find(i => i.id === car.id)
	dialog.value = true
}




</script>


<style lang="scss">
.swiper-button-next:after, .swiper-button-prev:after,  {
	color: $accent !important;
	padding: 16px;
}
.portfolio-slider {
	height: v-bind(desktopHeight);
	border-radius: 7px;
	.swiper-scrollbar-drag {
		background: rgba($accent, .7) !important;
		height: 5px !important;
	}
	
	.portfolio-slider__img--fixed-ratio {
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
		@media screen and (max-width: 400px){
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
}

.portfolio__chip {
	position: absolute;
	top: 12px;
	right: 16px;
}

.portfolio__item {
	display: flex;
	align-items: flex-end;
	position: relative;
	width: 400px;
	height: 320px;
	@media screen and (max-width: 400px){
		max-width: 100vw;
		height: 260px;
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
		color: #FFF;
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