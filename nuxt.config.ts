// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

import { services, servicesCustom } from './app/data/services.data';
import { complexes } from './app/data/complexes.data';
import {fileURLToPath} from "url";

export default defineNuxtConfig({
  compatibilityDate: '2024-12-18',
  css: ['@/assets/settings.scss'],
  runtimeConfig: {
    cookieName: process.env.COOKIE_NAME || '__session',
    cookieSecret: process.env.COOKIE_SECRET || 'secret',
    cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
    cookieRememberMeExpires: parseInt(
      process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(),
      10,
    ), // 7 days
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '7161194033:AAGBmx7I_ZipqmwAdS2SUsSwFYoCyGjS5jc',
    telegramChatId: process.env.TELEGRAM_CHAT_ID || '-1002495293643',
  },
  build: {
    transpile: ['vuetify'],
  },

  nitro: {
    minify: true,
    serveStatic: true,
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
  alias: {
    '#server': fileURLToPath(new URL('./server', import.meta.url)),
  },
  vite: {
    server: {
      proxy: {
        '/uploads': {
          target: 'https://all-star-detailing.ru',
          changeOrigin: true,
          secure: false, // если нужен http
          rewrite: (path) => path.replace(/^\/uploads/, '/uploads')
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vuetify')) return 'vuetify';
              if (id.includes('v-calendar') || id.includes('@popperjs/core')) return 'calendar';
              if (id.includes('vue-draggable-next')) return 'vue-draggable-next';
              if (id.includes('swiper')) return 'swiper';
              if (id.includes('@vue')) return 'vue';
            }
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_var.scss" as *;',
        },
      },
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  routeRules: {
    '/': {
      sitemap: {
        priority: 1,
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
      },
      prerender: true,
    },
    '/contacts': {
      sitemap: {
        priority: 0.5,
        changefreq: 'never',
        lastmod: new Date().toISOString(),
      },
      prerender: true,
    },
    '/services': {
      sitemap: {
        priority: 0.5,
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
      },
      prerender: true,
    },
    '/admin/**': { sitemap: false, robots: false },
    '/privacy-policy': {
      sitemap: {
        priority: 0.1,
        changefreq: 'never',
        lastmod: new Date().toISOString(),
      },
      prerender: true,
    },
    ...Object.assign(
      {},
      ...servicesCustom.map((service) => ({
        [`/service/${service.id}`]: {
          sitemap: {
            priority: 0.8,
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
          },
          prerender: true,
        },
      })),
    ),
    // Генерируем динамические маршруты
    ...Object.assign(
      {},
      ...services.map((service) => ({
        [`/service/${service.id}`]: {
          sitemap: {
            priority: 0.7,
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
          },
          prerender: true,
        },
      })),
    ),
    ...Object.assign(
      {},
      ...complexes.map((complex) => ({
        [`/complex/${complex.id}`]: {
          sitemap: {
            priority: 0.5,
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
          },
          prerender: true,
        },
      })),
    ),
  },
  modules: [
    'nuxt-icons',
    '@nuxtjs/device',
    '@nuxt/devtools',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (config.plugins) {
          config.plugins.push(vuetify({ autoImport: true }));
        }
      });
    },
  ],
  sitemap: {
    xsl: false,
  },
  googleFonts: {
    preload: true,
    families: {
      Montserrat: [300, 400, 500, 600, 700, 800, 900],
    },
  },
  site: {
    url: 'https://all-star-detailing.ru',
    name: 'All Star Detailing',
  },
  features: {
    inlineStyles: false,
  },
  vue: {
    propsDestructure: true,
  },
  schemaOrg: {
    defaults: false,
  },
  sourcemap: {
    server: process.env.NODE_ENV !== 'production',
    client: process.env.NODE_ENV !== 'production',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      titleTemplate: '%s',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#181818', href: '/safari-pinned-tab.svg' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#f1aa34' },
        { name: 'theme-color', content: '#121212' },
        { charset: 'utf-16' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
});
