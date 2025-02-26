<script setup lang="ts">

import {mdiArrowRight, mdiChevronDown, mdiChevronDownBoxOutline, mdiChevronRight} from "@mdi/js";
	
	const {openSubmitModal} = useModal();
	
	const scrollBottom = () => {
		window.scroll(0, window.innerHeight - 50)
	}
</script>

<template>
	<header
		class="hero"
	>
		<div class="hero__overlay">
			<div class="hero__body">
				<MenuMain class="hero__nav"/>
				<div class="wrapper">
					<div class="hero__content">
						<div class="hero__btn btn" v-ripple @click="openSubmitModal(null)">
							<span>Записаться онлайн</span>
							<v-icon :icon="mdiArrowRight" class="btn__icon"></v-icon>
						</div>
						<h1 class="hero__subtitle">
							Детейлинг центр
						</h1>
						<h2 class="hero__title">ALL STAR DETAILING</h2>
						<p class="hero__description">
							Профессинальный детейлинг по <br>
							доступным ценам в Санкт-Петербурге
						</p>
						<div class="hero__actions">
							<v-btn href="/services" variant="flat" color="#f1aa34">Смотреть услуги</v-btn>
						</div>
					</div>
					<div class="hero__bottom">
						<v-btn variant="text" icon="true" @click="scrollBottom" color="#fff" aria-label="Name">
							<v-icon size="60px" :icon="mdiChevronDown"></v-icon>
						</v-btn>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>

    
    .hero {
	    width: 100%;
	    height: 100svh;
	    background: #000;
	    
	    &__body {
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    height: 100%;
		    width: 100%;
		    position: relative;
		    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
	    }
	    
	    &__bottom {
		    position: absolute;
		    bottom: 8px;
		    left: 0;
		    right: 0;
		    display: flex;
		    justify-content: center;
	    }
	    
	    &__content {
		    opacity: 0;
		    transform: translateX(100px); /* Уходит за экран вправо */
		    animation: slideInSmooth 0.6s cubic-bezier(0.25, 1, 0.3, 1) 0.2s forwards;
	    }
	    
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
		    
		    background:  url('/main-banner-desktop.webp') no-repeat center/cover;
		    animation: fadeIn .5s ease-in-out forwards;
		    opacity: 0;
		    
		    @media (max-width: 600px) {
			    background:  url('/main-banner-mobile.webp') no-repeat center/cover;
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
	    
	    &__nav {
		    position: absolute;
		    top: 0;
	    }
	    
	    
	    &__title {
		    font-weight: 600;
		    font-size: clamp(32px, 13vw, 60px);
		    line-height: clamp(55px, 15vw, 80px);
		    margin-bottom: .7rem;
		    letter-spacing: -1px;
	    }
	    
	    &__subtitle {
		    font-weight: 500;
		    font-size: clamp(17px, 6vw, 30px);
		    color: $accent;
		    margin-bottom: -4px;
	    }
	    &__description {
		    max-width: 480px;
		    border-radius: 8px;
		    color: #f3f3f3;
		    font-weight: 400;
		    
		    font-size: 1.25rem;
		    margin-bottom: 24px;
		    
		    @media (max-width: 768px) {
			    font-size: 1.125rem;
		    }
		    
		    @media (max-width: 364px) {
			    font-size: 1rem;
		    }
	    }
	    
	    &__actions {
		    display: flex;
		    gap: 1rem;
		    margin-top: 1.5rem;
		    
		    @media (max-width: 768px) {
			    margin-top: 1rem;
		    }
	    }
	    
	    &__btn--catalog {
		    @media (max-width: 373px) {
			    display: none;
		    }
	    }
	    
	    &__btn {
		    margin-bottom: 16px;
	    }
	    
	    @media (max-width: 768px) {
		    &__title {
			    font-weight: 500;
			    //margin-bottom: 8px;
		    }
		    
		    &__btn {
			    margin-bottom: 16px;
		    }
		    
		    &__subtitle {
			    margin-bottom: 2px;
			    font-weight: 500;
		    }
		    
		    &__body {
			    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1));
		    }
		    
	    }
    }
    
    
    .btn {
        border: 2px solid #f1aa34;
        border-radius: 50px;
        width: fit-content;


        span {
            color: #f1aa34;
            font-size: 12px;
            font-weight: 500;
            padding: 6px 6px 6px 12px;
        }

        &__icon {
            color: #f1aa34;
            padding-right: 6px;
        }


    }

</style>