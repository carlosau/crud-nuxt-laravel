import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/carlosau/Documents/DEV-Fedora-notebook/crud-nuxt-laravel/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}