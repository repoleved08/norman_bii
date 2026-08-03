export interface TechItem {
  name: string
  icon?: string
  brand?: string
  note?: string
}

export interface TechCategory {
  label: string
  items: TechItem[]
}

export const techStack: TechCategory[] = [
  {
    label: 'Languages',
    items: [
      { name: 'PHP', icon: 'simple-icons:php', brand: '#777BB4' },
      { name: 'Golang', icon: 'simple-icons:go', brand: '#00ADD8' },
      { name: 'JavaScript', icon: 'simple-icons:javascript', brand: '#F7DF1E' },
      { name: 'TypeScript', icon: 'simple-icons:typescript', brand: '#3178C6' },
      { name: 'SQL', icon: 'simple-icons:postgresql', brand: '#4169E1' },
    ],
  },
  {
    label: 'Backend & Frameworks',
    items: [
      { name: 'Laravel', icon: 'simple-icons:laravel', brand: '#FF2D20', note: 'Primary' },
      { name: 'REST APIs', icon: 'lucide:braces' },
      { name: 'Auth & Authorization', icon: 'lucide:shield-check' },
      { name: 'Redis', icon: 'simple-icons:redis', brand: '#DC382D' },
      { name: 'Queues & Jobs', icon: 'lucide:list-ordered' },
      { name: 'WebSockets', icon: 'lucide:radio-tower' },
      { name: 'Laravel Reverb', icon: 'simple-icons:laravel', brand: '#FF2D20' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'Vue', icon: 'simple-icons:vuedotjs', brand: '#42B883' },
      { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', brand: '#00DC82' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', brand: '#38BDF8' },
      { name: 'Alpine.js', icon: 'simple-icons:alpinedotjs', brand: '#77C1D2' },
      { name: 'Inertia.js', icon: 'simple-icons:inertia', brand: '#9553E9' },
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      { name: 'Linux', icon: 'simple-icons:linux', brand: '#FCC624' },
      { name: 'Nginx', icon: 'simple-icons:nginx', brand: '#009639' },
      { name: 'Apache', icon: 'simple-icons:apache', brand: '#D22128' },
      { name: 'Supervisor', icon: 'simple-icons:superuser' },
      { name: 'Docker', icon: 'simple-icons:docker', brand: '#2496ED' },
      { name: 'Git & CI/CD', icon: 'simple-icons:githubactions', brand: '#2088FF' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL', icon: 'simple-icons:mysql', brand: '#4479A1' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', brand: '#4169E1' },
    ],
  },
  {
    label: 'Practices',
    items: [
      { name: 'System Design', icon: 'lucide:network' },
      { name: 'Security Hardening', icon: 'lucide:lock-keyhole' },
      { name: 'Performance Tuning', icon: 'lucide:gauge' },
      { name: 'API Architecture', icon: 'lucide:workflow' },
      { name: 'Enterprise Systems', icon: 'lucide:building-2' },
      { name: 'Team Mentoring', icon: 'lucide:users' },
    ],
  },
]

export const marqueeTech = ['Laravel', 'PHP', 'Vue', 'Nuxt', 'TypeScript', 'Golang', 'MySQL', 'PostgreSQL', 'Redis', 'Nginx', 'Docker', 'REST APIs', 'WebSockets']
