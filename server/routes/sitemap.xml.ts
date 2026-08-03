export default defineEventHandler(() => {
  const baseUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://normanbii.dev').replace(/\/$/, '')

  const routes = ['/', '/about', '/projects', '/blog', '/contact']

  const urlset = routes
    .map(
      (route) => `    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`
})
