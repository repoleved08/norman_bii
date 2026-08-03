<script setup lang="ts">
import normanAvif from '~/assets/img/norman.avif'
import normanWebp from '~/assets/img/norman.webp'
import normanPng from '~/assets/img/norman.png'

const principles = [
  { icon: 'lucide:shield-check', title: 'Security-first', text: 'Secrets, auth, and audit trails are designed in, not bolted on.' },
  { icon: 'lucide:gauge', title: 'Performance is a feature', text: 'I measure, profile, and tune until production numbers hold up.' },
  { icon: 'lucide:box', title: 'Own it end to end', text: 'Architecture, code, deployment, and the 2am alerts — I run the whole loop.' },
]

const currently = [
  'Leading enterprise Laravel systems at Favitech Solutions',
  'Scaling real-time apps on Laravel Reverb',
  'Founding TechXtraSol — fintech, POS, and SaaS products',
  'Mentoring developers on DDD and clean architecture',
]
</script>

<template>
  <section id="about" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <BaseReveal>
            <BaseSectionHeading eyebrow="About" title="Engineer who ships, operates, and owns the outcome">
              <template #default>
                I am not a developer who hands off code and disappears. I take systems from an empty repository to
                production on Linux servers — and I stay accountable for what happens after deploy.
              </template>
            </BaseSectionHeading>
          </BaseReveal>

          <BaseReveal :delay="0.1">
            <div class="flex flex-col gap-5 text-base leading-relaxed text-muted">
              <p>
                At <strong class="font-semibold text-ink">Favitech Solutions</strong> I lead development on
                enterprise-grade Laravel applications — financial logic, document management, and ERP modules that
                real companies run their business on. I make the architecture decisions, keep security and
                performance honest, and deploy to production myself.
              </p>
              <p>
                Through <strong class="font-semibold text-ink">TechXtraSol</strong>, my own studio, I build products
                for clients across fintech, retail, real-time communication, and education — taking full ownership
                from system design to server administration.
              </p>
              <p>
                My tools span the backend — PHP, Laravel, Go, Redis, queues, WebSockets — and I choose them for one
                reason: they carry load reliably in production.
              </p>
            </div>
          </BaseReveal>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <BaseReveal v-for="(principle, i) in principles" :key="principle.title" :delay="0.15 + i * 0.1">
              <div class="card card-hover h-full p-5">
                <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
                  <Icon :name="principle.icon" class="h-4.5 w-4.5" />
                </span>
                <h3 class="mt-3.5 text-sm font-semibold text-ink">{{ principle.title }}</h3>
                <p class="mt-1.5 text-[13px] leading-relaxed text-muted">{{ principle.text }}</p>
              </div>
            </BaseReveal>
          </div>
        </div>

        <BaseReveal :delay="0.15" class="lg:sticky lg:top-28">
          <div class="relative mx-auto max-w-md">
            <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/15 to-accent-500/10 blur-xl" aria-hidden="true" />
            <figure class="card relative overflow-hidden shadow-pop">
              <div class="relative aspect-[4/4.6] overflow-hidden bg-raised">
                <picture>
                  <source :srcset="normanAvif" type="image/avif" />
                  <source :srcset="normanWebp" type="image/webp" />
                  <img
                    :src="normanPng"
                    alt="Portrait of Norman Bii, Lead Laravel Developer"
                    class="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/90 to-transparent p-5">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-display text-base font-semibold text-ink">Norman Bii</p>
                      <p class="font-mono text-xs text-muted">Lead Laravel Developer · Nairobi, KE</p>
                    </div>
                    <span class="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 font-mono text-[11px] text-success">
                      <span class="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" />
                      open
                    </span>
                  </div>
                </div>
              </div>
            </figure>

            <div class="card mt-4 p-5">
              <p class="eyebrow mb-3">Currently</p>
              <ul class="flex flex-col gap-2.5">
                <li v-for="item in currently" :key="item" class="flex items-start gap-2.5 text-sm text-muted">
                  <Icon name="lucide:check" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
