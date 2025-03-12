<script setup lang="ts">

const { isMobileOrTablet } = useDevice();

</script>

<template>
	<div :class="['review wrapper']">
		<div class="header">
			<div class="sticky">
				<h2 class="title">Отзывы наших клиентов</h2>
				<div class="under-line mb-6"></div>
				<div class="subtitle">Наши отзывы на Yandex Картах, будем рады если оставите новый)</div>
			</div>
		</div>
		<div class="map">
			<v-lazy>
				<div class="review__yandex"><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/181191680424?comments"></iframe></div>
			</v-lazy>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.review {
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: relative;
		.header {
			padding-top: 24px;
			.sticky {
				position: sticky;
				top: 100px;
			}
		
		}
		&__subtitle {
			font-size: 20px;
			margin-bottom: 32px;
		}
		
		&__yandex {
			height: 900px;
			width: 100%;
			
			margin: 24px auto;
		}
	}
	@media screen and (max-width: 700px) {
		.review {
			.review__yandex {
				width: 100%;
				height: 500px;
			}
			
			.review__subtitle {
				font-size: 16px;
			}
		}
	}

</style>