<script setup lang="ts">
import type {SetBalanceDTO, UserCreateDTO} from "~/types/dto";
	import type {UserResponse} from "~/types/response";
import {useAsyncData} from "#app";
	
	definePageMeta({
		layout: 'admin',
		middleware: ['admin-only'],
	})
	
	const { data: users } = await useAsyncData('users',
		() => $fetch('/api/user/get-users')
	)
	
	const phoneSearchStr = ref<string>('')
	const phoneStr = ref<string>('')
	const userCreateDefault: UserCreateDTO = {
		phone: '',
		phoneRow: '',
		balance: 0
	}
	const errorOfUserCreating = ref('')
	let userCreateForm = reactive<UserCreateDTO>(userCreateDefault);
	
	const searchedUsers = ref<UserResponse>(users.value);

	watch(phoneSearchStr, () => {
		if (phoneSearchStr.value !== '') {
			searchedUsers.value = users.value.filter(user => user.phoneRow.includes(phoneSearchStr.value))
		} else {
			searchedUsers.value = users.value
		}
	})
	
	const currentBalanceInput = ref<string>('')
	
	async function changeBalance(operationType: 'ADD' | 'TAKE', userId: number, currentUserBalance: number): Promise<void> {
		let newBalance: number = 0;
		
		if (currentBalanceInput.value === '') return;
		
		const transaction: number = parseInt(currentBalanceInput.value);
		
		if (operationType === 'TAKE' && currentUserBalance - transaction < 0) {
			return;
		}
		if (operationType === 'ADD') {
			newBalance = currentUserBalance + transaction;
		} else  {
			newBalance = currentUserBalance - transaction;
		}
		
		try {
			await useFetch('/api/user/set-balance', {
				method: 'POST',
				body: {
					newBalance,
					userId,
				} as SetBalanceDTO
			});
			currentBalanceInput.value = '';
			await refreshNuxtData('users');
			searchedUsers.value = users.value;
		} catch (e) {
			console.log(e);
		}
	}
	
	
	async function createUser() {
		const {phone, phoneRow, balance} = userCreateForm;
	
		const {error} = await useFetch('/api/user/create', {
			method: 'POST',
			body: {
				phone: `+7 ${phone}`,
				phoneRow,
				balance: parseInt(balance)
			}
		})
		if (error.value) {
			errorOfUserCreating.value = 'Польователь уже сущесвтует!'
			return;
		}
		errorOfUserCreating.value = '';
		userCreateForm = userCreateDefault;
		await refreshNuxtData('users');
		searchedUsers.value = users.value;
	}
	const setSearchPhoneStr = (phoneRow: string) => {
		phoneSearchStr.value = phoneRow
	}
	
	const setCreateFormPhoneRow = (phoneRow: string) => {
		userCreateForm.phoneRow = phoneRow
	}
	
</script>

<template>
	<div class="wrapper admin">
		<v-expansion-panels class="mb-4">
			<v-expansion-panel
				title="Создать польователя"
			>
				<v-expansion-panel-text>
					<form @submit.prevent="createUser">
						<phone-input class="mt-4" required v-model="userCreateForm.phone" @update-row-value="setCreateFormPhoneRow"/>
						<v-text-field label="Начислить бонусов" variant="outlined" density="compact" type="number" v-model="userCreateForm.balance"/>
						<p class="text-red mb-4" v-if="errorOfUserCreating !== ''">{{errorOfUserCreating}}</p>
						<v-btn type="submit" color="#c93">Создать пользователя</v-btn>
					</form>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
		<h1 class="title mb-4">Управление польователями</h1>
		<PhoneInput
			v-model="phoneStr"
			@update-row-value="setSearchPhoneStr"
		/>
		<v-expansion-panels>
			<v-expansion-panel
				v-for="user of searchedUsers"
				:key="user.id"
				:title="user.phone"
			>
				<v-expansion-panel-text>
					<div class="admin__user-info">
						<p class="admin__balance"><strong>Баланс:</strong> {{ user.balance }} бонусов</p>
						<p class="admin__text">Введите сумму снятия или пополнения баланса</p>
						<v-text-field label="Cумма" variant="outlined" density="compact" type="number" v-model="currentBalanceInput"/>
						<div class="admin__control">
							<v-btn color="#c93" @click="changeBalance('ADD', user.id, user.balance)">Пополнить</v-btn>
							<v-btn color="#c93" @click="changeBalance('TAKE', user.id, user.balance)">Снять</v-btn>
						</div>
					</div>
				</v-expansion-panel-text>
				
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<style scoped lang="scss">
	.admin {
		margin-top: 48px;
		
		&__user-info > * {
			margin-bottom: 8px;
		}
		
		&__balance {
			font-size: 20px;
			font-weight: bold;
			strong {color: $accent}
		}
		
		&__control {
			display: flex;
			gap: 10px;
		}
		
	}


</style>