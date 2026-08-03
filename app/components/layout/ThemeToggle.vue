<script setup lang="ts">
const { toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink"
    @click="toggle"
  >
    <Icon name="lucide:moon" class="h-4 w-4 dark:hidden" />
    <Icon name="lucide:sun" class="hidden h-4 w-4 dark:block" />
  </button>
</template>
