<template>
<main>
	<div class="wrapper clients">
		<VBreadcrumbs
			:items="breadcrumbs"
		
		>
			<template v-slot:divider>
				<v-icon color="#D19D34" icon="mdi-chevron-right"></v-icon>
			</template>
		</VBreadcrumbs>
		<header class="clients__header">
			<h1 class="title">Портфолио работ</h1>
			<h2 class="clients__subtitle">
				Мы имеем огромный опыт в сфере детейлинга и только любящих нас клиентов. <br>
				Чтобы узнать подробности о проделанной работе - кликнете по фото.
			</h2>
		</header>
		<div class="clients__grid grid">
			<v-card
				v-for="car in clients"
				:key="car.id"
				@click="openDialog(car)"
			>
				<v-img
					class="align-end"
					height="220"
					gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.6)"
					:src="car.img"
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
		href: '/services',
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
		color: #D19D34;
		margin-bottom: 8px;
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