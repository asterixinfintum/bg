export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Trade',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://s3.tradingview.com/tv.js',
        type: 'text/javascript',
        body: true // Include the script just before the closing </body> tag
      },
      {
        src: 'https://unpkg.com/lightweight-charts@4.0/dist/lightweight-charts.standalone.production.js',
        type: 'text/javascript',
        body: true // Include the script just before the closing </body> tag
      },
      {
        src: 'https://unpkg.com/bsv@1.5.6/bsv.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/centrifugal/centrifuge-js@latest/dist/centrifuge.min.js',
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/event-transfer.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins.scss',
      '~/assets/scss/classes.scss',
      '~/assets/scss/animations.scss',
      '~/assets/scss/index.scss',
      '~/assets/scss/balancearea.scss',
      '~/assets/scss/list.scss',
      '~/assets/scss/assetlistheader.scss',
      '~/assets/scss/assetlist.scss',
      '~/assets/scss/sectiondropdowns.scss',
      '~/assets/scss/header.scss',
      '~/assets/scss/auth.scss',
      '~/assets/scss/transactionstyle.scss',
      '~/assets/scss/createbot.scss',
      '~/assets/scss/previewtrade.scss',
      '~/assets/scss/settings.scss',
      '~/assets/scss/spottrade.scss',
      '~/assets/scss/popup.scss',
      '~/assets/scss/autotradesettings.scss',
    ],
    hoistUseStatements: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    target: 'static'
  }
}
