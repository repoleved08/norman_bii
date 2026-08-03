export interface ExperienceItem {
  title: string
  organization: string
  orgUrl?: string
  period: string
  type: 'work' | 'founder' | 'education' | 'cert'
  current?: boolean
  description: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Lead Laravel Developer',
    organization: 'Favitech Solutions',
    orgUrl: 'https://favitech.com',
    period: '2024 — Present',
    type: 'work',
    current: true,
    description:
      'Leading backend development on enterprise Laravel systems used by real businesses in production.',
    points: [
      'Lead development and architecture decisions for enterprise clients.',
      'Deploy and operate production applications across Linux servers.',
      'Own performance optimization and security improvements end to end.',
      'Mentor developers and enforce clean, DDD-aligned code standards.',
    ],
  },
  {
    title: 'Founder & Software Engineer',
    organization: 'TechXtraSol',
    orgUrl: 'https://techxtrasol.com',
    period: '2024 — Present',
    type: 'founder',
    current: true,
    description:
      'Founded TechXtraSol to ship products and serve clients across finance, real-time, and SaaS.',
    points: [
      'Design systems end to end — architecture, database, API, deployment.',
      'Run projects from requirements to production on my own infrastructure.',
      'Built financial, POS, chat, and authentication systems for clients.',
    ],
  },
  {
    title: 'BSc. Information Technology',
    organization: 'Karatina University',
    period: '2019 — 2023',
    type: 'education',
    description:
      'Degree focused on software development, database management, and networking.',
    points: [
      'Graduated with a focus on software engineering and systems.',
    ],
  },
]

export const certifications = [
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'Hack The Box',
    year: '2024',
    description: 'Ethical hacking, network security, and incident response.',
    icon: 'simple-icons:hackthebox',
    brand: '#9FEF00',
  },
  {
    name: 'Advanced Golang Development',
    issuer: 'Code Mastery',
    year: '2024',
    description: 'Concurrency, web services, and idiomatic Go patterns.',
    icon: 'simple-icons:go',
    brand: '#00ADD8',
  },
  {
    name: 'HashiCorp Vault — Secrets Management',
    issuer: 'Production Security',
    year: '2024',
    description: 'Dynamic secrets, rotation, and identity-based access in production.',
    icon: 'simple-icons:hashicorp',
    brand: '#000000',
  },
  {
    name: 'Laravel Ecosystem',
    issuer: 'Laracasts & Certification Track',
    year: '2024',
    description: 'Advanced Laravel patterns, queues, broadcasting, and testing.',
    icon: 'simple-icons:laravel',
    brand: '#FF2D20',
  },
]
