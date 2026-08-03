<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{ projects: Project[] }>()
</script>

<template>
  <section id="work" class="relative border-y border-line bg-surface/40 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <BaseReveal>
          <BaseSectionHeading
            eyebrow="Featured Work"
            title="Systems that carry real business load"
            description="Every project below went through design, build, hardening, and production deployment — not a tutorial clone."
          />
        </BaseReveal>
        <BaseReveal :delay="0.15">
          <BaseButton to="/projects" variant="ghost" class="mb-12">
            All projects
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </BaseButton>
        </BaseReveal>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <BaseReveal v-for="(project, i) in projects" :key="project.slug" :delay="(i % 2) * 0.1">
          <UiProjectCard :project="project" :index="i" />
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
