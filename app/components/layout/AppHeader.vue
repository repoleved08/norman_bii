<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { site } from '~/data/site'
import { useResumeModal } from '~/composables/useResumeModal'

const scrolled = ref(false)
const open = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const sectionIds = ['home', 'work', 'stack', 'experience', 'open-source', 'blog', 'contact']
const { active } = useActiveSection(sectionIds)
const route = useRoute()
const router = useRouter()
const { openResumeModal } = useResumeModal()

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function onResize() {
  if (window.innerWidth >= 1280) open.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    open.value = false
    menuButton.value?.focus()
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const nav = computed(() => site.nav)

function isActive(to: string) {
  if (to.startsWith('/')) return route.path === to
  return route.path === '/' && active.value === to.slice(1)
}

function go(to: string) {
  open.value = false
  if (to.startsWith('/')) return router.push(to)
  if (route.path === '/') {
    const el = document.querySelector(to)
    if (el) return el.scrollIntoView({ behavior: 'smooth' })
    return router.push(to)
  }
  return router.push({ path: '/', hash: to })
}

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

watch(() => route.path, () => { open.value = false })

async function showCv() {
  open.value = false
  await nextTick()
  openResumeModal()
}
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-40 bg-canvas/70 backdrop-blur-sm xl:hidden"
    aria-hidden="true"
    @click="open = false"
  />
  <header
    class="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-2 lg:gap-3">
      <div
        class="pointer-events-auto flex h-14 shrink-0 items-center rounded-xl border bg-canvas/90 px-3 shadow-card backdrop-blur-xl transition-colors duration-300 sm:px-4"
        :class="scrolled ? 'border-line-strong' : 'border-line'"
        @click="open = false"
      >
        <LayoutLogo />
      </div>

      <nav
        class="pointer-events-auto hidden h-14 items-center gap-0.5 rounded-xl border border-line bg-canvas/90 p-1 shadow-card backdrop-blur-xl xl:flex"
        aria-label="Primary"
      >
        <a
          v-for="(item, index) in nav"
          :key="item.to"
          :href="item.to.startsWith('#') && route.path !== '/' ? `/${item.to}` : item.to"
          class="group relative inline-flex h-full items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 font-mono text-xs font-medium transition-colors 2xl:px-3"
          :class="isActive(item.to)
            ? 'bg-brand-500/10 text-brand-300'
            : 'text-muted hover:bg-raised hover:text-ink'"
          :aria-current="isActive(item.to) ? (item.to.startsWith('/') ? 'page' : 'location') : undefined"
          @click.prevent="go(item.to)"
        >
          <span class="hidden text-[10px] opacity-55 2xl:inline" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ item.label }}
          <span
            v-if="isActive(item.to)"
            class="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-brand-500"
            aria-hidden="true"
          />
        </a>
      </nav>

      <div class="pointer-events-auto flex h-14 shrink-0 items-center gap-1 rounded-xl border border-line bg-canvas/90 p-1 shadow-card backdrop-blur-xl">
        <button
          type="button"
          class="hidden h-11 items-center gap-2 rounded-lg px-3 font-mono text-xs text-muted transition-colors hover:bg-raised hover:text-ink xl:inline-flex"
          aria-label="View profile and request CV"
          @click="openResumeModal()"
        >
          <Icon name="lucide:file-text" class="h-3.5 w-3.5" />
          CV
        </button>
        <span class="hidden h-6 w-px bg-line xl:block" aria-hidden="true" />
        <a
          href="/#contact"
          class="hidden h-11 items-center gap-2 rounded-lg bg-brand-500 px-3 font-mono text-xs font-semibold text-canvas transition-colors hover:bg-brand-300 sm:inline-flex"
          @click.prevent="go('#contact')"
        >
          Let's talk
          <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
        </a>
        <button
          ref="menuButton"
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-raised xl:hidden"
          :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
          :aria-expanded="open"
          aria-controls="portfolio-menu"
          @click="open = !open"
        >
          <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <AnimatePresence>
      <Motion
        v-if="open"
        id="portfolio-menu"
        :initial="{ opacity: 0, y: -8, scale: 0.98 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: -8, scale: 0.98 }"
        :transition="{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }"
        class="pointer-events-auto mx-auto mt-2 max-h-[calc(100dvh-5.5rem)] max-w-7xl overflow-y-auto rounded-xl border border-line-strong bg-canvas/95 p-2 shadow-pop backdrop-blur-xl xl:hidden"
      >
        <nav class="flex flex-col gap-1" aria-label="Mobile">
          <a
            v-for="(item, index) in nav"
            :key="item.to"
            :href="item.to.startsWith('#') && route.path !== '/' ? `/${item.to}` : item.to"
            class="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 font-mono text-sm transition-colors"
            :class="isActive(item.to) ? 'bg-brand-500/10 text-brand-300' : 'text-ink-dim hover:bg-raised hover:text-ink'"
            :aria-current="isActive(item.to) ? (item.to.startsWith('/') ? 'page' : 'location') : undefined"
            @click.prevent="go(item.to)"
          >
            <span class="text-[10px] text-faint" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            {{ item.label }}
            <Icon name="lucide:arrow-up-right" class="ml-auto h-4 w-4 opacity-60" />
          </a>
          <div class="mt-2 border-t border-line pt-3">
            <button
              type="button"
              class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm text-ink-dim transition-colors hover:bg-raised hover:text-ink"
              @click="showCv"
            >
              <Icon name="lucide:file-text" class="h-4 w-4 text-brand-300" />
              View profile & request CV
            </button>
          </div>
        </nav>
      </Motion>
    </AnimatePresence>
  </header>
</template>
