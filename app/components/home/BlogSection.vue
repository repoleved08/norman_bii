<script setup lang="ts">
import { blogPosts } from '~/data/blog'

const featured = computed(() => blogPosts.filter((p) => p.featured))
</script>

<template>
  <section id="blog" class="relative border-y border-line bg-surface/40 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <BaseReveal>
          <BaseSectionHeading
            eyebrow="Writing"
            title="Notes from production"
            description="Writing on architecture, security, and performance — the problems I hit shipping real systems."
          />
        </BaseReveal>
        <BaseReveal :delay="0.15">
          <BaseButton href="https://medium.com/@biinorman1" external variant="ghost" class="mb-12">
            All articles
            <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
          </BaseButton>
        </BaseReveal>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <BaseReveal v-for="(post, i) in featured" :key="post.slug" :delay="i * 0.08">
          <UiBlogCard :post="post" :index="i" />
        </BaseReveal>
      </div>
    </div>
  </section>
</template>
