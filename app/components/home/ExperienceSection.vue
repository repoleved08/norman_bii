<script setup lang="ts">
import { experience } from '~/data/experience'

const typeIcon: Record<string, string> = {
  work: 'lucide:briefcase',
  founder: 'lucide:rocket',
  education: 'lucide:graduation-cap',
  intern: 'lucide:building',
  cert: 'lucide:award',
}
</script>

<template>
  <section id="experience" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <BaseReveal>
        <BaseSectionHeading
          eyebrow="Experience"
          title="Where I have shipped"
          description="From leading enterprise teams to building my own products — a track record, not a list of keywords."
        />
      </BaseReveal>

      <div class="relative">
        <div class="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-brand-500/60 via-line to-transparent sm:left-[21px]" aria-hidden="true" />

        <div class="flex flex-col gap-10">
          <BaseReveal v-for="(item, i) in experience" :key="item.title" :delay="i * 0.08">
            <div class="relative flex gap-5 sm:gap-7">
              <span
                class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-brand-300 shadow-card sm:h-11 sm:w-11"
              >
                <Icon :name="typeIcon[item.type] ?? 'lucide:code'" class="h-4.5 w-4.5" />
                <span
                  v-if="item.current"
                  class="absolute -right-0.5 -top-0.5 flex h-3 w-3"
                  aria-hidden="true"
                >
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span class="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
              </span>

              <div class="card w-full p-6 sm:p-7">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 class="font-display text-lg font-semibold text-ink sm:text-xl">{{ item.title }}</h3>
                  <BaseBadge v-if="item.current" tone="brand">Current</BaseBadge>
                </div>
                <p class="mt-1 text-sm text-muted">
                  <a
                    v-if="item.orgUrl"
                    :href="item.orgUrl"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="link-underline font-medium text-ink-dim hover:text-ink"
                  >
                    {{ item.organization }}
                  </a>
                  <span v-else class="font-medium text-ink-dim">{{ item.organization }}</span>
                  <span class="mx-2 text-faint">·</span>
                  <span class="font-mono text-xs">{{ item.period }}</span>
                </p>
                <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.description }}</p>
                <ul class="mt-4 grid gap-2 sm:grid-cols-2">
                  <li v-for="point in item.points" :key="point" class="flex items-start gap-2 text-sm text-muted">
                    <Icon name="lucide:check-circle-2" class="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </BaseReveal>
        </div>
      </div>
    </div>
  </section>
</template>
