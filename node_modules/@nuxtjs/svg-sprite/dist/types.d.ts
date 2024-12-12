
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['svgSprite']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['svgSprite']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
