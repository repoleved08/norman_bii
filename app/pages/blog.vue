<script setup lang="ts">
import { blogPosts } from '~/data/blog'

useSeoMeta({
  title: 'Blog — Norman Bii on Laravel, Security & Performance',
  description: 'Practical writing on production Laravel: idempotent payments, DDD in practice, scaling WebSockets, Vault secrets, and performance tuning.',
  ogTitle: 'Blog — Norman Bii',
  ogType: 'website',
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-6xl px-4 pb-4 pt-32 sm:px-6">
      <BaseReveal>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <span class="eyebrow">Writing</span>
            <span class="h-px w-8 bg-gradient-to-r from-brand-500 to-transparent" aria-hidden="true" />
          </div>
          <h1 class="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Articles from the production trenches
          </h1>
          <p class="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Written for developers who ship — no fluff, no tutorials-for-views. Published on the TechXtraSol engineering blog.
          </p>
        </div>
      </BaseReveal>
    </div>

    <section class="relative py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BaseReveal v-for="(post, i) in blogPosts" :key="post.slug" :delay="(i % 3) * 0.08">
            <UiBlogCard :post="post" :index="i" />
          </BaseReveal>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <HomeContactSection />
    </div>
  </div>
</template>
