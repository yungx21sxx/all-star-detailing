<template>
	<transition name="slide-fade">
		<div v-if="isMenuVisible" class="header-wrapper">
			<MenuMain variant="dark"/>
		</div>
	</transition>
</template>

<script setup>
import MenuMain from './MenuMain.vue';

const isMenuVisible = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
	const currentScrollY = window.scrollY;
	const scrollDifference = Math.abs(currentScrollY - lastScrollY);
	
	// Если резкое изменение позиции скролла (например, модалка), не скрываем меню
	if (scrollDifference > 200) {
		lastScrollY = currentScrollY;
		return;
	}
	
	// Логика появления и исчезновения меню
	if (currentScrollY > lastScrollY && currentScrollY > 200) {
		isMenuVisible.value = true;
	} else if (currentScrollY < 100) {
		isMenuVisible.value = false;
	}
	
	lastScrollY = currentScrollY;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.header-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(18, 18, 18, 0.8);
	backdrop-filter: blur(10px);
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	transition: transform 0.3s ease-in-out;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-100%);
	opacity: 0;
}

.slide-fade-enter-to {
	transform: translateY(0);
	opacity: 1;
}
</style>/style>