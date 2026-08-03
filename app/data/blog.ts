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

const base = 'https://www.techxtrasol.tech/blog'

export const blogPosts: BlogPost[] = [
  {
    title: 'Secret Management in Laravel with Infisical: A Practical Guide',
    slug: 'infisical-secret-management-laravel',
    description:
      'How to use Infisical to manage secrets in Laravel applications — inject environment variables in local development, collaborate as a team, and deploy safely with CI/CD.',
    date: '2026-08-02',
    readingTime: '12 min',
    tag: 'DevOps',
    url: `${base}/infisical-secret-management-laravel`,
    featured: true,
  },
  {
    title: 'The Prompt Recipe: How to Talk to AI So It Actually Understands You',
    slug: 'prompt-recipe-ai',
    description:
      'A practical framework for writing prompts that AI understands the first time — articulate context, coach ChatGPT to learn your domain, and personalise it to your stack and conventions.',
    date: '2026-08-02',
    readingTime: '10 min',
    tag: 'AI & Automation',
    url: `${base}/prompt-recipe-ai`,
    featured: true,
  },
  {
    title: 'Building Scalable Laravel Applications with Clean Architecture',
    slug: 'building-scalable-laravel-applications',
    description:
      'Learn how to structure Laravel applications using repository pattern, service layers, and clean architecture principles that scale with your business.',
    date: '2026-07-15',
    readingTime: '8 min',
    tag: 'Software Engineering',
    url: `${base}/building-scalable-laravel-applications`,
    featured: true,
  },
  {
    title: "Nuxt 4: What's New and Why It Matters for Your Next Project",
    slug: 'nuxt-4-whats-new',
    description:
      'A deep dive into Nuxt 4 features — improved performance, better TypeScript support, and new composables that streamline development.',
    date: '2026-07-08',
    readingTime: '6 min',
    tag: 'Frontend',
    url: `${base}/nuxt-4-whats-new`,
  },
  {
    title: 'Integrating AI Chatbots into Business Systems: A Practical Guide',
    slug: 'integrating-ai-chatbots',
    description:
      'How to build and deploy AI-powered chatbots that integrate with your existing business systems, knowledge bases, and workflows.',
    date: '2026-07-01',
    readingTime: '10 min',
    tag: 'AI',
    url: `${base}/integrating-ai-chatbots`,
  },
  {
    title: 'M-Pesa Integration: Complete Guide for Kenyan Businesses',
    slug: 'm-pesa-integration-guide',
    description:
      'Step-by-step guide to integrating M-Pesa payments into your web application, including STK Push, C2B, and B2C transactions.',
    date: '2026-06-24',
    readingTime: '12 min',
    tag: 'Software Engineering',
    url: `${base}/m-pesa-integration-guide`,
  },
  {
    title: 'Docker for Developers: From Development to Production',
    slug: 'docker-for-developers',
    description:
      'A practical guide to containerizing your applications with Docker, setting up CI/CD pipelines, and deploying to production.',
    date: '2026-06-17',
    readingTime: '9 min',
    tag: 'DevOps',
    url: `${base}/docker-for-developers`,
  },
  {
    title: 'Digital Transformation for Kenyan SMEs: Where to Start',
    slug: 'digital-transformation-kenyan-smes',
    description:
      'A roadmap for small and medium businesses in Kenya looking to digitize operations, automate workflows, and scale with technology.',
    date: '2026-06-10',
    readingTime: '7 min',
    tag: 'Business Automation',
    url: `${base}/digital-transformation-kenyan-smes`,
  },
]
