<script setup lang="ts">
import portrait from '~/assets/img/norman.avif'

const route = useRoute()

const strengths = [
  {
    icon: 'lucide:shield-check',
    title: 'Security in the design',
    detail: 'RBAC, 2FA, approval chains, and audit logs.',
  },
  {
    icon: 'lucide:server',
    title: 'Production ownership',
    detail: 'From architecture and delivery to Linux deployment.',
  },
  {
    icon: 'lucide:users',
    title: 'Technical leadership',
    detail: 'Code reviews, mentoring, and engineering standards.',
  },
]
</script>

<template>
  <section
    id="about"
    class="relative isolate overflow-hidden border-b border-line pb-24 sm:pb-32"
    :class="route.path === '/about' ? 'pt-12 sm:pt-16' : 'pt-24 sm:pt-32'"
  >
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#9fef0009,transparent_55%)]" aria-hidden="true" />

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div class="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <BaseReveal>
            <div class="flex items-center gap-3">
              <span class="h-px w-8 bg-brand-500" aria-hidden="true" />
              <span class="eyebrow">The brief / 01</span>
            </div>
            <h2 class="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.14] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.75rem]">
              <UiDecryptText text="I build the systems businesses" /> <span class="text-brand-500"><UiDecryptText text="rely on." /></span>
            </h2>
            <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
              I'm Norman — a Laravel developer and technical lead focused on financial systems, access control, and dependable delivery.
            </p>
          </BaseReveal>

          <BaseReveal :delay="0.08">
            <div class="mt-8 max-w-xl space-y-4 border-l-2 border-brand-500/50 pl-5 text-sm leading-7 text-muted sm:pl-6 sm:text-base">
              <p>
                At <strong class="font-semibold text-ink">Favitech Solutions</strong>, I lead work on a live financial platform. I've delivered role-based permissions, 2FA, multi-step approvals, and audit logs — safeguards with real operational consequences.
              </p>
              <p>
                Through <strong class="font-semibold text-ink">TechXtraSol</strong>, I build and operate client software from system design to deployment. I'm now learning Infisical to deepen my approach to secrets management.
              </p>
            </div>
          </BaseReveal>

          <BaseReveal :delay="0.14">
            <div class="mt-9 flex flex-wrap items-center gap-3">
              <BaseButton to="/#contact" variant="primary">
                Let's talk about your project
                <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
              </BaseButton>
              <BaseButton to="/#work" variant="ghost">See selected work</BaseButton>
            </div>
          </BaseReveal>
        </div>

        <BaseReveal :delay="0.12">
          <div class="mx-auto max-w-md lg:ml-auto lg:mr-0">
            <figure class="card overflow-hidden shadow-pop">
              <div class="relative aspect-[4/4.3] overflow-hidden bg-raised">
                <img
                  :src="portrait"
                  alt="Norman Bii"
                  class="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="592"
                />
                <span class="absolute left-4 top-4 rounded-md border border-line-strong bg-canvas/90 px-3 py-1.5 font-mono text-[11px] text-ink backdrop-blur-sm">
                  Nairobi, Kenya · UTC+3
                </span>
                <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas via-canvas/90 to-transparent px-5 pb-5 pt-16">
                  <p class="font-display text-xl font-bold text-ink">Norman Bii</p>
                  <p class="mt-1 font-mono text-xs text-ink-dim">Senior Laravel Developer / Technical Lead</p>
                </figcaption>
              </div>
            </figure>

            <div class="card mt-4 overflow-hidden">
              <div class="flex items-start gap-4 px-5 py-4">
                <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                <div>
                  <p class="eyebrow">In production</p>
                  <p class="mt-1 text-sm leading-relaxed text-ink-dim">Financial workflows, access controls, and accountable engineering.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 border-t border-line px-5 py-4">
                <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full border border-brand-500" aria-hidden="true" />
                <div>
                  <p class="eyebrow">Currently learning</p>
                  <p class="mt-1 text-sm leading-relaxed text-ink-dim">Secrets management with Infisical.</p>
                </div>
              </div>
            </div>
          </div>
        </BaseReveal>
      </div>

      <div class="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:mt-20">
        <BaseReveal v-for="(strength, i) in strengths" :key="strength.title" :delay="0.06 + i * 0.07">
          <div class="flex h-full items-start gap-4 bg-surface p-5 sm:flex-col sm:gap-5 sm:p-6">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-brand-300">
              <Icon :name="strength.icon" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-display text-sm font-semibold text-ink">{{ strength.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ strength.detail }}</p>
            </div>
          </div>
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
