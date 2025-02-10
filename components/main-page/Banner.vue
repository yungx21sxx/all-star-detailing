<script setup lang="ts">
 
	import {mdiArrowRight} from "@mdi/js";
	
	const {openSubmitModal} = useModal()
</script>

<template>
	<HeaderBackground>
		<template #content>
			<div class="banner__btn btn" v-ripple @click="openSubmitModal(null)">
				<span>Записаться онлайн</span>
				<v-icon :icon="mdiArrowRight" class="btn__icon"></v-icon>
			</div>
			<h1 class="hero__subtitle">
				Детейлинг центр
			</h1>
			<h2 class="hero__title">ALL STAR DETAILING</h2>
			<div class="hero__description">
				<p>  Профессинальный детейлинг по <br>
					доступным ценам в Санкт-Петербурге</p>
			</div>
			<div class="hero__actions">
				<v-btn href="/services" variant="flat" color="#f1aa34">Смотреть услуги</v-btn>
			</div>
		</template>
		<template #background>
			<img
				alt="all star detailing"
				class="hero__background"
				src="/hero.webp"
				loading="lazy"
			/>
		</template>
	</HeaderBackground>
</template>

<style lang="scss" scoped>

    
    .hero {
	    
	    &__nav {
		    position: absolute;
		    top: 0;
	    }
	    
	    &__overlay {
		    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
		    z-index: 1;
		    position: absolute;
		    width: 100%;
		    height: 100%;
	    }
	    
	    @media (max-width: 768px) {
		    height: 100svh;
	    }
	    
	    &__title {
		    font-weight: 600;
		    font-size: 3rem;
		    line-height: 55px;
		    margin-bottom: 1rem;
		    color: $accent;
		    
		    @media (max-width: 768px) {
			    font-size: 2rem;
			    line-height: 45px;
			    margin-bottom: .5rem;
		    }
		    
		    @media (max-width: 364px) {
			    font-size: 1.6rem;
			    line-height: 40px;
		    }
	    }
	    
	    &__subtitle {
		    font-weight: 600;
		    font-size: 2rem;
		    
		    @media (max-width: 768px) {
			    font-size: 1.5rem;
		    }
		    
		    @media (max-width: 364px) {
			    font-size: 1.25rem;
		    }
	    }
	    &__description {
		    max-width: 480px;
		    border-radius: 8px;
		    color: #f3f3f3;
		    
		    p {
			    font-size: 1.25rem;
			    
			    @media (max-width: 768px) {
				    font-size: 1.125rem;
			    }
			    
			    @media (max-width: 364px) {
				    font-size: 1rem;
			    }
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
	    
	    &__background {
		    width: 100%;
		    height: 100%;
		    object-fit: cover;
		    z-index: 0;
		    opacity: 0;
		    transition: opacity .8s ease-in-out;
		    &[loading="lazy"] {
			    opacity: 1;
		    }
	    }
    }

    .btn {
        border: 2px solid #f1aa34;
        border-radius: 50px;
        width: fit-content;
        margin-bottom: 16px;
	    
	    @media (max-width: 768px) {
		    margin-bottom: 8px;
	    }

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