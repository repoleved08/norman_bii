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
    slug: 'enterprise-financial-platform',
    name: 'Enterprise Financial Platform',
    client: 'Enterprise client',
    role: 'Technical Lead',
    year: '2026',
    category: 'Fintech',
    summary:
      'Mission-critical financial platform processing live transactions for multiple business units — with a full enterprise security stack and multi-tenant data isolation.',
    tech: ['Laravel', 'Vue 3', 'Redis', 'MySQL', 'Nginx', 'Apache'],
    highlights: [
      'Led architecture end to end — data modeling, API structure, and module separation for a system handling real money in production.',
      'Engineered Google Authenticator 2FA, enterprise RBAC, approval workflows, session controls, and audit logging across every financial module.',
      'Architected multi-tenant data isolation so each client\'s financial data stays segregated with independent permission hierarchies.',
      'Refactored the codebase into clean service layers, reducing technical debt and improving separation of concerns.',
    ],
    challenges: [
      'Granular permission boundaries were needed between roles across financial modules.',
      'Sensitive operations required structured authorization before execution, plus full traceability.',
    ],
    solutions: [
      'Designed enterprise RBAC with role-based scopes enforced at the authorization layer.',
      'Built multi-step approval workflows with session policies and immutable audit logging on every mutation.',
    ],
    metrics: [
      { value: '2FA', label: 'on every auth flow' },
      { value: 'RBAC', label: 'granular permissions' },
      { value: 'Multi-tenant', label: 'client data isolation' },
    ],
    featured: true,
    mockup: 'fintech',
  },
  {
    slug: 'document-management-system',
    name: 'Document Management System',
    client: 'Enterprise client',
    role: 'Full-Stack Developer',
    year: '2025',
    category: 'Enterprise',
    summary:
      'Full-featured DMS built from zero to production with Laravel and Vue 3 — real-time collaboration, resumable uploads, granular access control, and a complete audit trail.',
    tech: ['Laravel', 'Vue 3', 'Laravel Reverb', 'WebSockets', 'Redis', 'MySQL'],
    highlights: [
      'Engineered an optimized chunk upload pipeline — large files split into resumable segments that survive unreliable connections.',
      'Implemented real-time chat and notifications via Laravel Reverb and private WebSocket channels.',
      'Built granular role-based access and permission management scoped to authorized documents.',
      'Delivered file versioning, search, secure storage, and full activity logging — a complete document lifecycle platform.',
    ],
    challenges: [
      'Large document uploads failed on unreliable connections.',
      'Teams needed real-time collaboration with strict access scoping and a full audit trail.',
    ],
    solutions: [
      'Split uploads into resumable chunks with progress tracking and resume on reconnect.',
      'Private Reverb channels for chat and notifications, RBAC scoping, and immutable activity logs for every document event.',
    ],
    metrics: [
      { value: 'Real-time', label: 'collaboration' },
      { value: 'Resumable', label: 'chunk uploads' },
      { value: '100%', label: 'audit trail' },
    ],
    featured: true,
    mockup: 'dms',
  },
  {
    slug: 'multi-shop-pos-system',
    name: 'Multi-Shop POS System',
    client: 'Production client',
    role: 'Full-Stack Developer',
    year: '2025',
    category: 'Retail',
    summary:
      'Production multi-shop POS system serving multiple branches with isolated data and independent operational contexts — maintained and continuously hardened.',
    tech: ['Laravel', 'Vue', 'MySQL', 'REST', 'Redis'],
    highlights: [
      'Enforced branch-level data isolation so inventory, sales, and user records never cross-contaminate between business units.',
      'Delivered targeted security improvements across authentication and authorization, closing identified vulnerabilities.',
      'Optimized backend queries and refactored service layers, improving response times and cutting database load at peak volume.',
      'Implemented per-branch role-based permissions tailored to cashiers, managers, and admins.',
    ],
    challenges: [
      'Multiple branches shared one platform but needed fully isolated operational data.',
      'Peak transaction volumes hammered the database.',
    ],
    solutions: [
      'Branch-scoped tenancy with independent permission hierarchies per business unit.',
      'Query optimization and service-layer refactors to cut load under peak transaction volume.',
    ],
    metrics: [
      { value: 'Branch', label: 'data isolation' },
      { value: '~0', label: 'cross-branch leaks' },
      { value: 'Hardened', label: 'auth & security' },
    ],
    featured: true,
    mockup: 'pos',
  },
  {
    slug: 'techxtrasol-platform',
    name: 'TechXtraSol Platform',
    client: 'TechXtraSol',
    role: 'Founder / Lead Developer',
    year: '2025',
    category: 'SaaS',
    summary:
      'A full Nuxt frontend with a Laravel API backend, resources hub, technical blog, and client contact portal, running on hardened infrastructure.',
    tech: ['Nuxt', 'Vue 3', 'Laravel', 'Nginx', 'Linux', 'AI', 'Google APIs'],
    highlights: [
      'Designed, built, and deployed the Nuxt frontend and Laravel API backend — resources hub, technical blog, and client portal.',
      'Integrated AI agents and Google API automation to cut content management overhead dramatically.',
      'Configure and maintain production Linux servers with Nginx, SSL, security hardening, and performance tuning for fast global loads.',
      'Implemented SEO best practices and performance tuning with strong Core Web Vitals scores.',
    ],
    challenges: [
      'Content publishing and engagement workflows consumed too much manual effort.',
      'The platform needed fast global load times on lean infrastructure.',
    ],
    solutions: [
      'AI agents + Google API automation for content, notifications, and engagement pipelines.',
      'Hardened Nginx/Linux stack with SEO and performance tuning for strong Core Web Vitals.',
    ],
    metrics: [
      { value: 'Live', label: 'techxtrasol.tech' },
      { value: 'AI', label: 'content automation' },
      { value: 'Green', label: 'Core Web Vitals' },
    ],
    liveUrl: 'https://techxtrasol.tech',
    featured: true,
    mockup: 'saas',
  },
]
