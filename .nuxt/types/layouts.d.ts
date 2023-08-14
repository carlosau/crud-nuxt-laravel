import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/carlossouza/Documents/DEV/nuxt/crud-nuxt-laravel/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}