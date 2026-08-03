<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    download?: boolean
    external?: boolean
    ariaLabel?: string
  }>(),
  { variant: 'primary', size: 'md' },
)

const classes = computed(() => [
  'btn',
  props.variant === 'primary' ? 'btn-primary' : 'btn-ghost',
  props.size === 'sm' ? 'text-sm px-3.5 py-2 rounded-lg' : props.size === 'lg' ? 'px-5 py-3 text-[0.9375rem]' : '',
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes" :aria-label="ariaLabel">
    <slot />
  </NuxtLink>
  <a v-else :href="href" :class="classes" :download="download" :target="external ? '_blank' : undefined" :rel="external ? 'noreferrer noopener' : undefined" :aria-label="ariaLabel">
    <slot />
  </a>
</template>
