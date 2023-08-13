import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/carlosau/Documents/DEV-Fedora-notebook/crud-nuxt-laravel/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}