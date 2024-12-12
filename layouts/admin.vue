<template>
	<v-app>
		<div class="wrapper wrapper_admin">
			<slot/>
		</div>
		<v-bottom-navigation
			v-model="currentPage"
		>
			<v-btn value="logout" @click="logout">
				<v-icon>mdi-logout</v-icon>
				<span>Logout</span>
			</v-btn>
			<v-btn value="clients" href="/">
				<v-icon>mdi-home</v-icon>
				<span>Назад</span>
			</v-btn>
			<v-btn value="clients" href="/admin/clients" :active=" route.fullPath === '/admin/clients' ">
				<v-icon>mdi-account-edit</v-icon>
				<span>Пользователи</span>
			</v-btn>
			<v-btn value="portfolio" href="/admin/portfolio" :active=" route.fullPath === '/admin/portfolio' ">
				<v-icon>mdi-car</v-icon>
				<span>Портфолио</span>
			</v-btn>
			
		</v-bottom-navigation>
	</v-app>
 

</template>

<script setup lang="ts">

	const { me } = useAuth()
	
	const route = useRoute();
	const linkParts = route.fullPath.split('/')
	const currentPage = ref<string>(
		linkParts[linkParts.length - 1]
	)
	async function logout() {
		await useFetch('/api/auth/logout');
		await me();
		navigateTo('/')
	}
</script>

<style scoped>
	.wrapper_admin {
		margin-bottom: 100px;
	}
</style>