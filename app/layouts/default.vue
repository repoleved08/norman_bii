<script setup lang="ts">
import { site } from '~/data/site'

const isDark = ref(true)

function syncFromDom() {
  isDark.value = document.documentElement.classList.contains('dark')
}

onMounted(syncFromDom)
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
  >
    Skip to content
  </a>

  <LayoutScrollProgress />

  <LayoutAppHeader />

  <main id="main">
    <slot />
  </main>

  <LayoutAppFooter />

  <UiRequestResumeModal />
</template>
