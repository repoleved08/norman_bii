<script setup lang="ts">
import { site } from '~/data/site'

const baseUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://normanbii.dev').replace(/\/$/, '')

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: baseUrl,
  jobTitle: site.role,
  worksFor: {
    '@type': 'Organization',
    name: site.company,
    url: site.companyUrl,
  },
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  email: `mailto:${site.email}`,
  sameAs: site.socials.map((s) => s.url),
  knowsAbout: ['PHP', 'Laravel', 'Golang', 'Vue', 'Nuxt', 'MySQL', 'PostgreSQL', 'Redis', 'System Design', 'Security', 'WebSockets', 'REST APIs'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${site.name} — ${site.role}`,
  url: baseUrl,
  inLanguage: 'en',
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(websiteSchema) },
  ],
})

const ogUrl = 'https://normanbii.dev/og.png'

useSeoMeta({
  description: site.heroSubline,
  ogType: 'website',
  ogSiteName: `${site.name} — Portfolio`,
  ogLocale: 'en_KE',
  twitterCard: 'summary_large_image',
  twitterCreator: '@NormanGeek1',
})

useHead({
  meta: [
    { property: 'og:image', content: ogUrl },
    { name: 'twitter:image', content: ogUrl },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
