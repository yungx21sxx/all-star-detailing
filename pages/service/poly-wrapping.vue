<script setup lang="ts">
import type {IPriceTable} from "~/types/client";
import {PRICE_TABLE} from "~/data/services.data";
import {mdiArrowRight, mdiCheckCircleOutline} from "@mdi/js";

const {isMobileOrTablet} = useDevice();

const {openSubmitModal, openLoginModal} = useModal();
	
const gallery = [
	'/poly-wrapping/slider/1.webp',
	'/poly-wrapping/slider/6.webp',
	'/poly-wrapping/slider/5.jpeg',
	'/poly-wrapping/slider/10.jpeg',
	'/poly-wrapping/slider/14.webp',
	'/poly-wrapping/slider/40.webp',
	'/poly-wrapping/slider/13.webp',
	'/poly-wrapping/slider/24.webp',
	'/poly-wrapping/slider/19.webp',
];

const frameLoaded = ref(false);
	
	useSeoMeta({
		title: 'Защитная пленка на авто в СПб | Антигравийное бронирование кузова «под ключ» | All-Star Detailing',
		description: '🛡️Самые доступные цены на защитную пленку в Санкт-Петербурге! Защита кузова от сколов и царапин без переплат. Гарантия 3 года, только сертифицированные пленки. Бесплатный расчет + скидка 5% новым клиентам!',
		ogTitle: 'Защитная пленка на авто в СПб | Антигравийное бронирование кузова «под ключ» | All-Star Detailing',
		ogDescription: '🛡️Самые доступные цены на защитную пленку в Санкт-Петербурге! Защита кузова от сколов и царапин без переплат. Гарантия 3 года, только сертифицированные пленки. Бесплатный расчет + скидка 5% новым клиентам!',
		ogImage: 'https://all-star-detailing.ru/poly-wrapping/banner.webp',
		ogSiteName: 'All Star Detailing',
		ogType: 'website',
		ogLocale: 'ru_RU',
	})

useSchemaOrg([
	defineBreadcrumb({
		itemListElement: [
			{ name: 'Главная', item: 'https://all-star-detailing.ru' },
			{ name: 'Защитные пленки', item: 'https://all-star-detailing.ru/service/poly-wrapping' },
		]
	}),
])
	
	const scrollBottom = () => {
		window.scroll(0, window.innerHeight - 50)
	}
	const jumpToPriceInfo = () => {
		const bonusBlock =  document.querySelector('#price')
		const rect = bonusBlock?.getBoundingClientRect()
		const priceCords = rect.top + window.scrollY - 50;
		window.scroll(0, priceCords - 100)
	}
	
	const priceTable: IPriceTable | undefined = PRICE_TABLE.find(table => table.serviceID === 'poly-wrapping');
	const videoLoaded = ref(false);
	const hasIntersected = ref(false)


function loadVideo() {
	const video = document.querySelector('#videoPlayer') as HTMLVideoElement | null;
	
	if (!video) {
		console.error('Video element not found');
		return;
	}
	
	video.src = '/videos/video.mp4'
	
	video.addEventListener('loadeddata', () => {
		videoLoaded.value = true
		video.play()
	})
	
	video.addEventListener('error', () => {
		console.error('Error loading video')
		// Можно добавить обработку ошибок
	})
	
	video.load()
}

function handleIntersection(entries, observer) {
	hasIntersected.value = true
	loadVideo()
}

const carParts = new Map<string, number>([
	["Фара передняя, 2 шт", 5000],
	["Капот", 17000],
	["Бампер передний", 18000],
	["Зеркало, 2 шт", 6000],
	["Полоса на крышу", 3000],
	["Наружные пороги, 2 шт", 14000],
	["Крыло переднее, 2 шт", 20000],
	
	["Бампер задний", 18000],
	
	["Дверь передняя, 2 шт", 25000],
	["Дверь задняя, 2 шт", 25000],
	["Крышка багажника", 14000],
	["Крыло заднее, 2 шт", 50000],
	["Стойки лобового", 5000],
	["Ниша под ручками, 2 шт", 2000]
]);
const carPartsArray = computed(() => Array.from(carParts.entries()));

const firstHalf = computed(() => carPartsArray.value.slice(0, Math.ceil(carPartsArray.value.length / 2)));
const secondHalf = computed(() => carPartsArray.value.slice(Math.ceil(carPartsArray.value.length / 2)));

</script>

<template>
	<HeroSectionBackground
		url="/poly-wrapping/banner.webp"
		:overlay="{
			from: 'rgba(0,3,7,.7)',
			to: 'rgba(0,3,7,.5)'
		}"
		:adaptive="{
			url: '/poly-wrapping/banner.webp',
			maxWidth: 600,
			overlay: {
				from: 'rgba(0,3,7,.5)',
				to: 'rgba(0,3,7,.6)'
			}
		}"
		class="banner block-end-margin"
	>
		<div class="banner__btn btn" v-ripple @click="jumpToPriceInfo">
			<span>Смотреть цены</span>
			<v-icon class="btn__icon" :icon="mdiArrowRight"></v-icon>
		</div>
		<h1 class="banner__title">Оклейка авто <br> защитной пленкой <br> в Санкт-Петербурге</h1>
		<div class="under-line"></div>
		<p class="banner__text">
			Полиуретановые пленки высочайшего качества, надежная защита кузова автомабиля с гарантией <br>
			<strong>3 года!</strong>
		</p>
		<v-btn variant="flat" color="#f1aa34" @click="openSubmitModal('Оклейка защитной пленкой')">Записаться на
			услугу
		</v-btn>
	</HeroSectionBackground>
	<main class="service">
		<VintersectAnimation class="wrapper price block-end-margin block" id="price">
			<h1 class="title">Цены на оклейку пленкой</h1>
			<div class="under-line mb-6"></div>
			<p class="subtitle mb-6">Начислим <strong>1000 бонусов</strong> при регистрации и вернем <strong>5%</strong>
				от суммы заказа</p>
			<v-btn @click="openLoginModal('INFO')" class="mb-8" variant="outlined" color="#f1aa34"
			       :append-icon="mdiArrowRight">Подробнее
			</v-btn>
			<div class="price__grid">
				<div class="card card1" itemscope itemtype="https://schema.org/Product">
					<h3 class="card__title" itemprop="name">Передняя часть</h3>
					<div class="card__price">
      <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        от <span itemprop="price">30 000</span> ₽
        <meta itemprop="priceCurrency" content="RUB">
      </span>
					</div>
					<div class="card__time">
						Выполним за <span itemprop="productionTime">2 дня</span>
					</div>
					<v-divider/>
					<div class="card__description" itemprop="description">
						Передняя часть/зоны риска: Бампер, капот, крылья, фары, полоса над лобовым, стойки лобового
						стекла, зеркала.
					</div>
				</div>
				
				<div class="card card2" itemscope itemtype="https://schema.org/Product">
					<h3 class="card__title" itemprop="name">Оклейка всего кузова</h3>
					<div class="card__price">
      <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        от <span itemprop="price">170 000</span> ₽
        <meta itemprop="priceCurrency" content="RUB">
      </span>
					</div>
					<div class="card__time">
						Выполним за <span itemprop="productionTime">8 дней</span>
					</div>
					<v-divider/>
					<div class="card__description" itemprop="description">
						<ul class="card__list">
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>капот полностью с подворотами по периметру</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>фары и ПТФ</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>передние крылья полностью с подворотами в зону колесной арки и по периметру</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>передний бампер</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>зеркала</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>4 двери полностью</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>задний бампер</span>
							</li>
							<li class="list-item">
								<v-icon :icon="mdiCheckCircleOutline" color="#f1aa34"/>
								<span>задние крылья полностью со стойками</span>
							</li>
						</ul>
					</div>
				</div>
				
				<div class="card card3" itemscope itemtype="https://schema.org/Product">
					<h3 class="card__title" itemprop="name">Оклейка фар</h3>
					<div class="card__price">
      <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        от <span itemprop="price">5 000</span> ₽
        <meta itemprop="priceCurrency" content="RUB">
      </span>
					</div>
					<div class="card__time">
						Выполним за <span itemprop="productionTime">1 час</span>
					</div>
				</div>
			</div>
			<p class="text mb-6">// Цена зависит класса автомобиля и производителя пленки. Запишитесь на услугу для
				получения
				бесплатной консультации</p>
			<v-btn @click="openSubmitModal('Оклейка защитной пленкой')" class="mb-8" variant="outlined" color="#f1aa34"
			       :append-icon="mdiArrowRight">Записаться на
				услугу
			</v-btn>
			<div class="tables-grid">
				<v-table class="poly-table">
					<tbody>
					<tr v-for="([name, price], index) in firstHalf" :key="'first-' + index" itemscope
					    itemtype="https://schema.org/Product">
						<td itemprop="name">{{ name }}</td>
						<td>
        <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          от <span itemprop="price">{{ price.toLocaleString() }}</span> ₽
          <meta itemprop="priceCurrency" content="RUB">
        </span>
						</td>
					</tr>
					</tbody>
				</v-table>
				
				<v-table class="poly-table">
					<tbody>
					<tr v-for="([name, price], index) in secondHalf" :key="'second-' + index" itemscope
					    itemtype="https://schema.org/Product">
						<td itemprop="name">{{ name }}</td>
						<td>
        <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          от <span itemprop="price">{{ price.toLocaleString() }}</span> ₽
          <meta itemprop="priceCurrency" content="RUB">
        </span>
						</td>
					</tr>
					</tbody>
				</v-table>
			</div>
		
		</VintersectAnimation>
		<VintersectAnimation class="gallery block-end-margin block">
			<div class="wrapper">
				<h1 class="title">Фото процесса работы</h1>
				<div class="under-line"></div>
			</div>
			<div class="wrapper gallery__slider">
				<UISliderMultiply :photos="gallery"  mobile-height="380px" desktop-height="500px">
					<template #action>
						<v-btn color="#f1aa34" to="/portfolio" :append-icon="mdiArrowRight">Смотреть портфолио</v-btn>
					</template>
				</UISliderMultiply>
			</div>
		</VintersectAnimation>
		<VintersectAnimation class="wrapper about block-end-margin block">
			<div class="desc">
				<h2 class="title">Професиональная оклейка пленкой по доступным ценам</h2>
				<div class="under-line"></div>
				<p class="mb-6">Мы наносим полиуретановые и виниловые пленки высочайшего качества, что делает их не
					только надежным способом защиты, но и украшением для кузова любого автомобиля.</p>
				<div class="advantages">
					<div class="advantage">
						<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M25.6673 9.5V15.3333C25.6673 20 23.334 22.3333 18.6673 22.3333H18.084C17.7223 22.3333 17.3723 22.5083 17.1507 22.8L15.4007 25.1333C14.6307 26.16 13.3707 26.16 12.6007 25.1333L10.8507 22.8C10.664 22.5433 10.2323 22.3333 9.91732 22.3333H9.33398C4.66732 22.3333 2.33398 21.1667 2.33398 15.3333V9.5C2.33398 4.83333 4.66732 2.5 9.33398 2.5H14.0007"
								stroke="#F1AA34" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
								stroke-linejoin="round"/>
							<path
								d="M17.7324 5.55676C17.3474 4.40176 17.8024 2.97843 19.0624 2.58176C19.7157 2.38343 20.5324 2.54676 20.999 3.16509C21.4424 2.52343 22.2824 2.38343 22.9357 2.58176C24.1957 2.96676 24.6507 4.40176 24.2657 5.55676C23.6707 7.38843 21.5824 8.33343 20.999 8.33343C20.4157 8.33343 18.3507 7.40009 17.7324 5.55676Z"
								stroke="#F1AA34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M18.6629 13.0001H18.6733" stroke="#F1AA34" stroke-width="2" stroke-linecap="round"
							      stroke-linejoin="round"/>
							<path d="M13.9949 13.0001H14.0054" stroke="#F1AA34" stroke-width="2" stroke-linecap="round"
							      stroke-linejoin="round"/>
							<path d="M9.32693 13.0001H9.3374" stroke="#F1AA34" stroke-width="2" stroke-linecap="round"
							      stroke-linejoin="round"/>
						</svg>
						<span>100+ довольных клиентов</span>
					</div>
					<div class="advantage">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.2887 3.46675C10.0096 3.57075 9.73617 3.68385 9.46837 3.80605M26.3333 20.7581C26.4659 20.4703 26.5881 20.1774 26.6999 19.8792M23.4486 24.7412C23.6722 24.5332 23.8875 24.317 24.0947 24.0925M19.2496 27.3504C19.5018 27.255 19.7501 27.1523 19.9945 27.0423M15.2027 28.159C14.9028 28.1694 14.6021 28.1694 14.3005 28.159M9.52297 27.0487C9.7587 27.1553 9.99747 27.2542 10.2393 27.3452M5.47477 24.164C5.65157 24.3521 5.83487 24.535 6.02467 24.7127M2.82277 19.9312C2.9207 20.1878 3.026 20.4404 3.13867 20.6891M2.00637 15.8232C1.99788 15.552 1.99788 15.2806 2.00637 15.0094M2.81237 10.9248C2.90857 10.6709 3.01257 10.4209 3.12437 10.1747M5.45267 6.69075C5.64074 6.48968 5.8353 6.29512 6.03637 6.10705M16.9499 15.1667C16.9499 15.5524 16.8355 15.9294 16.6212 16.2501C16.407 16.5708 16.1024 16.8207 15.7461 16.9683C15.3898 17.1159 14.9977 17.1545 14.6194 17.0793C14.2412 17.004 13.8937 16.8183 13.621 16.5456C13.3483 16.2729 13.1626 15.9254 13.0873 15.5472C13.0121 15.1689 13.0507 14.7768 13.1983 14.4205C13.3459 14.0642 13.5958 13.7597 13.9165 13.5454C14.2372 13.3311 14.6142 13.2167 14.9999 13.2167M16.9499 15.1667C16.9499 14.6496 16.7444 14.1536 16.3787 13.7879C16.013 13.4222 15.517 13.2167 14.9999 13.2167M16.9499 15.1667H20.1999M14.9999 13.2167V7.36675M27.9999 15.1667C27.9999 7.98685 22.1798 2.16675 14.9999 2.16675"
								stroke="#F1AA34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<span>Четкое соблюдение сроков</span>
					</div>
				
				</div>
				<v-lazy :min-height="157">
					<iframe class="review__yandex"
					        style="width:100%;border: 0 solid #e6e6e6;border-radius:8px;box-sizing:border-box"
					        src="https://yandex.ru/maps-reviews-widget/181191680424?comments"></iframe>
				</v-lazy>
			</div>
			<div v-intersect.once="handleIntersection" class="video-container">
				<v-fade-transition>
					<video
						id="videoPlayer"
						v-show="videoLoaded"
						class="video"
						autoplay
						muted
						loop
						playsinline
					></video>
				</v-fade-transition>
				
				<div v-if="!videoLoaded" class="video-placeholder">
					<v-progress-circular
						color="#f1aa34"
						indeterminate
						size="50"
					/>
				</div>
			</div>
		</VintersectAnimation>
	
		<VintersectAnimation class="wrapper advantages block-end-margin block">
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
						<p class="advantage__text">Гарантия на материалы и <br> работу — 3 года</p>
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
						<p class="advantage__text">Только сертифицированные пленки</p>
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
		</VintersectAnimation>
	
		
		
		<VintersectAnimation>
			<CallSubmitForm/>
		</VintersectAnimation>
		<VintersectAnimation class="wrapper">
			<ContactsBlock/>
		</VintersectAnimation>
	</main>
	
</template>

<style scoped lang="scss">
$display-sm: 600px;

.video-placeholder {
	height: 650px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media screen and (max-width: 600px) {
		height: 400px;
	}
}


.banner {
	&__title {
		font-size: clamp(30px, 4vw, 46px);
		line-height: normal;
		max-width: 873px;
		font-weight: 600;
		margin-bottom: 16px;
	}
	
	.under-line {
		margin-bottom: 16px;
	}
	
	&__text {
		max-width: 560px;
		font-size: 20px;
		margin-bottom: 32px;
		
		strong {
			color: $accent;
		}
	}
	
	&__price {
		font-size: 30px;
		font-weight: 500;
		color: $accent;
	}
	
	&__time {
		margin-bottom: 16px;
	}
	
	.btn {
		border: 2px solid $accent;
		border-radius: 50px;
		width: fit-content;
		margin-bottom: 16px;
		
		span {
			color: $accent;
			font-size: 12px;
			font-weight: 500;
			padding: 6px 6px 6px 12px;
		}
		
		&__icon {
			color: $accent;
			padding-right: 6px;
		}
	}
	
	@media screen and (max-width: $display-sm) {
		&__text {
			font-size: 18px;
		}
		&__price {
			font-size: 24px;
			font-weight: 600;
		}
	}
}

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

.card {
	max-width: 100% !important;
	
	&__title {
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 8px;
	}
	
	&__price {
		color: $accent;
		font-size: 20px;
		margin-bottom: 12px;
	}
	
	&__time {
		font-weight: 500;
		margin-bottom: 12px;
	}
	
	&__description {
		margin-top: 16px;
	}
	
	.card__list {
		list-style: none;
		
		.list-item {
			display: flex;
			align-items: center;
			gap: 8px;
			margin-bottom: 12px;
			
		}
		
	}
	
	@media screen and (max-width: 600px) {
		&__title {
			font-size: 20px;
		}
		&__price {
			font-size: 20px;
		}
		&__time {
			font-weight: 400;
			margin-bottom: 12px;
		}
		&__description {
			font-size: 14px;
		}
	}
}

.text {
	margin-top: 24px;
	@media screen and (max-width: 600px){
		font-size: 14px;
	}
	color: #ACACAC;
}

.price__grid {
	display: grid;
	grid-template-areas:
			"one two"
			"three two";
	gap: 16px;
	
	.card1 {
		grid-area: one
	}
	
	.card2 {
		grid-area: two
	}
	
	.card3 {
		grid-area: three
	}
	
	@media screen and (max-width: 700px) {
		grid-template-areas:
			    "one"
				"two"
				"three";
	}
}

.tables-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
	
	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
	}
	
}


strong {
	color: $accent;
}

.about {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 44px;
	align-items: center;
	
	.advantages, .advantage {
		display: flex;
		align-items: center;
	}
	
	.advantage {
		gap: 8px;
	}
	
	.advantages {
		gap: 20px;
		flex-wrap: wrap;
	}
	
	.video {
		border-radius: 7px;
		width: 100%;
		height: 650px;
		object-fit: cover; /* Обрезает видео по размеру контейнера */
		top: 0;
		left: 0;
	}
	
	.review__yandex {
		height: 125px;
		margin-top: 32px;
	}
	
	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
		gap: 40px;
		
		.video {
			justify-self: center;
			height: 60vh;
			
			width: 100%;
			border-radius: 0;
		}
		.video-container {
			margin: 0 -16px;
		}
		
		.video-placeholder {
			height: 400px;
		}
	}
}
@media screen and (max-width: 600px){
	.gallery__slider {
		margin: 0 !important;
		padding: 0 !important;
	}
	
}
	
</style>