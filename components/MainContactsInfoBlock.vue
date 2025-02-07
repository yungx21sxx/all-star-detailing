<script setup lang="ts">

import {mdiMapMarker} from "@mdi/js";
import PhoneIcon from "~/components/menu/icons/PhoneIcon.vue";
import WhatsUpIcon from "~/components/menu/icons/WhatsUpIcon.vue";
import TelegramIcon from "~/components/menu/icons/TelegramIcon.vue";
import AddressIcon from "~/components/menu/icons/AddressIcon.vue";
import TimeIcon from "~/components/menu/icons/TimeIcon.vue";

defineProps({
	grid: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div :class="['contacts__body', {
		'grid': grid
	}]">
		<div class="contact">
			<PhoneIcon class="contact__icon"/>
			<div class="contact__info">
				<div class="contact__title">Телефон</div>
				<NuxtLink to="tel:/+79119470777" class="contact__data">+7 (911) 947-07-77</NuxtLink>
				<div class="contact__links">
					<v-chip rounded elevation="0" color="#f1aa34" href="https://wa.me/79119470777">
						<template #prepend>
							<WhatsUpIcon fill="#f1aa34" class="mr-2"/>
						</template>
						Whats up
					</v-chip>
					<v-chip rounded elevation="0" color="#f1aa34" href="https://t.me/All_Star_Detailing" >
						<template #prepend>
							<TelegramIcon fill="#f1aa34" class="mr-2"/>
						</template>
						Telegram
					</v-chip>
				</div>
			</div>
		</div>
		<div class="contact">
			<AddressIcon class="contact__icon"/>
			<div class="contact__info">
				<div class="contact__title">Адрес</div>
				<address class="contact__data">Проспект Энгельса 27АБ (въезд с Манчестерской)</address>
				<v-chip href="https://yandex.com/maps/-/CHq4UD~s" :prepend-icon="mdiMapMarker" rounded elevation="0" color="#f1aa34">
					Маршрут
				</v-chip>
			</div>
		</div>
		<div class="contact">
			<TimeIcon class="contact__icon"/>
			<div class="contact__info">
				<div class="contact__title">Время работы</div>
				<time class="contact__data">Ежедневно с 10:00 до 21:00</time>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.contact {
	display: flex;
	gap: 1.5rem; // 6 (tailwind) = 1.5rem
	align-items: flex-start;
	margin-bottom: 2rem; // 8 (tailwind) = 2rem
	
	&__links {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
	&__title {
		font-size: 1.125rem; // text-lg
		font-weight: 600; // font-semibold
		margin-bottom: 0.5rem; // mb-2 = 0.5rem
	}
	
	&__icon {
		height: 4rem; // h-16 = 4rem
		width: 4rem; // w-16 = 4rem
		flex-shrink: 0;
		
		@media (max-width: 768px) { // max-md
			height: 3rem; // max-md:h-12 = 3rem
			width: 3rem; // max-md:w-12 = 3rem
		}
	}
	
	&__text {
		//color: var(--color-secondary); // text-secondary (замени на нужный цвет)
		margin-bottom: 1rem; // mb-4 = 1rem
	}
	
	&__data {
		text-decoration: none;
		color: white;
		display: block;
		margin-bottom: 1rem; // mb-4 = 1rem
	}
}
</style>