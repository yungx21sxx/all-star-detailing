<script setup lang="ts">
  import { mdiLogout, mdiPencil } from '@mdi/js';

  const { modalLkIsOpen, closeLkModal } = useModal();
  const authUser = useAuthUser();
  const { me } = useAuth();

  async function logout() {
    await useFetch('/api/auth/logout');
    await me();
    closeLkModal();
  }
</script>

<template>
  <ModalLayout v-model="modalLkIsOpen" class="modal">
    <template #title>
      <h3 class="lk__title">Личный кабинет</h3>
    </template>
    <div class="lk__body">
      <div class="lk__block">
        <div class="lk__subtitle">Телефон:</div>
        <div class="lk__change-info">
          <div class="lk__info">
            {{ authUser.phone }}
          </div>
          <v-icon color="#f1aa34" :icon="mdiPencil"></v-icon>
        </div>
      </div>
      <div class="lk__block lk__block_inline">
        <div class="lk__subtitle">Баланс:</div>
        <div class="lk__info">{{ authUser.balance }} бонусов</div>
      </div>
      <v-btn class="mt-4" @click="logout" :prepend-icon="mdiLogout">Выйти из аккаунта</v-btn>
    </div>
  </ModalLayout>
</template>

<style scoped lang="scss">
  .lk {
    &__title {
      margin-left: 24px;
    }
    &__subtitle {
      color: $accent;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    &__info {
      font-size: 20px;
    }
    &__change-info {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    &__block {
      margin-bottom: 16px;
    }
    &__body {
      padding: 0 24px 24px 24px;
    }
  }
</style>
