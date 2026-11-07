<script setup lang="ts">
const props = defineProps<{ text: string }>()

const element = ref<HTMLElement | null>(null)
const displayed = ref(props.text)
const decrypting = ref(false)
const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const duration = 850
let observer: IntersectionObserver | undefined
let timer: ReturnType<typeof setInterval> | undefined

function decrypt() {
  const letters = Array.from(props.text)
  const started = performance.now()
  decrypting.value = true

  timer = setInterval(() => {
    const progress = Math.min((performance.now() - started) / duration, 1)
    const revealed = Math.floor(progress * letters.length)

    displayed.value = letters.map((letter, index) => {
      if (index < revealed || !/[a-z0-9]/i.test(letter)) return letter
      return glyphs[Math.floor(Math.random() * glyphs.length)]
    }).join('')

    if (progress === 1) {
      displayed.value = props.text
      decrypting.value = false
      clearInterval(timer)
      timer = undefined
    }
  }, 32)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!element.value || !('IntersectionObserver' in window)) return

  observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return
    observer?.disconnect()
    decrypt()
  }, { threshold: 0.3 })
  observer.observe(element.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  if (timer) clearInterval(timer)
})
</script>

<template>
  <span ref="element">
    <span v-if="decrypting" class="sr-only">{{ text }}</span>
    <span :aria-hidden="decrypting">{{ displayed }}</span>
  </span>
</template>
