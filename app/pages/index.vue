<script setup lang="ts">
import { site } from '~/data/site'
import { projects } from '~/data/projects'

const featured = computed(() => projects.filter((p) => p.featured))

useSeoMeta({
  title: 'Norman Bii — Lead Laravel Developer',
  description: site.heroSubline,
  ogTitle: 'Norman Bii — Lead Laravel Developer',
  ogDescription: site.heroSubline,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeTechStackSection />
    <HomeExperienceSection />
    <HomeProjectsSection :projects="featured" />
    <HomeOpenSourceSection />
    <HomeBlogSection />
    <HomeCertificationsSection />
    <HomeTestimonialsSection />
    <HomeContactSection />
  </div>
</template>
