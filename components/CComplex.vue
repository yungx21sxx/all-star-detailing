<script setup lang="ts">
    import type { IComplex } from "~/types/client"

    
    defineProps<{
        complex: IComplex
    }>()
    
    

</script>

<template>
    <v-card class="complex" v-ripple :href="`/complex/${complex.id}`">
        <h3 class="complex__title">{{ complex.title }}</h3>
        <ul class="complex__services">
            <li
                class="complex__service"
                v-for="service of complex.included"
            >{{ service }}</li>
        </ul>
        <div class="complex__footer">
            <div class="complex__price">
                <div class="complex__price_prev">{{ complex.price.previous}}</div>
                <div class="complex__price_current">{{ complex.price.current}}</div>
            </div>
            <v-btn color="#D19D34" class="complex__btn" variant="text">
                <template #append>
                    <v-icon size="20px" class="product__icon">mdi-arrow-right</v-icon>
                </template>
                <span class="btn__text">Подробнее</span>
            </v-btn>
        </div>

    </v-card>

</template>

<style scoped lang="scss">
    .complex {
        padding: 16px;
        border-radius: 4px;
        min-height: 260px;
	    display: flex;
	    flex-direction: column;

        &__title {
            font-size: 20px;
            font-weight: bold;
            color: #D19D34;
            margin-bottom: 8px;
        }

        &__services {
            margin-left: 16px;
            margin-bottom: 16px;
            font-size: 14px;
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
	        margin-top: auto;
        }

        &__price {
            display: flex;
            gap: 8px;

            &_prev {
                text-decoration: line-through;
            }

            &_current {
                color: #D19D34;
            }
        }


    }

</style>