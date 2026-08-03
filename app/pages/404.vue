<script setup lang="ts">
useSeoMeta({
  title: '404 — Page not found',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div class="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-20">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div class="aurora left-1/3 top-1/4 h-80 w-80 bg-brand-600/25" />
    </div>

    <div class="relative flex max-w-md flex-col items-center text-center">
      <p class="font-mono text-sm text-brand-300">404 — not_found</p>
      <h1 class="mt-4 font-display text-6xl font-bold tracking-tight text-ink">Lost in the stack</h1>
      <p class="mt-4 text-base leading-relaxed text-muted">
        This page does not exist. Even the best systems return 404 sometimes.
      </p>
      <div class="mt-8 flex gap-3">
        <BaseButton to="/" variant="primary">
          Back home
        </BaseButton>
        <BaseButton to="/projects" variant="ghost">
          See my work
        </BaseButton>
      </div>
    </div>
  </div>
</template>
