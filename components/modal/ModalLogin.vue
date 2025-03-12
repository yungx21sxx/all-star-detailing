<script setup lang="ts">
	import {mdiClose} from "@mdi/js";
	
	const { modalLoginIsOpen, closeLoginModal, useCurrentLoginStep} = useModal();
	const {isMobile } = useDevice()
</script>

<template>
	<v-dialog
		v-model="modalLoginIsOpen"
		class="modal"
		:max-width="650"
		:fullscreen="isMobile"
	>
		<v-card>
			<v-toolbar>
				<v-toolbar-title>Бонусная программа</v-toolbar-title>
				<v-btn :icon="mdiClose" @click="closeLoginModal"/>
			</v-toolbar>
			<v-card-item>
				<AuthFormUser/>
			</v-card-item>
		</v-card>
	</v-dialog>

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