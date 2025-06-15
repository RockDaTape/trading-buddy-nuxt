// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  nitro: {
    preset: 'netlify'   // makes Netlify-compatible output
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
      '@nuxt/ui',
    '@vite-pwa/nuxt'
  ],
      pwa: {
        registerType: 'autoUpdate',
        manifest: {
          name:            'Trading Buddy',
          short_name:      'Buddy',
          description:     'Simple trading counter & notes PWA',
          theme_color:     '#000000',
          background_color:'#000000',
          display:         'standalone',
          scope:           '/',
          start_url:       '/',
          icons: [
            { src: '/icon-192.png',  sizes: '192x192', type: 'image/png' },
            { src: '/icon-512.png',  sizes: '512x512', type: 'image/png' }
          ]
        },
        workbox: {
          // cache all built assets
          globPatterns: ['**/*.{js,css,html,png,svg,ico,json}']
        },
        // optional dev-mode SW
        devOptions: { enabled: true }
  },
  devtools: { enabled: true }
})