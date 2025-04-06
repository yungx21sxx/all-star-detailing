<script setup lang="ts">
import Banner from "~/components/main-page/Banner1.vue";
import AboutUs from "~/components/main-page/AboutUs.vue";
import Advantages from "~/components/main-page/Advantages.vue";
import TopServices from "~/components/main-page/TopServices.vue";
import BonusProgram from "~/components/main-page/BonusProgram.vue";
import Complexes from "~/components/main-page/Complexes.vue";
import Review from "~/components/main-page/Review.vue";
import {mdiArrowRight} from "@mdi/js";
import {services, servicesCustom} from "~/data/services.data";
import CallSubmitForm from "~/components/CallSubmitForm.vue";


const authUser = useAuthUser();

const photos = [
	'/slider/5.webp',
	'/slider/2.webp',
	'/slider/1.webp',
	'/slider/4.webp',
	'/slider/6.webp',
];



const serviceSchema = services.map(service => ({
	'@type': 'Service',
	'name': service.title,
	'description': service.description,
	'image': `https://all-star-detailing.ru${service.img}`,
	'offers': {
		'@type': 'Offer',
		'priceCurrency': 'RUB',
		'price': service.price.text,
		'url': `https://all-star-detailing.ru/services/${service.id}`,
	},
}));

const customServiceSchema = servicesCustom.map(service => ({
	'@type': 'Service',
	'name': service.title,
	'image': `https://all-star-detailing.ru${service.img}`,
	'offers': {
		'@type': 'Offer',
		'priceCurrency': 'RUB',
		'price': service.price.text,
		'url': `https://all-star-detailing.ru/services/${service.id}`,
	},
}));
useSeoMeta({
	title: 'Профессиональный детейлинг в Санкт-Петербурге | All Star Detailing',
	description: '🚗Полный спектр детейлинг-услуг в Санкт-Петербурге по доступным ценам! Оклейка пленкой, ✨ полировка кузова, 🛡️ керамика, 🧼 химчистка салона. 🎁 При регистрации начислим – 1000 бонусов! После услуги возвращаем 5% на ваш бонусный счет.',
	ogTitle: 'Профессиональный детейлинг в Санкт-Петербурге | All Star Detailing',
	ogDescription: '🚗Полный спектр детейлинг-услуг в Санкт-Петербурге по доступным ценам! Оклейка пленкой, ✨ полировка кузова, 🛡️ керамика, 🧼 химчистка салона. 🎁 При регистрации начислим – 1000 бонусов! После услуги возвращаем 5% на ваш бонусный счет.',
	ogImage: 'https://all-star-detailing.ru/main-banner-desktop.webp',
	ogType: 'website',
	ogImageAlt: 'All Star Detailing',
	ogSiteName: 'All Star Detailing',
	ogLocale: 'ru_RU',
});

useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'AutoDetailing',
				'name': 'All Star Detailing',
				'url': 'https://all-star-detailing.ru',
				'logo': 'https://all-star-detailing.ru/logo.webp',
				'image': 'https://all-star-detailing.ru/main-banner-desktop.webp',
				'description': 'Профессиональный детейлинг центр в Санкт-Петербурге, предлагающий полный спектр услуг по уходу за автомобилем.',
				'address': {
					'@type': 'PostalAddress',
					'streetAddress': 'Проспект Энгельса 27АБ',
					'addressLocality': 'Санкт-Петербург',
					'postalCode': '194156',
					'addressCountry': 'RU',
				},
				'programMembership': {
					'@type': 'ProgramMembership',
					'membershipType': {
						'@type': 'DefinedTerm',
						'name': 'Бонусная программа',
						'description': 'Начислим 1000 бонусов при регистрации и вернем 5% от суммы заказа',
					},
					'member': {
						'@type': 'Person',
						'name': 'Любой клиент',
						'url': 'https://all-star-detailing.ru'
					},
					'startDate': '2024-01-01',
					'endDate': '2025-12-31',
					'programMode': 'Online',
					'programName': 'Бонусная программа All Star Detailing',
					'eligibleRegion': {
						'@type': 'Place',
						'name': 'Россия',
					},
					'reward': {
						'@type': 'Offer',
						'url': 'https://all-star-detailing.ru',
						'name': '1000 бонусных баллов',
						'description': 'Начислим 1000 бонусов при регистрации и вернем 5% от суммы заказа',
						'priceCurrency': 'RUB',
						'price': '1000',
					}
				},
				'geo': {
					'@type': 'GeoCoordinates',
					'latitude': 60.0105,
					'longitude': 30.3234,
				},
				'openingHoursSpecification': {
					'@type': 'OpeningHoursSpecification',
					'dayOfWeek': [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					],
					'opens': '10:00',
					'closes': '21:00',
				},
				'contactPoint': {
					'@type': 'ContactPoint',
					'telephone': '+7 (911) 947-07-77',
					'contactType': 'Customer Service',
					'availableLanguage': ['Russian'],
				},
				'sameAs': [
					'https://vk.com/allstardetailing',
					'https://www.instagram.com/allstardetailing',
					'https://t.me/allstardetailing',
				],
				'priceRange': '$$',
				'serviceOffer': [...serviceSchema, ...customServiceSchema]
			}),
		},
	],
	__dangerouslyDisableSanitizers: ['script'],
});
</script>

<template>
	<Banner />
	<AboutUs class="margin-block-end"/>
	<VintersectAnimation>
		<TopServices />
	</VintersectAnimation>
	<VintersectAnimation class="gallery block-end-margin block">
		<div class="wrapper">
			<h1 class="title">Наше портфолио</h1>
			<div class="under-line"></div>
		</div>
		<div class="wrapper gallery__slider">
			<PortfolioSlider>
				<template #action>
					<v-btn color="#f1aa34" to="/portfolio" :append-icon="mdiArrowRight">Смотреть все</v-btn>
				</template>
			</PortfolioSlider>
		</div>
	
	</VintersectAnimation>
	<BonusProgram id="bonus" class="margin-block-end"/>
	<VintersectAnimation>
		<Advantages />
	</VintersectAnimation>
	<VintersectAnimation>
		<Complexes />
	</VintersectAnimation>
	<VintersectAnimation>
		<ContactsBlock class="wrapper mt-8"/>
	</VintersectAnimation>
	<VintersectAnimation>
		<CallSubmitForm/>
	</VintersectAnimation>

</template>

<style lang="scss">

	@media screen and (max-width: 600px){
		.gallery__slider {
			padding: 0 !important;
		}
		
	}
</style>