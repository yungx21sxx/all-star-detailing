<script setup lang="ts">
	const { complexes } = useComplexes()
    const { isMobile } = useDevice()
</script>

<template>
    <div class="wrapper complexes">
        <h2 class="title complexes__title">Комлексы услуг</h2>
        <p class="complexes__description">Выбирайте комплексы услуг в <br v-if="isMobile"/> All Star Detailing и экономьте!</p>
        <div class="grid">
            <CComplex
                v-for="complex of complexes"
                :complex="complex"
            />
        </div>
    </div>

</template>

<style scoped lang="scss">
    .complexes {
        margin-top: 32px;
		
	    &__title, &__description {
		    text-align: center;
	    }
        &__description {
            margin-bottom: 32px;
	        
	        font-size: 20px;
        }
	    
    }

</style>