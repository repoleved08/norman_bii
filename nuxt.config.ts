import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  srcDir: 'app',

  modules: ['@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    // Deploy to Cloudflare Pages with: NITRO_PRESET=cloudflare_pages npm run build
    preset: process.env.NITRO_PRESET || undefined,
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
    },
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] },
      { name: 'Space Grotesk', provider: 'google', weights: [500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      title: 'Norman Bii — Lead Laravel Developer',
      script: [
        {
          tagPriority: 'critical',
          innerHTML:
            '(function(){try{var s=localStorage.getItem("nb-theme");var o=window.matchMedia("(prefers-color-scheme: light)").matches;var t=s||(o?"light":"dark");document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t}catch(e){document.documentElement.classList.add("dark")}})()',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://normanbii.dev/' },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/projects': { prerender: true },
    '/blog': { prerender: true },
    '/contact': { prerender: true },
  },

  devtools: { enabled: false },
})
