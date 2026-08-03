<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ mockup: Project['mockup'] }>()

const rows = [86, 54, 72, 40, 64, 48, 78, 58]
</script>

<template>
  <div class="relative overflow-hidden bg-raised">
    <div class="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />

    <div class="relative flex aspect-[16/10] flex-col p-4 sm:p-5">
      <!-- ERP / DMS : sidebar + table -->
      <div v-if="mockup === 'erp' || mockup === 'dms'" class="flex h-full gap-3">
        <div class="hidden w-1/4 flex-col gap-2 rounded-lg border border-line bg-surface p-2.5 sm:flex">
          <div class="h-2 w-3/5 rounded bg-brand-500/60" />
          <div v-for="n in 5" :key="n" class="h-1.5 rounded bg-line-strong" :class="n === 1 ? 'bg-brand-500/30' : ''" />
          <div class="mt-auto h-1.5 w-2/3 rounded bg-line-strong" />
        </div>
        <div class="flex flex-1 flex-col gap-2.5">
          <div class="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2">
            <div class="h-2 w-1/4 rounded bg-line-strong" />
            <div class="h-2 w-1/6 rounded bg-brand-500/50" />
          </div>
          <div class="flex flex-1 flex-col gap-2 rounded-lg border border-line bg-surface p-3">
            <div v-for="n in 5" :key="n" class="flex items-center gap-2">
              <div class="h-2.5 w-2.5 rounded bg-brand-500/40" />
              <div class="h-1.5 flex-1 rounded bg-line-strong" />
              <div class="h-1.5 w-1/6 rounded bg-line" />
            </div>
          </div>
        </div>
      </div>

      <!-- Fintech : balances + sparkline -->
      <div v-else-if="mockup === 'fintech'" class="flex h-full flex-col gap-3">
        <div class="flex gap-3">
          <div class="flex-1 rounded-lg border border-line bg-surface p-3">
            <div class="h-1.5 w-1/3 rounded bg-line-strong" />
            <div class="mt-2 h-3 w-2/5 rounded bg-ink/80" />
            <div class="mt-1 h-1.5 w-1/4 rounded bg-success/50" />
          </div>
          <div class="flex-1 rounded-lg border border-line bg-surface p-3">
            <div class="h-1.5 w-1/3 rounded bg-line-strong" />
            <div class="mt-2 h-3 w-1/3 rounded bg-ink/60" />
            <div class="mt-1 h-1.5 w-1/4 rounded bg-danger/50" />
          </div>
        </div>
        <div class="flex flex-1 items-end gap-1.5 rounded-lg border border-line bg-surface p-4">
          <div
            v-for="(row, i) in rows"
            :key="i"
            class="flex-1 rounded-sm"
            :class="i === rows.length - 1 ? 'bg-brand-500' : 'bg-brand-500/25'"
            :style="{ height: `${row}%` }"
          />
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div v-for="n in 3" :key="n" class="flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-2">
            <div class="h-1.5 flex-1 rounded bg-line-strong" />
            <div class="h-1.5 w-2 rounded bg-accent-500/50" />
          </div>
        </div>
      </div>

      <!-- POS : products + receipt -->
      <div v-else-if="mockup === 'pos'" class="flex h-full gap-3">
        <div class="flex flex-1 flex-col gap-2">
          <div class="grid grid-cols-3 gap-2">
            <div v-for="n in 6" :key="n" class="flex flex-col gap-1.5 rounded-lg border border-line bg-surface p-2">
              <div class="h-6 rounded bg-gradient-to-br from-brand-500/30 to-accent-500/20" />
              <div class="h-1.5 w-3/4 rounded bg-line-strong" />
              <div class="h-1.5 w-1/2 rounded bg-brand-500/40" />
            </div>
          </div>
        </div>
        <div class="hidden w-1/3 flex-col gap-2 rounded-lg border border-line bg-surface p-3 sm:flex">
          <div class="mx-auto h-1 w-1/2 rounded bg-line-strong" />
          <div v-for="n in 4" :key="n" class="flex items-center justify-between">
            <div class="h-1.5 w-2/3 rounded bg-line-strong" />
            <div class="h-1.5 w-5 rounded bg-ink/50" />
          </div>
          <div class="mt-auto flex items-center justify-between border-t border-line pt-2">
            <div class="h-1.5 w-1/4 rounded bg-line-strong" />
            <div class="h-2 w-1/5 rounded bg-brand-500" />
          </div>
        </div>
      </div>

      <!-- Chat : bubbles -->
      <div v-else-if="mockup === 'chat'" class="flex h-full gap-3">
        <div class="hidden w-1/4 flex-col gap-2 rounded-lg border border-line bg-surface p-2.5 sm:flex">
          <div class="flex items-center gap-2">
            <div class="h-5 w-5 rounded-full bg-brand-500/40" />
            <div class="h-1.5 flex-1 rounded bg-line-strong" />
          </div>
          <div v-for="n in 3" :key="n" class="flex items-center gap-2 opacity-60">
            <div class="h-5 w-5 rounded-full bg-line-strong" />
            <div class="h-1.5 flex-1 rounded bg-line-strong" />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-end gap-2.5 rounded-lg border border-line bg-surface p-3.5">
          <div class="flex justify-start">
            <div class="flex gap-2">
              <div class="h-6 w-6 rounded-full bg-accent-500/40" />
              <div class="w-2/3 space-y-1.5 rounded-xl rounded-tl-sm bg-raised px-3 py-2">
                <div class="h-1.5 rounded bg-line-strong" />
                <div class="h-1.5 w-3/4 rounded bg-line-strong" />
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="w-1/2 space-y-1.5 rounded-xl rounded-tr-sm bg-brand-500/25 px-3 py-2">
              <div class="h-1.5 rounded bg-brand-200/50" />
              <div class="h-1.5 w-2/3 rounded bg-brand-200/40" />
            </div>
          </div>
          <div class="flex items-center gap-2 rounded-lg border border-line bg-raised px-3 py-2">
            <div class="h-1.5 flex-1 rounded bg-line-strong" />
            <div class="h-4 w-4 rounded bg-brand-500/60" />
          </div>
        </div>
      </div>

      <!-- Auth : centered card -->
      <div v-else-if="mockup === 'auth'" class="flex items-center justify-center">
        <div class="w-3/5 max-w-[260px] space-y-3 rounded-xl border border-line bg-surface p-5 shadow-pop">
          <div class="mx-auto h-8 w-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600" />
          <div class="mx-auto h-2 w-1/2 rounded bg-line-strong" />
          <div class="space-y-2 pt-1">
            <div class="h-1.5 rounded bg-line" />
            <div class="h-7 rounded-md border border-brand-500/40 bg-brand-500/10" />
            <div class="h-1.5 rounded bg-line" />
            <div class="h-7 rounded-md bg-line-strong" />
          </div>
          <div class="h-7 rounded-md bg-gradient-to-r from-brand-600 to-brand-500" />
          <div class="mx-auto h-1.5 w-2/3 rounded bg-line-strong" />
        </div>
      </div>

      <!-- LMS : courses + progress -->
      <div v-else-if="mockup === 'lms'" class="flex h-full flex-col gap-3">
        <div class="grid h-1/3 grid-cols-3 gap-2">
          <div v-for="n in 3" :key="n" class="flex flex-col justify-end rounded-lg border border-line bg-surface p-2.5">
            <div class="mb-1.5 h-2 w-2 rounded-full bg-brand-500/50" />
            <div class="h-1.5 w-2/3 rounded bg-line-strong" />
          </div>
        </div>
        <div class="flex flex-1 flex-col gap-2 rounded-lg border border-line bg-surface p-3">
          <div v-for="(w, i) in [70, 45, 90]" :key="i" class="flex items-center gap-2.5">
            <div class="h-2.5 w-2.5 shrink-0 rounded-sm bg-brand-500/40" />
            <div class="flex-1">
              <div class="mb-1 h-1.5 rounded bg-line-strong" />
              <div class="h-1 rounded bg-line">
                <div class="h-1 rounded bg-gradient-to-r from-brand-500 to-accent-400" :style="{ width: `${w}%` }" />
              </div>
            </div>
            <div class="font-mono text-[9px] text-brand-300">{{ w }}%</div>
          </div>
        </div>
      </div>

      <!-- SaaS : stat cards + chart -->
      <div v-else-if="mockup === 'saas'" class="flex h-full flex-col gap-3">
        <div class="grid grid-cols-3 gap-2">
          <div v-for="n in 3" :key="n" class="rounded-lg border border-line bg-surface p-2.5">
            <div class="h-1.5 w-1/2 rounded bg-line-strong" />
            <div class="mt-1.5 h-2.5 w-2/3 rounded bg-ink/60" />
          </div>
        </div>
        <div class="flex flex-1 items-end gap-1.5 rounded-lg border border-line bg-surface p-4">
          <div
            v-for="(row, i) in rows.slice(0, 8)"
            :key="i"
            class="flex-1 rounded-sm bg-gradient-to-t from-brand-600/60 to-brand-400/60"
            :style="{ height: `${row}%` }"
          />
        </div>
      </div>
    </div>

    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-raised via-transparent to-transparent opacity-30" aria-hidden="true" />
  </div>
</template>
