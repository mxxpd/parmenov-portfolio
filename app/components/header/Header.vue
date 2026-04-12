<script setup lang="ts">
const menuOpen = ref(false)
const isHeaderHidden = ref(false)
const route = useRoute()

let lastScrollY = 0
let scrollRaf = 0
let mobileQuery: MediaQueryList | null = null

const isMobileViewport = () => mobileQuery?.matches ?? false

const showHeader = () => {
  isHeaderHidden.value = false
}

const updateHeaderVisibility = () => {
  scrollRaf = 0

  const currentScrollY = window.scrollY

  if (!isMobileViewport() || menuOpen.value || currentScrollY < 80) {
    showHeader()
    lastScrollY = currentScrollY
    return
  }

  if (currentScrollY > lastScrollY + 12) {
    isHeaderHidden.value = true
    lastScrollY = currentScrollY
    return
  }

  if (currentScrollY < lastScrollY - 8) {
    showHeader()
    lastScrollY = currentScrollY
  }
}

const onScroll = () => {
  if (scrollRaf) return

  scrollRaf = window.requestAnimationFrame(updateHeaderVisibility)
}

const onViewportChange = () => {
  showHeader()
  lastScrollY = window.scrollY
}

// Close on navigation
watch(() => route.path, () => { menuOpen.value = false })

// Body scroll lock
watch(menuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }

  if (val) showHeader()
})

onMounted(() => {
  if (!import.meta.client) return

  mobileQuery = window.matchMedia('(max-width: 1024px)')
  lastScrollY = window.scrollY

  window.addEventListener('scroll', onScroll, { passive: true })
  mobileQuery.addEventListener('change', onViewportChange)
})

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = ''

  window.removeEventListener('scroll', onScroll)
  mobileQuery?.removeEventListener('change', onViewportChange)

  if (scrollRaf) window.cancelAnimationFrame(scrollRaf)
})
</script>

<template>
  <header class="header" :class="{ 'header--hidden': isHeaderHidden }">
    <HeaderLogo />
    <HeaderNav class="header__nav" />
    <HeaderActions class="header__actions" />
    <HeaderMenuButton
      class="header__menu-btn"
      :is-open="menuOpen"
      @toggle="menuOpen = !menuOpen"
    />
  </header>

  <Teleport to="body">
    <Transition name="mmenu">
      <HeaderMenu v-if="menuOpen" @close="menuOpen = false" />
    </Transition>
  </Teleport>
</template>
