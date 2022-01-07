import env from './env';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '测试站',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2860731_4uip6tt4ng.css' }
    ],
    bodyAttrs: {
      class: 'body-class'
    }
  },
  css: [
    '@/assets/index.scss'
  ],
  router: {
    middleware: ['i18n']
  },
  plugins: [
    '@/plugins/i18n.js',
    '@/plugins/route.js',
    "@/plugins/element-ui.js",
    "@/plugins/axios.js"
  ],
  generate: {
    // 这里可能是指定路由
    // routes: ['*']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ], 
  env: {
    baseUrl: env[process.env.NODE_ENV].BASE_API,
    site: env[process.env.NODE_ENV].SITE,
    img_prefix:env[process.env.NODE_ENV].IMAGE_PREFIX
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  }
}
