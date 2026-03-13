import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

export const useViewport = () => {
  const { width } = useWindowSize()

  // SSR Safe: Default to Desktop (1280px or higher) to avoid layout shifts on hydration
  const isMobile = computed(() => {
    if (import.meta.server) return false
    return width.value <= 768
  })

  const isTablet = computed(() => {
    if (import.meta.server) return false
    return width.value > 768 && width.value <= 1024
  })

  const isDesktop = computed(() => {
    if (import.meta.server) return true
    return width.value > 1024
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
    width
  }
}
