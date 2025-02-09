<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'

import {mdiClose, mdiRotateLeft, mdiRotateRight} from "@mdi/js";
import type {H3Error} from "h3";
import type {PhotoUploadResponse} from "~/types/response";

defineProps<{
	preview?: boolean
}>();

const photos = defineModel<PhotoUploadResponse[]>()

const filesLoading = ref(false);
const files = ref([]);

async function uploadPhotos() {
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
		filesLoading.value = true;
		
		const photosResponse = await $fetch<PhotoUploadResponse[]>(`/api/photo/upload-photos`, {
			method: "POST",
			body: formData,
		})
		
		filesLoading.value = false;
		files.value = [];
		
		if (photos.value) {
			photos.value.push(...photosResponse);
		}
		
	} catch (e) {
		console.log(e)
	}
}

interface Photo {
	urlMin: string,
	photoId: number
}

const photoRotateModalIsOpen = ref(false);

const currentRotatePhoto = ref<Photo | null>(null)

const openRotateModal = (photo: Photo) => {
	currentRotatePhoto.value = photo;
	photoRotateModalIsOpen.value = true
}


interface rotateDTO {
	target: 'left' | 'right',
	photoId: number,
}


const rotate = async (dto: rotateDTO) => {
	try {
		await $fetch('/api/photo/rotate', {
			method: 'POST',
			body: {
				target: dto.target,
				photoId: dto.photoId
			}
		});
		const index = photos.value.findIndex(p => p.photoId === dto.photoId);
		if (index !== -1) {
			// Добавляем метку времени для обновления кэшированного изображения
			photos.value[index].urlMin = `${photos.value[index].urlMin}?t=${new Date().getTime()}`;
		}
	} catch (e: H3Error) {
		console.log(e.data.message);
	}
}

const deletePhoto = async (id: number) => {
	try {
		await $fetch(`/api/photo/${id}`, {
			method: "DELETE",
		})
		if (photos.value)
			photos.value = photos.value.filter(photo => photo.photoId !== id);
	} catch (e) {
		console.log(e)
	}
}

</script>

<template>
	<v-card class="mt-4" >
		<v-card-title v-if="!preview">Загрузка фотографии</v-card-title>
		<v-card-text>Загрузка фотографий обязательна</v-card-text>
		<v-card-item>
			<v-file-input
				v-if="!preview"
				v-model="files"
				color="deep-purple-accent-4"
				counter
				label="Фотографии"
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
					</template>
				</template>
			</v-file-input>
			<v-btn
				v-if="!preview"
				:loading="filesLoading"
				:disabled="filesLoading"
				@click="uploadPhotos()"
				class="mb-4"
				color="#f1aa34"
			>
				Загрузить
			</v-btn>
			<div v-if="photos && photos.length > 0" class="overflow mt-4">
				<v-card-title>Загруженные фотки</v-card-title>
				<p>Фотографии можно менять местами и переворачивать.</p>
				<VueDraggableNext v-model="photos" class="gallery-img mt-4">
					<transition-group>
						<v-img
							class="pa-2"
							aspect-ratio="1"
							cover
							v-for="photo of photos"
							:src="photo.urlMin"
							:key="photo.photoId"
						>
							<div class="image-control">
								<v-btn class="delete-btn" color="red" :icon="mdiClose" density="compact"  @click="deletePhoto(photo.photoId)"></v-btn>
								<div class="rotate-btns">
									<v-btn class="delete-btn" :icon="mdiRotateLeft" density="compact" color="#fff" @click="rotate({target: 'left', photoId: photo.photoId})"></v-btn>
									<v-btn class="delete-btn" :icon="mdiRotateRight" density="compact" color="#fff" @click="rotate({target: 'right', photoId: photo.photoId})"></v-btn>
								</div>
							</div>
						</v-img>
					</transition-group>
				</VueDraggableNext>
			</div>
		</v-card-item>
	</v-card>
</template>

<style scoped lang="scss">



.image-control {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	.rotate-btns {
		display: flex;
		justify-content: space-between;
	}
}

.gallery-img {
	display: grid;
	
	width: 100%;
	max-width: 100% !important;
	grid-template-columns: repeat(auto-fit, minmax(120px, 200px));
	gap: 8px;
	
	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	}
	
}

</style>