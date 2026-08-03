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
    label: 'Backend',
    items: [
      { name: 'Laravel', icon: 'simple-icons:laravel', brand: '#FF2D20', note: 'Primary' },
      { name: 'PHP', icon: 'simple-icons:php', brand: '#777BB4' },
      { name: 'Golang', icon: 'simple-icons:go', brand: '#00ADD8' },
      { name: 'REST APIs', icon: 'lucide:braces' },
      { name: 'MySQL', icon: 'simple-icons:mysql', brand: '#4479A1' },
      { name: 'Redis', icon: 'simple-icons:redis', brand: '#DC382D' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'Vue 3', icon: 'simple-icons:vuedotjs', brand: '#42B883' },
      { name: 'Nuxt', icon: 'simple-icons:nuxt', brand: '#00DC82' },
      { name: 'JavaScript', icon: 'simple-icons:javascript', brand: '#F7DF1E' },
      { name: 'HTML5', icon: 'simple-icons:html5', brand: '#E34F26' },
      { name: 'CSS3', icon: 'simple-icons:css3', brand: '#1572B6' },
    ],
  },
  {
    label: 'Security',
    items: [
      { name: 'Google Authenticator 2FA', icon: 'lucide:shield-check' },
      { name: 'RBAC', icon: 'lucide:lock-keyhole' },
      { name: 'Session Management', icon: 'lucide:clock' },
      { name: 'Approval Workflows', icon: 'lucide:workflow' },
      { name: 'Audit Logging', icon: 'lucide:file-text' },
    ],
  },
  {
    label: 'Real-time',
    items: [
      { name: 'Laravel Reverb', icon: 'simple-icons:laravel', brand: '#FF2D20' },
      { name: 'WebSockets', icon: 'lucide:radio-tower' },
      { name: 'Private Channels', icon: 'lucide:network' },
      { name: 'Real-time Notifications', icon: 'lucide:bell' },
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      { name: 'Linux', icon: 'simple-icons:linux', brand: '#FCC624' },
      { name: 'Nginx', icon: 'simple-icons:nginx', brand: '#009639' },
      { name: 'Apache', icon: 'simple-icons:apache', brand: '#D22128' },
      { name: 'Docker', icon: 'simple-icons:docker', brand: '#2496ED' },
      { name: 'Git & CI/CD', icon: 'simple-icons:githubactions', brand: '#2088FF' },
      { name: 'Azure DevOps', icon: 'simple-icons:azuredevops', brand: '#0078D4' },
    ],
  },
  {
    label: 'Practices & Other',
    items: [
      { name: 'System Architecture', icon: 'lucide:building-2' },
      { name: 'API Design', icon: 'lucide:braces' },
      { name: 'Chunk File Uploads', icon: 'lucide:upload' },
      { name: 'SEO', icon: 'lucide:search' },
      { name: 'AI Integrations', icon: 'lucide:sparkles' },
      { name: 'Team Mentoring', icon: 'lucide:users' },
    ],
  },
]

export const marqueeTech = ['Laravel', 'PHP', 'Vue 3', 'Nuxt', 'Golang', 'MySQL', 'Redis', 'WebSockets', 'Reverb', 'Nginx', 'Docker', 'REST APIs', 'RBAC', '2FA']
