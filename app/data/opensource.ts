export interface Repo {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
  topics: string[]
}

export const fallbackRepos: Repo[] = [
  {
    name: 'nuxtcommerce',
    description: 'Open-source, dynamic e-commerce solution powered by Nuxt 4 and GraphQL — a headless storefront replacement for WooCommerce with a Pinterest-style UI.',
    language: 'Vue',
    stars: 0,
    forks: 0,
    url: 'https://github.com/repoleved08/nuxtcommerce',
    topics: ['nuxt', 'graphql', 'ecommerce'],
  },
  {
    name: 'techxtrasol.tech',
    description: 'Source of the TechXtraSol platform — Nuxt frontend, Laravel API backend, and the engineering blog.',
    language: 'Vue',
    stars: 0,
    forks: 0,
    url: 'https://github.com/repoleved08/techxtrasol.tech',
    topics: ['nuxt', 'laravel', 'blog'],
  },
  {
    name: 'laraowl',
    description: 'Tooling and experiments around Laravel — exploring patterns for cleaner, production-safe applications.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/repoleved08/laraowl',
    topics: ['laravel', 'tooling'],
  },
  {
    name: 'omarchy-norman-bii-theme',
    description: 'A custom Omarchy theme — a Linux desktop setup configured and maintained as code.',
    language: 'Lua',
    stars: 0,
    forks: 0,
    url: 'https://github.com/repoleved08/omarchy-norman-bii-theme',
    topics: ['linux', 'hyprland', 'theming'],
  },
  {
    name: 'blackspike',
    description: 'Experimental project — utilities and side-work exploring new stacks.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/repoleved08/blackspike',
    topics: ['experiment', 'typescript'],
  },
  {
    name: 'norman_bii',
    description: 'This very portfolio — a Nuxt 4 + Tailwind v4 site, hand-built and deployed to production.',
    language: 'Vue',
    stars: 0,
    forks: 0,
    url: 'https://github.com/repoleved08/norman_bii',
    topics: ['nuxt', 'tailwind', 'portfolio'],
  },
]
