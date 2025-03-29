export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils', '@nuxt/eslint', '@nuxt/fonts', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./store/**'],
  },
})
