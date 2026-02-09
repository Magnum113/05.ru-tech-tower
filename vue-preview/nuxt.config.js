export default {
  ssr: false,
  target: 'static',
  srcDir: '.',
  components: true,
  router: {
    base: '/vue-preview/'
  },
  generate: {
    dir: '../dist/vue-preview'
  },
  head: {
    title: '05.ru Tech Tower - Vue Preview',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    ]
  },
  css: ['~/assets/css/main.pcss'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: [
      '@supabase/supabase-js',
      '@supabase/storage-js',
      '@supabase/postgrest-js',
      '@supabase/realtime-js',
      '@supabase/functions-js',
      '@supabase/auth-js',
      'iceberg-js'
    ]
  },
  typescript: {
    typeCheck: false
  }
};
