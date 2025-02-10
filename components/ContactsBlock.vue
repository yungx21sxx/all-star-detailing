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
		<div>
			<h2 class="contacts__title title">
				Контакты
			</h2>
			<MainContactsInfoBlock/>
		</div>
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
			color: #f1aa34;
		}
	}
}
.contacts {
	&__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
	}
	
	@media (max-width: 900px) {
		&__grid {
			grid-template-columns: 1fr;
			gap: 0;
		}
		&__map-container {
			height: 600px;
		}
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
			color: #f1aa34;
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