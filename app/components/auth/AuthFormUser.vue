<script setup lang="ts">
  import type { UserLoginDTO } from '~/types/dto';
  import { mdiAccountCheckOutline, mdiCarWash, mdiCashPlus } from '@mdi/js';

  const { login, setUser } = useAuth();
  const { closeLoginModal, useCurrentLoginStep } = useModal();
  const phone = ref<string>('');
  const phoneRow = ref<string>('');
  const phoneFromCache = ref<string>('');
  const createOTPError = ref<string>('');
  const confirmOTPError = ref<string>('');
  const currentStep = useCurrentLoginStep();
  const otp = ref<string>('');
  const isMobile = true;
  const countdown = ref<number>(60);
  const isOtpReset = ref<boolean>(false);

  function startCountdown() {
    const intervalId = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value -= 1;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  const getPhoneRow = (phoneRowValue: string) => {
    phoneRow.value = phoneRowValue;
  };

  // defineEmits<{
  // 	(event: 'onLogin'): void,
  // 	(event: 'onError', message: string): void
  // }>();
  //

  onMounted(() => {
    const phoneData: string | null = localStorage.getItem('phone');
    if (phoneData) {
      phoneFromCache.value = phoneData;
    }
  });

  async function createOTP() {
    if (phone.value === '') {
      createOTPError.value = 'Необходимо ввести номер.';
      return;
    }
    const { data, error } = await useFetch('/api/user/create-otp', {
      method: 'post',
      body: { phoneRow: `7${phoneRow.value}` },
    });

    if (error.value) {
      createOTPError.value = error.value.statusMessage;
      return;
    }
    if (data.value) {
      localStorage.setItem('phone', phone.value);
    }
    if (!isOtpReset.value) {
      nextStep();
    }
  }

  async function loginConfirm() {
    const dto: UserLoginDTO = {
      otp: parseInt(otp.value),
      phone: `+7 ${phone.value}`,
      phoneRow: `7${phoneRow.value}`,
    };

    const { data: user, error } = await useFetch('/api/user/login', {
      method: 'POST',
      body: dto,
    });

    if (error.value) {
      confirmOTPError.value = error.value.data.statusMessage;
      return;
    }

    setUser(user.value);
    localStorage.removeItem('phone');
    closeLoginModal();
  }

  async function resetOtp() {
    try {
      await useFetch('/api/user/reset-otp', {
        method: 'POST',
        body: { phoneRow: `7${phoneRow.value}` },
      });
      isOtpReset.value = true;
      countdown.value = 60;
      startCountdown();
      await createOTP();
    } catch (e) {
      console.log(e);
    }
  }

  async function resetPhone() {
    phoneRow.value = phone.value = createOTPError.value = confirmOTPError.value = '';
    localStorage.removeItem('phone');
    await resetOtp();
    prevStep();
  }
  const nextStep = () => {
    if ((phoneRow.value !== '' && phoneRow.value.length === 10) || phoneFromCache.value !== '') {
      currentStep.value += 1;
      startCountdown();
    } else {
      createOTPError.value = 'Необходимо ввести номер.';
    }
  };

  const prevStep = () => (currentStep.value -= 1);
</script>

<template>
  <div class="form">
    <v-window v-model="currentStep">
      <v-window-item value="LOGIN">
        <p class="form__description">
          Для того чтобы зарегестрироваться или войти в аккаунт, введите Ваш номер телефона, затем
          код который прийдет в СМС.
        </p>
        <PhoneInput v-model="phone" class="form__phone-input" @update-row-value="getPhoneRow" />
        <p class="form__error mb-4" v-if="createOTPError !== ''">{{ createOTPError }}</p>

        <v-btn class="form__confirm-btn" @click="createOTP" color="#f1aa34">Получить СМС</v-btn>
        <v-btn class="form__btn-next" @click="nextStep" variant="tonal" color="#f1aa34"
          >Уже есть код?</v-btn
        >
        <v-btn @click="currentStep = 'INFO'" variant="text" class="form__btn-next"
          >Узнать подробности</v-btn
        >
      </v-window-item>

      <v-window-item value="CONFIRM">
        <div class="form__otp">
          <p class="form__description form__phone-info">
            Код отправлен на номер: +7 {{ phone !== '' ? phone : phoneFromCache }}. <br />
            Действителен в течении 5 минут.<br />
            <v-btn variant="text" color="#f1aa34" class="form__confirm-btn" @click="resetPhone"
              >Изменить номер</v-btn
            >
          </p>
          <v-otp-input class="form__otp-input" v-model="otp" />
          <div class="form__otp-error">
            <p class="form__error form__error_opt mb-4" v-if="confirmOTPError !== ''">
              {{ confirmOTPError }}
            </p>
          </div>
          <p class="form__count-down" v-if="countdown > 1">
            Новый код можно запрсить через: {{ countdown }}
          </p>
          <v-btn variant="text" color="#f1aa34" class="form__confirm-btn" v-else @click="resetOtp"
            >Запросить новый код</v-btn
          >

          <v-btn @click="loginConfirm" class="form__confirm-btn mt-4" color="#f1aa34"
            >Подтвердить код</v-btn
          >
        </div>
      </v-window-item>
      <v-window-item value="INFO">
        <div class="bonus">
          <p class="bonus__subtitle bonus__subtitle_white">
            Начислим <strong>1000 бонусов</strong> при регистрации и вернем <strong>5%</strong> от
            суммы заказа
          </p>
          <h3 class="bonus__subtitle bonus__subtitle_orange mb">Как это работает?</h3>

          <v-timeline
            class="bonus__timeline"
            side="end"
            align="start"
            style="margin-left: -16px"
            direction="vertical"
          >
            <v-timeline-item
              class="timeline-item"
              size="large"
              fill-dot
              dot-color="#f1aa34"
              :height="isMobile ? '' : '150px'"
              :icon="mdiAccountCheckOutline"
            >
              <h3 class="bonus__subtitle_orange">Зарегестрируйтесь у нас на сайте</h3>
              <p>
                Каждая оказанная услуга приносит вам бонусные баллы, которые начислятся на ваш
                аккаунт.
              </p>
            </v-timeline-item>
            <v-timeline-item
              fill-dot
              size="large"
              dot-color="#f1aa34"
              :height="isMobile ? '' : '150px'"
              :icon="mdiCarWash"
            >
              <h3 class="bonus__subtitle_orange">Запишитесь к нам на услуги</h3>
              <p>
                После того как мы выполним свою работу, вернем 5% от суммы оказаных услуг в виде
                боннусов.
              </p>
            </v-timeline-item>
            <v-timeline-item
              fill-dot
              size="large"
              dot-color="#f1aa34"
              :height="isMobile ? '' : '150px'"
              :icon="mdiCashPlus"
            >
              <h3 class="bonus__subtitle_orange">Оплачивайте бонусами</h3>
              <p>Когда вернетесь к нам снова, сможете оплатить ими любые наши услуги.</p>
            </v-timeline-item>
          </v-timeline>
          <v-btn @click="currentStep = 'LOGIN'" class="bonus__btn" variant="flat" color="#f1aa34"
            >Зарегистрироваться</v-btn
          >
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<style scoped lang="scss">
  .form {
    &__phone-info {
      margin-bottom: 8px !important;
    }

    &__count-down {
      text-align: center;
    }

    &__btn-next {
      margin-top: 16px;
    }

    .form__description {
      margin-bottom: 24px;
      color: $light-gray;
    }

    .form__confirm-btn,
    &__btn-next {
      display: block;
      width: 100%;
    }

    .form__error {
      text-align: center;
      color: #ff8989;
    }

    .form__otp .form__description {
      text-align: center;
    }
  }

  .bonus {
    margin-bottom: 24px;
    &__subtitle {
      &_orange {
        //color: #f1aa34;
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 600;
      }
      &_white {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 32px;
        margin-top: 8px;
      }
    }

    @media screen and (max-width: 700px) {
      &__subtitle {
        &_white {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 32px;
          margin-top: 8px;
        }
      }
    }
    &__btn {
      margin-top: 16px;
    }
  }
  strong {
    color: $accent;
  }
  .mb {
    //margin-bottom: 16px;
  }

  .v-timeline--vertical.v-timeline {
    height: auto !important;
  }
</style>
