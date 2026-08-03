<script setup lang="ts">
import { useInView } from 'motion-v'

const props = withDefaults(
  defineProps<{
    value: number
    suffix?: string
    duration?: number
    class?: string
  }>(),
  { suffix: '', duration: 1400 },
)

const { to } = useCountUp()
const el = ref<HTMLElement | null>(null)
const displayed = ref('0')

const targetRef = ref<HTMLElement | null>(null)
const inView = useInView(targetRef, { once: true, amount: 0.4 })

watch(inView, (visible) => {
  if (visible && el.value) {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      displayed.value = String(props.value)
    } else {
      to(el.value, props.value, props.duration)
    }
  }
})
</script>

<template>
  <span ref="targetRef" class="inline-flex items-baseline gap-0.5">
    <span ref="el" class="tabular-nums">{{ displayed }}</span>
    <span class="text-brand-400">{{ suffix }}</span>
  </span>
</template>
