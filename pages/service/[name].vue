<script setup lang="ts">
import type {IPriceTable} from "~/types/client";

const route = useRoute();
const {services, PRICE_TABLE} = useServices()
const {openSubmitModal} = useModal()
import PriceTable from "~/components/service-page/PriceTable.vue";

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
	title: `${service.title} в СПб | All Star Detailing`
})

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
<div class="service">
	<div class="wrapper">
		<VBreadcrumbs
			:items="breadcrumbs"
		
		>
			<template v-slot:divider>
				<v-icon color="#D19D34" icon="mdi-chevron-right"></v-icon>
			</template>
		</VBreadcrumbs>
		<CSlider :photos="service.photos" class="service__slider"/>
		<h1 class="service__title title">{{ service.title }}</h1>
		
		<div class="service__text server-html" v-html="service.description"/>
		
		
		<div class="service__info">
			<div class="service__price">
				{{ service.price.text }}
			</div>
			<div class="service__time">
				<span>Выполним за: </span>{{ service.time }}
			</div>
			<v-btn color="#D19D34" @click="openSubmitModal(service.title)">Записаться на услугу</v-btn>
		</div>
		
		<PriceTable v-if="priceTable" :title="priceTableTitle" :price-table="priceTable"/>
	</div>
</div>

</template>

<style scoped lang="scss">

.table {
	margin-top: 24px;
	.table__icon img {
		height: 20px;
	}
	
	.table__service {
		color: $accent;
	}
}

.service {
	
	&__info {
		margin: 24px 0;
	}
	&__price {
		font-size: 30px;
		line-height: 40px;
		font-weight: bold;
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