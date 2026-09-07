export interface ExperienceItem {
  title: string
  organization: string
  orgUrl?: string
  period: string
  type: 'work' | 'founder' | 'education' | 'intern' | 'cert'
  current?: boolean
  description: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Laravel Developer / Technical Lead',
    organization: 'Favitech Solutions Limited',
    orgUrl: 'https://favitech.com',
    period: 'Jan 2026 — Present',
    type: 'work',
    current: true,
    description:
      'Technical lead on an enterprise financial platform — combining hands-on architecture with team mentorship and engineering standards.',
    points: [
      'Lead end-to-end development of an enterprise financial platform processing live transactions — owning data modeling, API structure, and module separation.',
      'Designed and implemented enterprise RBAC across financial modules, enforcing granular permission boundaries between user roles.',
      'Engineered Google Authenticator 2FA across all authentication flows, hardening account security for financial system users.',
      'Built multi-step approval workflows so sensitive financial operations pass structured authorization chains before execution.',
      'Architected session management with configurable timeouts, concurrent-session detection, and forced invalidation for compliance.',
      'Established audit logging across critical operations — capturing actor, action, timestamp, and affected record.',
      'Shipped a secure internal file management system with role-based document access, adopted company-wide.',
      'Mentor a team of junior developers, run code reviews, and define coding standards the whole team follows.',
    ],
  },
  {
    title: 'Junior Laravel & Vue Developer',
    organization: 'Favitech Solutions Limited',
    orgUrl: 'https://favitech.com',
    period: 'Sep 2025 — Dec 2025',
    type: 'work',
    description:
      'Maintained and enhanced enterprise financial systems built on Laravel, Vue 3, Redis, Nginx, and Apache.',
    points: [
      'Designed and built the internal file management system from scratch — uploads, categorization, access control, and retrieval — adopted company-wide.',
      'Delivered bug fixes, feature additions, and backend API improvements across production systems with zero downtime incidents.',
      'Collaborated with senior engineers and QA to ship features under production deadlines, taking on technical feedback fast and building deep domain knowledge in enterprise financial software.',
    ],
  },
  {
    title: 'Founder & Lead Developer',
    organization: 'TechXtraSol',
    orgUrl: 'https://techxtrasol.tech',
    period: 'Feb 2025 — Present',
    type: 'founder',
    current: true,
    description:
      'Founded and operate TechXtraSol — an IT solutions company and developer content platform — handling product development, client delivery, hosting infrastructure, and business operations.',
    points: [
      'Architect and ship client web applications using Laravel backends, Nuxt frontends, and Linux server deployments.',
      'Implemented AI integrations and Google API automation workflows to streamline content management and user engagement.',
      'Maintain hardened Linux servers with Nginx/Apache, SSL, and routine security audits.',
      'Publish technical articles and tutorials, growing an audience of developers and career switchers across East Africa.',
      'Optimized platform SEO and Core Web Vitals, improving organic visibility and retention.',
    ],
  },
  {
    title: 'Digital Media Analyst (Intern)',
    organization: 'Media Council of Kenya',
    period: 'Mar 2024 — Jun 2024',
    type: 'intern',
    description:
      'Monitored and analyzed broadcast media content across Kenya’s radio and TV stations for regulatory compliance with the Journalist Code of Conduct.',
    points: [
      'Applied OSINT tools (reverse image search, EXIF analysis) to fact-check media claims.',
      'Produced structured weekly reports on violations and patterns for senior analysts and council leadership.',
      'Proposed process improvements that reduced manual analysis time.',
    ],
  },
  {
    title: 'C# Full-Stack Developer (Intern)',
    organization: 'TheJitu',
    period: 'Jul 2023 — Oct 2023',
    type: 'intern',
    description:
      'Built hospital management and e-commerce systems using ASP.NET Core and Blazor WebAssembly.',
    points: [
      'Built a hospital management microservice on ASP.NET Web API — patient records, scheduling, and billing modules.',
      'Delivered an e-commerce platform on ASP.NET Core + Blazor WebAssembly with catalog, cart, and checkout flows.',
      'Configured Azure DevOps CI/CD pipelines, reducing manual release overhead.',
      'Integrated Azure Message Bus to decouple services for reliable async processing.',
    ],
  },
  {
    title: 'BSc. Information Technology',
    organization: 'Karatina University',
    period: 'Aug 2019 — May 2023',
    type: 'education',
    description:
      'Degree focused on software development, database management, and networking.',
    points: [
      'Reached the national stage of the Huawei ICT Networking Competition among Kenya’s top networking students.',
    ],
  },
]

export const certifications = [
  {
    name: 'HCIA — Huawei Certified ICT Associate (Networking)',
    issuer: 'Huawei',
    year: '2022',
    description: 'Routing, switching, IP fundamentals, and enterprise networking.',
    icon: 'simple-icons:huawei',
    brand: '#FF0000',
  },
  {
    name: 'C# Full-Stack Web Development',
    issuer: 'Short Course · Kenya',
    year: '2023',
    description: 'ASP.NET Core, Web API, Blazor WebAssembly, and cloud-backed full-stack delivery.',
    icon: 'lucide:braces',
    brand: '#512BD4',
  },
]
