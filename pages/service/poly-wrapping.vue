<script setup lang="ts">
	import type {IPriceTable} from "~/types/client";
	import WrappingAdv from "~/components/service-page/WrappingAdv.vue";
	import PriceTable from "~/components/service-page/PriceTable.vue";
	import Review from "~/components/main-page/Review.vue";
	import BonusProgram from "~/components/main-page/BonusProgram.vue";
	
	const { PRICE_TABLE } = useServices();
	const { isMobileOrTablet } = useDevice();
	
	const { openSubmitModal } = useModal();
	
	const gallery = [
		'/poly-wrapping/slider/1.jpeg',
		'/poly-wrapping/slider/2.JPG',
		'/poly-wrapping/slider/3.jpeg',
		'/poly-wrapping/slider/4.jpeg',
		'/poly-wrapping/slider/5.jpeg',
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

	<div :class="['service', {
			'service--mobile' : isMobileOrTablet
	}]">
		<img-background src="/poly-wrapping/banner.JPG" height="100svh" class="service__banner banner">
			<div class="banner__body">
				<section class="wrapper">
				
					<header class="banner__content" v-motion-slide-visible-once-left>
						<div class="banner__btn btn" v-ripple @click="jumpToPriceInfo">
							<span>Смотреть цены</span>
							<v-icon class="btn__icon">mdi-arrow-right</v-icon>
						</div>
						<h1 class="banner__title">ОКЛЕЙКА АВТО ПОЛИУРЕТАНОВОЙ ПЛЕНКОЙ</h1>
						<p class="banner__text">
							Мы наносим полиуретановые пленки высочайшего качества, что делает их не только надежным способом защиты, но и украшением для кузова любого автомобиля.
						</p>
<!--							<div class="banner__info">-->
<!--								<div class="banner__price">от 55 000 ₽ </div>-->
<!--								<div class="banner__time">Выполним за 2 дня</div>-->
<!--							</div>-->
						<v-btn variant="flat" class="banner__btn" color="#c93" @click="openSubmitModal('Оклейка полиуритановой пленкой')">Записаться на услугу</v-btn>
					</header>
					
				</section>
				<div class="banner__bottom">
					<v-btn variant="text" class="banner__arrow"  @click="scrollBottom">
						<nuxt-icon name="arrow" />
					</v-btn>
				</div>
			</div>
		</img-background>
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
					<v-img class="service__img" src="/poly-wrapping/adv.jpg" cover alt="ОКЛЕЙКА АВТО ПОЛИУРЕТАНОВОЙ ПЛЕНКОЙ"/>
				</div>
			</VintersectAnimation>
			
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
</style>