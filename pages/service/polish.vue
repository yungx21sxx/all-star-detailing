<script lang="ts" setup>
	import type {IPriceTable} from "~/types/client";
	import BonusProgram from "~/components/main-page/BonusProgram.vue";
	import Review from "~/components/main-page/Review.vue";
	import PriceTable from "~/components/service-page/PriceTable.vue";
	import {PRICE_TABLE} from "~/data/services.data";
	import {mdiArrowRight} from "@mdi/js";
	
	useSeoMeta({
		title: 'Полировка кузова автомобиля в СПб: глубокая полировка, корекция царапин.',
		description: 'Профессиональная полировка кузова автомобиля. Верните своему автомобилю первозданный вид All Star Detailing. Востановительная и глубокая полировка: цена от 15 000 ₽'
	})
	
	const { isMobileOrTablet } = useDevice();
	const {openSubmitModal} = useModal();
	
	const gallery = [
		'/polish/slider/4.jpeg',
		'/polish/slider/1.jpeg',
		'/polish/slider/2.jpeg',
		'/polish/slider/3.jpeg',
	];
	const scrollBottom = () => {
		window.scroll(0, window.innerHeight - 50)
	}
	
	const jumpToPriceInfo = () => {
		const bonusBlock =  document.querySelector('#price')
		const rect = bonusBlock?.getBoundingClientRect()
		const priceCords = rect.top + window.scrollY - 50;
		window.scroll(0, priceCords)
	}
	
	const priceTable: IPriceTable | undefined = PRICE_TABLE.find(table => table.serviceID === 'polish');


</script>

<template>
	<HeaderBackground gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5))">
		<template #content>
			<div class="banner__btn btn" v-ripple @click="jumpToPriceInfo">
				<span>Смотреть цены</span>
				<v-icon class="btn__icon" :icon="mdiArrowRight"></v-icon>
			</div>
			<h1 class="banner__title">Полировка кузова <br>в Санкт-Петербурге</h1>
			<p class="text banner__text">
				Верните своему автомобилю первозданный вид
				в <strong>All Star Detailing</strong>
			</p>
			<div class="banner__info">
				<div class="banner__price">от 15 000 ₽ </div>
				<div class="banner__time">Выполним за 2 дня</div>
			</div>
			<v-btn variant="flat" color="#f1aa34" @click="openSubmitModal('Полировка кузова')">Записаться на услугу</v-btn>
		</template>
		<template #background>
			<img
				alt="all star detailing"
				class="hero__background bg"
				src="/polish/banner.jpeg"
				loading="lazy"
			/>
		</template>
	</HeaderBackground>
		
	<div class="wrapper service__content">
		<div class="service__about">
			<h2 class="service__title">Мы предоставляем два типа полировок:</h2>
			<p class="service__text">
				<strong>Востановительная полировка:</strong>  Эта услуга идеально подходит для устранения мелких и средних царапин, восстанавливая блеск и яркость цвета вашего автомобиля. Мы аккуратно обрабатываем поверхность, сохраняя оригинальное покрытие в идеальном состоянии.
			</p>
			<p class="service__text"><strong>Глубокая полировка:</strong>  Полный комплекс восстановительных работ, включая удаление всех царапин с кузова, демонтаж дверных ручек для детальной обработки, полировку порогов и зоны погрузки, а также подкраску сколов. Эта процедура возвращает автомобилю его роскошный вид, придавая глубокий и насыщенный цвет кузову.</p>
		</div>
		
		<VintersectAnimation class="service__process">
			<h2 class="service__title">Фотографии процесса работы</h2>
			
			<div class="service__grid grid">
				<v-img
					src="/polish/process/photo_2023-12-10 22.33.36.jpeg"
					height="250px"
					cover
				/>
				<v-img
					src="/polish/process/photo_2023-12-10 22.46.04.jpeg"
					height="250px"
					cover
				/>
				<v-img
					src="/polish/process/photo_2023-12-10 22.46.10.jpeg"
					height="250px"
					cover
				/>
			</div>
		</VintersectAnimation>
		
		<VintersectAnimation class="service__gallery">
			<h2 class="service__title service__title_center">Галлерея выполненных работ</h2>
			<CSlider :photos="gallery" class="service__slider"/>
		</VintersectAnimation>
		
		<VintersectAnimation>
			<PriceTable class="service__prices" id="price" :priceTable="priceTable" title="Цены на полировку кузова"/>
		</VintersectAnimation>
		
	</div>
	<ContactsBlock class="wrapper mt-8"/>
	<BonusProgram class="service__bonus" id="bonus"/>
	<Review class="service__review"/>

</template>

<style scoped lang="scss">
	@import "@/assets/service";
	.text {
		font-size: 22px;
		
		@media screen and (max-width: 760px){
			font-size: 18px;
		}
	}
</style>