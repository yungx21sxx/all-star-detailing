// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

import {services} from "./data/services.data";
import {complexes} from "./data/complexes.data";

export default defineNuxtConfig({
	compatibilityDate: '2024-12-18',
	runtimeConfig: {
		cookieName: process.env.COOKIE_NAME || "__session",
		cookieSecret: process.env.COOKIE_SECRET || "secret",
		cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
		cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
	},
	nitro: {
		serveStatic: false // Отключает раздачу статики
	},
	hooks: {
		async "prerender:routes"(ctx) {
			for (const service of services) {
				ctx.routes.add(`/service/${service.id}/`);
			}
			for (const complex of complexes) {
				ctx.routes.add(`/complex/${complex.id}/`);
			}
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/_var.scss" as *;',
				}
			}
		},
	},
	devtools: {
		enabled: true,

		timeline: {
			enabled: true
		}
	},
	routeRules: {
		'/api': {cors: true},
		'/': {prerender: true},
		'/contacts': {prerender: true},
		'/services': {prerender: true},
		'/complex/**': {prerender: true},
		'/service/**': {prerender: true},
		'/admin/**': {index: false},
		'/privacy-policy': {prerender: true }
	},
	devtools: {enabled: true},
	typescript: {
		shim: false,
		strict: true,
	},
	nitro: {
		compressPublicAssets: {
			brotli: true, gzip: true
		},
	},
	modules: ['nuxt-icons', '@nuxtjs/device', 'vuetify-nuxt-module', '@nuxt/devtools', 'nuxt-simple-sitemap', 'nuxt-simple-robots', '@vueuse/motion/nuxt', 'yandex-metrika-module-nuxt3', '@nuxt/image'],
	// yandexMetrika: {
	// 	id: '96041052',
	// 	clickmap:true,
	// 	trackLinks:true,
	// 	accurateTrackBounce:true,
	// 	webvisor:true
	// },
	site: {
		url: 'https://all-star-detailing.ru/',
	},
	vuetify: {
		vuetifyOptions: {
			theme: {
				defaultTheme: 'dark',
			},
			icons: {
				defaultSet: 'mdi-svg'
			},
			labComponents: true,
			directives: true,
		},
		moduleOptions: {},
	},
	device: {
		refreshOnResize: true
	},
	features: {
		inlineStyles: false
	},
	sourcemap: {
		server: true,
		client: true
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/_var.scss" as *;'
				}
			}
		},
		vue: {
			script: {
				defineModel: true,
			},
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			link: [
				{rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png'},
				{rel: 'icon', sizes: "32x32", type: 'image/png', href: '/favicon-32x32.png'},
				{rel: 'icon', sizes: "16x16", type: 'image/png', href: '/favicon-16x16.png'},
				{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
				{rel: 'manifest', href: '/site.webmanifest'},
				{rel: 'mask-icon', color: "#181818", href: '/safari-pinned-tab.svg'},

			],
			meta: [
				{name: "msapplication-TileColor", content: "#f1aa34"},
				{name: "theme-color", content: "#121212"},
				{charset: 'utf-16'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{
					name: 'description',
					content: 'В All Star Detailing, мы предлагаем полный спектр услуг по детейлингу автомобилей в Санкт-Петербурге. Наша студия оснащена новейшим оборудованием для профессиональной полировки кузова, нанесения керамических покрытий, оклейки защитной пленкой и тщательной чистки интерьера.'
				},

			],
			title: 'Детейлинг центр All Star Detailing в СПб — весь спектр детейлинг услуг по лучшим ценам в Санкт-Петербурге'
		},
	}
})