import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import 'v-calendar/style.css';

export default defineNuxtPlugin((app) => {
	app.vueApp.use(setupCalendar, {})
	app.vueApp.component('Calendar', Calendar)
	app.vueApp.component('DatePicker', DatePicker)
})