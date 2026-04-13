const lockCount = () => useState('body-scroll-lock-count', () => 0)
const originalOverflow = () => useState<string | null>('body-scroll-lock-original-overflow', () => null)

export function useBodyScrollLock() {
  const isLocked = ref(false)

  const lock = () => {
    if (!import.meta.client || isLocked.value) {
      return
    }

    const count = lockCount()
    const overflow = originalOverflow()

    if (count.value === 0) {
      overflow.value = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    }

    count.value += 1
    isLocked.value = true
  }

  const unlock = () => {
    if (!import.meta.client || !isLocked.value) {
      return
    }

    const count = lockCount()
    const overflow = originalOverflow()

    count.value = Math.max(0, count.value - 1)
    isLocked.value = false

    if (count.value === 0) {
      document.body.style.overflow = overflow.value ?? ''
      overflow.value = null
    }
  }

  onBeforeUnmount(unlock)

  return {
    lock,
    unlock,
    isLocked: readonly(isLocked),
  }
}
