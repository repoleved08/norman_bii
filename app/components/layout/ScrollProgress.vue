<script setup lang="ts">
const progress = ref(0)

function onScroll() {
  const el = document.documentElement
  const total = el.scrollHeight - el.clientHeight
  progress.value = total > 0 ? el.scrollTop / total : 0
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div
    class="scroll-progress"
    :style="{ transform: `scaleX(${progress})` }"
    aria-hidden="true"
  />
</template>
