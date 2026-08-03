<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { site } from '~/data/site'
import { useResumeModal } from '~/composables/useResumeModal'

const { resumeModalOpen, closeResumeModal } = useResumeModal()

const copied = ref(false)

function copyEmail() {
  navigator.clipboard?.writeText(site.email).catch(() => {})
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeResumeModal()
}

watch(resumeModalOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <AnimatePresence>
    <div v-if="resumeModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.2 }"
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        @click="closeResumeModal"
      />

      <Motion
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        :initial="{ opacity: 0, y: 24, scale: 0.97 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="{ opacity: 0, y: 16, scale: 0.97 }"
        :transition="{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }"
        class="card relative w-full max-w-md p-7 sm:p-8"
      >
        <button
          type="button"
          class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-raised text-muted transition-colors hover:text-ink"
          aria-label="Close"
          @click="closeResumeModal"
        >
          <Icon name="lucide:x" class="h-4 w-4" />
        </button>

        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
          <Icon name="lucide:file-text" class="h-6 w-6" />
        </span>

        <h2 id="resume-modal-title" class="mt-5 font-display text-xl font-bold text-ink">
          Request my CV
        </h2>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          I keep my full CV up to date and share it on request. Email me and I will send it over — usually within a few hours.
        </p>

        <div class="mt-6 flex items-center gap-3 rounded-xl border border-line bg-raised p-3">
          <Icon name="lucide:mail" class="h-4 w-4 shrink-0 text-brand-300" />
          <a :href="`mailto:${site.email}`" class="truncate font-mono text-sm text-ink hover:text-brand-300">
            {{ site.email }}
          </a>
          <button
            type="button"
            class="ml-auto flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-500/10 px-2.5 py-1.5 font-mono text-xs text-brand-300 transition-colors hover:bg-brand-500/20"
            :aria-label="copied ? 'Email copied' : 'Copy email to clipboard'"
            @click="copyEmail"
          >
            <Icon :name="copied ? 'lucide:check' : 'lucide:copy'" class="h-3.5 w-3.5" />
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
        </div>

        <div class="mt-4 flex flex-col gap-2.5">
          <a
            :href="`mailto:${site.email}?subject=${encodeURIComponent(`CV request — ${site.name}`)}`"
            class="btn btn-primary w-full"
          >
            Email me for my CV
            <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </a>
          <button
            type="button"
            class="btn btn-ghost w-full"
            @click="closeResumeModal"
          >
            Not now
          </button>
        </div>
      </Motion>
    </div>
  </AnimatePresence>
</template>
