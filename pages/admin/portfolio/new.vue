<template>
	<div class="wrapper car">
		<h1 class="title car__title">Отчитаться о работе</h1>
		<v-text-field label="Заголовок" v-model="car.name" class="mt-10"/>
		<v-no-ssr>
			<TextEditor v-model="car.description"/>
		</v-no-ssr>
		<div class="mt-10">
			<p class="mb-4">Первая загруженая будет на карточке</p>
			<v-file-input
				 v-model="files"
				 color="deep-purple-accent-4"
				 counter
				 label="Фотки для карусели"
				 multiple
				 placeholder="Select your files"
				 variant="outlined"
				 :show-size="1000"
			>
				<template v-slot:selection="{ fileNames }">
					<template v-for="(fileName, index) in fileNames" :key="fileName">
						<v-chip
							 v-if="index < 2"
							 color="deep-purple-accent-4"
							 label
							 size="small"
							 class="me-2"
						>
							{{ fileName }}
						</v-chip>

						<span
							 v-else-if="index === 2"
							 class="text-overline text-grey-darken-3 mx-2"
						>
                        +{{ files.length - 2 }} File(s)
                     </span>
					</template>
				</template>
			</v-file-input>
			<v-btn
				 :loading="filesLoading"
				 :disabled="filesLoading"
				 color="#c93"
				 @click="uploadPhotos"
			>
				Загрузить
			</v-btn>
		</div>
		<VNoSsr>
			<div v-if="car.photos.length > 0">
				<h3>Загруженные фотки</h3>
				<v-row>
					<v-col
						v-for="photo in car.photos"
					>
						<v-img
							class="pa-2"
							width="200"
							height="200"
							cover
							:src="photo"
						>
							<v-btn @click="deletePhoto(photo)">X</v-btn>
						</v-img>
					</v-col>
				</v-row>
			</div>
		</VNoSsr>
		<v-divider class="mt-4"/>
		<p class="mt-4">Добавьте если все заполнили и загрузили</p>
		<v-btn class="mt-10" @click="createCar" color="#c93">Добавить в портфолио</v-btn>
	</div>
</template>

<script setup lang="ts">
import type {PortfolioAppendDTO} from "~/types/dto";

const router = useRouter()

const carDefaultArgs: PortfolioAppendDTO = {
	name: "",
	description: "",
	photos: [],
	img: ""
};

const car = ref<PortfolioAppendDTO>(carDefaultArgs)
const files = ref([])
const filesLoading = ref(false)

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

const uploadPhotos = async () => {
	const formData = new FormData()
	if (files.value.length === 0) {
		alert('Необходимо загрузить фотографии');
		return;
	}
	for (let i = 0; i < files.value.length; i++) {
		const file = files.value[i]
		formData.append(`photo${i}`, file)
	}
	try {
		filesLoading.value = true
		const {data: photos, error} = await useFetch("/api/photo/add", {
			method: "POST",
			body: formData,
		})
		console.log(error.value)
		console.log(photos.value)
		filesLoading.value = false
		car.value.img = photos.value[0];
		car.value.photos.push(...photos.value);
		createOrUpdateCache(car.value)
	} catch (e) {
		console.log(e)
	}
}

const createCar = async () => {
	const {data} = await useFetch('/api/portfolio/create', {
		method: "POST",
		body: car.value
	})
	if (!data.value) {
		throw createError({ statusCode: 404, statusMessage: 'Error when creating' })
	} else {
		revalidateCache()
		router.push('/admin/portfolio')
	}
}

const deletePhoto = async (fileUrl: string) => {
	const fileName = fileUrl.split('/')[2]
	try {
		await useFetch(`/api/photo/${fileName}`, {
			method: "DELETE",
		})
		car.value.photos = car.value.photos.filter(photo => photo !== fileUrl)
	} catch (e) {
		console.log(e)
	}
}

definePageMeta({
	layout: 'admin',
	middleware: ['admin-only'],
})

</script>

<style scoped lang="scss">

	.car {
		&__title {
			margin-top: 24px;
		}
	}

</style>