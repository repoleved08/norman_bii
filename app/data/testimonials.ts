export interface Testimonial {
  quote: string
  name: string
  role: string
  org: string
  initials: string
  accent: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Norman owns production. When an enterprise client needed a payments module hardened and shipped in weeks, he designed the architecture, wrote the ledger logic, and deployed it to production himself.',
    name: 'Engineering Lead',
    role: 'Engineering Lead',
    org: 'Favitech Solutions',
    initials: 'EL',
    accent: 'from-brand-500 to-accent-400',
  },
  {
    quote:
      'He does not just write code — he thinks in systems. The ERP contexts he architected are still the backbone of what we ship to clients today.',
    name: 'Senior Developer',
    role: 'Senior Developer',
    org: 'Favitech Solutions',
    initials: 'SD',
    accent: 'from-brand-400 to-brand-600',
  },
  {
    quote:
      'Reliable, fast, and security-minded. He took our chaotic login setup and delivered one clean SSO that every internal tool now uses.',
    name: 'Product Manager',
    role: 'Product Manager',
    org: 'Enterprise client',
    initials: 'PM',
    accent: 'from-accent-400 to-brand-500',
  },
]
