<script setup lang="ts">
import type { BlogPost } from '~/data/blog'

defineProps<{ post: BlogPost; index?: number }>()

function formatDate(date: string) {
  return new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
</script>

<template>
  <a
    :href="post.url ?? 'https://medium.com/@biinorman1'"
    target="_blank"
    rel="noreferrer noopener"
    class="card card-hover group flex h-full flex-col p-6"
  >
    <div class="flex items-center justify-between">
      <span class="font-mono text-[10px] uppercase tracking-widest text-brand-300">{{ post.tag }}</span>
      <span class="font-mono text-xs text-faint">{{ formatDate(post.date) }}</span>
    </div>

    <h3 class="mt-3 font-display text-lg font-semibold leading-snug text-ink group-hover:text-brand-300">
      {{ post.title }}
    </h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ post.description }}</p>

    <div class="mt-5 flex items-center justify-between border-t border-line pt-4">
      <span class="flex items-center gap-1.5 font-mono text-xs text-faint">
        <Icon name="lucide:clock" class="h-3 w-3" />
        {{ post.readingTime }}
      </span>
      <span class="flex items-center gap-1 text-sm font-medium text-ink-dim transition-colors group-hover:text-brand-300">
        Read
        <Icon name="lucide:arrow-up-right" class="h-3.5 w-3.5" />
      </span>
    </div>
  </a>
</template>
