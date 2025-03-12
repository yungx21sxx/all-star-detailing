<script setup lang="ts">

import {
	mdiArrowBottomLeftBoldOutline,
	mdiArrowDownBoldCircleOutline,
	mdiArrowDownCircleOutline,
	mdiArrowRight,
	mdiChevronDown
} from "@mdi/js";



const props = defineProps<{
	url: string,
	overlay?: {from: string, to: string},
	adaptive?: { maxWidth: number; url: string; overlay?: {from: string, to: string} }
}>();


const scrollBottom = () => {
	window.scroll(0, window.innerHeight - 50)
}

</script>

<template>
	<header
		class="hero"
		:style="{
	        '--hero-bg': `url('${props.url}')`,
	      '--hero-overlay-from': props.overlay?.from || 'rgba(0, 0, 0, 0.6)',
	      '--hero-overlay-to': props.overlay?.to || 'rgba(0, 0, 0, 0.2)',
	      '--adaptive-bg': `url('${props.adaptive?.url || props.url}')`,
	      '--adaptive-overlay-from': props.adaptive?.overlay?.from || props.overlay?.from || 'rgba(0, 0, 0, 0.6)',
	      '--adaptive-overlay-to': props.adaptive?.overlay?.to || props.overlay?.to || 'rgba(0, 0, 0, 0.2)',
	      '--adaptive-min-width': `${props.adaptive?.maxWidth || 600}px`
    }"
	>
		<div class="hero__overlay">
			<div class="hero__body">
				<MenuMain class="hero__nav"/>
				<div class="wrapper" >
					<div class="hero__content">
						<slot/>
					</div>
					<div class="hero__bottom">
						<v-btn variant="text" size="50px" density="default" :icon="mdiArrowDownCircleOutline" icon="true" @click="scrollBottom" color="#fff" aria-label="Name">
						</v-btn>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
.hero {
	width: 100%;
	height: 100svh;
	background: #000;
	
	&__body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		position: relative;
		background: linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-to));
	}
	
	&__bottom {
		position: absolute;
		bottom: 8px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}
	
	&__content {
		opacity: 0;
		transform: translateX(100px);
		animation: slideInSmooth 0.6s cubic-bezier(0.25, 1, 0.3, 1) 0.2s forwards;
	}
	
	@keyframes slideInSmooth {
		0% {
			opacity: 0;
			transform: translateX(100px);
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	
	&__overlay {
		height: 100%;
		width: 100%;
		background: var(--hero-bg) no-repeat center/cover;
		animation: fadeIn 0.5s ease-in-out forwards;
		opacity: 0;
		
		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
	
	&__nav {
		position: absolute;
		top: 0;
		z-index: 10;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100px; // Высота затемнения
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
			pointer-events: none;
		}
	}
}

@media (max-width: 600px) {
	.hero__overlay {
		background: var(--adaptive-bg) no-repeat center/cover;
	}
	
	.hero__body {
		background: linear-gradient(to bottom, var(--adaptive-overlay-from), var(--adaptive-overlay-to));
	}
}
</style>