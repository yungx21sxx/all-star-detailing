<script setup lang="ts">
    import type {ICar} from "~/types/client";

    const modelValue = defineModel<boolean>()
    defineProps<{
        car: ICar
    }>()

</script>

<template>
    <ModalLayout
        v-model="modelValue"
        class="modal"
    >
        <div class="modal__body">
            <CSlider
                class="modal__slider"
                :photos="car.photos
                    .sort((a, b) => a.position - b.position)
                    .map(photo => photo.urlFull)
				"
            />
	        <h3 class="modal__title">{{ car.name }}</h3>
	        <p>{{(car.date) ? new Date(car.date).toLocaleDateString("ru-RU", {
		        day: "2-digit",
		        month: "long",
		        year: "numeric"
	        }) : new Date(car.date)}}</p>
	        <v-divider class="mt-4"/>
            <p class="modal__text server-html" v-html="car.description"></p>
        </div>
    </ModalLayout>
</template>

<style scoped lang="scss">
    .modal {
        &__body {
           padding: 0 16px;
        }
        &__slider {
            height: 300px;
        }

        &__title {
            font-size: 20px;
	        margin-top: 16px;
            color: #f1aa34;
        }

        &__text {
            margin-top: 24px;
            margin-bottom: 24px;
            max-height: 400px;
            overflow-y: auto;
        }
    }

</style>