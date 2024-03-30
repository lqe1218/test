// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-primevue',
    ['@pinia/nuxt',{
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    }],
  ],
  primevue: {
    options: {
      unstyled: true,
      ripple: true,
      inputStyle: 'filled'
    }, 
    components: {
      include: '*',      
      exclude: ['chart']
    }, 
    directives: {
      include: ['Ripple', 'Tooltip','BadgeDirective']
    },
    cssLayerOrder:  'primevue',

  },
  css: [ 
    path.resolve(__dirname,'./assets/style/main.css'),
    'primevue/resources/primevue.min.css', 
    'primeicons/primeicons.css',
    'bootstrap/dist/css/bootstrap.css'
    ],
})
