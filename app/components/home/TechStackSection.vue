<script setup lang="ts">
import { techStack, marqueeTech } from '~/data/tech'
</script>

<template>
  <section id="stack" class="relative border-y border-line bg-surface/40 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <BaseReveal>
        <BaseSectionHeading
          eyebrow="Tech Stack"
          title="Tools reached for in production"
          description="Chosen for reliability under real load — not for hype. Each category represents systems shipped and operated."
        />
      </BaseReveal>

      <div class="grid gap-5 md:grid-cols-2">
        <BaseReveal
          v-for="(category, ci) in techStack"
          :key="category.label"
          :delay="ci * 0.06"
          class="md:col-span-2 lg:col-span-1"
        >
          <div class="card h-full p-6">
            <div class="mb-5 flex items-center justify-between">
              <h3 class="font-display text-sm font-semibold tracking-wide text-ink">{{ category.label }}</h3>
              <span class="font-mono text-xs text-faint">{{ String(category.items.length).padStart(2, '0') }}</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in category.items"
                :key="item.name"
                class="group inline-flex items-center gap-2 rounded-lg border border-line bg-raised px-3 py-2 text-sm text-ink-dim transition-colors hover:border-brand-500/40 hover:text-ink"
              >
                <Icon v-if="item.icon" :name="item.icon" class="h-4 w-4" :style="item.brand ? `color: ${item.brand}` : ''" />
                <span>{{ item.name }}</span>
                <span v-if="item.note" class="font-mono text-[10px] uppercase tracking-wider text-faint">{{ item.note }}</span>
              </span>
            </div>
          </div>
        </BaseReveal>
      </div>
    </div>

    <div class="mx-auto mt-16 max-w-6xl px-4 sm:px-6" aria-hidden="true">
      <div class="group overflow-hidden rounded-xl border border-line bg-canvas/60 py-3">
        <div class="marquee-viewport overflow-hidden">
          <div class="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <div v-for="copy in 2" :key="copy" class="flex shrink-0 gap-3 pr-3">
              <div
                v-for="tech in marqueeTech"
                :key="tech.name"
                class="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg border border-line bg-raised/80 px-4 py-3 font-mono text-xs text-ink-dim shadow-lift sm:text-sm"
              >
                <span class="flex h-7 w-7 items-center justify-center rounded-md bg-canvas">
                  <Icon :name="tech.icon || 'lucide:code'" class="h-4 w-4" :style="tech.brand ? { color: tech.brand } : { color: 'var(--color-brand-300)' }" />
                </span>
                {{ tech.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-viewport {
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
</style>
