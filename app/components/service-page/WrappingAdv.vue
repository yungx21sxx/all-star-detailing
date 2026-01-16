<script setup lang="ts">
  const { isMobileOrTablet } = useDevice();
</script>

<template>
  <div
    :class="[
      'advantage',
      {
        'advantage--mobile': isMobileOrTablet,
      },
    ]"
  >
    <h2 class="advantage__title service__title">
      Преимущества оклейки автомобиля в <br />
      <span>All Star Detailing</span>
    </h2>

    <div class="advantage__list">
      <div class="advantage__item">
        <nuxt-icon class="advantage__icon" name="shield" />
        <p class="advantage__text">Лучшие материалы и составы</p>
      </div>
      <div class="advantage__item">
        <nuxt-icon class="advantage__icon" name="qual" />
        <p class="advantage__text">
          Даем 2 года <br />
          гарантии
        </p>
      </div>
      <div class="advantage__item">
        <nuxt-icon class="advantage__icon" name="peaples" />
        <p class="advantage__text">Сотрудники с большим опытом</p>
      </div>
      <div class="advantage__item">
        <nuxt-icon class="advantage__icon" name="like" />
        <p class="advantage__text">Идеальное качество работы</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .advantage {
    margin-top: 32px;

    &__title {
      text-align: center;
      margin-bottom: 24px;
      font-size: 32px;
      color: #fff;

      span {
        color: $accent;
      }
    }

    &__item {
      padding: 16px 8px !important;
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      background: $bg-card;
    }

    &__text {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      justify-self: center;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      grid-auto-rows: auto;
      gap: 16px;
    }
    &__icon {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      svg {
        display: block;
      }
    }

    @media screen and (max-width: 760px) {
      &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        gap: 7px;
      }

      &__item {
        width: 100%;
        margin-bottom: 0 !important;
        padding: 15px 5px !important;
      }

      &__text {
        font-size: 16px !important;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .advantage__title {
      font-size: 24px;
    }
  }
</style>
