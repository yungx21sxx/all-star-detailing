<script setup lang="ts">
	import useTelegram from "~/composables/UseTelegram";
	
	const form = ref(null);
	
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
	
	const masks = ref({
		modelValue: 'YYYY-MM-DD',
	});
	
	const rules = {
		required: (value) => !!value || "Обязательное поле",
	};
	
	const today = new Date();
	const formDataSubmitDefault = {
		date: new Date(),
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
	
	function completeRequest() {
		btnText.value = 'Заявка отправлена'
		setTimeout(() => {
			formDataRequestForCall.value = {...formDataRequestForCallDefault}
			formDataSubmit.value = {...formDataSubmitDefault}
			btnText.value = 'Отправить заявку'
			closeSubmitModal()
		}, 400)
	}
	
	async function requestForSubmit() {
		const { valid } = await form.value.validate();
		if (!valid || !currentService.value) return;
		const {date, phone, name} = formDataSubmit.value;
		await fetchForRegistrationData(date, phone, name, currentService.value)
		completeRequest()
	}
	
	async function requestForCall() {
		await fetchForCallData(formDataRequestForCall.value)
		completeRequest()
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
			<v-form class="modal__form" @submit.prevent="requestForSubmit" ref="form">
				<p class="modal__text">
					Оставьте свои данные и напишите, что вас интересует. Вам перезвонит первый освободившийся специалист.
				</p>
				
				<PhoneInput
					variant="outlined"
					v-model="formDataSubmit.phone"
					:rules="[rules.required]"
					class="mb-3"
				/>
				
				<v-text-field
					label="Как Вас зовут?*"
					variant="outlined"
					density="compact"
					v-model="formDataSubmit.name"
					color="#c93"
					:rules="[rules.required]"
					class="mb-3"
				></v-text-field>
				
				<v-select
					label="Выберите услугу или комплекс"
					:items="allServices"
					item-title="title"
					variant="outlined"
					density="compact"
					color="#c93"
					v-model="currentService"
					class="mb-3"
					:rules="[rules.required]"
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
						:rules="[rules.required]"
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
			</v-form>
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