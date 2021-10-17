
const glob = require('glob-all')
const path = require('path')
import axios from 'axios'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Star Wars: UKTV Coding Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: '#010409' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'robots', name: 'robots', content: "noindex,nofollow" },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.URL
  },

  privateRuntimeConfig: {

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scrollto.js', mode: 'server' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  generate: {
    interval: 200
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true, // forces Nuxt to push declared styles into a CSS file (rather than inline)
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev }) {
      if (!isDev) {
        config.node = {
          fs: 'empty' // required to fix a 'dependency not found' for plugins like SendGrid
        }
      }
    }
  }
}
