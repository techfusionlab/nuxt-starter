import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'motion-v/nuxt',
    '@vueuse/nuxt',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/styles/main.css'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', language: 'en', file: 'en.json' },
      { code: 'zh', name: '中文', language: 'zh', file: 'zh.json' },
    ],
  },
  colorMode: {
    classPrefix: '',
    classSuffix: '',
  },
})
