<template>
	<v-app>
<!--		<MenuMobile v-if="isMobile || isTablet"/>-->
<!--		<MenuDesktop v-else/>-->
		<MenuMain/>
		<MenuFixed/>
		<div class="main">
			<slot/>
		</div>
<!--		<div class="static-menu">-->
<!--			<v-menu>-->
<!--				<template v-slot:activator="{ props }">-->
<!--					<v-btn-->
<!--						class="static-menu__btn"-->
<!--						:icon="!props.value ? 'mdi-phone' : 'mdi-close'"-->
<!--						color="#f1aa34"-->
<!--						v-bind="props"-->
<!--						value="Позвонить"-->
<!--					/>-->
<!--				</template>-->
<!--				<v-list nav>-->
<!--					<v-card-->
<!--						v-ripple-->
<!--						color="rgba(0,0,0,0)"-->
<!--						v-for="{href, text, icon} of menuLinks"-->
<!--						:href="href"-->
<!--						class="static-menu__link"-->
<!--						elevation="0"-->
<!--					>-->
<!--						<nuxt-icon class="static-menu__icon" :name="icon"/>-->
<!--						<span class="menu__text">{{text}}</span>-->
<!--					</v-card>-->
<!--				</v-list>-->
<!--			</v-menu>-->
<!--		</div>-->
		<CFooter/>
	</v-app>
</template>


<style lang="scss">
.main {
	min-height: calc(100svh - 64px - 220px);
}

.static-menu {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 100;
	
	&__link {
		margin-bottom: 8px;
		padding: 8px !important;
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
	
	&__icon {
		color: $accent;
		svg {
			display: block;
			height: 20px !important;
			width: auto !important;
		}
	}
}
</style>
<script setup lang="ts">
	
	const { isMobile, isTablet } = useDevice()
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