<script setup lang="ts">
const initial = ref({
	y: 50,
	opacity: 0,
})

const enter = ref({
	y: 0,
	opacity: 1,
})

</script>
<template>
	<div
		v-motion
		:initial="initial"
		:visibleOnce="enter"
	>
		<slot/>
	</div>
</template>

<style scoped lang="scss">

</style>
