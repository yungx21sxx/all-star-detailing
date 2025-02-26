<script setup lang="ts">
	import type {IPriceTable} from "~/types/client";
	import WrappingAdv from "~/components/service-page/WrappingAdv.vue";
	import PriceTable from "~/components/service-page/PriceTable.vue";
	import Review from "~/components/main-page/Review.vue";
	import BonusProgram from "~/components/main-page/BonusProgram.vue";
	import {PRICE_TABLE} from "~/data/services.data";
	import {mdiArrowRight} from "@mdi/js";

	const { isMobileOrTablet } = useDevice();
	
	const { openSubmitModal } = useModal();
	
	const gallery = [
		'/poly-wrapping/slider/1.webp',
		'/poly-wrapping/slider/6.webp',
		'/poly-wrapping/slider/5.jpeg',
		'/poly-wrapping/slider/10.jpeg',
		'/poly-wrapping/slider/13.webp',
		'/poly-wrapping/slider/19.webp',
	];
	
	useSeoMeta({
		title: 'Оклейка авто защитной пленкой в СПб: высокое качество, гарантия от 2х лет.',
		description: 'Мы наносим полиуретановую пленку высочайшего качества, гарантия от 2х лет. Надежно защитите свой автомобиль от сколов и царапин.'
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
	
	const priceTable: IPriceTable | undefined = PRICE_TABLE.find(table => table.serviceID === 'poly-wrapping');
	

</script>

<template>

	<div class="service">
		<HeaderBackground gradient="linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))">
			<template #content>
				<div class="banner__btn btn" v-ripple @click="jumpToPriceInfo">
					<span>Смотреть цены</span>
					<v-icon class="btn__icon" :icon="mdiArrowRight"></v-icon>
				</div>
				<h1 class="banner__title">Оклейка авто <br> защитной пленкой</h1>
				<p class="banner__text">
					Мы наносим полиуретановые пленки высочайшего качества, что делает их не только надежным способом защиты, но и украшением для кузова любого автомобиля.
				</p>
				<div class="banner__info">
					<div class="banner__price">от 55 000 ₽ </div>
					<div class="banner__time">Выполним за 2 дня</div>
				</div>
				<v-btn variant="flat" color="#f1aa34" @click="openSubmitModal('Полировка кузова')">Записаться на услугу</v-btn>
			</template>
			<template #background>
				<img
					alt="all star detailing"
					class="hero__background bg"
					src="/poly-wrapping/banner.webp"
					loading="lazy"
				/>
			</template>
		</HeaderBackground>
		<div class="wrapper service__content">
			<VintersectAnimation>
				<div class="service__columns">
					<section>
						<h2 class="service__title service__title_orange">
							ПРЕИМУЩЕСТВА <br>
							ПОЛИУРЕТАНОВЫХ <br>
							ПЛЕНОК
						</h2>
						<p class="service__text">
							<strong>Полиуретановая пленка</strong> обладает толщиной в диапазоне от 0,15 до 0,18 мм, включая в себя слой прочного акрилового клея, способствующего эффективному восстановлению, и подкладку из полиэстера для дополнительной устойчивости.
							
							Эта многослойная конструкция гарантирует усиленную защиту, при этом материал устойчив к разрывам, не желтеет со временем и сохраняет свой первоначальный цвет, что делает его идеальным выбором для долгосрочной защиты кузова автомобиля.
						</p>
					</section>
					<v-img class="service__img" src="/poly-wrapping/adv.webp" cover alt="ОКЛЕЙКА АВТО ПОЛИУРЕТАНОВОЙ ПЛЕНКОЙ"/>
				</div>
			</VintersectAnimation>
			
			<VintersectAnimation>
				<WrappingAdv class="service__adv"/>
			</VintersectAnimation>
			
			<VintersectAnimation>
				<div class="service__gallery">
					<h2 class="service__title service__title_center mb-4">Фотографии процесса работы</h2>
					<UISliderMultiply :photos="gallery" class="service__slider"/>
				</div>
			</VintersectAnimation>
			
			<VintersectAnimation>
				<PriceTable class="service__prices" :priceTable="priceTable" id="price" title="Цены на оклейку пленкой"/>
			</VintersectAnimation>
			
		</div>
		<BonusProgram class="service__bonus" id="bonus"/>
		<ContactsBlock class="wrapper mt-8"/>
		
		
		
		
	</div>
	
</template>

<style scoped lang="scss">
	@import "@/assets/service";
</style>