export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/a11y'
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    experimental: {
      websocket: true
    }
  }
})
