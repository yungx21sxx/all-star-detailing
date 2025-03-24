<template>
    <NuxtLoadingIndicator color="#f1aa34"/>
    <NuxtLayout>
	    <NuxtPage :transition="{name: 'page', mode: 'out-in'}" />
	 
	    <ModalSubmit/>
	    <ModalLogin/>
	    <ModalLKPage/>
	    <MenuMobileModal/>
    </NuxtLayout>

</template>

<script setup lang="ts">


</script>

<style lang="scss">

@import "assets/main";




</style>