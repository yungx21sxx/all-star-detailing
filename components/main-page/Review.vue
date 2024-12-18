<script setup lang="ts">

const { isMobileOrTablet } = useDevice();

</script>

<template>
	<div :class="['review', {
		'review--mobile': isMobileOrTablet
	}]">
		<div>
			<h2 class="review__title">Отзывы наших клиентов</h2>
			<div class="review__subtitle">Наши отзывы на Yandex Картах, будем рады если оставите новый)</div>
		</div>
		<v-lazy>
			<div class="review__yandex"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/181191680424?comments"></iframe><a href="https://yandex.ru/maps/org/all_star_detailing/181191680424/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">All Star Detailing на карте Санкт‑Петербурга — Яндекс Карты</a></div>
<!--			<div class="review__yandex" ><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/188724144329?comments"></iframe><a href="https://yandex.ru/maps/org/all_star_detailing/188724144329/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">All Star Detailing на карте Санкт‑Петербурга — Яндекс Карты</a></div>-->
		</v-lazy>
	
	</div>
</template>

<style scoped lang="scss">

	.review--mobile {
		
		padding: 16px;
		
		.review__yandex {
			width: 100%;
		}
		
		.review__title {
			font-size: 24px;
		}
		
		.review__subtitle {
			font-size: 16px;
		}
	}
	.review {
		text-align: center;
		&__title {
			font-size: 32px;
			color: $accent;
			
			&_center {
				text-align: center;
			}
		}
		
		&__subtitle {
			font-size: 20px;
			font-weight: 700;
		}
		
		&__yandex {
			width: 700px;
			height: 900px;
			
			margin: 24px auto;
		}
	}

</style>