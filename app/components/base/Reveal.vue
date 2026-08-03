<script setup lang="ts">
import { Motion } from 'motion-v'

withDefaults(
  defineProps<{
    delay?: number
    y?: number
    blur?: boolean
    amount?: number
  }>(),
  { delay: 0, y: 28, blur: false, amount: 0.2 },
)
</script>

<template>
  <Motion
    :initial="{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }"
    :while-in-view="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
    :transition="{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }"
    :viewport="{ once: true, amount }"
    data-reveal
  >
    <slot />
  </Motion>
</template>
