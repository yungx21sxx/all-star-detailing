<script setup lang="ts">
import { services, servicesCustom } from '~/data/services.data'
import {mdiArrowRight} from "@mdi/js";


const topServices = [...servicesCustom, ...services].sort((a, b) => a.position - b.position).splice(0, 6)

</script>

<template>
    <div class="top-services margin-block-end block">
	    <div class="wrapper">
		    <h2 class="title top-services__title">Полный спектр услуг для Вашего автомобиля</h2>
		    <div class="under-line"></div>
		    <div class="grid">
			    <CService
				    v-for="service of topServices"
				    :service="service"
				    class="service"
			    />
		    </div>
		    <div class="btn-container">
			    <v-btn href="/services" variant="flat" color="#f1aa34" max-width="386px" width="100%" class="services__btn" :append-icon="mdiArrowRight">Смотреть все</v-btn>
		    </div>
	    </div>
    </div>
</template>

<style scoped lang="scss">
    .services__btn {
        margin-left: auto;
        margin-right: auto;
    }

    .btn-container {
        margin-top: 32px;
    }
    
    .top-services__title {
	   max-width: 400px;
    }


</style>