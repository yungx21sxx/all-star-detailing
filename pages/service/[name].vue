<script setup lang="ts">
import type {IPriceTable} from "~/types/client";
import {services, PRICE_TABLE} from '~/data/services.data';
const route = useRoute();

const {openSubmitModal} = useModal()
import PriceTable from "~/components/service-page/PriceTable.vue";
import {mdiChevronRight} from "@mdi/js";

const service = services.find(service => service.id === route.params.name);
let priceTableTitle: string = '';

switch (route.params.name) {
	case 'dry-salon':
		priceTableTitle = 'Цены на комплексную химчистка салона';
		break;
	case 'wash':
		priceTableTitle = 'Цены на детейлинг мойку автомобиля';
		break;
	default:
		priceTableTitle = `Цены на ${service.title.toLowerCase()}`;
		break;
}

useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Service',
				'serviceType': service.title,
				'description': service.description,
				'offers': {
					'@type': 'Offer',
					'priceCurrency': 'RUB',
					'price': service.price.value,
					'priceValidUntil': '2025-12-31',
					'url': `https://all-star-detailing.ru/service/${service.id}`,
					'priceSpecification': {
						'@type': 'PriceSpecification',
						'priceCurrency': 'RUB',
						'price': service.price.value,
						'eligibleRegion': {
							'@type': 'Place',
							'name': 'Санкт-Петербург'
						}
					}
				},
				'image': service.img,
				'additionalType': 'https://schema.org/AutoDetailing',
				'provider': {
					'@type': 'Organization',
					'name': 'All Star Detailing',
					'url': 'https://all-star-detailing.ru',
					'logo': 'https://all-star-detailing.ru/logo.webp',
					'sameAs': 'https://www.instagram.com/allstardetailing'
				},
				'mainEntityOfPage': `https://all-star-detailing.ru/service/${service.id}`,
				'duration': service.time,
				'priceCurrency': 'RUB',
				'price':service.price.value,
			}),
		},
	],
});
useHead({
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Service',
				'name': service.title,
				'description': service.description,
				'serviceType': service.type || 'Автодетейлинг',
				'provider': {
					'@type': 'AutoDetailing',
					'name': 'All Star Detailing',
					'url': 'https://all-star-detailing.ru',
				},
				'areaServed': {
					'@type': 'City',
					'name': 'Санкт-Петербург',
				},
				'offers': {
					'@type': 'Offer',
					'price': service.price.value,
					'priceCurrency': 'RUB',
					'availability': 'https://schema.org/InStock',
					'url': `https://all-star-detailing.ru/service/${service.id}`,
				},
				'image': service.img,
				'estimatedTime': {
					'@type': 'QuantitativeValue',
					'value': service.time,
				},
			}),
		},
	],
});
useSeoMeta({
	title: `${service.title} в СПб | All Star Detailing`,
	description: `Время выполнения: ${service.time}. Ознакомьтесь с деталями услуги и фото выполненных работ.`,
	ogTitle: `${service.title} — All Star Detailing`,
	ogDescription: `Санкт-Петербург. ${service.title}. Цена: ${service.price.text}. Время выполнения: ${service.time}. Ознакомьтесь с деталями услуги и фото выполненных работ.`,
	ogImage: service.img,
	ogType: 'website',
	ogImageAlt: `${service.title} | All Star Detailing`,
	ogSiteName: 'All Star Detailing',
	ogLocale: 'ru_RU',
});

const breadcrumbs = [
	{
		title: 'Главная',
		disabled: false,
		href: '/',
	},
	{
		title: 'Услуги',
		disabled: false,
		href: '/services',
	},
	{
		title: service.title,
		disabled: true,
		href: '/',
	},
];

const priceTable: IPriceTable | undefined = PRICE_TABLE.find(table => table.serviceID === route.params.name);

</script>

<template>
	<MenuMain/>
	<div class="service">
	<div class="wrapper">
		<VBreadcrumbs
			:items="breadcrumbs"
		
		>
			<template v-slot:divider>
				<v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
			</template>
		</VBreadcrumbs>
		<UISliderMultiply :fixed-ratio="true" :photos="service.photos" class="service__slider"/>

	
		<h1 class="service__title title">{{ service.title }}</h1>
		<div class="under-line mb-6"></div>
		<div class="service__text server-html" v-html="service.description"/>
		
		
		<div class="service__info">
			<div class="service__price">
				{{ service.price.text }}
			</div>
			<div class="service__time">
				<span>Выполним за: </span>{{ service.time }}
			</div>
			<v-btn color="#f1aa34" @click="openSubmitModal(service.title)">Записаться на услугу</v-btn>
		</div>
		
		<PriceTable v-if="priceTable" :title="priceTableTitle" :price-table="priceTable"/>
	</div>
</div>

</template>

<style scoped lang="scss">

.service {
	
	&__info {
		margin-top: 24px;
		margin-bottom: 44px;
	}
	&__price {
		font-size: 30px;
		font-weight: 500;
		color: $accent;
	}
	&__time {
		margin-bottom: 24px;
	}
	
	&__slider {
		height: 500px;
		@media screen and (max-width: 800px) {
			height: 300px;
		}
	}
	
	&__title {
		margin: 24px 0 16px 0;
	}
}

</style>