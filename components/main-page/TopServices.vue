<script setup lang="ts">
import { services, servicesCustom } from '~/data/services.data'


const topServices = [...servicesCustom, ...services].sort((a, b) => a.position - b.position).splice(0, 6)

</script>

<template>
    <div class="top-services margin-block-end block">
	    <div class="wrapper">
		    <h2 class="title">Полный спектр услуг для Вашего автомобиля</h2>
		    <div class="under-line"></div>
		    <div class="grid">
			    <CService
				    v-for="service of topServices"
				    :service="service"
				    class="service"
			    />
		    </div>
		    <div class="btn-container">
			    <v-btn href="/services" variant="flat" color="#f1aa34" width="250px" class="services__btn">Смотреть все</v-btn>
		    </div>
	    </div>
    </div>
</template>

<style scoped lang="scss">
    .top-services {
	    margin-bottom: 44px;
    }
    .services__btn {
        margin-left: auto;
        margin-right: auto;
    }

    .btn-container {
        margin-top: 32px;
        display: flex;
    }


</style>