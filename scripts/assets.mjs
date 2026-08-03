import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const here = dirname(fileURLToPath(import.meta.url))
const imgDir = join(here, '../app/assets/img')

async function optimizeProfile() {
  const src = join(imgDir, 'norman.png')

  await sharp(src)
    .resize(480, 592, { fit: 'cover' })
    .webp({ quality: 82, effort: 6 })
    .toFile(join(imgDir, 'norman.webp'))

  await sharp(src)
    .resize(480, 592, { fit: 'cover' })
    .avif({ quality: 60, effort: 6 })
    .toFile(join(imgDir, 'norman.avif'))

  const stats = await sharp(src).metadata()
  console.log(`profile: ${stats.width}x${stats.height} source optimized`)
}

async function generateOg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#08080a"/>
      <stop offset="1" stop-color="#14141a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9177ff"/>
      <stop offset="0.5" stop-color="#7c5cff"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#7c5cff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#7c5cff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g stroke="#ffffff" stroke-opacity="0.05">
    <line x1="0" y1="120" x2="1200" y2="120"/>
    <line x1="0" y1="240" x2="1200" y2="240"/>
    <line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="480" x2="1200" y2="480"/>
  </g>
  <rect x="80" y="70" width="56" height="56" rx="12" fill="url(#accent)"/>
  <text x="108" y="105" font-family="Inter, sans-serif" font-size="28" font-weight="700" fill="#fff" text-anchor="middle">NB</text>
  <text x="152" y="104" font-family="monospace" font-size="30" fill="#ffffff" font-weight="600">norman<span fill="#22d3ee">_</span>bii</text>

  <text x="80" y="300" font-family="Inter, sans-serif" font-size="76" font-weight="700" fill="#ffffff">I build production-grade</text>
  <text x="80" y="390" font-family="Inter, sans-serif" font-size="76" font-weight="700" fill="url(#accent)">software businesses run on.</text>

  <text x="80" y="470" font-family="Inter, sans-serif" font-size="30" fill="#9ba1ab">Senior Laravel Developer · Favitech Solutions · Founder of TechXtraSol</text>
  <text x="80" y="540" font-family="monospace" font-size="26" fill="#8b8f98">PHP · Laravel · Vue · Nuxt · Golang · Redis · WebSockets</text>
  <text x="1120" y="580" font-family="Inter, sans-serif" font-size="24" fill="#5b5f68" text-anchor="end">normanbii.dev</text>
</svg>`

  await sharp(Buffer.from(svg)).png().toFile(join(here, '../public/og.png'))
  console.log('og.png generated')
}

await optimizeProfile()
await generateOg()
