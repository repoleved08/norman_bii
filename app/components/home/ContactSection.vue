<script setup lang="ts">
import { site } from '~/data/site'

const channels = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    hint: 'Best for detailed briefs',
  },
  {
    icon: 'lucide:phone',
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    hint: 'Nairobi, East Africa time',
  },
  {
    icon: 'lucide:calendar',
    label: 'Book a call',
    value: '30-minute intro call',
    href: site.bookingUrl,
    hint: 'Free, no obligation',
  },
  {
    icon: 'lucide:map-pin',
    label: 'Location',
    value: `${site.location} · ${site.timezone}`,
    href: undefined,
    hint: 'Remote-friendly worldwide',
  },
]
</script>

<template>
  <section id="contact" class="relative py-24 sm:py-32">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="aurora left-1/2 top-0 h-[360px] w-[560px] -translate-x-1/2 bg-brand-600/20" />
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <BaseReveal>
            <BaseSectionHeading
              eyebrow="Contact"
              title="Let's build something that runs in production"
              description="Whether you are hiring, need a system built, or want to talk architecture — the inbox is open."
            />
          </BaseReveal>

          <div class="flex flex-col gap-4">
            <BaseReveal v-for="(channel, i) in channels" :key="channel.label" :delay="0.1 + i * 0.08">
              <a
                v-if="channel.href"
                :href="channel.href"
                target="_blank"
                rel="noreferrer noopener"
                class="card card-hover group flex items-center gap-4 p-4"
              >
                <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
                  <Icon :name="channel.icon" class="h-4.5 w-4.5" />
                </span>
                <div class="min-w-0">
                  <p class="text-sm font-medium text-ink">{{ channel.label }}</p>
                  <p class="truncate font-mono text-xs text-muted">{{ channel.value }}</p>
                </div>
                <span class="ml-auto text-[11px] text-faint group-hover:text-muted">{{ channel.hint }}</span>
              </a>
              <div v-else class="card flex items-center gap-4 p-4">
                <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
                  <Icon :name="channel.icon" class="h-4.5 w-4.5" />
                </span>
                <div class="min-w-0">
                  <p class="text-sm font-medium text-ink">{{ channel.label }}</p>
                  <p class="truncate font-mono text-xs text-muted">{{ channel.value }}</p>
                </div>
              </div>
            </BaseReveal>
          </div>

          <BaseReveal :delay="0.35">
            <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span class="eyebrow">Or find me on</span>
              <a
                v-for="social in site.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noreferrer noopener"
                class="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
              >
                <Icon :name="social.icon" class="h-4 w-4" />
                {{ social.name }}
              </a>
            </div>
          </BaseReveal>
        </div>

        <BaseReveal :delay="0.15">
          <UiContactForm />
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
