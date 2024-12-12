<script setup lang="ts">

    const modelValue = defineModel<boolean>()
    const { isMobile, isTablet } = useDevice()
    const fullScreen: boolean = isMobile || isTablet


    const isOpen = computed<boolean>({
        get() {
            return modelValue.value
        },
        set(newValue) {
            if (!newValue) close()
            modelValue.value = newValue
        }
    })

    const resetScrollSmooth = () => {
        const html: HTMLElement = document.querySelector('html')
        html.style.scrollBehavior = 'auto'
        setTimeout(() => {
            html.style.scrollBehavior = 'smooth'
        }, 500)
    }

    const close = () => {
        resetScrollSmooth()
        modelValue.value = false
    }
</script>

<template>
    <v-dialog
        :fullscreen="fullScreen"
        :class="['modal', fullScreen ? 'modal--mobile' : 'modal--desktop']"
        v-model="isOpen"
    >
        <section class="modal__body">
            <div class="modal__header">
                <h2 class="modal__title"><slot name="title" /></h2>
                <v-btn
                    class="modal__close-btn ma-2"
                    icon
                    @click="close"
                    variant="text"
                >
                    <v-icon icon="mdi-close" size="30px"/>
                </v-btn>
            </div>
            <div 
                class="modal__content"
            >
                <slot/>
            </div>
        </section>
    </v-dialog>
</template>

<style scoped lang="scss">

$modal-header-height: 65px;

.modal {
	
    &--desktop {
        max-width: 575px;
        border-radius: 4px;
    }
	
    &--mobile &__content {
        height: calc(100svh - $modal-header-height);
    }
	
	&__content {
		overflow-y: auto;
	}
	
	&--desktop &__content {
		max-height: 600px;
	}



    &__body {
        background: $menu-bg-card;
    }
    &__header {
        height: $modal-header-height;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        letter-spacing: 1.1px;

        color: $accent;
    }

}
</style>