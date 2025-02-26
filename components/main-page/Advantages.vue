<script setup lang="ts">


</script>

<template>
    <div class="advantage">
        <div class="wrapper">
            <h2 class="advantage__title title">Наши преймущества</h2>

            <div class="advantage__list">
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="shield"/>
                    <p class="advantage__text">Лучшие материалы и составы</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="gears"/>
                    <p class="advantage__text">Большой спектр <br>услуг</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="qual"/>
                    <p class="advantage__text">Гарантия на все<br> виды работ</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="peaples"/>
                    <p class="advantage__text">Сотрудники с большим опытом</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="time"/>
                    <p class="advantage__text">Четкое соблюдение  сроков</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="like"/>
                    <p class="advantage__text">Идеальное качество работы</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="photo"/>
                    <p class="advantage__text">Фото отчет в процессе работы</p>
                </div>
                <div class="advantage__item">
                    <nuxt-icon class="advantage__icon" name="sale"/>
                    <p class="advantage__text">Скидки для постоянных клиентов</p>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
    .advantage {
        margin-top: 40px;
        &__title {
	        text-align: center;
            margin-bottom: 24px;
	        color: $accent;
        }

        &__icon {
            display: flex;
            justify-content: center;
            margin-bottom: 12px;
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
            font-weight: 500;
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