// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/Yeonnelog/',
  },
  css: [
    'destyle.css',
    '~/assets/styles/main.css'
  ]
})
