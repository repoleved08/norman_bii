<script setup lang="ts">
import { site } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line bg-surface/50">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div class="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div class="flex flex-col gap-5">
          <LayoutLogo />
          <p class="max-w-xs text-sm leading-relaxed text-muted">
            Lead Laravel Developer building production-grade systems for businesses. Founder of TechXtraSol.
          </p>
          <div class="flex gap-3">
            <a
              v-for="social in site.socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noreferrer noopener"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-brand-500/40 hover:text-brand-300"
              :aria-label="`${site.name} on ${social.name}`"
            >
              <Icon :name="social.icon" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Site">
          <h3 class="eyebrow mb-4">Site</h3>
          <ul class="flex flex-col gap-2.5 text-sm text-muted">
            <li><NuxtLink to="/about" class="hover:text-ink">About</NuxtLink></li>
            <li><NuxtLink to="/projects" class="hover:text-ink">Projects</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-ink">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-ink">Contact</NuxtLink></li>
          </ul>
        </nav>

        <nav aria-label="Social">
          <h3 class="eyebrow mb-4">Elsewhere</h3>
          <ul class="flex flex-col gap-2.5 text-sm text-muted">
            <li><a :href="site.socials[0].url" target="_blank" rel="noreferrer noopener" class="hover:text-ink">GitHub</a></li>
            <li><a :href="site.socials[1].url" target="_blank" rel="noreferrer noopener" class="hover:text-ink">LinkedIn</a></li>
            <li><a :href="site.socials[2].url" target="_blank" rel="noreferrer noopener" class="hover:text-ink">X / Twitter</a></li>
            <li><a :href="site.socials[3].url" target="_blank" rel="noreferrer noopener" class="hover:text-ink">Medium</a></li>
          </ul>
        </nav>

        <div>
          <h3 class="eyebrow mb-4">Get in touch</h3>
          <ul class="flex flex-col gap-2.5 text-sm text-muted">
            <li>
              <a :href="`mailto:${site.email}`" class="hover:text-ink">{{ site.email }}</a>
            </li>
            <li>{{ site.location }} · {{ site.timezone }}</li>
            <li>
              <a :href="site.bookingUrl" target="_blank" rel="noreferrer noopener" class="hover:text-ink">Book a call</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-xs text-faint">© {{ year }} {{ site.name }}. Built with Nuxt & Tailwind, deployed on Cloudflare.</p>
        <p class="font-mono text-xs text-faint">
          <span class="text-brand-500">$</span> shippng_production_software <span class="animate-pulse-soft">▊</span>
        </p>
      </div>
    </div>
  </footer>
</template>
