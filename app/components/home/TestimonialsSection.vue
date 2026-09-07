<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section id="testimonials" class="relative border-y border-line bg-surface/40 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <BaseReveal>
        <BaseSectionHeading
          eyebrow="References"
          title="People who can vouch for the work"
          description="Professional referees listed on the CV. Contact details are provided on request."
        />
      </BaseReveal>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <BaseReveal v-for="(t, i) in testimonials" :key="t.name" :delay="i * 0.1">
          <figure class="card flex h-full flex-col p-6">
            <Icon name="lucide:quote" class="h-5 w-5 text-brand-400" aria-hidden="true" />
            <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-ink-dim">
              “{{ t.quote }}”
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br font-display text-xs font-bold text-white"
                :class="t.accent"
                aria-hidden="true"
              >
                {{ t.initials }}
              </span>
              <div>
                <p class="text-sm font-semibold text-ink">{{ t.name }}</p>
                <p class="text-xs text-muted">{{ t.role }} · {{ t.org }}</p>
              </div>
            </figcaption>
          </figure>
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
