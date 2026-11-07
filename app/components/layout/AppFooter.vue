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
            Technical lead for production Laravel systems. Financial workflows, access control, and accountable delivery.
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
            <li><a :href="site.socials[2].url" target="_blank" rel="noreferrer noopener" class="hover:text-ink">TechXtraSol</a></li>
            <li><a :href="site.socials[3].url" target="_blank" rel="noreferrer noopener" class="hover:text-ink">X / Twitter</a></li>
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

      <div class="mt-14 grid gap-6 rounded-xl border border-line-strong bg-canvas p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div class="max-w-lg">
          <p class="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-redteam">
            <span class="h-2 w-2 rounded-sm bg-redteam" aria-hidden="true" />
            Offensive security / ethical hacking
          </p>
          <h3 class="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">Think like an attacker. Build with intent.</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            A red-team perspective helps me test assumptions and strengthen the systems I build. Security testing is always authorized.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-3" aria-label="Security tools">
          <div class="flex min-w-0 flex-col items-center justify-center rounded-lg border border-redteam/20 bg-redteam/5 px-4 py-4 text-center sm:min-w-36 sm:px-6">
            <Icon name="simple-icons:kalilinux" class="h-16 w-16 text-security-blue sm:h-20 sm:w-20" aria-hidden="true" />
            <span class="mt-3 font-mono text-xs text-ink-dim">Kali Linux</span>
          </div>
          <div class="flex min-w-0 flex-col items-center justify-center rounded-lg border border-redteam/20 bg-redteam/5 px-4 py-4 text-center sm:min-w-36 sm:px-6">
            <Icon name="simple-icons:parrotsecurity" class="h-16 w-16 text-security-blue sm:h-20 sm:w-20" aria-hidden="true" />
            <span class="mt-3 font-mono text-xs text-ink-dim">Parrot Security</span>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-xs text-faint">© {{ year }} {{ site.name }}. Built with Nuxt & Tailwind, deployed on Vercel.</p>
        <p class="font-mono text-xs text-faint">
          <span class="text-brand-500">$</span> shippng_production_software <span class="animate-pulse-soft">▊</span>
        </p>
      </div>
    </div>
  </footer>
</template>
