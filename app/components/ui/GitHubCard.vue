<script setup lang="ts">
import type { Repo } from '~/data/opensource'

defineProps<{ repo: Repo; index: number }>()

const languageColor: Record<string, string> = {
  PHP: '#777BB4',
  TypeScript: '#3178C6',
  Go: '#00ADD8',
  Shell: '#89E051',
  JavaScript: '#F7DF1E',
}
</script>

<template>
  <a
    :href="repo.url"
    target="_blank"
    rel="noreferrer noopener"
    class="card card-hover group flex h-full flex-col p-5"
  >
    <div class="flex items-start justify-between gap-3">
      <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
        <Icon name="simple-icons:github" class="h-4.5 w-4.5" />
      </span>
      <span class="flex items-center gap-3 font-mono text-xs text-muted">
        <span class="flex items-center gap-1">
          <Icon name="lucide:star" class="h-3.5 w-3.5 text-warning" />
          {{ repo.stars }}
        </span>
        <span class="flex items-center gap-1">
          <Icon name="lucide:git-fork" class="h-3.5 w-3.5 text-faint" />
          {{ repo.forks }}
        </span>
      </span>
    </div>

    <h3 class="mt-4 font-mono text-sm font-semibold text-ink group-hover:text-brand-300">
      {{ repo.name }}
    </h3>
    <p class="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted">
      {{ repo.description }}
    </p>

    <div class="mt-4 flex flex-wrap items-center gap-2">
      <span
        v-for="topic in repo.topics.slice(0, 3)"
        :key="topic"
        class="rounded-md border border-line bg-raised px-1.5 py-0.5 font-mono text-[10px] text-faint"
      >
        {{ topic }}
      </span>
      <span v-if="repo.language" class="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-faint">
        <span class="h-2 w-2 rounded-full" :style="{ backgroundColor: languageColor[repo.language] ?? '#888' }" />
        {{ repo.language }}
      </span>
    </div>
  </a>
</template>
