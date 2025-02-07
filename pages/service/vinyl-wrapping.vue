<script setup lang="ts">

import type {IPriceTable} from "~/types/client";
import WrappingAdv from "~/components/service-page/WrappingAdv.vue";
import PriceTable from "~/components/service-page/PriceTable.vue";
import Review from "~/components/main-page/Review.vue";
import BonusProgram from "~/components/main-page/BonusProgram.vue";
import {PRICE_TABLE} from "~/data/services.data";
import {mdiArrowRight} from "@mdi/js";

const { isMobileOrTablet } = useDevice();
const {openSubmitModal} = useModal();

const gallery = [
	'/vinyl-wrapping/slider/4.jpeg',
	'/vinyl-wrapping/slider/1.jpeg',
	'/vinyl-wrapping/slider/2.jpeg',
	'/vinyl-wrapping/slider/3.jpeg',
	'/vinyl-wrapping/slider/5.jpg',
];

useSeoMeta({
	title: 'Оклейка авто виниловой пленкой в СПб: высокое качество, гарантия от 2х лет.',
	description: 'Профессиональная оклейка виниловой пленкой СПб, с широким выбором цветов и оттенков, вы можете полностью трансформировать внешний вид вашего авто, при этом защищая его от царапин, грязи и УФ-лучей. Пленка легко снимается, позволяя вам в любой момент вернуться к оригинальному цвету автомобиля или попробовать новый образ. '
})

const scrollBottom = () => {
	window.scroll(0, window.innerHeight - 50)
}
const jumpToPriceInfo = () => {
	const bonusBlock =  document.querySelector('#price')
	const rect = bonusBlock?.getBoundingClientRect()
	const priceCords = rect.top + window.scrollY - 50;
	window.scroll(0, priceCords)
}

const priceTable: IPriceTable | undefined = PRICE_TABLE.find(table => table.serviceID === 'vinyl-wrapping');

</script>

<template>
	<div :class="['service', {
				'service--mobile' : isMobileOrTablet
	}]">
		<img-background src="/vinyl-wrapping/banner.jpeg" height="100svh" class="poly__banner banner">
			<div class="banner__body">
				<section class="wrapper">
					<header class="banner__content" v-motion-slide-visible-once-left>
						<div class="banner__btn btn" v-ripple @click="jumpToPriceInfo">
							<span>Смотреть цены</span>
							<v-icon class="btn__icon" :icon="mdiArrowRight"></v-icon>
						</div>
						<h1 class="banner__title">ОКЛЕЙКА АВТО ВИНИЛОВОЙ ПЛЕНКОЙ</h1>
						<p class="banner__text">
							Возможность придать индивидуальность вашему авто, а также защитить его от царапин и повреждений.
						</p>
						<v-btn  variant="flat" color="#f1aa34" @click="openSubmitModal('Оклейка виниловой пленкой')">Записаться на услугу</v-btn>
					</header>
				</section>
				<div class="banner__bottom">
					<nuxt-icon name="arrow" class="banner__arrow" @click="scrollBottom"/>
				</div>
			</div>
		</img-background>
		
		<div class="wrapper service__content">
			
			<div class="service__columns">
				<section>
					<h2 class="service__title service__title_white">
						ПЕРЕВОПЛАТИТЕ ВАШ <br>
						АВТОМОБИЛЬ В <br>
						<span>ALL STAR DETAILING</span>
					</h2>
					<p class="service__text">
						<strong>Винтовая пленка</strong> - это идеальное решение для изменения цвета вашего автомобиля, обеспечивая ему защиту и стиль. Эта высококачественная пленка легко наносится и идеально облегает контуры авто, создавая гладкое и ровное покрытие.
					</p>
					<p class="service__text">
						С широким выбором цветов и оттенков, вы можете полностью трансформировать внешний вид вашего авто, при этом защищая его от царапин, грязи и УФ-лучей. Пленка легко снимается, позволяя вам в любой момент вернуться к оригинальному цвету автомобиля или попробовать новый образ.
					</p>
					
				</section>
				<v-img class="service__img" src="/vinyl-wrapping/about.jpeg" cover alt="ОКЛЕЙКА АВТО ПОЛИУРЕТАНОВОЙ ПЛЕНКОЙ"/>
			</div>
			<VintersectAnimation>
				<WrappingAdv class="service__adv"/>
			</VintersectAnimation>
			
			<VintersectAnimation>
				<div class="service__gallery">
					<h2 class="service__title service__title_center">Галлерея выполненных работ</h2>
					<CSlider :photos="gallery" class="service__slider"/>
				</div>
			</VintersectAnimation>
			
			<VintersectAnimation>
				<PriceTable class="service__prices" :priceTable="priceTable" id="price" title="Цены на оклейку пленкой"/>
			</VintersectAnimation>
			
		</div>
		
<!--		<BonusProgram class="service__bonus" id="bonus"/>-->
		<ContactsBlock class="wrapper mt-8"/>
		<Review class="service__review"/>
	</div>


</template>

<style scoped lang="scss">

	@import "@/assets/service";
	.banner__text {
		margin-bottom: 16px;
	}

</style>