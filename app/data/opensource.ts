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
    name: 'laravel-vault-integration',
    description: 'Drop-in HashiCorp Vault integration for Laravel — dynamic secrets, encrypted config.',
    language: 'PHP',
    stars: 42,
    forks: 9,
    url: 'https://github.com/repoleved08',
    topics: ['laravel', 'security', 'vault'],
  },
  {
    name: 'ddd-skeleton',
    description: 'A pragmatic DDD skeleton for Laravel with bounded contexts and repository patterns.',
    language: 'PHP',
    stars: 68,
    forks: 14,
    url: 'https://github.com/repoleved08',
    topics: ['ddd', 'architecture', 'php'],
  },
  {
    name: 'reverb-scaler',
    description: 'Reference setup for running Laravel Reverb horizontally with Redis pub/sub.',
    language: 'PHP',
    stars: 31,
    forks: 6,
    url: 'https://github.com/repoleved08',
    topics: ['websockets', 'reverb', 'redis'],
  },
  {
    name: 'vue-data-table',
    description: 'Blazing-fast sortable, filterable data table component for Vue 3.',
    language: 'TypeScript',
    stars: 54,
    forks: 11,
    url: 'https://github.com/repoleved08',
    topics: ['vue', 'typescript', 'ui'],
  },
  {
    name: 'go-webhook-relay',
    description: 'Webhook relay and retry worker written in Go — idempotent delivery with backoff.',
    language: 'Go',
    stars: 25,
    forks: 4,
    url: 'https://github.com/repoleved08',
    topics: ['go', 'webhooks'],
  },
  {
    name: 'supervisor-configs',
    description: 'Battle-tested Supervisor + PHP-FPM + Nginx configs for Laravel production.',
    language: 'Shell',
    stars: 19,
    forks: 5,
    url: 'https://github.com/repoleved08',
    topics: ['devops', 'deployment'],
  },
]
