<script setup lang="ts">
	import useTelegram from "~/composables/UseTelegram";
	
	const {closeSubmitModal, modalSubmitIsOpen, useCurrentService} = useModal();
	
	const currentService = useCurrentService()
	
	const {services, servicesCustom} = useServices();
	const {complexes} = useComplexes();
	
	const {fetchForCallData, fetchForRegistrationData} = useTelegram()
	
	const allServices = [
		...servicesCustom.map(service => ({
			title: service.title,
			id: service.id,
			subtitle: `Услуга, цена: ${service.price.text}`
		})),
		...services.map(service => ({
			title: service.title,
			id: service.id,
			subtitle: `Услуга, цена: ${service.price.text}`
		})),
		...complexes.map(complex => ({
			title: complex.title,
			id: complex.id,
			subtitle: `Комлекс, цена: ${complex.price.current}`
		}))
	]
	
	function getDate() {
		const today = new Date();
		
		const year = today.getFullYear();
		const month = (today.getMonth() + 1).toString().padStart(2, '0');
		const day = today.getDate().toString().padStart(2, '0');
		
		return `${year}-${month}-${day}`;
	}
	
	const masks = ref({
		modelValue: 'YYYY-MM-DD',
	});
	
	const today = new Date();
	const formDataSubmitDefault = {
		date: getDate(),
		phone: '',
		name: ''
	}
	const formDataRequestForCallDefault = {
		phone: '',
		name: ''
	}
	
	let formDataSubmit = ref({...formDataSubmitDefault});
	let formDataRequestForCall = ref({...formDataRequestForCallDefault})
	
	
	const type = ref<number>(1);
	const btnText = ref('Отправить заявку')
	
	function compliteRequest() {
		btnText.value = 'Заявка отправлена'
		setTimeout(() => {
			formDataRequestForCall.value = {...formDataRequestForCallDefault}
			formDataSubmit.value = {...formDataSubmitDefault}
			btnText.value = 'Отправить заявку'
			closeSubmitModal()
		}, 400)
	}
	
	async function requestForSubmit() {
		await fetchForRegistrationData({...formDataSubmit.value, chosenService: currentService.value})
		compliteRequest()
	}
	
	async function requestForCall() {
		await fetchForCallData(formDataRequestForCall.value)
		compliteRequest()
	}
	
</script>

<template>
<ModalLayout
	v-model="modalSubmitIsOpen"
	class="modal"
>
	<template #title>
		<h3 class="modal__title">Онлайн запись</h3>
	</template>
	<v-tabs
		v-model="type"
		align-tabs="center"
		color="#D19D34"
		center-active
	>
		<v-tab :value="1">Записаться</v-tab>
		<v-tab :value="2">Заказать звонок</v-tab>
	</v-tabs>
	<v-window v-model="type">
		<v-window-item :value="1">
			<form class="modal__form" @submit.prevent="requestForSubmit">
				<p class="modal__text">
					Оставьте свои данные и напишите, что вас интересует. Вам перезвонит первый
					освободившийся специалист.
				</p>
				<PhoneInput
					variant="outlined"
					required
					v-model="formDataSubmit.phone"
				/>
				<v-text-field
					label="Как Вас зовут?*"
					variant="outlined"
					density="compact"
					required
					v-model="formDataSubmit.name"
					color="#c93"
				></v-text-field>
				<v-select
					label="Выберите услугу или комлекс"
					:items="allServices"
					item-title="title"
					variant="outlined"
					density="compact"
					required
					color="#c93"
					v-model="currentService"
				>
					<template v-slot:item="{ props, item }">
						<v-list-item v-bind="props" :subtitle="item.raw.subtitle"></v-list-item>
					</template>
				</v-select>
				<div class="modal__date">
					<p>На какое число хотели бы записаться?</p>
					<DatePicker
						v-model="formDataSubmit.date"
						:min-date="today"
						:masks="masks"
						transparent
						borderless
						:is-dark="true"
					/>
				</div>
			
				<v-btn
					block
					class="modal__btn"
					color="#D19D34"
					size="large"
					type="submit"
				>
					{{ btnText }}
				</v-btn>
			</form>
		</v-window-item>
		<v-window-item :value="2">
			<form class="modal__form" @submit.prevent="requestForCall">
				<p class="modal__text">
					Оставьте свои данные и напишите, что вас интересует. Вам перезвонит первый
					освободившийся специалист.
				</p>
				<v-text-field
					label="Как Вас зовут?*"
					variant="outlined"
					density="compact"
					required
					v-model="formDataRequestForCall.name"
				></v-text-field>
				<PhoneInput
					variant="outlined"
					v-model="formDataRequestForCall.phone"
					required
				/>
				<v-btn
					block
					class="modal__btn"
					color="#D19D34"
					size="large"
					type="submit"
				>
					{{ btnText }}
				</v-btn>
			</form>
		</v-window-item>
	</v-window>
</ModalLayout>

</template>

<style scoped lang="scss">
.modal {
	&__form {
		padding: 8px 24px 48px 24px;
	}
	
	&__title {
		margin-left: 24px;
		color: $accent;
	}
	
	&__text {
		margin-bottom: 24px;
	}
	
	&__date {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	
}

</style>