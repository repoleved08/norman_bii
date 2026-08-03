<script setup lang="ts">
useSeoMeta({
  title: 'About — Norman Bii, Lead Laravel Developer',
  description: 'Norman Bii leads enterprise Laravel development at Favitech Solutions and founded TechXtraSol. Learn how he ships production software.',
  ogTitle: 'About — Norman Bii',
  ogType: 'website',
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-6xl px-4 pb-8 pt-32 sm:px-6">
      <BaseReveal>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <span class="eyebrow">About</span>
            <span class="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" aria-hidden="true" />
          </div>
          <h1 class="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            The full story behind the systems
          </h1>
        </div>
      </BaseReveal>
    </div>

    <HomeAboutSection />
    <HomeExperienceSection />
    <HomeCertificationsSection />
    <HomeContactSection />
  </div>
</template>
