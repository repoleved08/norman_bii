export function useActiveSection(ids: string[]) {
  const active = ref<string>('')

  function init() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    onBeforeUnmount(() => observer.disconnect())
  }

  onMounted(init)
  return { active }
}
