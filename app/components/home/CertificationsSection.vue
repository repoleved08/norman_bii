<script setup lang="ts">
import { certifications } from '~/data/experience'
</script>

<template>
  <section id="certifications" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <BaseReveal>
        <BaseSectionHeading
          eyebrow="Certifications"
          title="Proof of continuous learning"
          description="Security, concurrency, and infrastructure — the edge skills that make backend code production-safe."
        />
      </BaseReveal>

      <div class="grid gap-4 sm:grid-cols-2">
        <BaseReveal v-for="(cert, i) in certifications" :key="cert.name" :delay="i * 0.07">
          <div class="card card-hover group flex h-full flex-col p-5">
            <div class="flex items-center justify-between">
              <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-raised">
                <Icon :name="cert.icon" class="h-5 w-5" :style="{ color: cert.brand || 'var(--color-brand-300)' }" />
              </span>
              <span class="font-mono text-xs text-faint">{{ cert.year }}</span>
            </div>
            <h3 class="mt-4 font-display text-sm font-semibold leading-snug text-ink">{{ cert.name }}</h3>
            <p class="mt-1 text-xs text-muted">{{ cert.issuer }}</p>
            <p class="mt-2.5 text-[13px] leading-relaxed text-faint">{{ cert.description }}</p>
          </div>
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
