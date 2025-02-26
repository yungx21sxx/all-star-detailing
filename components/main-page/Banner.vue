<script setup lang="ts">
import {mdiChevronRight, mdiKey} from "@mdi/js";

const {openSubmitMenu} = useModal()

const scrollBottom = () => {
	window.scroll(0, window.innerHeight - 50)
}


</script>

<template>
	<header
		class="banner"
	>
		<div class="banner__overlay">
			<div class="banner__body">
				<MenuMain class="banner__menu"/>
				<div class="wrapper">
					
					<div class="banner__content">
						<h2 class="banner__subtitle banner__subtitle_white">Детейлинг центр</h2>
						<h1 class="banner__title">ALL STAR DETAILING</h1>
						<div class="banner__credit credit" @click="openSubmitMenu('for-call')">
							<div class="credit__title">
								Начислим 1000 бонусов и вернем 5% от стоимости услуги
							</div>
							<button class="credit__btn">
								<span>Узнать подробности</span>
								<v-icon color="#FAAC37" :icon="mdiChevronRight"></v-icon>
							</button>
						</div>
						<v-btn :append-icon="mdiChevronRight" href="/flats/list" rel="nofollow" class="mt-4">Подобрать жилье</v-btn>
					</div>
				
				</div>
				<div class="banner__bottom">
					<v-btn variant="text" icon="true" @click="scrollBottom" color="#fff" aria-label="Name">
						<nuxt-icon name="arrow" class="banner__arrow" filled></nuxt-icon>
					</v-btn>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>

.banner {
	width: 100%;
	height: 100dvh;
	background: #000;
	
	&__body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		position: relative;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	}
	
	&__content {
		opacity: 0;
		transform: translateX(100px); /* Уходит за экран вправо */
		animation: slideInSmooth 0.6s cubic-bezier(0.25, 1, 0.3, 1) 0.2s forwards;
	}
	
	/* Анимация плавного появления */
	@keyframes slideInSmooth {
		0% {
			opacity: 0;
			transform: translateX(100px);
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	&__overlay {
		height: 100%;
		width: 100%;
		
		background:  url('/photos/detailing/16.webp') no-repeat center/cover;
		animation: fadeIn .5s ease-in-out forwards;
		opacity: 0;
		
		@media (max-width: 600px) {
			background:  url('/photos/detailing/15.webp') no-repeat center/cover;
		}
		
		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
	
	&__title {
		color: #fff;
		font-size: clamp(60px, 13vw, 70px);
		font-family: 'CasperBold', sans-serif;
		letter-spacing: 1.2px;
		margin: -16px 0 -4px;
	}
	
	&__subtitle {
		font-family: 'Casper', sans-serif;
		font-weight: normal;
		
		&_white {
			color: #fff;
			font-size: clamp(16px, 4vw, 24px);
		}
		
		&_orange {
			color: $accent;
			font-size: 20px;
			font-family: 'CasperBold', sans-serif;
		}
	}
	&__chip {
		background-color: rgba(255,255,255, 0.2);
		backdrop-filter: blur(10px);
		width: fit-content;
		color: $accent;
		border-radius: 20px;
		padding: 4px 10px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	
	
	
	&__bottom {
		position: absolute;
		bottom: 8px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}
	
	&__menu {
		position: absolute;
		top: 16px;
		left: 0;
		right: 0;
	}
	
	@media screen and (max-width: 760px) {
		&__chip > * {
			font-size: 14px;
		}
		&__menu {
			top: 8px;
		}
	}
	
	@media screen and (max-width: 490px) {
		.banner__title {
			margin: -4px 0 4px 0;
		}
	}
}

/* Блок условий ипотеки */
.credit {
	padding-left: 14px;
	border-left: 3px solid $accent;
	margin: 24px 0 16px;
	cursor: pointer;
	
	
	
	&__title {
		font-size: clamp(18px, 4vw, 22px);
		color: #fff;
		margin-bottom: 4px;
	}
	
	@media screen and (max-width: 490px) {
		margin-top: 20px;
		&__title {
			margin-bottom: 6px;
		}
	}
	
	&__btn {
		color: $accent;
		display: flex;
		align-items: center;
		gap: 2px;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 16px;
	}
}

/* Кнопки */
.btn {
	border: 2px solid #d19d34;
	border-radius: 50px;
	width: fit-content;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	
	span {
		color: #d19d34;
		font-size: 12px;
		font-weight: 500;
		padding: 6px 12px;
	}
	
	&__icon {
		color: #d19d34;
		padding-right: 6px;
	}
}
</style>