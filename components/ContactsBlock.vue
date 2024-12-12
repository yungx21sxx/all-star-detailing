<script setup lang="ts">
const {openSubmitModal} = useModal();

const menuLinks = [
	{
		href: 'https://wa.me/79119470777',
		text: 'Whats up',
		icon: 'whatsapp'
	},
	{
		href: 'https://t.me/All_Star_Detailing',
		text: 'Telegram',
		icon: 'telega'
	},
	{
		href: 'https://vk.com/allstardetailing',
		text: 'Вконтаке',
		icon: 'vk'
	},
	{
		href: 'tel:+7 (911) 947-07-77',
		text: 'Телефон',
		icon: 'phone-alt'
	}
]
</script>

<template>
<div class="contacts">
	<div class="contacts__grid">
		<section class="contacts__info">
			<h1 class="contacts__title title">
				Контакты
			</h1>
			<time class="contacts__text">
				<h4 class="contacts__text_orange">Время работы:</h4>
				Ежедневно с 10:00 до 21:00
			</time>
			<address class="contacts__text">
				<strong class="contacts__text_orange">Адрес:</strong> Санкт-Петербург, <br>
				Проспект Энгельса 27АБ (въезд с Манчестерской)
			</address>
			<NuxtLink to="tel:+7 (911) 947-07-77" class="contacts__phone contacts__text">
				<h4 class="contacts__text_orange">Телефон:</h4>
				<span>+7 (911) 947-07-77</span>
			</NuxtLink>
			<div class="contacts__text call-buttons">
				<p class="call-buttons__description">Нажмите чтобы связаться</p>
				<div class="call-buttons__flex">
					<v-card
						v-ripple
						v-for="{href, text, icon} of menuLinks"
						:href="href"
						class="call-buttons__link"
						elevation="0"
					>
						<nuxt-icon class="call-buttons__icon" :name="icon"/>
						<span class="call-buttons__text">{{text}}</span>
					</v-card>
				</div>
			</div>
			<v-btn @click="openSubmitModal(null)" variant="flat" color="#D19D34">Заказать звонок</v-btn>
		</section>
		<v-lazy class="contacts__map-container" transition="fade-transition">
			<iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=181191680424" frameborder="0"></iframe>
		</v-lazy>
	</div>

</div>

</template>

<style scoped lang="scss">

.call-buttons {
	
	&__flex {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	
	&__description {
		font-weight: 500;
		color: #B4B4B4;
		margin-bottom: 16px;
	}
	
	&__link {
		padding: 12px !important;
		display: flex !important;
		align-items: center;
		border-radius: 4px !important;
		gap: 22px;
		
		span {
			font-size: 16px;
			font-weight: 500;
		}
		
		&.active span {
			color: #D19D34;
		}
	}
}
.contacts {
	
	@media (max-width: 900px) {
		&__grid {
			grid-template-columns: 1fr !important;
		}
		&__map-container {
			height: 600px !important;
		}
	}
	
	&__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
	}
	
	&__title {
		margin-bottom: 24px;
	}
	
	&__phone {
		text-decoration: none;
		color: #fff;
	}
	
	
	&__map {
		width: 100%;
		height: 100%;
		@media (max-width: 900px) {
			margin-top: 0 !important;
		}
		margin-top: 16px;
	}
	
	&__text {
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		display: block;
		
		&_orange {
			color: #D19D34;
		}
	}
	
	&__info {
		width: 100%;
	}
	
	&__info > &__text:not(:last-child) {
		padding-bottom: 24px;
		border-bottom: 1px solid #B8B8B8;
		margin-bottom: 24px;
	}
	
	
}

</style>