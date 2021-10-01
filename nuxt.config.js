export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'movieapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/default.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
    title: 'Movies App',
    author: 'Collins .N. Prosper',
    description: 'A web App for viewing movies information ',
    lang: 'en',
    apple_mobile_web_app_status_bar_style:'black',
    mobile_web_app_capable:true,

      },
      icons: {
         fileName: 'icon.png',
         sizes: [64, 120, 144, 152, 192, 384, 512],
         purpose: 'maskable'

      },
    manifest: {
      name: 'Movies Application',
      short_name: 'Movies App',
      useWebmanifestExtension: false,
      dir:'ltr',
      display: 'standalone',
      background_color: '#f4f4f4',
      theme_color: 'black',

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
