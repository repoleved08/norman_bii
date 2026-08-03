export const site = {
  name: 'Norman Bii',
  handle: 'norman_bii',
  role: 'Senior Laravel Developer & Technical Lead',
  company: 'Favitech Solutions',
  companyUrl: 'https://favitech.com',
  studio: 'TechXtraSol',
  studioUrl: 'https://techxtrasol.tech',
  location: 'Nairobi, Kenya',
  timezone: 'EAT (UTC+3)',
  phone: '+254 714 000 481',
  email: 'biinorman1@gmail.com',
  bookingUrl: 'https://cal.com/norman-bii-08/30min',
  githubUser: 'repoleved08',
  blogUrl: 'https://www.techxtrasol.tech/blog',

  headline: 'I build production-grade software that businesses depend on.',
  heroSubline:
    'Senior Laravel Developer and Technical Lead with 4+ years shipping enterprise systems — leading the architecture of Kredicore, a financial platform processing live transactions, and founder of TechXtraSol. Secure, scalable, and built to survive production.',

  socials: [
    { name: 'GitHub', handle: '@repoleved08', url: 'https://github.com/repoleved08', icon: 'simple-icons:github' },
    { name: 'LinkedIn', handle: 'norman-bii', url: 'https://www.linkedin.com/in/norman-bii-87382722a', icon: 'simple-icons:linkedin' },
    { name: 'TechXtraSol', handle: 'techxtrasol.tech', url: 'https://techxtrasol.tech', icon: 'lucide:rocket' },
    { name: 'X', handle: '@NormanGeek1', url: 'https://x.com/NormanGeek1', icon: 'simple-icons:x' },
  ] as const,

  nav: [
    { label: 'Work', to: '#work' },
    { label: 'Stack', to: '#stack' },
    { label: 'Experience', to: '#experience' },
    { label: 'Open Source', to: '#open-source' },
    { label: 'Blog', to: '#blog' },
    { label: 'Contact', to: '#contact' },
  ],

  stats: [
    { value: 4, suffix: '+', label: 'Years building software' },
    { value: 20, suffix: '+', label: 'Systems shipped to production' },
    { value: 7, suffix: '+', label: 'Domains — finance, ERP, real-time' },
    { value: 3, suffix: '', label: 'Production apps I currently operate' },
  ],
} as const

export type SocialLink = (typeof site.socials)[number]
