import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/styles/main.css'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        cssLayer: {
          name: 'primevue',
          order: 'theme, base, primevue',
        },
      },
    },
  },
})
