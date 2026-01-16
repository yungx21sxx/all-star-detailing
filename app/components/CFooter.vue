<template>
  <footer class="footer">
    <div class="footer__body wrapper">
      <div class="footer__col footer__col_left">
        <div class="contact">
          <AddressIcon class="contact__icon" />
          <div class="contact__info">
            <div class="contact__title">Адрес</div>
            <address class="contact__data">Проспект Энгельса 27АБ (въезд с Манчестерской)</address>
            <div class="contact__links">
              <v-chip href="https://yandex.com/maps/-/CHq4UD~s" :prepend-icon="mdiMapMarker" rounded elevation="0"
                color="#f1aa34">
                Маршрут
              </v-chip>
            </div>
          </div>
        </div>
        <div class="contact">
          <TimeIcon class="contact__icon" />
          <div class="contact__info">
            <div class="contact__title">Время работы</div>
            <time class="contact__data">Ежедневно с 10:00 до 21:00</time>
          </div>
        </div>
      </div>

      <div class="footer__col footer__col_middle">
        <div class="footer__logo">
          <img src="@/assets/icons/logo.webp" alt="All Star Detailing" />
        </div>
        <div class="footer__icons">
          <NuxtLink to="https://t.me/allstardetailing" aria-label="tg">
            <NuxtIcon name="telega" class="footer__icon" />
          </NuxtLink>
          <NuxtLink to="https://instagram.com/allstardetailng?igshid=YmMyMTA2M2Y=" aria-label="tg">
            <NuxtIcon name="inst" class="footer__icon" />
          </NuxtLink>
          <NuxtLink to="https://vk.com/allstardetailing" aria-label="tg">
            <NuxtIcon name="vk" class="footer__icon" />
          </NuxtLink>
        </div>
        <div class="footer__copyright">2022-2026 © All Star Detailing</div>
      </div>

      <div class="footer__col footer__col_right">
        <div class="contact">
          <PhoneIcon class="contact__icon" />
          <div class="contact__info">
            <div class="contact__title">Телефон</div>
            <NuxtLink to="tel:/+79119470777" class="contact__data">+7 (911) 947-07-77</NuxtLink>
            <div class="contact__links">
              <v-chip rounded elevation="0" color="#f1aa34" href="https://wa.me/79119470777">
                <template #prepend>
                  <WhatsUpIcon fill="#f1aa34" class="mr-2" />
                </template>
                Whats up
              </v-chip>
              <v-chip rounded elevation="0" color="#f1aa34" href="https://t.me/All_Star_Detailing">
                <template #prepend>
                  <TelegramIcon fill="#f1aa34" class="mr-2" />
                </template>
                Telegram
              </v-chip>
            </div>
          </div>
        </div>
        <p class="footer__text">
          Любая информация, представленная на данном сайте, носит исключительно информационный
          характер и ни при каких условиях не является публичной офертой, определяемой положениями
          статьи 437 ГК РФ.
        </p>
      </div>
    </div>
    <div class="footer__sitemap">
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/services">Услуги</NuxtLink>
      <NuxtLink to="/portfolio">Портфолио</NuxtLink>
      <NuxtLink to="/contacts">Контакты</NuxtLink>
      <NuxtLink to="/privacy-policy" class="footer__privacy">Политика конфиденциальности</NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss">
  .contact {
    display: flex;
    gap: 1.5rem; // 6 (tailwind) = 1.5rem
    align-items: flex-start;

    &__links {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    &__title {
      font-size: 1.125rem; // text-lg
      font-weight: 600; // font-semibold
      margin-bottom: 0.5rem; // mb-2 = 0.5rem
    }

    &__icon {
      height: 3rem; // h-16 = 4rem
      width: 3rem; // w-16 = 4rem
      flex-shrink: 0;

      //@media (max-width: 768px) { // max-md
      //	height: 3rem; // max-md:h-12 = 3rem
      //	width: 3rem; // max-md:w-12 = 3rem
      //}
    }

    &__text {
      //color: var(--color-secondary); // text-secondary (замени на нужный цвет)
      margin-bottom: 1rem; // mb-4 = 1rem
    }

    &__data {
      text-decoration: none;
      color: white;
      display: block;
    }
  }

  .footer {
    background: #1e1e1e;
    padding: 48px 0;
    margin-top: 96px;

    &__sitemap {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 32px;
      margin-top: 32px;

      a {
        text-decoration: none;
        color: #e6e6e6;
      }
    }

    &__body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: 'left middle right';
      gap: 32px;
    }

    .footer__col_left {
      grid-area: left;
    }

    .footer__col_middle {
      grid-area: middle;
    }

    .footer__col_right {
      grid-area: right;
    }

    &__logo img {
      height: 100px;
    }

    &__col {
      display: flex;
      flex-direction: column;
      gap: 24px;

      &_middle {
        align-items: center;
      }

      &_right {
        justify-content: space-between;
      }
    }

    &__phone {
      text-decoration: none;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;

      &-icon svg {
        height: 24px;
        width: auto;
      }
    }

    &__icon {
      color: #f1aa34;

      svg {
        height: 30px !important;
        width: auto !important;
      }
    }

    &__icons {
      display: flex;
      gap: 32px;
    }

    &__address {
      margin-bottom: 16px;
    }

    &__text {
      font-size: 10px;
      color: $light-gray;
    }

    &__copyright {
      color: $light-gray;
    }

    /* ———— Адаптив для мобильных устройств (до 900px) ———— */
    @media (max-width: 900px) {
      &__body {
        grid-template-columns: 1fr;
        grid-template-areas:
          'middle'
          'left'
          'right';
        /* Меняем порядок элементов */
        gap: 0;
      }

      &__col {

        &_left,
        &_right {
          flex-direction: column;
          gap: 0;
          align-items: flex-start;
        }

        &_middle {
          align-items: center;
          gap: 16px;
          margin-bottom: 42px;
        }
      }

      &__sitemap {
        gap: 16px;
      }

      &__text {
        margin-top: 16px;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .contact {
      margin-bottom: 32px;
    }
  }
</style>
<script setup>
  import { mdiMapMarker } from '@mdi/js';
  import AddressIcon from '~/components/menu/icons/AddressIcon.vue';
  import PhoneIcon from '~/components/menu/icons/PhoneIcon.vue';
  import TelegramIcon from '~/components/menu/icons/TelegramIcon.vue';
  import TimeIcon from '~/components/menu/icons/TimeIcon.vue';
  import WhatsUpIcon from '~/components/menu/icons/WhatsUpIcon.vue';
</script>
