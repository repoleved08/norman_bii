<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'neutral' | 'brand' }>(), { tone: 'neutral' })
</script>

<template>
  <span
    :class="[
      tone === 'brand'
        ? 'border-brand-500/30 bg-brand-500/10 text-brand-300 dark:text-brand-300'
        : 'border-line-strong bg-raised text-muted',
    ]"
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] font-medium leading-none tracking-wide"
  >
    <slot />
  </span>
</template>
