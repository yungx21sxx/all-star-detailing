<template>
    <div class="about wrapper block">
	    <div class="desc">
		    <h2 class="title">Профессинальный детейлинг по доступным ценам</h2>
		    <div class="under-line"></div>
		    <p class="mb-6">Мы предлагаем полный спектр услуг по детейлингу автомобилей в Санкт-Петербурге. Наша студия оснащена новейшим оборудованием для профессиональной полировки кузова, нанесения керамических покрытий и тщательной чистки интерьера.</p>
		    <div class="advantages">
			    <div class="advantage">
				    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M25.6673 9.5V15.3333C25.6673 20 23.334 22.3333 18.6673 22.3333H18.084C17.7223 22.3333 17.3723 22.5083 17.1507 22.8L15.4007 25.1333C14.6307 26.16 13.3707 26.16 12.6007 25.1333L10.8507 22.8C10.664 22.5433 10.2323 22.3333 9.91732 22.3333H9.33398C4.66732 22.3333 2.33398 21.1667 2.33398 15.3333V9.5C2.33398 4.83333 4.66732 2.5 9.33398 2.5H14.0007" stroke="#F1AA34" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
					    <path d="M17.7324 5.55676C17.3474 4.40176 17.8024 2.97843 19.0624 2.58176C19.7157 2.38343 20.5324 2.54676 20.999 3.16509C21.4424 2.52343 22.2824 2.38343 22.9357 2.58176C24.1957 2.96676 24.6507 4.40176 24.2657 5.55676C23.6707 7.38843 21.5824 8.33343 20.999 8.33343C20.4157 8.33343 18.3507 7.40009 17.7324 5.55676Z" stroke="#F1AA34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					    <path d="M18.6629 13.0001H18.6733" stroke="#F1AA34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					    <path d="M13.9949 13.0001H14.0054" stroke="#F1AA34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					    <path d="M9.32693 13.0001H9.3374" stroke="#F1AA34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				    </svg>
				    <span>100+ довольных клиентов</span>
			    </div>
			    <div class="advantage">
				    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M10.2887 3.46675C10.0096 3.57075 9.73617 3.68385 9.46837 3.80605M26.3333 20.7581C26.4659 20.4703 26.5881 20.1774 26.6999 19.8792M23.4486 24.7412C23.6722 24.5332 23.8875 24.317 24.0947 24.0925M19.2496 27.3504C19.5018 27.255 19.7501 27.1523 19.9945 27.0423M15.2027 28.159C14.9028 28.1694 14.6021 28.1694 14.3005 28.159M9.52297 27.0487C9.7587 27.1553 9.99747 27.2542 10.2393 27.3452M5.47477 24.164C5.65157 24.3521 5.83487 24.535 6.02467 24.7127M2.82277 19.9312C2.9207 20.1878 3.026 20.4404 3.13867 20.6891M2.00637 15.8232C1.99788 15.552 1.99788 15.2806 2.00637 15.0094M2.81237 10.9248C2.90857 10.6709 3.01257 10.4209 3.12437 10.1747M5.45267 6.69075C5.64074 6.48968 5.8353 6.29512 6.03637 6.10705M16.9499 15.1667C16.9499 15.5524 16.8355 15.9294 16.6212 16.2501C16.407 16.5708 16.1024 16.8207 15.7461 16.9683C15.3898 17.1159 14.9977 17.1545 14.6194 17.0793C14.2412 17.004 13.8937 16.8183 13.621 16.5456C13.3483 16.2729 13.1626 15.9254 13.0873 15.5472C13.0121 15.1689 13.0507 14.7768 13.1983 14.4205C13.3459 14.0642 13.5958 13.7597 13.9165 13.5454C14.2372 13.3311 14.6142 13.2167 14.9999 13.2167M16.9499 15.1667C16.9499 14.6496 16.7444 14.1536 16.3787 13.7879C16.013 13.4222 15.517 13.2167 14.9999 13.2167M16.9499 15.1667H20.1999M14.9999 13.2167V7.36675M27.9999 15.1667C27.9999 7.98685 22.1798 2.16675 14.9999 2.16675" stroke="#F1AA34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
				    </svg>
				    <span>Четкое соблюдение сроков</span>
			    </div>
		    
		    </div>
		    <v-lazy :min-height="157">
				    <iframe class="review__yandex" style="width:100%;border: 0 solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/181191680424?comments"></iframe>
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
    </div>
</template>
<script setup lang="ts">
	import {mdiArrowRight} from "@mdi/js";
	
	const {openLoginModal, openSubmitModal} = useModal();
	const videoLoaded = ref(false);
	const hasIntersected = ref(false);
	const frameLoaded = ref(false)
	
	
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
</script>


<style scoped lang="scss">
.about {
	display: grid;
	grid-template-columns: 1.2fr 1fr;
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
		height: 550px;
		object-fit: cover; /* Обрезает видео по размеру контейнера */
		top: 0;
		left: 0;
	}
	
	.video-placeholder {
		height: 550px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.review__yandex {
		height: 125px;
		margin-top: 32px;
	}
	
	@media screen and (max-width: 700px){
		grid-template-columns: 1fr;
		gap: 40px;
		
		.video {
			justify-self: center;
			height: 60vh;
			
			width: 100%;
			border-radius: 0;
		}
		.video-container {
			margin: 0 -20px;
		}
		
		.video-placeholder {
			height: 60vh;
			width: 100%;
		}
	}
}
</style>