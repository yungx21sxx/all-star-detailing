<script setup lang="ts">

    const { isMobile } = useDevice()
    const {openLoginModal} = useModal()

</script>

<template>
	<div class="bonus">
		<div class="wrapper">
			<h2 class="bonus__title title">Бонусная программа</h2>
			<p class="bonus__subtitle bonus__subtitle_white">Начислим <strong>1000 бонусов</strong> при регистрации и вернем 5% от суммы заказа</p>
			<h3 class="bonus__subtitle bonus__subtitle_orange mb">Как это работает?</h3>
			
			<v-timeline
				side="end"
				align="start"
				:direction="isMobile ? 'vertical' : 'horizontal'"
			>
				<v-timeline-item
					class="timeline-item"
					size="large"
					fill-dot
					dot-color="#D19D34"
					:height="isMobile ? '' : '150px'"
					icon="mdi-account-check-outline"
				>
					
					<h3 class="bonus__subtitle_orange">Зарегестрируйтесь у нас на сайте</h3>
					<p>Каждая оказанная услуга приносит вам бонусные баллы, которые начислятся на ваш аккаунт.<br> (1 бонус = 1 рубль)</p>
				</v-timeline-item>
				<v-timeline-item
					fill-dot
					size="large"
					dot-color="#D19D34"
					:height="isMobile ? '' : '150px'"
					icon="mdi-car-wash"
				>
					<h3 class="bonus__subtitle_orange">Запишитесь к нам на услуги</h3>
					<p>После того как мы выполним свою работу, вернем 5% от суммы оказаных услуг в виде боннусов.</p>
				</v-timeline-item>
				<v-timeline-item
					fill-dot
					size="large"
					dot-color="#D19D34"
					:height="isMobile ? '' : '150px'"
					icon="mdi-cash-plus"
				>
					<h3 class="bonus__subtitle_orange">Оплачивайте бонусами</h3>
					<p>Когда вернетесь к нам снова, сможете оплатить ими любые наши услуги.</p>
				</v-timeline-item>
			
			</v-timeline>
			<v-btn @click="openLoginModal('LOGIN')" class="bonus__btn" variant="flat" color="#D19D34">Зарегестрироваться</v-btn>
		
		</div>
		
	</div>
 
</template>

<style lang="scss" scoped>

    .bonus {
        margin-top: 32px;
	    background: #1e1e1e;
	    padding: 32px 0;
	    
	    
        &__subtitle {
            font-size: 20px;
            &_orange {
                color: #D19D34;
            }
            &_white {
                margin-bottom: 16px;
	            margin-top: 8px;
            }
        }
	    
	    &__btn {
		    margin-top: 16px;
	    }
    }

    .mb {
        margin-bottom: 16px;
    }

    .v-timeline--vertical.v-timeline {
        height: auto !important;
    }



</style>