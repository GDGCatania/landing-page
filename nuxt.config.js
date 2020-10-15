export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'gdgcatania-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap' },
    ],
  },
  css: [
    '~/assets/css/main.css',
  ],
  plugins: [{
    src: '~/plugins/splide.js',
    ssr: false,
  },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
  ],
  purgeCSS: {
    enabled: process.env.NODE_ENV !== 'development',
    paths: [
      'components/**/*.vue',
      'containers/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    whitelistPatterns: [
      /^splide.*$/,
      /^aos-animate.*$/,
      /^vs--.*$/,
      /^vs__.*$/,
    ],
    whitelistPatternsChildren: [
      /^splide.*$/,
      /^aos-animate.*$/,
      /^vs--.*$/,
      /^vs__.*$/,
    ],
  },
  build: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
    postcss: {
      plugins: {
        'postcss-nested': true,
      },
    },
  },
};
