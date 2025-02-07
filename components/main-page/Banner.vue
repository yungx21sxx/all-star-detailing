<script setup lang="ts">
 
	import {mdiArrowRight} from "@mdi/js";
	
	const {openSubmitModal} = useModal()
	const scrollBottom = () => {
        window.scroll(0, window.innerHeight - 50)
    }
    
    const jumpToBonusInfo = () => {
	    const bonusBlock =  document.querySelector('#bonus')
	    const rect = bonusBlock?.getBoundingClientRect()
	    const bonusCords = rect.top + window.scrollY - 50;
		window.scroll(0, bonusCords)
    }
	
	

</script>

<template>
	<header class="hero">
		<div class="hero__overlay">
			<div class="hero__wrapper wrapper">
				<div class="hero__content">
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
				</div>
			</div>
		</div>
		<img
			alt="all star detailing"
			class="hero__background"
			src="/hero.webp"
		/>
	</header>
<!--    <ImgBackground-->
<!--        src="/hero.webp"-->
<!--        height="100svh"-->
<!--        class="banner"-->
<!--        alt="all star detailing"-->
<!--    >-->
<!--        <div class="banner__body">-->
<!--            <section class="wrapper">-->
<!--               -->
<!--                <header class="banner__content" v-motion-slide-visible-once-right>-->
<!--                    <div class="banner__btn btn" v-ripple @click="openSubmitModal(null)">-->
<!--                        <span>Записаться онлайн</span>-->
<!--                        <v-icon class="btn__icon">mdi-arrow-right</v-icon>-->
<!--                    </div>-->
<!--                    <h2 class="banner__subtitle">Детейлинг центр</h2>-->
<!--                    <h1 class="banner__title">ALL STAR DETAILING</h1>-->
<!--                    <p class="banner__text">-->
<!--                        Профессинальный детейлинг по <br>-->
<!--                        доступным ценам в Санкт-Петербурге-->
<!--                    </p>-->
<!--                    <v-btn href="/services" variant="flat" color="#f1aa34">Смотреть услуги</v-btn>-->
<!--                </header>-->
<!--                -->
<!--            </section>-->
<!--            <div class="banner__bottom">-->
<!--                <nuxt-icon name="arrow" class="banner__arrow" @click="scrollBottom"/>-->
<!--            </div>-->
<!--        </div>-->
<!--    </ImgBackground>-->

</template>

<style lang="scss" scoped>

    
    .hero {
	    margin-top: -55px;
	    position: relative;
	    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
	    height: 75svh;
	    
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
	    
	    &__menu {
		    position: absolute;
		    z-index: 10;
	    }
	    
	    &__wrapper {
		    position: relative;
		    display: flex;
		    height: 100%;
	    }
	    
	    &__content {
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    color: #fff;
		    max-width: 640px;
		    
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
		    position: absolute;
		    width: 100%;
		    height: 100%;
		    top: 0;
		    left: 0;
		    object-fit: cover;
		    z-index: 0;
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