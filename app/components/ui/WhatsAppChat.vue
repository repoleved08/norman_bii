<script setup lang="ts">
import { site } from '~/data/site'

const suggestedMessage = "Hi Norman, I found your portfolio and would like to discuss a project. Are you available for a quick chat?"
const phone = site.phone.replace(/\D/g, '')

const widget = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
const editor = ref<HTMLTextAreaElement | null>(null)
const open = ref(false)
const typing = ref(false)
const initialized = ref(false)
const message = ref('')
let timer: ReturnType<typeof setInterval> | undefined

const whatsappUrl = computed(() => {
  const text = message.value.trim()
  return `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`
})

function stopTyping() {
  if (timer) clearInterval(timer)
  timer = undefined
  typing.value = false
}

function startDraft() {
  initialized.value = true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    message.value = suggestedMessage
    return
  }

  typing.value = true
  let index = 0
  timer = setInterval(() => {
    message.value += suggestedMessage[index++]
    if (index >= suggestedMessage.length) stopTyping()
  }, 28)
}

function openChat(focusEditor = false) {
  if (!open.value) {
    open.value = true
    if (!initialized.value) startDraft()
  }
  if (focusEditor) nextTick(() => editor.value?.focus())
}

function closeChat(restoreFocus = false) {
  if (typing.value) {
    message.value = suggestedMessage
    stopTyping()
  }
  open.value = false
  if (restoreFocus) nextTick(() => trigger.value?.focus())
}

function onPointerDown(event: PointerEvent) {
  if (open.value && event.target instanceof Node && !widget.value?.contains(event.target)) closeChat()
}

function onKeydown(event: KeyboardEvent) {
  if (open.value && event.key === 'Escape') closeChat(true)
}

onMounted(() => {
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  stopTyping()
  document.removeEventListener('pointerdown', onPointerDown)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="widget" class="fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    <Transition name="chat">
      <section
        v-if="open"
        id="whatsapp-chat"
        class="flex max-h-[calc(100dvh-6rem)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-line-strong bg-surface shadow-pop"
        aria-label="WhatsApp message editor"
      >
        <div class="flex items-center gap-3 border-b border-line bg-raised px-4 py-3">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25d366]/10 text-[#25d366]">
            <Icon name="simple-icons:whatsapp" class="h-5 w-5" aria-hidden="true" />
          </span>
          <div class="min-w-0 flex-1">
            <h2 class="font-display text-sm font-semibold text-ink">Chat with Norman</h2>
            <p class="text-xs text-muted">Draft a WhatsApp message</p>
          </div>
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-overlay hover:text-ink"
            aria-label="Close WhatsApp chat"
            @click="closeChat(true)"
          >
            <Icon name="lucide:x" class="h-4 w-4" />
          </button>
        </div>

        <div class="overflow-y-auto p-4">
          <label for="whatsapp-message" class="mb-2 block font-mono text-xs text-muted">
            {{ typing ? 'Writing a suggested opener… edit any time' : 'Your message · edit before sending' }}
          </label>
          <textarea
            id="whatsapp-message"
            ref="editor"
            v-model="message"
            rows="5"
            class="w-full resize-y rounded-lg border border-line-strong bg-canvas px-3 py-3 text-sm leading-relaxed text-ink placeholder:text-faint focus:border-[#25d366] focus:outline-none"
            placeholder="Write your message to Norman…"
            aria-live="off"
            @input="stopTyping"
          />
          <p class="mt-2 text-xs leading-relaxed text-faint">Opens WhatsApp with your draft. Nothing is sent automatically.</p>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25d366] px-4 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-[#4ae184]"
          >
            Continue in WhatsApp
            <Icon name="lucide:arrow-up-right" class="h-4 w-4" />
          </a>
        </div>
      </section>
    </Transition>

    <button
      ref="trigger"
      type="button"
      class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#25d366]/40 bg-[#25d366] text-canvas shadow-[0_8px_28px_#25d36638] transition-transform hover:-translate-y-1 hover:shadow-[0_10px_34px_#25d36655]"
      aria-label="Open WhatsApp message editor"
      aria-controls="whatsapp-chat"
      :aria-expanded="open"
      @mouseenter="openChat()"
      @click="openChat(true)"
    >
      <Icon name="simple-icons:whatsapp" class="h-7 w-7" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.chat-enter-active, .chat-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.chat-enter-from, .chat-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
