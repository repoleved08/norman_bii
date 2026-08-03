export default defineEventHandler(() => {
  const baseUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://normanbii.dev').replace(/\/$/, '')

  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml`
})
