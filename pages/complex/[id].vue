<script setup lang="ts">
	import {complexes} from "~/data/complexes.data";
	import {mdiChevronRight} from "@mdi/js";
	
	const { openSubmitModal } = useModal()
	const route = useRoute()
	const complexId = route.params.id;
	const complex = complexes.find(i => i.id === complexId);
	
	useSeoMeta({
		title: `Комплекс услуг: ${complex.title} | All Star Detailing`,
		description: `Цена ${complex.price.current}. В цену входит: ${complex.included.join(' • ')}`
	})
	
	
	const breadcrumbs = [
		{
			title: 'Главная',
			disabled: false,
			href: '/',
		},
		{
			title: 'Услуги',
			disabled: false,
			href: '/services',
		},
		{
			title: complex.title,
			disabled: true,
			href: '/',
		},
	];

</script>

<template>
	<MenuMain/>
	<div class="wrapper">
		<VBreadcrumbs
			:items="breadcrumbs"
		>
			<template v-slot:divider>
				<v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
			</template>
		</VBreadcrumbs>
		<div v-html="complex.description" class="server-html complex"></div>
		<div class="complex__info">
			<div class="complex__price">
				<div class="complex__price_prev">{{ complex.price.previous}}</div>
				<div class="complex__price_current">{{ complex.price.current}}</div>
			</div>
			<div class="complex__time">
				<span>Выполним за: </span>{{ complex.time }}
			</div>
			<v-btn color="#f1aa34" @click="openSubmitModal(complex.title)">Записаться на комплекс</v-btn>
		</div>
		<div class="complex__price">
		
		</div>
	</div>
	

</template>

<style scoped lang="scss">
	.complex {
		
		&__info {
			margin: 32px 0;
		}
		
		&__time {
			margin-bottom: 24px;
			margin-top: 8px;
		}
		
		&__price {
			display: flex;
			gap: 16px;
			
			& > * {
				font-size: 28px;
			}
			
			&_prev {
				text-decoration: line-through;
			}
			
			&_current {
				color: #f1aa34;
			}
		}
	}

</style>