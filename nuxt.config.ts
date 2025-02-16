import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
  modules: ['@nuxt/eslint'],
  typescript: {
    strict: false,
  },
  pages: true,
  css: ['./assets/css/tailwind.css'],
  postcss: {
    plugins: {
      cssnano: {
        preset: ['cssnano-preset-default', { calc: false }],
      },
      autoprefixer: {},
    },
  },
});
