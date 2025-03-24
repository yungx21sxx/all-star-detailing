<script setup lang="ts">


</script>

<template>
	<div class="wrapper advantages block-end-margin block">
		<h2 class="title">ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС</h2>
		<div class="under-line"></div>
		<div class="advantages__grid">
			<VImg
				alt="Защитная пленка на авто в СПб | All-Star Detailing"
				cover
				class="advantages__card"
				src="/poly-wrapping/adv/1.webp"
				gradient="to bottom, rgba(0,0,0,0.25), rgba(0,0,0, 0.9)"
			>
				<div class="advantage__bottom">
					<img src="/poly-wrapping/icons/work.svg" class="advantage__icon"/>
					<p class="advantage__text">Опыт мастеров — 7+ лет, более 100 довольных клиентов</p>
				</div>
			</VImg>
			<VImg
				alt="Защитная пленка на авто в СПб | All-Star Detailing"
				cover
				class="advantages__card"
				src="/poly-wrapping/adv/2.webp"
				gradient="to bottom, rgba(0,0,0,0.25), rgba(0,0,0, 0.9)"
			>
				<div class="advantage__bottom">
					<img src="/poly-wrapping/icons/garanty.svg" class="advantage__icon"/>
					<p class="advantage__text">Гарантия на материалы и работу — 3 года</p>
				</div>
			</VImg>
			<VImg
				alt="Защитная пленка на авто в СПб | All-Star Detailing"
				cover
				class="advantages__card"
				src="/poly-wrapping/adv/3.webp"
				gradient="to bottom, rgba(0,0,0,0.25), rgba(0,0,0, 0.9)"
			>
				<div class="advantage__bottom">
					<img src="/poly-wrapping/icons/wrap.svg" class="advantage__icon"/>
					<p class="advantage__text">Лучшие материалы и составы</p>
				</div>
			</VImg>
			<VImg
				alt="Защитная пленка на авто в СПб | All-Star Detailing"
				cover
				class="advantages__card"
				src="/poly-wrapping/adv/4.webp"
				gradient="to bottom, rgba(0,0,0,0.25), rgba(0,0,0, 0.9)"
			>
				<div class="advantage__bottom">
					<img src="/poly-wrapping/icons/check.svg" class="advantage__icon"/>
					<p class="advantage__text">Бесплатная диагностика и уход после оклейки</p>
				</div>
			</VImg>
		</div>
	</div>

</template>

<style lang="scss" scoped>
.advantages {
	&__card {
		background-size: cover;
		border-radius: 7px;
		width: 100%;
		height: 300px;
		padding: 20px;
		align-items: flex-end;
	}
	
	&__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: 20px;
	}
	
	.advantage {
		&__icon {
			height: 45px;
			width: 45px;
			flex-shrink: 0;
		}
		
		&__bottom {
			display: flex;
			align-items: center;
			gap: 16px;
			
			p {
				font-size: 18px;
				font-weight: 400;
			}
		}
	}
	
	@media screen and (max-width: 600px) {
		&__grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}
		&__card {
			width: 100%;
			height: 190px;
			padding: 16px;
			align-items: center;
		}
		.advantage {
			&__icon {
				height: 50px;
				width: 50px;
			}
			
			&__bottom {
				display: flex;
				align-items: center;
				flex-direction: column;
				text-align: center;
				p {
					max-width: 85%;
					font-size: 16px;
					font-weight: 500;
				}
			}
		}
	}
}
	
   

</style>