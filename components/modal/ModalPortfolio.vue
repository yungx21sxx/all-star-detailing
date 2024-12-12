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
	    <template #title>
		    <h3 class="modal__title">{{ car.name }}</h3>
	    </template>
        <div class="modal__body">
            <CSlider
                class="modal__slider"
                :photos="car.photos.map(photo => photo.url)"
            />
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
	        margin-left: 24px;
            font-size: 20px;
            color: #D19D34;
        }

        &__text {
            margin-top: 24px;
            margin-bottom: 24px;
            max-height: 400px;
            overflow-y: auto;
        }
    }

</style>