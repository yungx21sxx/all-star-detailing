<template>
<main>
	<MenuMain/>
	<div class="wrapper clients mt-4">
		<VBreadcrumbs
			:items="breadcrumbs"
		
		>
			<template v-slot:divider>
				<v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
			</template>
		</VBreadcrumbs>
		<header class="clients__header">
			<h1 class="title">Портфолио работ</h1>
			<div class="under-line mb-6"></div>
			<h2 class="clients__subtitle">
				Мы имеем огромный опыт в сфере детейлинга и только любящих нас клиентов. <br>
				Чтобы узнать подробности о проделанной работе - кликнете по фото.
			</h2>
			<v-btn color="#f1aa34" class="clients__btn mb-8" href="/admin/portfolio/new" v-if="isAdmin">Добавить машину</v-btn>
		</header>
		<div class="clients__grid grid">
			<v-card
				v-for="car in clients"
				:key="car.id"
				@click="openDialog(car)"
			>
				<v-img
					v-if="car.photos.length > 0"
					class="align-end"
					height="220"
					gradient="to bottom, rgba(0,0,0,0.2), rgba(0,0,0,.8)"
					:src="car.photos[0].urlMin"
					cover
				>
					<h3 class="clients__car-name">{{ car.name }}</h3>
				</v-img>
			</v-card>
		</div>
	
	</div>
	<ModalPortfolio
		v-model="dialog"
		:car="currentClient"
	/>

</main>


</template>


<script setup lang="ts">
import type { ICar } from "~/types/client"
import {mdiChevronRight} from "@mdi/js";

const isAdmin = useAdmin();

useSeoMeta({
	title: 'Портфолио | All Star Detailing',
	description: 'Посмотрите примеры выполненных работ в All Star Detailing. Мы работаем с различными автомобилями и применяем передовые технологии детейлинга.',
	ogTitle: 'Портфолио | All Star Detailing',
	ogDescription: 'Изучите наше портфолио, чтобы увидеть высококачественные работы по детейлингу автомобилей, выполненные нашими экспертами.',
	ogImage: 'https://all-star-detailing.ru/main-banner-desktop.webp',
	ogType: 'website',
	ogImageAlt: 'Портфолио All Star Detailing',
	ogSiteName: 'All Star Detailing',
	ogLocale: 'ru_RU',
});

useSchemaOrg([
	defineBreadcrumb({
		itemListElement: [
			{ name: 'Главная', item: '/' },
			{ name: 'Портфолио', item: '/portfolio' },
		]
	}),
])


const dialog = ref<boolean>(false)
const currentClient = ref<ICar>()
const breadcrumbs = [
	{
		title: 'Главная',
		disabled: false,
		href: '/',
	},
	{
		title: 'Портфолио',
		disabled: true,
	},
]

useHead({
	title: "Портфолио работ"
})
const {data: clients} = await useFetch('/api/portfolio/all')
const openDialog = (car: ICar) => {
	currentClient.value = clients.value.find(i => i.id === car.id)
	dialog.value = true
}



</script>

<style scoped lang="scss">

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

</style>