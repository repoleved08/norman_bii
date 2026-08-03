<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'
import { site } from '~/data/site'
import { useResumeModal } from '~/composables/useResumeModal'

const scrolled = ref(false)
const open = ref(false)
const sectionIds = ['home', 'work', 'stack', 'experience', 'open-source', 'blog', 'contact']
const { active } = useActiveSection(sectionIds)
const route = useRoute()
const router = useRouter()
const { openResumeModal } = useResumeModal()

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const nav = computed(() => site.nav)

function isActive(to: string) {
  const target = to.replace('#', '')
  return active.value === target
}

function go(hash: string) {
  open.value = false
  if (route.path === '/') {
    const el = document.querySelector(hash)
    if (el) return el.scrollIntoView({ behavior: 'smooth' })
    return router.push(hash)
  }
  return router.push({ path: '/', hash })
}

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'border-b border-line bg-canvas/80 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <LayoutLogo />

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
        <a
          v-for="item in nav"
          :key="item.to"
          :href="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="isActive(item.to)
            ? 'text-ink'
            : 'text-muted hover:text-ink'"
          @click.prevent="go(item.to)"
        >
          {{ item.label }}
          <span
            v-if="isActive(item.to)"
            class="absolute inset-x-3 -bottom-px h-px bg-brand-500"
            aria-hidden="true"
          />
        </a>
      </nav>

      <div class="flex items-center gap-2.5">
        <LayoutThemeToggle />
        <button
          type="button"
          class="btn btn-primary text-sm px-3.5 py-2 rounded-lg hidden sm:inline-flex"
          aria-label="Request resume"
          @click="openResumeModal()"
        >
          Resume
          <Icon name="lucide:file-text" class="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink lg:hidden"
          aria-label="Toggle menu"
          :aria-expanded="open"
          @click="open = !open"
        >
          <Icon name="lucide:menu" v-if="!open" class="h-5 w-5" />
          <Icon name="lucide:x" v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <AnimatePresence>
      <Motion
        v-if="open"
        :initial="{ opacity: 0, y: -8 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: -8 }"
        :transition="{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }"
        class="border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden"
      >
        <nav class="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
          <a
            v-for="item in nav"
            :key="item.to"
            :href="item.to"
            class="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-raised"
            @click.prevent="go(item.to)"
          >
            {{ item.label }}
            <Icon name="lucide:arrow-up-right" class="h-4 w-4 text-faint" />
          </a>
          <div class="mt-2 flex gap-3">
            <button
              type="button"
              class="btn btn-primary w-full text-sm px-3.5 py-2 rounded-lg"
              @click="open = false; openResumeModal()"
            >
              <Icon name="lucide:file-text" class="h-3.5 w-3.5" />
              Request Resume
            </button>
          </div>
        </nav>
      </Motion>
    </AnimatePresence>
  </header>
</template>

<style scoped>
nav a {
  position: relative;
}
</style>
