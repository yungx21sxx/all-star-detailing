<script setup lang="ts">
	const { modalLoginIsOpen, closeLoginModal, useCurrentLoginStep} = useModal();
	
	const currentLoginStep = useCurrentLoginStep();
	const currentStep = ref<number>(1);
	const nextStep = () => {
		currentStep.value += 1;
	}
	
	watch(modalLoginIsOpen, () => {
		if (!modalLoginIsOpen.value) {
			currentStep.value = 1;
		}
	})
	//
	// watch(currentLoginStep, () => {
	// 	if (currentLoginStep.value === 'LOGIN') {
	// 		currentStep.value = 2
	// 	} else {
	// 		currentStep.value = 1
	// 	}
	// })
	//
	const isMobile = true;
</script>

<template>
	<ModalLayout
		v-model="modalLoginIsOpen"
		class="modal"
	>
		<template #title>
			<h3 class="modal__title">Бонусная программа</h3>
		</template>
		<div class="modal__menu">
			<AuthFormUser/>
		</div>
		
		
	</ModalLayout>

</template>

<style scoped lang="scss">



.bonus {

	

	
	&__subtitle {
		font-size: 20px;
		&_orange {
			color: #f1aa34;
		}
		&_white {
			margin-bottom: 16px;
		}
	}
	
	&__btn {
		//margin-top: 16px;
	}
}

.mb {
	//margin-bottom: 16px;
}

.v-timeline--vertical.v-timeline {
	height: auto !important;
}


.modal  {
	&__btn {
		display: block;
		width: 100%;
		margin-top: 16px;
	}
	&__title {
		margin-left: 24px;
	}
	
	&__text {
		margin-bottom: 24px;
		
		&_gray {
			text-align: center;
			font-size: 14px;
			color: rgb(163,163,163);
		}
	}
	
	&__control {
		margin: 24px;
		display: flex;
		justify-content: space-between;
		
		&_phone button {
			margin-left: auto;
		}
	}
	&__menu {
		padding: 0 24px 24px 24px;
	}
	&__btn {
		
		margin-bottom: 16px;
	}
		
}

</style>