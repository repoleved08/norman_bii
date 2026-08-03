<script setup lang="ts">
import { projects } from '~/data/projects'

useSeoMeta({
  title: 'Projects — Norman Bii, Senior Laravel Developer',
  description: 'Financial systems, document management, POS suites, and SaaS platforms built and shipped to production by Norman Bii.',
  ogTitle: 'Projects — Norman Bii',
  ogType: 'website',
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-6xl px-4 pb-4 pt-32 sm:px-6">
      <BaseReveal>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <span class="eyebrow">Work</span>
            <span class="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" aria-hidden="true" />
          </div>
          <h1 class="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Every project ships. Nothing is a demo.
          </h1>
          <p class="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Each entry includes the challenge, the architecture decision, and the measurable outcome. Expand any card to see how the hard parts were solved.
          </p>
        </div>
      </BaseReveal>
    </div>

    <HomeProjectsSection :projects="projects" />

    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <HomeContactSection />
    </div>
  </div>
</template>
