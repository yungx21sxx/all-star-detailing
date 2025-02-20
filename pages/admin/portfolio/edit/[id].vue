<script setup lang="ts">
	import type {PortfolioAppendDTO, PortfolioItemUpdateDTO} from "~/types/dto";
	import FileUploader from "~/components/FileUploader.vue";
	
	definePageMeta({
		layout: 'admin',
		middleware: ['admin-only'],
	})
	
	const route = useRoute();
	const rules = {
		required: (value: string) => !!value || 'Обязательное поле',
	}
	const loading = ref(false);
	
	const { data: car } = await useAsyncData<PortfolioItemUpdateDTO>('car',
		() => $fetch(`/api/portfolio/${route.params.id}`)
	)
	
	if (!car.value) {
		throw createError({ statusCode: 404, message: 'Car not found' })
	}
	
	const formData = useState<PortfolioAppendDTO>('car-update', () => ({
		name: car.value.name,
		description: car.value.description,
		date: new Date(car.value.date).toISOString(),
		photos: car.value.photos
	}));
	
	const updateCar = async () => {
		loading.value = true;
		try {
			await $fetch(`/api/portfolio/update`, {
				method: 'PUT',
				body: {
					id: car.value.id,
					name: formData.value.name,
					description: formData.value.description,
					date: formData.value.date,
					photos: formData.value.photos
				}
			});
			await navigateTo('/admin/portfolio', {
				external: true
			});
		} catch (e) {
			alert('Ошибка создания')
		} finally {
			loading.value = false;
		}
	}
</script>

<template>
	<v-form class="wrapper car" @submit.prevent="updateCar">
		<h1 class="title car__title">Отчитаться о работе</h1>
		<v-text-field :rules="[rules.required]" label="Модель машины" v-model="formData.name" class="mt-10"/>
		<p class="mt-4 mb-4">Дата выполнения работ</p>
		<client-only>
			<DatePicker
				v-model="formData.date"
				transparent
				borderless
				:is-dark="true"
			/>
		</client-only>
	
		<TextEditor v-model="formData.description"/>
		
		<FileUploader v-model="formData.photos"/>
		<v-divider class="mt-4"/>
		<p class="mt-4">Добавьте если все заполнили и загрузили</p>
		<v-btn :loading="loading" class="mt-10" type="submit" color="#f1aa34">Сохранить</v-btn>
	</v-form>

</template>

<style scoped lang="scss">

</style>