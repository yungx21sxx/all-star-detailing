<script setup lang="ts">
const slideBottomAnimation = {
	visibleOnce: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 250,
			damping: 25,
			mass: 0.5,
			duration: 300,
			delay: 100
		},
	},
	initial: {
		y: 20,
		opacity: 0,
	}
	
}
</script>
<template>
	<div
		v-motion
		:initial="slideBottomAnimation.initial"
		:visibleOnce="slideBottomAnimation.visibleOnce"
	>
		<slot/>
	</div>
</template>

<style scoped lang="scss">

</style>
