<script setup lang="ts">
    import type { IService } from "~/types/client"
    import {mdiArrowRight} from "@mdi/js";

    const { service } = defineProps<{
        service: IService
    }>()

    const {img, title, price, id} = service

</script>

<template>
	<v-card
		v-ripple
		elevation="4"
		:href="`/service/${id}`"
	>
		<v-img
			:src="img"
			height="220px"
			class="align-end product__bg"
			gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
			cover
		>
			<div class="product__body">
				<div class="product__title text-wrap">{{ title }}</div>
				<div class="product__bottom">
					<div class="product__price">{{ price.text }}</div>
					<v-btn color="#f1aa34" class="product__btn" variant="text">
						<template #append>
							<v-icon :icon="mdiArrowRight" size="20px" class="product__icon"></v-icon>
						</template>
						<span class="btn__text">Подробнее</span>
					</v-btn>
				</div>
			</div>
		
		</v-img>
	</v-card>
</template>

<style scoped lang="scss">

    .product {

        &__bg {
            border-radius: 4px;
        }

        &__body {
            background: hsla(0,0%,4%,.4) !important;
            backdrop-filter: blur(1px);
            padding: 8px 0 8px 16px;
        }
        &__title {
            font-size: 18px;
            color: #f1aa34;
            font-weight: 600;
            margin-right: 16px;
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__price {
            font-size: 16px;
	        font-weight: 300;

        }

        &__icon {
            margin-left: -4px;
        }
    }

    .btn__text {
        text-transform: none;
		

    }


</style>