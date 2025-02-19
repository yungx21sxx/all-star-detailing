<script setup lang="ts">
	import useMenu from "~/components/menu/useMenu";
	import PhoneIcon from "~/components/menu/icons/PhoneIcon.vue";
	import WhatsUpIcon from "~/components/menu/icons/WhatsUpIcon.vue";
	import TelegramIcon from "~/components/menu/icons/TelegramIcon.vue";
	import AddressIcon from "~/components/menu/icons/AddressIcon.vue";
	import TimeIcon from "~/components/menu/icons/TimeIcon.vue";
	import {
		mdiAccountOutline,
		mdiArrowRight,
		mdiCardAccountPhoneOutline,
		mdiCarOutline, mdiClose,
		mdiCogOutline,
		mdiHome, mdiMapMarker
	} from "@mdi/js";
	import MainContactsInfoBlock from "~/components/MainContactsInfoBlock.vue";
	import {useAuthUser} from "~/composables/useAuthUser";
	
	const authUser = useAuthUser();
	
	const {openSubmitModal, openLoginModal, openLkModal} = useModal();
	const {mobileMenuModal, closeMobileMenuModal} = useMenu();
	const route = useRoute();
	
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
	
	const links = [
		{
			href: '/',
			text: 'Главная',
			icon: mdiHome
		},
		{
			href: '/services',
			text: 'Услуги',
			icon: mdiCogOutline
		},
		{
			href: '/portfolio',
			text: 'Портфолио',
			icon: mdiCarOutline
		},
		{
			href: '/contacts',
			text: 'Контакты',
			icon: mdiCardAccountPhoneOutline
		},
	]
	
	const computedLinks = computed(() => {
		return links.map(link => ({
			...link,
			isActive: route.fullPath === link.href ||
				(link.href !== '/' && route.fullPath.startsWith(link.href))
		}));
	});

</script>

<template>
	<v-dialog
		v-model="mobileMenuModal"
		class="menu"
		fullscreen
		disabled
		opacity="0"
		transition="slide-x-transition"
	>
		<v-card class="menu__body">
			<div class="menu__header">
				<div class="menu__btn btn" v-ripple @click="openSubmitModal(null)">
					<span>Записаться</span>
					<v-icon :icon="mdiArrowRight" class="btn__icon"></v-icon>
				</div>
				<v-btn
					class="modal__close-btn ma-2"
					icon
					@click="closeMobileMenuModal"
					variant="text"
				>
					<v-icon :icon="mdiClose" size="30px"/>
				</v-btn>
			</div>
			<div>
				<div
					class="menu__auth auth mb-4"
				>
					
					<v-card class="auth__item"
					        v-if="!authUser"
					        v-ripple
					        @click="openLoginModal('INFO')"
					        elevation="0"
					        color="rgba(0,0,0,0)"
					>
						<v-icon :icon="mdiAccountOutline" color="#f1aa34" class="auth__icon" size="30px" />
						<div class="auth__col">
							<div class="auth__text">Регистрация / Вход</div>
							<div class="auth__subtext">Бонусная программа</div>
						</div>
						<v-icon class="auth__icon_white ml-auto" :icon="mdiArrowRight"></v-icon>
					</v-card>
					<v-card class="auth__item"
					        v-else-if="authUser.role === 'USER'"
					        v-ripple
					        @click="openLkModal"
					        elevation="0"
					        color="rgba(0,0,0,0)"
					>
						<v-icon :icon="mdiAccountOutline" color="#f1aa34" class="auth__icon" size="24px" />
						<div class="auth__col">
							<div class="auth__text" >{{ authUser.phone }}</div>
							<div class="auth__subtext">Личный кабинет</div>
						</div>
						<v-icon class="auth__icon_white ml-auto" :icon="mdiArrowRight"></v-icon>
					</v-card>
					<v-card class="auth__item"
					        v-else-if="authUser.role === 'ADMIN'"
					        v-ripple
					        href="/admin/clients"
					        elevation="0"
					        color="rgba(0,0,0,0)"
					>
						<v-icon :icon="mdiAccountOutline" color="#f1aa34" class="auth__icon" size="24px" />
						<div class="auth__col">
							<div class="auth__text">Сотрудиник</div>
							<div class="auth__subtext">Админ панель</div>
						</div>
						<v-icon class="auth__icon_white auth__icon ml-auto" :icon="mdiArrowRight"></v-icon>
					</v-card>
				
				</div>
				<v-card
					v-for="{isActive, href, text, icon} of computedLinks"
					:class="['menu__link', {
	                'active': isActive
	            }]"
					v-ripple
					color="rgba(0,0,0,0)"
					:href="href"
					elevation="0"
				>
					<v-icon :icon="icon" color="#f1aa34" class="menu__icon" size="24px" />
					<span class="menu__text">{{text}}</span>
				</v-card>
				<div class="contacts">
					<h3 class="contacts__title mb-6">Наши контакты</h3>
					<MainContactsInfoBlock/>
				</div>
			</div>
		</v-card>
		
	</v-dialog>
</template>

<style scoped lang="scss">

.contacts {
	margin: 16px;
	&__title {
		font-size: 20px;
	}
}

.overlay {
	height: 64px;
}

.call-buttons {
	
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	
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


.auth {
	&__item {
		padding: 8px 16px !important;
		display: flex;
		align-items: center;
		gap: 16px;
	}
	
	&__text {
		font-size: 20px;
		font-weight: 500;
	}
	&__subtext {
		color: #f1aa34;
	}
	
	&__icon {
		display: block;
	}
	
	
	
}

.menu {
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 16px;
		margin-bottom: 8px;
	}
	&__body {
		background: rgba(18, 18, 18, 0.8);
		opacity: 0;
		backdrop-filter: blur(0px);
		animation: fade-in-blur 0.5s ease-in-out forwards;
	}
	
	@keyframes fade-in-blur {
		from {
			opacity: 0;
			backdrop-filter: blur(0px);
		}
		to {
			opacity: 1;
			backdrop-filter: blur(20px);
		}
	}
	
	&__description {
		margin-top: 48px;
		font-weight: 500;
		color: #B4B4B4;
		margin-bottom: 16px;
	}
	
	
	
	&__btn {
		border: 2px solid #f1aa34;
		border-radius: 50px;
		width: fit-content;
		display: flex;
		align-items: center;
		color: $accent;
		span {
			
			font-size: 14px;
			font-weight: 500;
			padding: 6px 6px 6px 16px;
		}
		
		.btn__icon {
			height: 24px;
			margin-right: 8px;
		}
	}
	
	
	&__link {
		padding: 16px 16px;
		display: flex;
		align-items: center;
		border-radius: 4px;
		gap: 16px;
		span {
			font-size: 18px;
			font-weight: 500;
		}
		
		&.active span {
			color: #f1aa34;
		}
	}
}

</style>