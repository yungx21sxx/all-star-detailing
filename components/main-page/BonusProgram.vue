<script setup lang="ts">

	import {mdiAccountCheckOutline, mdiCarWash, mdiCashPlus} from "@mdi/js";
    
    const { isMobile } = useDevice()
    const { openLoginModal } = useModal()

</script>

<template>
	<div class="bonus">
		
		<div class="wrapper">
				<h2 class="bonus__title title">Бонусная программа</h2>
				<div class="under-line mb-6"></div>
				<p class="bonus__subtitle bonus__subtitle_white">Начислим <strong>1000 бонусов</strong> при регистрации и вернем <strong>5% </strong> от суммы заказа</p>
				<h3 class="bonus__subtitle  mb">Как это работает?</h3>
				
				<v-timeline
					class="timeline_desktop"
					side="end"
					align="start"
					direction="horizontal"
				>
					<v-timeline-item
						class="timeline-item"
						size="large"
						fill-dot
						dot-color="#f1aa34"
				
						:icon="mdiAccountCheckOutline"
					>
						
						<h3 class="bonus__subtitle_orange">Зарегестрируйтесь у нас на сайте</h3>
						<p>Каждая оказанная услуга приносит вам бонусные баллы, которые начислятся на ваш аккаунт.<br> (1 бонус = 1 рубль)</p>
					</v-timeline-item>
					<v-timeline-item
						fill-dot
						size="large"
						dot-color="#f1aa34"
						:icon="mdiCarWash"
					>
						<h3 class="bonus__subtitle_orange">Запишитесь к нам на услуги</h3>
						<p>После того как мы выполним свою работу, вернем 5% от суммы оказаных услуг в виде боннусов.</p>
					</v-timeline-item>
					<v-timeline-item
						fill-dot
						size="large"
						dot-color="#f1aa34"
						:icon="mdiCashPlus"
					>
						<h3 class="bonus__subtitle_orange">Оплачивайте бонусами</h3>
						<p>Когда вернетесь к нам снова, сможете оплатить ими любые наши услуги.</p>
					</v-timeline-item>
				
				</v-timeline>
				<v-timeline
				class="timeline_mobile"
				side="end"
				align="start"
				direction="vertical"
			>
				<v-timeline-item
					class="timeline-item"
					size="large"
					fill-dot
					dot-color="#f1aa34"
					:icon="mdiAccountCheckOutline"
				>
					
					<h3 class="bonus__subtitle_orange">Зарегестрируйтесь у нас на сайте</h3>
					<p>Каждая оказанная услуга приносит вам бонусные баллы, которые начислятся на ваш аккаунт.<br> (1 бонус = 1 рубль)</p>
				</v-timeline-item>
				<v-timeline-item
					fill-dot
					size="large"
					dot-color="#f1aa34"
					:icon="mdiCarWash"
				>
					<h3 class="bonus__subtitle_orange">Запишитесь к нам на услуги</h3>
					<p>После того как мы выполним свою работу, вернем 5% от суммы оказаных услуг в виде боннусов.</p>
				</v-timeline-item>
				<v-timeline-item
					fill-dot
					size="large"
					dot-color="#f1aa34"
					:icon="mdiCashPlus"
				>
					<h3 class="bonus__subtitle_orange">Оплачивайте бонусами</h3>
					<p>Когда вернетесь к нам снова, сможете оплатить ими любые наши услуги.</p>
				</v-timeline-item>
			
			</v-timeline>
			<v-btn @click="openLoginModal('LOGIN')" class="bonus__btn mt-8" variant="flat" color="#f1aa34">Зарегистрироваться</v-btn>
			
			</div>
	</div>
 
</template>

<style lang="scss" scoped>
	
	.timeline_desktop {
		display: grid;
	}

	.timeline_mobile {
		display: none;
	}
	
	p {
		color: rgba(255,255,255,.9);
	}
	
	@media screen and (max-width: 860px) {
		.timeline_desktop {
			display: none;
		}
		
		.timeline_mobile {
			display: grid;
			margin-left: -20px;
		}
	}
	
	
	strong {color: $accent}
    .bonus {
        margin-top: 44px;
	    background: #1e1e1e;
	    padding: 30px 0;
	    
        &__subtitle {
            
            &_orange {
                //color: #f1aa34;
				margin-bottom: 12px;
	            font-size: 18px;
	            font-weight: 600;
            }
            &_white {
	            font-size: 20px;
	            font-weight: 500;
                margin-bottom: 32px;
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