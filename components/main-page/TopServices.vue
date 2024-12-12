<script setup lang="ts">

const { services, servicesCustom } = useServices()

const topServices = [...servicesCustom, ...services].splice(0, 6)

</script>

<template>
    <div class="top-services">
	    <div class="wrapper">
		    <h2 class="title">Наши услуги</h2>
		    <p class="top-services__subtitle">Полный спектр услуг для Вашего автомобиля</p>
		    <div class="grid">
			    <CService
				    v-for="service of topServices"
				    :service="service"
				    class="service"
			    />
		    </div>
		    <div class="btn-container">
			    <v-btn href="/services" variant="flat" color="#D19D34" width="250px" class="services__btn">Смотреть все</v-btn>
		    </div>
	    </div>

    </div>


</template>

<style scoped lang="scss">
    .top-services {
	    margin-top: 32px;
	    &__subtitle {
		    font-size: 20px;
		    text-align: center;
		    margin-bottom: 32px;
	    }
    }
    .title {
	    text-align: center;
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