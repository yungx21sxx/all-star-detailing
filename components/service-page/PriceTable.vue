<script setup lang="ts">

	import type {IPriceTable} from "~/types/client";
	import {mdiChevronDoubleRight} from "@mdi/js";
	
	const {isMobileOrTablet} = useDevice()
	
	defineProps<{
		priceTable: IPriceTable | undefined,
		title: string
	}>()
	
	// const price_table_node = ref(null);
	// const isScrollStarted = ref<boolean>(false);
	//
	// onMounted(() => {
	// 	if (price_table_node.value) {
	// 		price_table_node.value.addEventListener('scroll', event => {
	// 			isScrollStarted.value = event.target.scrollLeft > 30;
	// 		})
	// 	}
	// })
	
	
	
</script>

<template>
	<div :class="['price', {
		'price--mobile': isMobileOrTablet
	}]">
		<div class="price__header">
			<h2 class="price__title">{{ title }}</h2>
			<p class="price__subtitle">Цена зависит класса автомобиля и количества работы</p>
		</div>
		<div class="price__wrapper">
			<div class="price__scroller" ref="price_table_node">
				<v-table theme="dark" class="service__table table" v-if="priceTable">
					<thead>
					<tr>
						<th class="table__title">
							Услуга / Тип машины
						</th>
						<th class="table__icon">
							<img src="@/assets/icons/small-car.webp" alt="">
						</th>
						<th class="table__icon">
							<img src="@/assets/icons/sedan.webp" alt="">
						</th>
						<th class="table__icon">
							<img src="@/assets/icons/jeep.webp" alt="">
						</th>
						<th class="table__icon">
							<img src="@/assets/icons/v-class.png" alt="">
						</th>
					</tr>
					</thead>
					<tbody>
					<tr
						v-for="{ name, prices } of priceTable.services"
					>
						<td class="table__service">{{ name }}</td>
						<td v-for="price of prices"
						    v-if="prices.length > 1"
						>
							{{ price }} ₽
						</td>
						<td
							v-else
							colspan="4"
							style="text-align: center; vertical-align: middle;"
						>
							{{ prices[0] }} ₽
						</td>
					</tr>
					</tbody>
				</v-table>
				
			
			</div>
<!--			<div class="price__scroll-icon">-->
<!--				<v-icon v-if="!isScrollStarted && isMobileOrTablet" color="#f1aa34" icon="mdi-chevron-right" variant="tonal" size="x-large" class="price__icon"></v-icon>-->
<!--			</div>-->
		</div>
		<div class="price__scroll-info mt-4">
			<span>Листайте вправо</span>
			<v-icon color="#f1aa34" :icon="mdiChevronDoubleRight"></v-icon>
		</div>
		
	</div>
</template>

<style scoped lang="scss">

	td {
		color: #fff;
		text-decoration: none;
	}
	
	.price__scroll-info {
		display: none;
	}
	
	.price {
		
		&__scroll-info {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		&__wrapper {
			position: relative;
			margin-top: 24px;
		}
		&__scroll-icon {
			position: absolute !important;
			right: 0;
			bottom: 0;
			top: 0;
			
			display: flex;
			align-items: center;
		}
		&__scroller {
			overflow-y: auto;
			position: relative;
		}
		&__title {
			text-align: center;
			font-size: 32px;
			margin-top: 32px;
			margin-bottom: 8px;
			color: $accent;
		}
		
		&__subtitle {
			text-align: center;
			font-size: 20px;
		}
	}
	
	.table {
		min-width: 700px !important;
		.table__icon img {
			height: 20px;
		}
		
		.table__service {
			color: $accent;
		}
	}
	
	@media screen and (max-width: 760px){
		.price__title {
			font-size: 24px;
		}
		
		.price__subtitle {
			font-size: 16px;
		}
		.price__scroll-info {
			display: block;
			text-align: center;
		}
	}

</style>