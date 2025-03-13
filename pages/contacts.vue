<template>
	<header class="hero">
		<div class="hero__overlay">
			<MenuMain class="hero__nav" />
			<div class="hero__wrapper wrapper">
				<div class="hero__content">
					<div class="contact-block contact-block_desktop">
						<VBreadcrumbs :items="breadcrumbs">
							<template v-slot:divider>
								<v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
							</template>
						</VBreadcrumbs>
						<h1 class="title mb-4">Наши контакты</h1>
						<MainContactsInfoBlock/>
						<v-btn @click="openSubmitModal(null)" variant="flat" color="#f1aa34" class="banner__btn">Записаться онлайн</v-btn>
					</div>
				</div>
			</div>
		</div>
		
		<div class="hero__background">
			<iframe
				class="hero__map"
				:src="iframeSrc"
				frameborder="0"
				ref="mapIframe"
				@load="onMapLoad"
			></iframe>
		</div>
	</header>
	<div class="contact-block contact-block_mobile">
		<VBreadcrumbs :items="breadcrumbs">
			<template v-slot:divider>
				<v-icon color="#f1aa34" :icon="mdiChevronRight"></v-icon>
			</template>
		</VBreadcrumbs>
		<h1 class="title mb-4">Наши контакты</h1>
		<MainContactsInfoBlock/>
		<v-btn @click="openSubmitModal(null)" variant="flat" color="#f1aa34" class="banner__btn">Записаться онлайн</v-btn>
	</div>
	<CallSubmitForm/>
</template>

<script setup lang="ts">
import ContactsBlock from "~/components/ContactsBlock.vue";
import { mdiChevronRight } from "@mdi/js";

const { openSubmitModal } = useModal();

useSeoMeta({
	title: 'Контакты | All Star Detailing',
	description: 'Свяжитесь с нами для получения подробной информации о наших услугах и записи на детейлинг. Мы находимся в Санкт-Петербурге, пр. Энгельса, 27АБ.',
	ogTitle: 'Контакты | All Star Detailing',
	ogDescription: 'Свяжитесь с нами для получения подробной информации о наших услугах и записи на детейлинг. Мы находимся в Санкт-Петербурге, пр. Энгельса, 27АБ.',
	ogImage: 'https://all-star-detailing.ru/main-banner-desktop.webp',
	ogType: 'website',
	ogImageAlt: 'Контакты All Star Detailing',
	ogSiteName: 'All Star Detailing',
	ogLocale: 'ru_RU',
});

useSchemaOrg([
	defineBreadcrumb({
		itemListElement: [
			{ name: 'Главная', item: '/' },
			{ name: 'Контакты', item: '/contacts' },
		]
	}),
])

const breadcrumbs = [
	{ title: 'Главная', disabled: false, href: '/' },
	{ title: 'Контакты', disabled: true, href: '/contacts' },
];

const iframeSrc = ref(
	"https://yandex.ru/map-widget/v1/?um=constructor%3A9c1eb3b00b687125988dca1f5c92e3ac1a9777ca781841531bbcaa0cd74b49da&amp;source=constructor"
);

// Флаг загрузки карты
const isMapLoaded = ref(false);

// Функция обработки успешной загрузки
const onMapLoad = () => {
	console.log("Карта успешно загружена.");
	isMapLoaded.value = true;
};

// Проверка доступности карты через setInterval
onMounted(() => {
	const checkIframe = setInterval(() => {
		const iframe = document.querySelector("iframe.hero__map");
		if (iframe && iframe.contentWindow) {
			try {
				// Если iframe доступен, проверим наличие контента
				iframe.contentWindow.document;
				clearInterval(checkIframe); // Завершаем проверку, если карта доступна
				isMapLoaded.value = true;
				console.log("Карта успешно загружена и доступна.");
			} catch (e) {
				console.error("Ошибка при загрузке карты", e);
				isMapLoaded.value = false;
				clearInterval(checkIframe); // Завершаем проверку, если ошибка
			}
		}
	}, 500); // Периодическая проверка, например, раз в 500 мс
});
</script>

<style scoped lang="scss">
.contact-block {
	background: rgba(18, 18, 18, 0.8);
	backdrop-filter: blur(10px);
	padding: 16px 32px 32px 32px;
	border-radius: 8px;
	
	
	position: relative;
	
	&_desktop {
		width: fit-content;
		z-index: 3;
		margin-left: auto;
		pointer-events: auto; /* Оставляем кликабельность */
	}
	
	&_mobile {
		width: 100%;
		display: none;
		//margin-top: -100px; /* Сдвигаем блок вверх */
		transform: translateY(-100px);
		border-radius: 32px;
		background: rgba(18, 18, 18, 1);
	}
	
	@media screen and (max-width: 800px){
		&_desktop {
			display: none;
		}
		&_mobile {
			display: block;
		}
	}
}

.hero {
	height: 100dvh;
	position: relative;
	width: 100%;
	
	@media screen and (max-width: 800px){
		height: 90svh;
	}
	
	&__nav {
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 20;
		pointer-events: auto; /* Разрешаем клики для меню */
	}
	
	&__overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		pointer-events: none; /* Сохраняем для скролла карты */
		
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 130px;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
			z-index: 0;
			pointer-events: none; /* Отключаем события для градиента */
		}
	}
	
	&__wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		//z-index: 2;
	}
	
	
	&__map {
		width: 100%;
		height: 100%;
		border: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	
}
</style>