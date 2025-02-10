<script setup lang="ts">
	
	import {services, servicesCustom} from "~/data/services.data";
	import {complexes} from "~/data/complexes.data";
	import {mdiChevronRight} from "@mdi/js";
	
	const allServices = [...servicesCustom, ...services];
	
	const breadcrumbs = [
		{
		 title: 'Главная',
		 disabled: false,
		 href: '/',
		},
		{
		 title: 'Услуги',
		 disabled: true,
		 href: '/services',
		},
	];
	
</script>

<template>
		<MenuMain/>
		<div class="wrapper services">
			<VBreadcrumbs
				:items="breadcrumbs"
			>
				<template v-slot:divider>
					<v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
				</template>
			</VBreadcrumbs>
			<h1 class="title services__title">Наши услуги</h1>
			<h2 class="services__subtitle">Полный спектр услуг для Вашего автомобиля</h2>
			<div class="grid">
				<CService
					v-for="service of allServices"
					:service="service"
					:key="service.id"
				/>
			</div>
			<h1 class="title services__title services__title_complex">Комлексы услуг</h1>
			<h2 class="services__subtitle">Закажите комплекс услуг с выгодой</h2>
			
			<div class="grid">
				<CComplex
					v-for="complex of complexes"
					:complex="complex"
					:key="complex.id"
				/>
			</div>
		
		</div>
</template>

<style scoped lang="scss">

    .services {
	    
        &__subtitle {
            color: #FFF;
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 24px;
        }

        &__title_complex {
            margin-top: 24px;
        }
    }

</style>