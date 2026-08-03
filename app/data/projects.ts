export interface Project {
  slug: string
  name: string
  client: string
  role: string
  year: string
  category: string
  summary: string
  tech: string[]
  highlights: string[]
  challenges: string[]
  solutions: string[]
  metrics: { value: string; label: string }[]
  liveUrl?: string
  sourceUrl?: string
  featured: boolean
  mockup: 'erp' | 'fintech' | 'pos' | 'chat' | 'auth' | 'lms' | 'saas' | 'dms'
}

export const projects: Project[] = [
  {
    slug: 'enterprise-erp',
    name: 'Enterprise ERP',
    client: 'Favitech Solutions',
    role: 'Lead Backend Developer',
    year: '2025',
    category: 'Enterprise',
    summary:
      'Modular ERP covering inventory, procurement, HR, and finance for mid-size companies — built with a domain-driven Laravel core and a Vue admin layer.',
    tech: ['Laravel', 'PostgreSQL', 'Redis', 'Vue', 'DDD', 'Docker'],
    highlights: [
      'Architected a modular DDD monolith with 12 bounded contexts — no framework locks, testable in isolation.',
      'Designed an event-driven workflow engine using Laravel queues for order, approval, and audit pipelines.',
      'Built role-based access control and per-tenant data isolation for multi-company deployments.',
    ],
    challenges: [
      'Multiple departments needed overlapping data with strict access rules.',
      'Reporting queries over 1M+ rows were timing out.',
    ],
    solutions: [
      'Introduced DDD bounded contexts with a shared kernel and repository pattern for clean domain isolation.',
      'Moved heavy reporting to materialized views + Redis caching with scheduled refresh jobs.',
    ],
    metrics: [
      { value: '30+', label: 'modules delivered' },
      { value: '60%', label: 'fewer data-consistency bugs' },
      { value: '8×', label: 'faster report generation' },
    ],
    featured: true,
    mockup: 'erp',
  },
  {
    slug: 'financial-payments-platform',
    name: 'Financial & Payments Platform',
    client: 'TechXtraSol',
    role: 'Founder / Lead Engineer',
    year: '2025',
    category: 'Fintech',
    summary:
      'Payments and accounting platform handling transactions, statements, reconciliation, and webhook-driven ledger updates with idempotent APIs.',
    tech: ['Laravel', 'Redis', 'PostgreSQL', 'REST', 'Webhooks'],
    highlights: [
      'Implemented idempotent, webhook-safe ledger updates so retries never double-post transactions.',
      'Hardened the API with rate limiting, signed requests, and audit logging on every mutation.',
      'Automated daily reconciliation jobs with failure alerts via queues and notifications.',
    ],
    challenges: [
      'Duplicate webhook deliveries corrupted account balances.',
      'Payment processing had to stay fast and consistent under peak volume.',
    ],
    solutions: [
      'Built idempotency keys + unique constraints with atomic conditional updates for safe retries.',
      'Offloaded non-critical work to Redis-backed queues and tuned connection pooling.',
    ],
    metrics: [
      { value: '100%', label: 'webhook idempotency' },
      { value: '0', label: 'balance errors post-deploy' },
      { value: '24/7', label: 'reconciliation coverage' },
    ],
    featured: true,
    mockup: 'fintech',
  },
  {
    slug: 'real-time-chat',
    name: 'Real-Time Chat Platform',
    client: 'TechXtraSol',
    role: 'Lead Engineer',
    year: '2025',
    category: 'Real-time',
    summary:
      'Multi-tenant real-time messaging app with typing indicators, read receipts, and presence — powered by Laravel Reverb and Vue.',
    tech: ['Laravel Reverb', 'WebSockets', 'Redis', 'Vue', 'Broadcasting'],
    highlights: [
      'Built presence channels, typing indicators, and read receipts over Laravel Reverb WebSockets.',
      'Scaled connections horizontally behind a load balancer with Redis pub/sub for state sync.',
      'Shipped an offline-first client that queues messages and syncs on reconnect.',
    ],
    challenges: [
      'WebSocket connections needed to survive server restarts and horizontal scaling.',
      'Presence state had to stay consistent across multiple nodes.',
    ],
    solutions: [
      'Used Redis pub/sub for cross-node broadcast fan-out with presence hooks.',
      'Added client heartbeat + server-side expiry so stale sessions self-heal.',
    ],
    metrics: [
      { value: '10K+', label: 'concurrent connections' },
      { value: '<150ms', label: 'message delivery p95' },
      { value: '1', label: 'shared WebSocket backend' },
    ],
    featured: true,
    mockup: 'chat',
  },
  {
    slug: 'pos-system',
    name: 'POS & Retail Suite',
    client: 'Client work',
    role: 'Full-Stack Developer',
    year: '2024',
    category: 'Retail',
    summary:
      'Point-of-sale system with barcode scanning, cashier roles, offline queueing, and sales analytics for retail stores.',
    tech: ['Laravel', 'Vue', 'MySQL', 'REST'],
    highlights: [
      'Designed a resilient POS API with optimistic locking so double-taps never double-charge.',
      'Built cashier, manager, and admin roles with per-store permissions.',
      'Shipped real-time dashboards for stock levels and daily sales.',
    ],
    challenges: [
      'Store network outages interrupted sales at the till.',
      'Stock sync between stores and central office lagged.',
    ],
    solutions: [
      'Implemented offline queueing with conflict resolution on reconnect.',
      'Scheduled incremental stock syncs with idempotent upserts.',
    ],
    metrics: [
      { value: '2×', label: 'faster checkout' },
      { value: '100%', label: 'offline sales captured' },
      { value: '3s', label: 'daily sales reporting' },
    ],
    featured: false,
    mockup: 'pos',
  },
  {
    slug: 'auth-platform',
    name: 'Centralized Auth & SSO',
    client: 'Enterprise client',
    role: 'Backend Engineer',
    year: '2024',
    category: 'Security',
    summary:
      'Centralized authentication service with OAuth2, MFA, and session management shared across a suite of business applications.',
    tech: ['Laravel', 'Passport', 'Redis', 'MFA', 'PostgreSQL'],
    highlights: [
      'Delivered a single sign-on service so users authenticate once across all internal tools.',
      'Added TOTP MFA, device management, and forced re-auth policies for sensitive actions.',
      'Implemented token revocation and Redis session store with sliding expiry.',
    ],
    challenges: [
      'Multiple legacy apps each had their own login — a security and UX mess.',
      'Sessions needed to be revocable instantly across all apps.',
    ],
    solutions: [
      'Unified on OAuth2 with a shared session layer and per-app scopes.',
      'Centralized token/session state in Redis for instant global revocation.',
    ],
    metrics: [
      { value: '6+', label: 'apps unified' },
      { value: '1', label: 'login to rule them all' },
      { value: '~0s', label: 'global logout latency' },
    ],
    featured: false,
    mockup: 'auth',
  },
  {
    slug: 'lms-platform',
    name: 'LMS Platform',
    client: 'CodesAI.net',
    role: 'Full-Stack Developer',
    year: '2024',
    category: 'Education',
    summary:
      'Course platform with a built-in learning management system — lessons, progress tracking, quizzes, and secure payment gateways.',
    tech: ['Laravel', 'Vue', 'MySQL', 'Payments'],
    highlights: [
      'Shipped course authoring, student progress tracking, and quiz engines.',
      'Integrated payments with webhook-verified enrollment and refund flows.',
      'Hardened the admin area with role-based access and activity logs.',
    ],
    challenges: [
      'Course content had to be searchable and load fast for students.',
      'Payments had to gate access instantly and securely.',
    ],
    solutions: [
      'Added scoped indexes + full-text search and cached catalog pages.',
      'Webhook-signed payment callbacks with idempotent enrollment grants.',
    ],
    metrics: [
      { value: 'Live', label: 'codesai.net' },
      { value: '5×', label: 'faster course catalog' },
      { value: 'Secure', label: 'payment gating' },
    ],
    liveUrl: 'https://codesai.net',
    featured: true,
    mockup: 'lms',
  },
  {
    slug: 'saas-ai',
    name: 'AI SaaS Platform',
    client: 'TechXtraSol',
    role: 'Founder / Full-Stack',
    year: '2024',
    category: 'SaaS',
    summary:
      'Modern SaaS platform exploring AI-assisted workflows — Nuxt frontend, API-first backend, and a subscription-ready architecture.',
    tech: ['Nuxt', 'Vue', 'TypeScript', 'Laravel', 'Tailwind CSS'],
    highlights: [
      'Built a Nuxt 3 frontend with an API-first design and edge-friendly static delivery.',
      'Designed the subscription, team, and billing data model from day one.',
      'Set up CI/CD with preview deployments for every branch.',
    ],
    challenges: [
      'Product direction changed frequently during early validation.',
      'Frontend and backend shipped on different release cadences.',
    ],
    solutions: [
      'Kept UI decoupled via a typed API contract to survive product pivots.',
      'Automated previews and contract tests to keep releases safe.',
    ],
    metrics: [
      { value: 'Live', label: 'preview deployment' },
      { value: '100+', label: 'Lighthouse performance' },
      { value: 'Edge', label: 'CDN-delivered UI' },
    ],
    liveUrl: 'https://techx-vue-saas.vercel.app/',
    featured: false,
    mockup: 'saas',
  },
  {
    slug: 'dms-vault',
    name: 'Document Management System',
    client: 'Favitech Solutions',
    role: 'Lead Backend Developer',
    year: '2024',
    category: 'Enterprise',
    summary:
      'Secure document management system with versioning, granular permissions, and full-text search — secrets managed via HashiCorp Vault.',
    tech: ['Laravel', 'DDD', 'Vault', 'PostgreSQL', 'Redis'],
    highlights: [
      'Built version-controlled document storage with audit trails for every action.',
      'Integrated HashiCorp Vault for dynamic secrets and encryption key management.',
      'Implemented fine-grained ACLs across teams, projects, and folders.',
    ],
    challenges: [
      'Documents required strict compliance-grade auditability.',
      'Credentials for integrations were spread across config files.',
    ],
    solutions: [
      'Added immutable audit events on all mutations via domain observers.',
      'Migrated all secrets to Vault with short-lived, rotated credentials.',
    ],
    metrics: [
      { value: '100%', label: 'audit coverage' },
      { value: '0', label: 'plaintext secrets in code' },
      { value: '~0s', label: 'doc retrieval latency' },
    ],
    featured: false,
    mockup: 'dms',
  },
]
