// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/plugins/0.siteConfig.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/payload.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/yandex-metrika-module-nuxt3/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/@vueuse/motion/dist/nuxt/runtime/templates/motion.js")> &
  InjectionType<typeof import("../../node_modules/nuxt-simple-robots/dist/runtime/nuxt/plugins/robot-meta.server.js")> &
  InjectionType<typeof import("../../node_modules/vuetify-nuxt-module/dist/runtime/plugins/vuetify-icons.js")> &
  InjectionType<typeof import("../../node_modules/vuetify-nuxt-module/dist/runtime/plugins/vuetify-no-client-hints.js")> &
  InjectionType<typeof import("../../node_modules/@nuxtjs/device/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../plugins/auth")> &
  InjectionType<typeof import("../../plugins/calendar")> &
  InjectionType<typeof import("../../plugins/maska")> &
  InjectionType<typeof import("../../plugins/motion")> &
  InjectionType<typeof import("../../node_modules/vuetify-nuxt-module/dist/runtime/plugins/vuetify.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt-site-config:init' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'vuetify:configuration:plugin'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }