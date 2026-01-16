<script setup lang="ts">
  import useTelegram from '~/composables/UseTelegram';
  import { services, servicesCustom } from '~/data/services.data';
  import { complexes } from '~/data/complexes.data';
  import { mdiClose } from '@mdi/js';

  const form = ref(null);

  const { closeSubmitModal, modalSubmitIsOpen, useCurrentService } = useModal();

  const currentService = useCurrentService();

  const { fetchForCallData, fetchForRegistrationData } = useTelegram();

  const allServices = [
    ...servicesCustom.map((service) => ({
      title: service.title,
      id: service.id,
      subtitle: `Услуга, цена: ${service.price.text}`,
    })),
    ...services.map((service) => ({
      title: service.title,
      id: service.id,
      subtitle: `Услуга, цена: ${service.price.text}`,
    })),
    ...complexes.map((complex) => ({
      title: complex.title,
      id: complex.id,
      subtitle: `Комлекс, цена: ${complex.price.current}`,
    })),
  ];

  const masks = ref({
    modelValue: 'YYYY-MM-DD',
  });

  const rules = {
    required: (value) => !!value || 'Обязательное поле',
  };

  const today = new Date();
  const formDataSubmitDefault = {
    date: new Date(),
    phone: '',
    name: '',
  };
  const formDataRequestForCallDefault = {
    phone: '',
    name: '',
    question: null,
  };

  const requestComplete = ref(false);

  let formDataSubmit = ref({ ...formDataSubmitDefault });
  let formDataRequestForCall = ref({ ...formDataRequestForCallDefault });

  const type = ref<number>(1);

  const loading = ref(false);

  const onClose = () => {
    requestComplete.value = false;
    formDataSubmit.value = { ...formDataSubmitDefault };
    formDataRequestForCall.value = { ...formDataRequestForCallDefault };
    closeSubmitModal();
  };

  async function requestForSubmit() {
    const { valid } = await form.value.validate();
    if (!valid || !currentService.value) return;
    const { date, phone, name } = formDataSubmit.value;
    try {
      loading.value = true;
      await fetchForRegistrationData({date, phone, name, chosenService: currentService.value});
      requestComplete.value = true;
    } catch (e) {
      console.log('Ошибка отправки заявки', e);
    } finally {
      loading.value = false;
    }
  }

  async function requestForCall() {
    try {
      loading.value = true;
      await fetchForCallData(formDataRequestForCall.value);
      requestComplete.value = true;
    } catch (e) {
      console.log('Ошибка отправки заявки', e);
    } finally {
      loading.value = false;
    }
  }

  const { isMobile } = useDevice();
</script>

<template>
  <v-dialog v-model="modalSubmitIsOpen" max-width="600px" :fullscreen="isMobile" class="modal">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Оставить заявку</v-toolbar-title>
        <v-btn :icon="mdiClose" @click="modalSubmitIsOpen = false"></v-btn>
      </v-toolbar>
      <div>
        <v-tabs class="mt-4 mb-4" v-model="type" align-tabs="center" color="#f1aa34" center-active>
          <v-tab :value="1">Записаться</v-tab>
          <v-tab :value="2">Заказать звонок</v-tab>
        </v-tabs>
        <v-window v-model="type">
          <v-window-item :value="1" style="overflow-y: scroll">
            <v-form class="modal__form" @submit.prevent="requestForSubmit" ref="form">
              <p class="modal__text">
                Оставьте свои данные, выберите услугу и дату. Вам перезвонит первый освободившийся
                специалист.
              </p>

              <PhoneInput
                variant="outlined"
                v-model="formDataSubmit.phone"
                :rules="[rules.required]"
                class="mb-3"
              />

              <v-text-field
                label="Как Вас зовут?*"
                variant="outlined"
                density="compact"
                v-model="formDataSubmit.name"
                color="#f1aa34"
                :rules="[rules.required]"
                class="mb-3"
              ></v-text-field>

              <v-select
                label="Выберите услугу или комплекс"
                :items="allServices"
                item-title="title"
                variant="outlined"
                density="compact"
                color="#f1aa34"
                v-model="currentService"
                class="mb-3"
                :rules="[rules.required]"
              >
                <template v-slot:item="{ props, item }">
                  <v-list-item v-bind="props" :subtitle="item.raw.subtitle"></v-list-item>
                </template>
              </v-select>

              <div class="modal__date mb-4">
                <p>На какое число хотели бы записаться?</p>
                <DatePicker
                  v-model="formDataSubmit.date"
                  :min-date="today"
                  :masks="masks"
                  transparent
                  borderless
                  :is-dark="true"
                  color="orange"
                  :rules="[rules.required]"
                />
              </div>

              <v-btn
                block
                class="modal__btn"
                color="#f1aa34"
                type="submit"
                v-if="!requestComplete"
                :loading="loading"
              >
                Отправить заявку
              </v-btn>
              <div class="modal__complete" v-else>
                <v-alert
                  type="success"
                  title="Заявка отправлена"
                  text="В ближайшее время с Вами свяжется наш специалист"
                ></v-alert>
                <v-btn
                  block
                  class="modal__btn mt-4"
                  color="#f1aa34"
                  variant="tonal"
                  @click="onClose"
                >
                  Закрыть
                </v-btn>
              </div>
            </v-form>
          </v-window-item>
          <v-window-item :value="2" style="overflow-y: scroll">
            <form class="modal__form" @submit.prevent="requestForCall">
              <p class="modal__text mt-4">
                Оставьте свои данные и напишите, что вас интересует. Вам перезвонит первый
                освободившийся специалист.
              </p>
              <v-text-field
                label="Как Вас зовут?*"
                variant="outlined"
                density="compact"
                required
                v-model="formDataRequestForCall.name"
              ></v-text-field>
              <PhoneInput variant="outlined" v-model="formDataRequestForCall.phone" required />
              <v-textarea
                label="Вопрос (необязательно)"
                variant="outlined"
                density="compact"
                v-model="formDataRequestForCall.question"
              />
              <v-btn
                block
                class="modal__btn"
                color="#f1aa34"
                type="submit"
                v-if="!requestComplete"
                :loading="loading"
              >
                Отправить заявку
              </v-btn>
              <div class="modal__complete" v-else>
                <v-alert
                  type="success"
                  title="Заявка отправлена"
                  text="В ближайшее время с Вами свяжется наш специалист"
                ></v-alert>
                <v-btn
                  block
                  class="modal__btn mt-4"
                  color="#f1aa34"
                  variant="tonal"
                  @click="onClose"
                >
                  Закрыть
                </v-btn>
              </div>
            </form>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
  .modal {
    &__form {
      padding: 0 16px;
      margin-bottom: 24px;
    }

    &__title {
      margin-left: 24px;
      color: $accent;
    }

    &__text {
      margin-bottom: 24px;
    }

    &__date {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
