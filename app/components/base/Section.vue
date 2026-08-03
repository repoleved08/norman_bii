<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), { tag: 'section' })
</script>

<template>
  <component :is="tag" class="relative">
    <slot />
  </component>
</template>
