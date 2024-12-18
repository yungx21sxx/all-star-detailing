<script setup lang="ts">
	const { complexes } = useComplexes()
	const { openSubmitModal } = useModal()
	const route = useRoute()
	const complexId = route.params.id
	
	
	const complex = complexes.find(i => i.id === complexId)
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
	<div class="wrapper">
		<VBreadcrumbs
			:items="breadcrumbs"
		
		>
			<template v-slot:divider>
				<v-icon color="#D19D34" icon="mdi-chevron-right"></v-icon>
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
			<v-btn color="#D19D34" @click="openSubmitModal(complex.title)">Записаться на комплекс</v-btn>
		</div>
		<div class="complex__price">
		
		</div>
	</div>
	

</template>

<style scoped lang="scss">
	.complex {
		
		&__info {
			margin: 24px 0;
		}
		
		&__time {
			margin-bottom: 24px;
		}
		
		&__price {
			display: flex;
			gap: 8px;
			
			& > * {
				font-size: 30px;
			}
			
			&_prev {
				text-decoration: line-through;
			}
			
			&_current {
				color: #D19D34;
			}
		}
	}

</style>