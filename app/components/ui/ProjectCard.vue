<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project; index?: number }>()

const expanded = ref(false)
const spot = ref({ x: 0, y: 0, active: false })

function onMove(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  spot.value = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true }
}

function onLeave() {
  spot.value = { ...spot.value, active: false }
}
</script>

<template>
  <article
    class="card card-hover group relative flex flex-col overflow-hidden"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div
      v-if="spot.active"
      class="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, color-mix(in srgb, var(--color-brand-500) 12%, transparent), transparent 65%)`,
      }"
      aria-hidden="true"
    />

    <div class="relative">
      <div class="flex items-center gap-1.5 border-b border-line bg-canvas/50 px-4 py-2.5">
        <span class="h-2 w-2 rounded-full bg-danger/60" />
        <span class="h-2 w-2 rounded-full bg-warning/60" />
        <span class="h-2 w-2 rounded-full bg-success/60" />
        <span class="ml-3 truncate font-mono text-[11px] text-faint">
          {{ project.liveUrl ? project.liveUrl.replace('https://', '') : `${project.slug}.production` }}
        </span>
      </div>
      <div class="relative overflow-hidden">
        <UiProjectMockup :mockup="project.mockup" />
        <div class="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-primary text-xs"
          >
            <Icon name="lucide:external-link" class="h-3.5 w-3.5" />
            Live site
          </a>
          <a
            v-if="project.sourceUrl"
            :href="project.sourceUrl"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-ghost text-xs"
          >
            <Icon name="simple-icons:github" class="h-3.5 w-3.5" />
            Source
          </a>
        </div>
      </div>
    </div>

    <div class="relative flex flex-1 flex-col p-6">
      <div class="flex items-center justify-between gap-2">
        <BaseBadge tone="brand">{{ project.category }}</BaseBadge>
        <span class="font-mono text-xs text-faint">{{ project.year }}</span>
      </div>

      <h3 class="mt-3 font-display text-xl font-semibold text-ink">{{ project.name }}</h3>
      <p class="mt-1 text-[13px] text-muted">
        <span class="text-ink-dim">{{ project.role }}</span>
        <span class="mx-1.5 text-faint">·</span>
        {{ project.client }}
      </p>
      <p class="mt-3 text-sm leading-relaxed text-muted">{{ project.summary }}</p>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.tech.slice(0, 6)"
          :key="tech"
          class="rounded-md border border-line bg-raised px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-5 grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-raised/60">
        <div v-for="metric in project.metrics" :key="metric.label" class="px-3 py-2.5">
          <p class="font-display text-sm font-bold text-brand-300">{{ metric.value }}</p>
          <p class="mt-0.5 text-[10px] leading-tight text-faint">{{ metric.label }}</p>
        </div>
      </div>

      <div class="mt-4 border-t border-line pt-4">
        <button
          type="button"
          class="flex w-full items-center justify-between text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          :aria-expanded="expanded"
          @click="expanded = !expanded"
        >
          <span class="flex items-center gap-2">
            <Icon name="lucide:git-branch" class="h-3.5 w-3.5 text-brand-400" />
            Challenges & solutions
          </span>
          <Icon
            :name="expanded ? 'lucide:chevron-up' : 'lucide:chevron-down'"
            class="h-4 w-4 text-faint"
          />
        </button>

        <AnimatePresence>
          <Motion
            v-if="expanded"
            :initial="{ height: 0, opacity: 0 }"
            :animate="{ height: 'auto', opacity: 1 }"
            :exit="{ height: 0, opacity: 0 }"
            :transition="{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }"
            class="overflow-hidden"
          >
            <div class="flex flex-col gap-3 pt-3">
              <div class="rounded-lg border border-danger/15 bg-danger/5 p-3.5">
                <p class="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-danger">Challenge</p>
                <p
                  v-for="challenge in project.challenges"
                  :key="challenge"
                  class="text-[13px] leading-relaxed text-muted"
                >
                  <span class="text-danger">▸</span> {{ challenge }}
                </p>
              </div>
              <div class="rounded-lg border border-success/15 bg-success/5 p-3.5">
                <p class="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-success">Solution</p>
                <p
                  v-for="solution in project.solutions"
                  :key="solution"
                  class="text-[13px] leading-relaxed text-muted"
                >
                  <span class="text-success">▸</span> {{ solution }}
                </p>
              </div>
            </div>
          </Motion>
        </AnimatePresence>
      </div>
    </div>
  </article>
</template>
