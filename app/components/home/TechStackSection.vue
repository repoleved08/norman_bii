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

    <div class="relative mt-16 overflow-hidden border-y border-line bg-canvas/60 py-5" aria-hidden="true">
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent" />
      <div class="flex w-max animate-marquee gap-10">
        <template v-for="n in 2" :key="n">
          <span v-for="tech in marqueeTech" :key="tech + n" class="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted">
            <span class="text-brand-500">◆</span>
            {{ tech }}
          </span>
        </template>
      </div>
    </div>
  </section>
</template>
