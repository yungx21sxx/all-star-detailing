<script setup lang="ts">
import useTelegram from "~/composables/UseTelegram";

const formDataRequestForCallDefault = {
	phone: '',
	name: '',
	question: null
}
const requestComplete = ref(false);
let formDataRequestForCall = ref({...formDataRequestForCallDefault})
const loading = ref(false);
const {fetchForCallData, fetchForRegistrationData} = useTelegram();


const rules = {
	required: (value) => !!value || "Обязательное поле",
};

const form = ref(null);

async function requestForCall() {
	const { valid } = await form.value.validate();
	if (!valid) return;
	try {
		loading.value = true;
		await fetchForCallData(formDataRequestForCall.value);
		requestComplete.value = true;
		formDataRequestForCall.value = {...formDataRequestForCallDefault};
	} catch (e) {
		console.log('Ошибка отправки заявки', e)
	} finally {
		loading.value = false
	}
}
</script>

<template>
	<div class="wrapper">
		<div class="submit-form">
			<v-form @submit.prevent="requestForCall" class="form" ref="form">
				<h2 class="title">Заявка на звонок</h2>
				<div class="under-line"></div>
				<p class="form__text mb-6 mt-4">
					Оставьте заявку и с вами свяжется первый
					освободившийся специалист.
				</p>
				<v-text-field
					label="Как Вас зовут?*"
					variant="outlined"
					density="compact"
					class="mb-2"
					:rules="[rules.required]"
					v-model="formDataRequestForCall.name"
				></v-text-field>
				<PhoneInput
					variant="outlined"
					class="mb-2"
					v-model="formDataRequestForCall.phone"
					:rules="[rules.required]"
				/>
				<v-textarea
					label="Вопрос (необязательно)"
					variant="outlined"
					density="compact"
					v-model="formDataRequestForCall.question"
				/>
				<v-btn
					block
					class="modal__btn"
					color="#f1aa34"
					type="submit"
					:loading="loading"
				>
					Отправить заявку
				</v-btn>
				<div class="complete mt-8" v-if="requestComplete">
					<v-alert
						type="success"
						title="Заявка отправлена"
						text="В ближайшее время с Вами свяжется наш специалист"
					></v-alert>
				</div>
			</v-form>
			<v-img src="/form.webp" class="img" cover/>
		</div>
	</div>
</template>

<style scoped lang="scss">

	.submit-form {
		margin-top: 44px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		background: #1E1E1E;
		border-radius: 7px;
		gap: 24px;
		.form {
			padding: 24px;
		}
		.img {
			height: 100%;
			width: 100%;
			border-radius: 0 7px 7px 0;
		}
		
		@media screen and (max-width: 900px){
			grid-template-columns: 1fr;
			
			.img {
				border-radius: 0 0 7px 7px;
				height: 300px;
			}
		}
	}

</style>