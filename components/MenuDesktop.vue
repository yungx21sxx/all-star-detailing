<script setup lang="ts">
import { VAppBar } from "vuetify/components"

const {openSubmitModal, openLoginModal, openLkModal} = useModal()
const authUser = useAuthUser()
const route = useRoute()

const openAuthModals = () => {
	if (!authUser.value) {
		openLoginModal('LOGIN');
		return;
	}
	if (authUser.value.role === 'USER') {
		openLkModal();
		return;
	}
	if (authUser.value.role === 'ADMIN') {
		navigateTo('/admin/clients')
	}
}

const links = [
	{
		href: '/',
		text: 'Главная',
	},
	{
		href: '/services/',
		text: 'Услуги',
	},
	{
		href: '/portfolio/',
		text: 'Портфолио',
	},
	{
		href: '/contacts',
		text: 'Контакты',
	},
]

const computedLinks = computed(() => {
	return links.map(link => ({
		...link,
		variant: (route.fullPath === link.href) ? 'tonal' : 'text'
	}))
})
</script>

<template>
	<VAppBar
		class="nav"
		elevation="0"
		prominent
		density="comfortable"
	>
		<template #prepend>
			<div class="nav__logo">
				<img src="@/assets/icons/logo.webp" class="nav__img" alt="logo"/>
				<v-toolbar-title class="nav__title">ALL STAR</v-toolbar-title>
			</div>
			
			
			<v-btn
				v-for="{href, text, variant} of computedLinks"
				:variant="variant"
				:href="href"
			>
				{{ text }}
			</v-btn>
		
		</template>
		
		
		<template #append>
			<v-btn
				variant="tonal"
				color="#D19D34"
				@click="openSubmitModal(null)"
			>
				Записаться
			</v-btn>
			
			<v-btn icon @click="openAuthModals">
				<v-icon>mdi-account-outline</v-icon>
			</v-btn>
		</template>
	
	</VAppBar>
	<div class="overlay"></div>
</template>

<style scoped lang="scss">

.nav {
	backdrop-filter: blur(2px);
	background: hsla(0,0%,4%,.4) !important;
	top: 0 !important;
	
	&__logo {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-left: 16px;
		width: 200px;
	}
	
	&__img {
		height: 35px;
	}
	
	&__title {
		color: $accent;
		font-size: 18px;
		
	}
}

.overlay {
	height: 64px;
}

</style>