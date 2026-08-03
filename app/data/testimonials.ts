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
      'Professional referee listed on my CV — contact details provided on request.',
    name: 'Paul Kariuki',
    role: 'Referee',
    org: 'Contact details on request',
    initials: 'PK',
    accent: 'from-brand-500 to-accent-400',
  },
  {
    quote:
      'Professional referee listed on my CV — contact details provided on request.',
    name: 'Vancy Kebut',
    role: 'Referee',
    org: 'Contact details on request',
    initials: 'VK',
    accent: 'from-brand-400 to-brand-600',
  },
  {
    quote:
      'Professional referee listed on my CV — contact details provided on request.',
    name: 'Vitalis Kemoi',
    role: 'Referee',
    org: 'Contact details on request',
    initials: 'VK',
    accent: 'from-accent-400 to-brand-500',
  },
  {
    quote:
      'Professional referee listed on my CV — contact details provided on request.',
    name: 'Benjamin Chacha',
    role: 'Referee',
    org: 'Contact details on request',
    initials: 'BC',
    accent: 'from-brand-500 to-accent-400',
  },
]
