<script setup lang="ts">
import { Motion } from 'motion-v'
import { site } from '~/data/site'
import { useResumeModal } from '~/composables/useResumeModal'

const { openResumeModal } = useResumeModal()

const stats = [
  { value: 4, suffix: '+', label: 'Years building software' },
  { value: 20, suffix: '+', label: 'Systems shipped to production' },
  { value: 7, suffix: '+', label: 'Domains — finance, retail, real-time' },
  { value: 3, suffix: '', label: 'Production apps operated today' },
]

const lines = [
  { text: '// LedgerService — idempotent payment write', type: 'comment' },
  { text: 'final class LedgerService', type: 'keyword' },
  { text: '{', type: 'plain' },
  { text: '    public function record(Transaction $tx): void', type: 'plain' },
  { text: '    {', type: 'plain' },
  { text: '        $this->withIdempotency($tx->key, fn () =>', type: 'plain' },
  { text: '            DB::transaction(fn () =>', type: 'plain' },
  { text: '                $tx->account->credit($tx->amount)', type: 'call' },
  { text: '            )', type: 'plain' },
  { text: '        );', type: 'plain' },
  { text: '    }', type: 'plain' },
  { text: '}', type: 'plain' },
]
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-28 sm:pt-36">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-60" />
      <div class="aurora left-[-10%] top-[-20%] h-[480px] w-[480px] bg-brand-600/30" />
      <div class="aurora right-[-12%] top-[5%] h-[420px] w-[420px] bg-accent-500/20" style="animation-delay: -6s" />
      <div class="aurora bottom-[-30%] left-[30%] h-[380px] w-[380px] bg-brand-400/20" style="animation-delay: -12s" />
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div class="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div class="flex flex-col items-start">
          <Motion
            :initial="{ opacity: 0, y: 16 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }"
          >
            <div class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span class="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span class="font-mono text-xs text-ink-dim">Available for work — {{ site.location }}</span>
            </div>
          </Motion>

          <h1 class="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            <Motion
              :initial="{ opacity: 0, y: 28, filter: 'blur(8px)' }"
              :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
              :transition="{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }"
            >
              I build <span class="text-gradient">production-grade</span> software that businesses depend on.
            </Motion>
          </h1>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }"
          >
            <p class="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {{ site.heroSubline }}
            </p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }"
            class="mt-8 flex flex-wrap items-center gap-3"
          >
            <BaseButton to="#work" variant="primary" size="lg">
              View my work
              <Icon name="lucide:arrow-down" class="h-4 w-4" />
            </BaseButton>
            <button
              type="button"
              class="btn btn-ghost px-5 py-3 text-[0.9375rem]"
              @click="openResumeModal()"
            >
              <Icon name="lucide:file-text" class="h-4 w-4" />
              Request CV
            </button>
          </Motion>

          <Motion
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 0.6, delay: 0.48 }"
            class="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              v-for="social in site.socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noreferrer noopener"
              class="group flex items-center gap-1.5 text-sm text-faint transition-colors hover:text-ink"
            >
              <Icon :name="social.icon" class="h-4 w-4" />
              <span class="font-mono">{{ social.handle }}</span>
            </a>
          </Motion>
        </div>

        <Motion
          :initial="{ opacity: 0, y: 32, scale: 0.98 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }"
          class="hidden lg:block"
        >
          <div class="relative">
            <div class="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/10 blur-2xl" aria-hidden="true" />
            <div class="card relative overflow-hidden shadow-pop">
              <div class="flex items-center gap-2 border-b border-line px-4 py-3">
                <span class="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span class="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span class="h-2.5 w-2.5 rounded-full bg-success/70" />
                <span class="ml-3 font-mono text-xs text-faint">app/Http/Controllers/LedgerController.php</span>
              </div>
              <div class="p-5 font-mono text-[13px] leading-[1.7] whitespace-pre">
                <div
                  v-for="(line, i) in lines"
                  :key="i"
                  :class="{
                    'text-faint': line.type === 'comment',
                    'text-brand-300': line.type === 'keyword',
                    'text-ink': line.type === 'plain',
                    'text-accent-400': line.type === 'call',
                  }"
                >
                  {{ line.text }}
                </div>
                <div class="mt-4 flex items-center gap-2 rounded-lg border border-success/20 bg-success/5 px-3 py-2">
                  <span class="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-success" />
                  <span class="text-xs text-success">200 OK — transaction recorded · 43ms</span>
                </div>
              </div>
            </div>
          </div>
        </Motion>
      </div>

      <div class="mt-20 border-t border-line pt-10 sm:mt-28">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
            <p class="font-display text-3xl font-bold text-ink sm:text-4xl">
              <UiCountUp :value="stat.value" :suffix="stat.suffix" />
            </p>
            <p class="text-sm text-muted">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
