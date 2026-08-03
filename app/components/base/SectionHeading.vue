<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'start' | 'center'
  }>(),
  { align: 'start' },
)
</script>

<template>
  <div :class="align === 'center' ? 'flex flex-col items-center text-center' : ''" class="mb-12">
    <div class="flex flex-col gap-3" :class="align === 'center' ? 'items-center' : ''">
      <div v-if="eyebrow" class="flex items-center gap-2">
        <span class="eyebrow">{{ eyebrow }}</span>
        <span class="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" aria-hidden="true" />
      </div>
      <h2 class="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        <slot name="title">{{ title }}</slot>
      </h2>
      <p v-if="$slots.default || description" class="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        <slot>{{ description }}</slot>
      </p>
    </div>
  </div>
</template>
