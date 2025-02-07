<script setup lang="ts">


</script>

<template>
    <div class="adv">
        <div class="wrapper">
            <h2 class="adv__title title">Почему Вам стоит обратиться к нам?</h2>

            <div class="adv__list">
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="shield"/>
                    <p class="adv__text">Лучшие материалы и составы</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="gears"/>
                    <p class="adv__text">Большой спектр <br>услуг</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="qual"/>
                    <p class="adv__text">Гарантия на все<br> виды работ</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="peaples"/>
                    <p class="adv__text">Сотрудники с большим опытом</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="time"/>
                    <p class="adv__text">Четкое соблюдение  сроков</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="like"/>
                    <p class="adv__text">Идеальное качество работы</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="photo"/>
                    <p class="adv__text">Фото отчет в процессе работы</p>
                </div>
                <div class="adv__item">
                    <nuxt-icon class="adv__icon" name="sale"/>
                    <p class="adv__text">Скидки для постоянных клиентов</p>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
    .adv {
        margin-top: 48px;
        &__title {
	        text-align: center;
            margin-bottom: 24px;
        }

        &__icon {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            svg {
                display: block;
            }
        }

        &__item {
            padding: 16px 8px !important;
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            background: $bg-card;
        }

        &__text {
            text-align: center;
            font-size: 18px;
            font-weight: 700;
            justify-self: center;
        }

        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            grid-auto-rows: auto;
            gap: 16px;
        }

        @media screen and (max-width: 760px) {
            &__list {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-auto-rows: auto;
                gap: 7px;
            }

            &__item {
                width: 100%;
                margin-bottom: 0 !important;
                padding: 15px 5px !important;
            }

            &__text {
                font-size: 16px !important;
            }

        }

    }
	
   

</style>