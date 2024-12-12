<script setup lang="ts">
    const {isMobile} = useDevice()

</script>

<template>
    <footer class="footer footer--desktop" v-if="!isMobile">
        <div class="footer__body wrapper">
            <div class="footer__col footer__col_left">
                <div class="footer__logo">
                    <img src="@/assets/icons/logo.webp" alt="All Star Detailing">
                </div>
                <div class="footer__info ">
                    <address class="footer__address">
                        <strong>Адрес:</strong> Санкт-Петербург, <br>
	                    Проспект Энгельса 27АБ (въезд с Манчестерской)
                    </address>
                    <time class="footer__time">
                        Работаем ежедневно <br>
                        с 10:00 до 21:00
                    </time>
                </div>
            </div>
            <div class="footer__col footer__col_middle">
                <div class="footer__icons">
                    <NuxtLink to="https://t.me/allstardetailing" aria-label="tg">
                        <NuxtIcon name="telega" class="footer__icon"/>
                    </NuxtLink>
                    <NuxtLink to="https://instagram.com/allstardetailng?igshid=YmMyMTA2M2Y=" aria-label="tg">
                        <NuxtIcon name="inst" class="footer__icon"/>
                    </NuxtLink>
                    <NuxtLink to="https://vk.com/allstardetailing" aria-label="tg">
                        <NuxtIcon name="vk" class="footer__icon"/>
                    </NuxtLink>
                </div>
                <div class="footer__copyright">2022 © All Star Detailing</div>
            </div>

            <div class="footer__col footer__col_right">
                <NuxtLink to="tel:+7 (911) 947-07-77" class="footer__phone" aria-label="tg">
                    <NuxtIcon name="phone" class="footer__phone-icon"/>
                    <span>+7 (911) 947-07-77</span>
                </NuxtLink>
                <p class="footer__text">
                    Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.
                </p>
            </div>

        </div>
    </footer>
    <footer class="footer footer--mobile" v-else>
        <div class="footer__body wrapper">
            <div class="footer__logo">
                <img src="@/assets/icons/logo.webp" alt="All Star Detailing">
            </div>
            <div class="footer__copyright">2022 © All Star Detailing</div>

                <address class="footer__address">
                    <strong>Адрес:</strong> Санкт-Петербург, <br>
	                Проспект Энгельса 27АБ (въезд с Манчестерской)
                </address>
                <time class="footer__time">
                    Работаем ежедневно <br>
                    с 10:00 до 21:00
                </time>
                <NuxtLink to="tel:+7 (911) 947-07-77" class="footer__phone" aria-label="tg">
                    <NuxtIcon name="phone" class="footer__phone-icon"/>
                    <span>+7 (911) 947-07-77</span>
                </NuxtLink>
	        
	        <div class="footer__icons">
		        <NuxtLink to="https://t.me/allstardetailing" aria-label="tg">
			        <NuxtIcon name="telega" class="footer__icon"/>
		        </NuxtLink>
		        <NuxtLink to="https://instagram.com/allstardetailng?igshid=YmMyMTA2M2Y=" aria-label="tg">
			        <NuxtIcon name="inst" class="footer__icon"/>
		        </NuxtLink>
		        <NuxtLink to="https://vk.com/allstardetailing" aria-label="tg">
			        <NuxtIcon name="vk" class="footer__icon"/>
		        </NuxtLink>
	        </div>

            <p class="footer__text">
                Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.
            </p>
        </div>
    </footer>

</template>

<style lang="scss">
    .footer {
        background: #1E1E1E;
        padding: 48px 0;
        margin-top: 96px;

        &--desktop &__body {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        &--mobile &__body {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
            text-align: center;
        }

        &--mobile &__text {
            max-width: 180px;
        }

        &--mobile &__address {
            margin-bottom: 0;
        }

        &__logo img {
            height: 100px;
        }

        &__col {
            &_left {
                display: flex;
                gap: 24px;
                align-items: center;
            }

            &_middle {
                align-items: center;
            }
            &_middle, &_right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }

        &__phone {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 8px;

            &-icon svg {
                height: 24px;
                width: auto;
            }

        }


        &__icon {
            color: #D19D34;
            svg {
                height: 30px !important;
                width: auto !important;
            }
        }

        &__icons {
            display: flex;
            gap: 32px;
        }

        &__address {
            margin-bottom: 16px;
        }

        &__text {
            font-size: 10px;
	        color: $light-gray;
        }
	    
	    &__copyright {
		    color: $light-gray;
	    }

    }

</style>