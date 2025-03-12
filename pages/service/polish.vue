<script lang="ts" setup>
	import type {IPriceTable} from "~/types/client";
	import BonusProgram from "~/components/main-page/BonusProgram.vue";
	import Review from "~/components/main-page/Review.vue";
	import PriceTable from "~/components/service-page/PriceTable.vue";
	import {PRICE_TABLE} from "~/data/services.data";
	import {mdiArrowRight, mdiCheckCircleOutline} from "@mdi/js";
	
	useSeoMeta({
		title: 'Полировка кузова автомобиля в СПб: глубокая полировка, корекция царапин.',
		description: 'Профессиональная полировка кузова автомобиля. Верните своему автомобилю первозданный вид All Star Detailing. Востановительная и глубокая полировка: цена от 15 000 ₽',
		ogTitle: 'Полировка кузова автомобиля в СПб: глубокая полировка, корекция царапин.',
		ogDescription: 'Профессиональная полировка кузова автомобиля. Верните своему автомобилю первозданный вид All Star Detailing. Востановительная и глубокая полировка: цена от 15 000 ₽',
		ogImage: 'https://all-star-detailing.ru/polish/banner.jpeg'
	})
	
	const { isMobileOrTablet } = useDevice();
	const {openSubmitModal} = useModal();
	
	const gallery = [
		'/polish/slider/1.jpeg',
		'/polish/slider/2.jpeg',
		'/polish/slider/3.png',
		'/polish/slider/4.png',
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
	
	const processPhotos = [
		"/polish/process/photo_2023-12-10 22.33.36.jpeg",
		"/polish/process/photo_2023-12-10 22.46.04.jpeg"
	]

</script>

<template>
	<HeroSectionBackground
		url="/polish/banner.jpeg"
	>
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
	</HeroSectionBackground>
		
	<div class="wrapper service__content">
		<div class="service__about block" style="max-width: 800px">
			<h2 class="service__title title">Мы предоставляем два типа полировок:</h2>
			<div class="under-line"></div>
		</div>
		<div class="service__columns" style="gap: 24px;">
			<div class="card">
				<h3 class="card__title">
					Востановительная полировка
				</h3>
				<div class="card__price">
					от 15 000 ₽
				</div>
				<div class="card__time">
					Выполним за 2 дня
				</div>
				<v-divider class=""/>
				<div class="card__description ">
					<ul class="card__list">
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>устранения мелких и средних царапин</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>Восстанавливление блеска и яркости цвета вашего автомобиля</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>Аккуратно обработаем поверхность, сохраняя оригинальное покрытие в идеальном состоянии</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="card">
				<h3 class="card__title">
					Глубокая полировка
				</h3>
				<div class="card__price">
					от 35 000 ₽
				</div>
				<div class="card__time">
					Выполним за 2 дня
				</div>
				<v-divider class=""/>
				<div class="card__description ">
					<ul class="card__list">
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>полный комплекс восстановительных работ</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>Удаление всех царапин с кузова</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>демонтаж дверных ручек для детальной обработки</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>демонтаж дверных ручек для детальной обработки</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>полировка порогов и зоны погрузки</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>подкраска сколов</span>
						</li>
						<li class="list-item">
							<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
							<span>процедура возвращает автомобилю его роскошный вид, придавая глубокий и насыщенный цвет кузову</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<VintersectAnimation class="service__gallery block">
			<h2 class="title">Галлерея выполненных работ</h2>
			<div class="under-line"></div>
			<UISliderMultiply :photos="gallery" class="service__slider">
				<template #action>
					<v-btn variant="flat" color="#f1aa34" href="/portfolio">Смотреть портфолио</v-btn>
				</template>
			</UISliderMultiply>
		</VintersectAnimation>
		
		<VintersectAnimation class="mt-8">
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
	
	.card {
		max-width: 100% !important;
		&__title {
			font-size: 20px;
			font-weight: 500;
			margin-bottom: 8px;
		}
		&__price {
			color: $accent;
			font-size: 20px;
			margin-bottom: 12px;
		}
		&__time {
			font-weight: 500;
			margin-bottom: 12px;
		}
		&__description {
			margin-top: 16px;
		}
		.card__list {
			list-style: none;
			
			.list-item {
				display: flex;
				align-items: center;
				gap: 8px;
				margin-bottom: 12px;
				
			}
			
		}
		
		@media screen and (max-width: 600px){
			&__title {
				font-size: 18px;
			}
			&__price {
				font-size: 20px;
			}
			&__time {
				font-weight: 400;
				margin-bottom: 12px;
			}
			&__description {
				font-size: 14px;
			}
		}
	}
</style>