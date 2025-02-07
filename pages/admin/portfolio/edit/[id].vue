<script setup lang="ts">
	definePageMeta({
		layout: 'admin',
		middleware: ['admin-only'],
	})
	
	const route = useRoute();
	
	const { data: car } = await useAsyncData('car',
		() => $fetch(`/api/portfolio/${route.params.id}`)
	)
	
	if (!car.value) {
		throw createError({ statusCode: 404, message: 'Car not found' })
	}
	
	const formData = useState('car-update');
	
	
	
	

</script>

<template>

</template>

<style scoped lang="scss">

</style>