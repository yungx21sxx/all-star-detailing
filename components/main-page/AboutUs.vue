<template>
    <div class="about wrapper">

        <section class="about__content">
            <h2 class="about__title title">
                O нас
            </h2>
            <p class="about__text">
	            В All Star Detailing, мы предлагаем полный спектр услуг по детейлингу автомобилей в Санкт-Петербурге. Наша студия оснащена новейшим оборудованием для профессиональной полировки кузова, нанесения керамических покрытий и тщательной чистки интерьера. <br> <br> Наша команда профессионалов обеспечивает безупречный уход и защиту вашего автомобиля, используя только лучшие материалы и методики. <br> <br> Заходите к нам, чтобы лично оценить высочайшее качество и внимание к деталям, которые мы вкладываем в каждый автомобиль.
            </p>
            <v-btn @click="openSubmitModal(null)" variant="flat" color="#f1aa34" class="banner__btn">Записаться онлайн</v-btn>
<!--            <div class="about__description">-->
<!--                Зарегестрируйтесь у нас на сайте и верните <br>-->
<!--                5% от суммы заказа.-->
<!--            </div>-->
        </section>
	
	    <CSlider
		    class="about__slider"
		    :photos="[
				'/slider/1.webp',
				'/slider/2.webp',
				'/slider/3.webp',
				'/slider/4.webp',
				'/slider/5.webp',
            ]"
	    />
	  
	    
     
    </div>
</template>
<script setup lang="ts">
	const {openLoginModal, openSubmitModal} = useModal()
</script>


<style scoped lang="scss">
    .about {
        display: grid;
        grid-template-columns: 1fr 460px;
        margin-top: 32px;
	    gap: 50px;

        @media screen and (max-width: 760px) {
            display: block;

            &__slider {
                margin-top: 40px;
	           
            }
        }

        &__text {
            margin-bottom: 32px;
        }

        &__slider {
	        
	       
        }

        &__title {
            margin-bottom: 16px;
        }
	    
	    &__description {
		    color: $light-gray;
		    font-size: 12px;
		    margin-top: 16px;
	    }
    }
</style>