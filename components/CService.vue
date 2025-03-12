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
		elevation="0"
		:href="`/service/${id}`"
		itemscope
		itemtype="https://schema.org/Service"
	>
		<v-img
			:src="img"
			height="220px"
			class="align-end product__bg"
			:alt="title"
			gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)"
			cover
			itemprop="image"
		>
			<div class="product__body">
				<div class="product__title text-wrap" itemprop="name">{{ title }}</div>
				<div class="product__bottom">
					<div class="product__price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
						<meta itemprop="price" :content="price.text">
						<meta itemprop="priceCurrency" content="RUB">
						{{ price.text }}
					</div>
					<v-chip variant="text" color="#F1AA34FF" :append-icon="mdiArrowRight">Подробнее</v-chip>
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
            padding: 10px 16px;
        }
        &__title {
            font-size: 18px;
	        margin-bottom: 6px;
            font-weight: 500;
        }

        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__price {
            font-size: 16px;
	        font-weight: 400;
	        color: $accent;

        }

        &__icon {
            margin-left: -4px;
        }
    }

    .btn__text {
        text-transform: none;
		

    }


</style>