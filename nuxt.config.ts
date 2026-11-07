import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  srcDir: 'app',

  modules: ['@nuxt/fonts', '@nuxt/icon'],

  icon: {
    mode: 'svg',
    serverBundle: {
      collections: ['lucide', 'simple-icons'],
    },
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: [
        'lucide:alert-circle', 'lucide:arrow-down', 'lucide:arrow-right', 'lucide:arrow-up-right',
        'lucide:bell', 'lucide:box', 'lucide:braces', 'lucide:building', 'lucide:building-2',
        'lucide:calendar', 'lucide:check', 'lucide:check-circle-2', 'lucide:chevron-up', 'lucide:clock',
        'lucide:code', 'lucide:copy', 'lucide:external-link', 'lucide:file-text', 'lucide:gauge',
        'lucide:git-branch', 'lucide:git-fork', 'lucide:graduation-cap', 'lucide:loader-circle',
        'lucide:lock-keyhole', 'lucide:mail', 'lucide:map-pin', 'lucide:menu', 'lucide:moon',
        'lucide:network', 'lucide:phone', 'lucide:quote', 'lucide:radio-tower', 'lucide:refresh-cw',
        'lucide:rocket', 'lucide:search', 'lucide:send', 'lucide:server', 'lucide:shield-check',
        'lucide:sparkles', 'lucide:star', 'lucide:sun', 'lucide:upload', 'lucide:users',
        'lucide:workflow', 'lucide:x',
        'simple-icons:apache', 'simple-icons:azuredevops', 'simple-icons:css3', 'simple-icons:docker',
        'simple-icons:github', 'simple-icons:githubactions', 'simple-icons:go', 'simple-icons:html5',
        'simple-icons:huawei', 'simple-icons:javascript', 'simple-icons:kalilinux', 'simple-icons:laravel', 'simple-icons:linkedin',
        'simple-icons:linux', 'simple-icons:mysql', 'simple-icons:nginx', 'simple-icons:nuxt',
        'simple-icons:parrotsecurity', 'simple-icons:php', 'simple-icons:redis', 'simple-icons:vuedotjs', 'simple-icons:whatsapp', 'simple-icons:x',
      ],
    },
  },

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
      weights: [400, 500, 600, 700, 800],
      subsets: ['latin'],
    },
    families: [
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 600, 700, 800] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en', style: 'color-scheme: dark' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      title: 'Norman Bii — Senior Laravel Developer & Technical Lead',
      meta: [{ name: 'theme-color', content: '#080a09' }],
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
