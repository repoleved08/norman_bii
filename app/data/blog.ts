export interface BlogPost {
  title: string
  slug: string
  description: string
  date: string
  readingTime: string
  tag: string
  url?: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Idempotent Payments: Designing APIs That Survive Retries',
    slug: 'idempotent-payments-apis',
    description:
      'How to build webhook-safe payment flows with idempotency keys, unique constraints, and atomic updates — so a retried request never double-posts.',
    date: '2025-06-12',
    readingTime: '8 min',
    tag: 'Backend',
    featured: true,
  },
  {
    title: 'Domain-Driven Design in Laravel Without the Hype',
    slug: 'ddd-in-laravel',
    description:
      'A pragmatic take on bounded contexts, repositories, and observers in Laravel — what actually pays off in enterprise apps and what does not.',
    date: '2025-04-02',
    readingTime: '10 min',
    tag: 'Architecture',
    featured: true,
  },
  {
    title: 'Scaling Laravel WebSockets Past One Server',
    slug: 'scaling-laravel-websockets',
    description:
      'Running Laravel Reverb horizontally: Redis pub/sub, presence state across nodes, and how clients survive a server restart.',
    date: '2025-02-18',
    readingTime: '7 min',
    tag: 'Real-time',
    featured: true,
  },
  {
    title: 'HashiCorp Vault for Laravel Apps: Secrets Without the Fear',
    slug: 'vault-for-laravel',
    description:
      'Stop putting credentials in .env and config files. Dynamic, rotated secrets with Vault for production Laravel deployments.',
    date: '2024-11-20',
    readingTime: '9 min',
    tag: 'Security',
  },
  {
    title: 'Performance Tuning a Slow Laravel API',
    slug: 'laravel-api-performance',
    description:
      'The checklist that took an enterprise API from 2.4s to ~300ms: N+1s, Redis caching, materialized views, and connection pools.',
    date: '2024-09-30',
    readingTime: '11 min',
    tag: 'Performance',
  },
  {
    title: 'Deploying Laravel to Production the Right Way',
    slug: 'deploying-laravel-production',
    description:
      'Nginx, PHP-FPM tuning, Supervisor for queue workers, zero-downtime deploys, and the monitoring you actually need.',
    date: '2024-08-14',
    readingTime: '12 min',
    tag: 'DevOps',
  },
]
