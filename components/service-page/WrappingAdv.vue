<script setup lang="ts">

	const {isMobileOrTablet} = useDevice();
	
</script>

<template>
	<div :class="['adv', {
		'adv--mobile': isMobileOrTablet
	}]">
		<h2 class="adv__title">Преимущества оклейки автомобиля в <br> <span>All Star Detailing</span></h2>
		
		<div class="adv__list">
			<div class="adv__item">
				<nuxt-icon class="adv__icon" name="shield"/>
				<p class="adv__text">Лучшие материалы и составы</p>
			</div>
			<div class="adv__item">
				<nuxt-icon class="adv__icon" name="qual"/>
				<p class="adv__text">Даем 2 года <br> гарантии</p>
			</div>
			<div class="adv__item">
				<nuxt-icon class="adv__icon" name="peaples"/>
				<p class="adv__text">Сотрудники с большим опытом</p>
			</div>
			<div class="adv__item">
				<nuxt-icon class="adv__icon" name="like"/>
				<p class="adv__text">Идеальное качество работы</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">



.adv {
	margin-top: 32px;
	
	&__title {
		text-align: center;
		margin-bottom: 24px;
		color: #fff;
		
		span {
			color: $accent;
		}
	}
	
	&__item {
		padding: 16px 8px !important;
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		background: $bg-card;
	}
	
	&__text {
		text-align: center;
		font-size: 18px;
		font-weight: 700;
		justify-self: center;
	}
	
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		grid-auto-rows: auto;
		gap: 16px;
	}
	&__icon {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
		svg {
			display: block;
		}
	}
	
	@media screen and (max-width: 760px) {
		&__list {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: auto;
			gap: 7px;
		}
		
		&__item {
			width: 100%;
			margin-bottom: 0 !important;
			padding: 15px 5px !important;
		}
		
		&__text {
			font-size: 16px !important;
		}
		
	}
	
}

@media screen and (max-width: 760px ){
	.adv__title {
		font-size: 24px;
	}
}
</style>