<script setup lang="ts">
import { fallbackRepos, type Repo } from '~/data/opensource'

const fallback = {
  profile: {
    name: 'repoleved08',
    avatar: '',
    bio: null,
    followers: 0,
    publicRepos: fallbackRepos.length,
    totalStars: fallbackRepos.reduce((sum, repo) => sum + repo.stars, 0),
    url: 'https://github.com/repoleved08',
  },
  repos: fallbackRepos as Repo[],
}

const { data, status, refresh } = await useFetch<{
  profile: { name: string; avatar: string; bio: string | null; followers: number; publicRepos: number; totalStars: number; url: string }
  repos: Repo[]
}>('/api/github', { lazy: true, default: () => fallback })

const loading = computed(() => status.value === 'pending')
</script>

<template>
  <section id="open-source" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <BaseReveal>
        <BaseSectionHeading
          eyebrow="Open Source"
          title="Code shared with the community"
          description="Libraries, skeletons, and battle-tested configs from real production work — published so others can skip the hard part."
        />
      </BaseReveal>

      <div class="grid gap-5 lg:grid-cols-[0.35fr_1fr]">
        <BaseReveal :delay="0.1">
          <div class="card flex h-full flex-col items-center gap-4 p-6 text-center">
            <a :href="data?.profile.url" target="_blank" rel="noreferrer noopener" class="group flex flex-col items-center gap-3">
              <span class="relative">
                <img
                  v-if="data?.profile.avatar"
                  :src="data.profile.avatar"
                  :alt="`${data.profile.name} avatar`"
                  class="h-20 w-20 rounded-full border border-line object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span v-else class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-2xl font-bold text-white">
                  NB
                </span>
                <span class="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full border-2 border-surface bg-success" aria-hidden="true" />
              </span>
              <span class="font-mono text-sm font-semibold text-ink group-hover:text-brand-300">{{ data?.profile.name }}</span>
            </a>

            <div class="grid w-full grid-cols-3 gap-2 border-y border-line py-4">
              <div class="flex flex-col items-center">
                <p class="font-display text-lg font-bold text-ink">{{ loading ? '–' : data?.profile.publicRepos }}</p>
                <p class="text-[10px] uppercase tracking-wider text-faint">Repos</p>
              </div>
              <div class="flex flex-col items-center">
                <p class="font-display text-lg font-bold text-ink">{{ loading ? '–' : data?.profile.totalStars }}</p>
                <p class="text-[10px] uppercase tracking-wider text-faint">Stars</p>
              </div>
              <div class="flex flex-col items-center">
                <p class="font-display text-lg font-bold text-ink">{{ loading ? '–' : data?.profile.followers }}</p>
                <p class="text-[10px] uppercase tracking-wider text-faint">Followers</p>
              </div>
            </div>

            <BaseButton :href="data?.profile.url ?? 'https://github.com/repoleved08'" external variant="ghost" size="sm" class="w-full">
              <Icon name="simple-icons:github" class="h-4 w-4" />
              Follow on GitHub
            </BaseButton>

            <button
              type="button"
              class="flex items-center gap-1.5 font-mono text-xs text-faint transition-colors hover:text-muted"
              @click="refresh"
            >
              <Icon name="lucide:refresh-cw" class="h-3 w-3" />
              Refresh
            </button>
          </div>
        </BaseReveal>

        <div class="grid gap-4 sm:grid-cols-2">
          <BaseReveal v-for="(repo, i) in data?.repos ?? []" :key="repo.name" :delay="0.05 + i * 0.05">
            <UiGitHubCard :repo="repo" :index="i" />
          </BaseReveal>
        </div>
      </div>
    </div>
  </section>
</template>
