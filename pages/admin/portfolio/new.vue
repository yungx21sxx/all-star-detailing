<template>
	<v-form class="wrapper car" @submit.prevent="createCar">
		<h1 class="title car__title">Отчитаться о работе</h1>
		<v-text-field :rules="[rules.required]" label="Модель машины" v-model="car.name" class="mt-10"/>
		<p class="mt-4 mb-4">Дата выполнения работ</p>
		<DatePicker
			v-model="car.date"
			transparent
			borderless
			:is-dark="true"
		/>
		<v-no-ssr>
			<TextEditor v-model="car.description"/>
		</v-no-ssr>
		<FileUploader v-model="car.photos"/>
		<v-divider class="mt-4"/>
		<p class="mt-4">Добавьте если все заполнили и загрузили</p>
		<v-btn :loading="loading" class="mt-10" type="submit" color="#f1aa34">Добавить в портфолио</v-btn>
	</v-form>
</template>

<script setup lang="ts">
import type {PortfolioAppendDTO} from "~/types/dto";
import FileUploader from "~/components/FileUploader.vue";

definePageMeta({
	layout: 'admin',
})

const router = useRouter()

const carDefaultArgs: PortfolioAppendDTO = {
	name: "",
	description: "",
	date: new Date(),
	photos: [],
};

const rules = {
	required: (value: string) => !!value || 'Обязательное поле',
}

const car = ref<PortfolioAppendDTO>(carDefaultArgs)

onMounted(() => {
	const carCache = localStorage.getItem('car-cache');
	if (carCache) {
		car.value = JSON.parse(carCache)
	}
})

watch(car, () => {
	createOrUpdateCache(car.value)
}, {
	deep: true
})

function createOrUpdateCache(car: PortfolioAppendDTO) {
	localStorage.setItem('car-cache', JSON.stringify(car))
}

function revalidateCache() {
	localStorage.removeItem('car-cache')
}

const loading = ref(false)

const createCar = async () => {
	if (car.value.photos.length === 0) {
		alert('Загрузите фотографии')
	}
	try {
		loading.value = true;
		await $fetch('/api/portfolio/create', {
			method: "POST",
			body: car.value
		})
		revalidateCache()
		await navigateTo('/admin/portfolio')
	} catch (e) {
		alert('Ошибка создания')
	} finally {
		loading.value = false
	}

}



</script>

<style scoped lang="scss">

	.car {
		&__title {
			margin-top: 24px;
		}
	}

</style>