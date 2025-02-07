<script setup lang="ts">
import Banner from "~/components/main-page/Banner.vue";
import AboutUs from "~/components/main-page/AboutUs.vue";
import Advantages from "~/components/main-page/Advantages.vue";
import TopServices from "~/components/main-page/TopServices.vue";
import BonusProgram from "~/components/main-page/BonusProgram.vue";
import Complexes from "~/components/main-page/Complexes.vue";
import Review from "~/components/main-page/Review.vue";

const authUser = useAuthUser();


</script>

<template>
    <Banner/>
   
    <AboutUs />
    
    <VintersectAnimation>
	    <Advantages />
    </VintersectAnimation>
   
    <VintersectAnimation>
	    <TopServices />
    </VintersectAnimation>
    <BonusProgram id="bonus"/>
    <VintersectAnimation>
	    <Complexes />
    </VintersectAnimation>
    <ContactsBlock class="wrapper mt-12"/>
    <VLazy transition="fade">
	    <Review class="mt-12"/>
    </VLazy>
</template>

<style lang="scss">


</style>