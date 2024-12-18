<script setup lang="ts">

	const authUser = useAuthUser();
	
	const {openSubmitModal, openLoginModal, openLkModal} = useModal();
	

	
	const isMenuOpen = ref<boolean>(false);
	const route = useRoute();
	const router = useRouter();

	const openMenu = () => isMenuOpen.value = true;
	
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
			icon: 'mdi-home'
		},
		{
			href: '/services',
			text: 'Услуги',
			icon: 'mdi-cog-outline'
		},
		{
			href: '/portfolio',
			text: 'Портфолио',
			icon: 'mdi-car'
		},
		{
			href: '/contacts',
			text: 'Контакты',
			icon: 'mdi-card-account-phone-outline'
		},
	]
	
	const computedLinks = computed(() => {
		return links.map(link => ({
			...link,
			isActive: route.fullPath === link.href
		}))
	})
	
</script>

<template>
	<VAppBar
		class="nav"
		density="comfortable"
	>
		<template #prepend>
			<img src="@/assets/icons/logo.webp" class="nav__img ml-3" alt="logo"/>
			<div class="nav__title">ALL STAR</div>
		</template>
		<template #append>
			<NuxtLink to="https://t.me/allstardetailing" aria-label="tg">
				<NuxtIcon name="telega" class="nav__icon"/>
			</NuxtLink>
			<NuxtLink to="https://vk.com/allstardetailing" aria-label="tg">
				<NuxtIcon name="vk" class="nav__icon"/>
			</NuxtLink>
			<v-btn
				icon
				@click="openMenu"
				value="Меню"
			>
				<v-icon icon="mdi-menu" size="35px" />
			</v-btn>
		
			
		</template>
	</VAppBar>
	<div class="overlay"></div>
	<ModalLayout
		v-model="isMenuOpen"
		class="menu"
	>
		<template #title>
			<div class="menu__btn btn ml-7" v-ripple @click="openSubmitModal(null)">
				<span>Записаться</span>
				<v-icon class="btn__icon">mdi-arrow-right</v-icon>
			</div>
		</template>
		<div class="menu__body">
			<div
				class="menu__auth auth"
			>
				
				<v-card class="auth__item"
				        v-if="!authUser"
				        v-ripple
				        @click="openLoginModal('INFO')"
				        elevation="0"
				>
					<v-icon icon="mdi-account-outline" color="#D19D34" class="auth__icon" size="30px" />
					<div class="auth__col">
						<div class="auth__text">Регистрация / Вход</div>
						<div class="auth__subtext">Бонусная программа</div>
					</div>
					<v-icon class="auth__icon_white ml-auto">mdi-arrow-right</v-icon>
				</v-card>
				<v-card class="auth__item"
				        v-else-if="authUser.role === 'USER'"
				        v-ripple
				        @click="openLkModal"
				        elevation="0"
				>
					<v-icon icon="mdi-account-outline" color="#D19D34" class="auth__icon" size="30px" />
					<div class="auth__col">
						<div class="auth__text" >{{ authUser.phone }}</div>
						<div class="auth__subtext">Личный кабинет</div>
					</div>
					<v-icon class="auth__icon_white ml-auto">mdi-arrow-right</v-icon>
				</v-card>
				<v-card class="auth__item"
				        v-else-if="authUser.role === 'ADMIN'"
				        v-ripple
				        href="/admin/clients"
				        elevation="0"
				>
					<v-icon icon="mdi-account-outline" color="#D19D34" class="auth__icon" size="30px" />
					<div class="auth__col">
						<div class="auth__text">Сотрудиник</div>
						<div class="auth__subtext">Админ панель</div>
					</div>
					<v-icon class="auth__icon_white auth__icon ml-auto">mdi-arrow-right</v-icon>
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
				<v-icon :icon="icon" color="#D19D34" class="menu__icon" size="30px" />
				<span class="menu__text">{{text}}</span>
			</v-card>
			<p class="menu__description">Нажмите чтобы связаться</p>
			<div class="menu__call-buttons call-buttons">
				
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
	</ModalLayout>
</template>

<style scoped lang="scss">
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
			color: #D19D34;
		}
	}
}
.nav {
	backdrop-filter: blur(2px);
	background: hsla(0,0%,4%,.7) !important;
	box-shadow: 2px 2px 7px #0000004d;
	
	&__logo {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-left: 16px;
		width: 200px;
	}
	
	&__img {
		height: 40px;
	}
	
	&__title {
		color: #D19D34;
		font-size: 16px;
		margin-left: 12px;
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
		color: #D19D34;
	}
	
	&__icon {
		display: block;
	}
	
	
	
}

.menu {
	
	&__description {
		margin-top: 48px;
		font-weight: 500;
		color: #B4B4B4;
		margin-bottom: 16px;
	}
	
	&__cabinet {
		background: #1E1E1E;
		
	}
	
	
	&__body {
		margin: 16px;
		
	}
	
	&__btn {
		border: 2px solid #D19D34;
		border-radius: 50px;
		width: fit-content;
		display: flex;
		align-items: center;
		span {
			color: #D19D34;
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
		margin-bottom: 8px;
		padding: 16px 16px;
		display: flex;
		align-items: center;
		border-radius: 4px;
		gap: 22px;
		span {
			font-size: 20px;
			font-weight: 500;
		}
		
		&.active span {
			color: #D19D34;
		}
	}
}
</style>