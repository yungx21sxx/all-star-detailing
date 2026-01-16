<script setup lang="ts">
  import useMenu from '~/components/menu/useMenu';
  import TelegaIcon from '~/components/menu/icons/TelegaIcon.vue';
  import VkIcon from '~/components/menu/icons/VkIcon.vue';
  import InstIcon from '~/components/menu/icons/InstIcon.vue';
  import BurgerIcon from '~/components/menu/icons/BurgerIcon.vue';
  import { mdiAccountOutline, mdiPhone } from '@mdi/js';

  const authUser = useAuthUser();
  const { computedLinks, mobileMenuModal, openMobileMenuModal, closeMobileMenuModal } = useMenu();
  const { openSubmitModal, openLoginModal, openLkModal } = useModal();

  const openAuthModals = () => {
    if (!authUser.value) {
      openLoginModal('LOGIN');
      return;
    }
    if (authUser.value.role === 'USER') {
      openLkModal();
      return;
    }
    if (authUser.value.role === 'ADMIN') {
      navigateTo('/admin/clients');
    }
  };
</script>

<template>
  <nav class="nav">
    <div class="nav__body wrapper">
      <div class="nav__left">
        <NuxtLink to="/" class="nav__logo">
          <img src="@/assets/icons/logo.webp" class="nav__img" alt="logo" />
          <span class="nav__title">ALL STAR</span>
        </NuxtLink>
        <div class="nav__social">
          <NuxtLink to="https://t.me/allstardetailing">
            <TelegaIcon class="icon" />
          </NuxtLink>
          <NuxtLink to="https://vk.com/allstardetailing">
            <VkIcon class="icon" />
          </NuxtLink>
          <NuxtLink to="https://instagram.com/allstardetailng?igshid=YmMyMTA2M2Y=">
            <InstIcon class="icon" />
          </NuxtLink>
        </div>
      </div>
      <div class="nav__links">
        <v-btn v-for="{ href, text, variant } of computedLinks" :variant="variant" :href="href">
          {{ text }}
        </v-btn>
      </div>
      <div class="nav__right">
        <NuxtLink to="tel:+79119470777" class="nav__phone">
          <v-icon :icon="mdiPhone" class="nav__phone-icon" />
          <span>+7 (911) 947-07-77</span>
        </NuxtLink>

        <v-btn aria-label="Регистрация" variant="tonal" color="#f1aa34" class="nav__submit" @click="openSubmitModal(null)">
          Записаться
        </v-btn>

        <v-btn aria-label="Записаться" variant="text" class="nav__login" icon @click="openAuthModals">
          <v-icon :icon="mdiAccountOutline"></v-icon>
        </v-btn>
        <button aria-label="Мобильное меню" class="nav__burger" @click="openMobileMenuModal" value="Меню">
          <BurgerIcon />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    width: 100%;
    z-index: 10;
    padding: 4px 0;

    &__burger {
      display: none;
    }

    .icon {
      width: 22px;
      height: auto;
    }

    &__phone {
      display: flex;
      align-items: center;
      margin-right: 16px;
      text-decoration: none;
      color: white;
      font-weight: 500;

      &-icon {
        margin-right: 5px;
      }
    }

    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__social {
      display: flex;
      gap: 10px;
      align-items: center;

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
      }
    }

    &__logo {
      display: flex;
      gap: 10px;
      align-items: center;
      text-decoration: none;

      img {
        height: 35px;
        width: auto;
      }
    }

    &__left {
      display: flex;
      align-items: center;
      gap: 20px;

      &_links {
        display: flex;
        align-items: center;
      }
    }

    &__title {
      font-size: 18px;
      color: $accent;
    }

    &__links {
      margin-left: 16px;
      display: flex;
    }

    &__right {
      display: flex;
      align-items: center;
    }

    @media screen and (max-width: 1038px) {
      &__phone {
        display: none;
      }
    }

    @media screen and (max-width: 900px) {
      &__links {
        display: none;
      }
      &__burger {
        display: flex;
        align-items: center;
        margin-left: auto;

        svg {
          height: 20px;
          width: auto;
        }
      }
    }
    @media screen and (max-width: 730px) {
      padding: 12px 0;
      &__logo img {
        height: 25px;
        width: auto;
      }

      &__phone,
      &__submit,
      &__login,
      &__social {
        display: none;
      }
    }
  }
</style>
