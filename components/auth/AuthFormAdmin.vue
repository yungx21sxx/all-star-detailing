<script lang="ts" setup>
const emit = defineEmits(['success'])

const { login } = useAuth()

const form = reactive({
	data: {
		login: '',
		password: '',
	},
	error: '',
	pending: false,
})

async function onLoginClick() {
	try {
		form.error = ''
		form.pending = true
		
		await login(form.data, 'ADMIN')
		
		await navigateTo({
			path: '/admin/clients',
		})
		// emit('success')
	}
	catch (error: any) {
		console.error(error)
		
		if (error.data.message)
			form.error = error.data.message
	}
	finally {
		form.pending = false
	}
}
</script>

<template>
<form @submit.prevent="onLoginClick" class="form">
	<v-text-field v-model="form.data.login" type="text" label="Логин" required variant="outlined"/>
	<v-text-field v-model="form.data.password" type="password" label="Пароль" required variant="outlined"/>
	<v-btn
		type="submit"
		:loading="form.pending"
		width="100%"
		class="mt-4"
		color="primary"
	>
		Войти
	</v-btn>
	<v-alert class="mt-6" type="error" v-if="form.error" :text="form.error" />
</form>
</template>


<style lang="scss" scoped>

form {
	padding: 24px;
	max-width: 500px;
	margin: 50px auto;
}

</style>