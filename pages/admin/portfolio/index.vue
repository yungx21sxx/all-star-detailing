<template>

	<div class="wrapper clients">
		<header class="clients__header">
			<h2 class="clients__title">Портфолио работ</h2>
			<v-btn color="#f1aa34" class="clients__btn" href="/admin/portfolio/new">Добавить машину</v-btn>
		</header>
		<div class="clients__grid client">
			<v-card
				 v-for="{id, photos, name, description} in clients"
				 :key="id"
			>
				<v-img
					v-if="photos.length > 0"
					 class="align-end"
					 height="240"
					 :src="photos[0].urlMin"
					 cover
				/>
				<v-card-title class="client__title">{{name}}</v-card-title>
				<v-card-actions>
					<v-btn :href="`/admin/portfolio/edit/${id}`" color="#f1aa34">Редактировать</v-btn>
					<v-btn @click="deleteCar(id)" color="red">Удалить</v-btn>
				</v-card-actions>
			</v-card>
		</div>

	</div>
	
	<ModalLayout
		 v-model="modalEditOpened"
		 width="auto"
	>
		<template #title>
			<h3 class="ml-7">
				Редактировать
			</h3>
			
		</template>
		<v-card>
			<v-card-item>
				<v-text-field v-model="currentPorfolioItem.name" variant="outlined" title="Заголовок"></v-text-field>
				<text-editor
					 v-model="currentPorfolioItem.description"
				/>
			</v-card-item>
			<v-card-actions>
			
			</v-card-actions>
		</v-card>
		<v-btn
			@click="savePortfolioItem"
			color="#f1aa34"
			class="modal__btn"
		>Сохранить</v-btn>

	</ModalLayout>

</template>

<script setup lang="ts">
import type {PortfolioItemUpdateDTO} from "~/types/dto";

definePageMeta({
	layout: 'admin',
	middleware: ['admin-only'],
})

const {data: clients, pending} = useLazyAsyncData('portfolio',
	 () => $fetch('/api/portfolio/all')
)
const modalEditOpened = ref<boolean>(false)

const currentPorfolioItemDefault: PortfolioItemUpdateDTO = {
	id: -1,
	description: '',
	name: '',
}

const currentPorfolioItem = ref<PortfolioItemUpdateDTO>(currentPorfolioItemDefault)
const openEditModal = (car: PortfolioItemUpdateDTO) => {
	modalEditOpened.value = true
	currentPorfolioItem.value = car
}

const savePortfolioItem = async () => {
	if (currentPorfolioItem.value.id === -1) {
		return;
	}
	const {data: response} = await useFetch(`/api/portfolio/update`, {
		method: 'PUT',
		body: currentPorfolioItem.value
	})
	if (!response) {
		alert('Ошибка')
	}
	currentPorfolioItem.value = currentPorfolioItemDefault
	modalEditOpened.value = false
	await refreshNuxtData('portfolio')
}


const deleteCar = async (id: number) => {
	try {
		await $fetch(`/api/portfolio/${id}`, {
			method: 'DELETE'
		})
		await refreshNuxtData('portfolio')
	} catch (e) {
		alert('Ошибка удаления')
	}
}



</script>

<style scoped lang="scss">

.modal__btn {
	margin: 16px;
	width: 100%;
}

.clients {
	&__car-name {
		background: #CC9933;
		color: white;
		width: fit-content;
		margin-left: auto;
		margin-bottom: 5px;
		margin-right: 5px;
		padding: 0 3px;
		border-radius: 4px;
	}
	&__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 25px;
		margin-bottom: 50px;
	}
	&__header {

		margin-top: 20px;
		margin-bottom: 20px;
		
		@media screen and (max-width: 900px) {
			display: block;
		}
	}
	
	&__btn {
		margin-top: 24px;
	}

	&__title {
		font-weight: 400;
		font-size: 30px;
		line-height: 38px;
		padding-right: 10px;
		padding-bottom: 5px;
		border-bottom: 3px solid #CC9933;
		@media screen and (max-width: 900px) {
			width: 100%;
		}
		width: fit-content;
	}

	&__subtitle {
		margin-top: 10px;
		display: flex;
		@media screen and (max-width: 900px) {
			flex-direction: column;
			gap: 0;
		}
		gap: 20px;

		&_left {
			font-style: normal;
			font-weight: 500;
			font-size: 24px;

			color: #CC9933;


			@media screen and (max-width: 900px) {
				font-size: 16px;
			}
		}

		&_right {
			font-style: normal;
			font-weight: 400;
			font-size: 24px;


			@media screen and (max-width: 900px) {
				font-size: 20px;
			}
		}
	}
}


</style>