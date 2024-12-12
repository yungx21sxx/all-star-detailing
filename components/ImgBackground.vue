<template>
    <v-img
        :cover="true"
        :src="src"
        class="banner"
        transition="fade"
        :style="{
            height: height ? height : 'fit-content'
        }"
    >
        <div class="banner__overlay">
            <slot />
        </div>
    </v-img>
</template>

<script setup lang="ts">
    defineProps<{
        height?: string,
        src: string
    }>();
</script>

<style scoped lang="scss">
.banner {
    &__overlay {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .6);
    }
}

</style>