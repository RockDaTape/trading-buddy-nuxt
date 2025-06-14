// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // …other config…
  nitro: {
    preset: 'netlify'   // makes Netlify-compatible output
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxt/ui'
  ],

  devtools: { enabled: true }
})