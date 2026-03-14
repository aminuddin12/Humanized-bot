export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/a11y',
    '@nuxtjs/i18n'
  ],
  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components/global', pathPrefix: false },
    { path: '~/components/sections', pathPrefix: false },
    '~/components'
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    experimental: {
      websocket: true
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'id', name: 'Bahasa Indonesia' }
    ],
    defaultLocale: 'id',
    strategy: 'no_prefix'
  }
})
