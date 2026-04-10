import { ref, onUnmounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'

export function useScrollReveal(threshold = 0.08) {
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  function bind(element: Element | ComponentPublicInstance | null) {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    if (!element || !(element instanceof Element)) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(element)
  }

  onUnmounted(() => observer?.disconnect())

  return { bind, isVisible }
}
