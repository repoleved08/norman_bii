export function useTheme() {
  function apply(theme: 'dark' | 'light') {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    root.style.colorScheme = theme
    localStorage.setItem('nb-theme', theme)
  }

  function toggle() {
    const isDark = document.documentElement.classList.contains('dark')
    apply(isDark ? 'light' : 'dark')
  }

  return { toggle }
}
