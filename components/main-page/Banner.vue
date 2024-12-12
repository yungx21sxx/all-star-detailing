<script setup lang="ts">
 
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
    <ImgBackground
        src="/main-banner.webp"
        height="100svh"
        class="banner"
        alt="all star detailing"
    >
        <div class="banner__body">
            <section class="wrapper">
               
                <header class="banner__content" v-motion-slide-visible-once-right>
                    <div class="banner__btn btn" v-ripple @click="openSubmitModal(null)">
                        <span>Записаться онлайн</span>
                        <v-icon class="btn__icon">mdi-arrow-right</v-icon>
                    </div>
                    <h2 class="banner__subtitle">Детейлинг центр</h2>
                    <h1 class="banner__title">ALL STAR DETAILING</h1>
                    <p class="banner__text">
                        Профессинальный детейлинг по <br>
                        доступным ценам в Санкт-Петербурге
                    </p>
                    <v-btn href="/services" variant="flat" color="#c93">Смотреть услуги</v-btn>
                </header>
                
            </section>
            <div class="banner__bottom">
                <nuxt-icon name="arrow" class="banner__arrow" @click="scrollBottom"/>
            </div>
        </div>
    </ImgBackground>
</template>

<style lang="scss" scoped>
    .banner {
	    margin-top: -64px;
        @media screen and (max-width: 760px) {
            &__title {
                font-size: 32px !important;
            }

            &__text {
                font-size: 20px !important;
            }

        }

        &__body {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
        }

        &__title {
            color: #D19D34;
            font-size: 42px;
            font-weight: 700;
            //margin-bottom: 8px;
        }

        &__text {
            color: #FFF;
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 16px;
	        margin-top: -8px;
        }

        &__subtitle {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: -8px;
        }

        &__description {
            color: #B4B4B4;
            font-size: 12px;
            font-weight: 400;
            margin-top: 10px;
        }

        &__bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
        }

        &__arrow {
            svg {
                height: 20px !important;
                width: auto;
            }
            transition: all .2s ease-in;
            padding: 30px 20px;
            cursor: pointer;
            &:hover {
                transform: translateY(-10px);
            }

        }
    }

    .btn {
        border: 2px solid #D19D34;
        border-radius: 50px;
        width: fit-content;
        margin-bottom: 8px;

        span {
            color: #D19D34;
            font-size: 12px;
            font-weight: 500;
            padding: 6px 6px 6px 12px;
        }

        &__icon {
            color: #D19D34;
            padding-right: 6px;
        }


    }

</style>