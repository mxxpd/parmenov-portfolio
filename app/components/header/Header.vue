<script setup lang="ts">
const menuOpen = ref(false)
const route = useRoute()

// Close on navigation
watch(() => route.path, () => { menuOpen.value = false })

// Body scroll lock
watch(menuOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <header class="header">
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

<style scoped>
.header {
  position: sticky;
  top: var(--spacing-4);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-6);
  padding: var(--spacing-4) var(--spacing-6);
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  border-radius: 32px;
  background: color-mix(in srgb, var(--color-bg-surface) 92%, transparent);
  box-shadow: var(--shadow-raised);
  backdrop-filter: blur(18px);
}

/* Desktop: hide menu button */
.header__menu-btn {
  display: none;
}

/* Mobile: hide nav + actions, show menu button */
@media (max-width: 768px) {
  .header__nav,
  .header__actions {
    display: none;
  }

  .header__menu-btn {
    display: flex;
  }
}
</style>

<!-- Global: mobile menu transition -->
<style>
.mmenu-enter-active {
  transition: opacity 0.22s ease;
}
.mmenu-leave-active {
  transition: opacity 0.18s ease;
}
.mmenu-enter-from,
.mmenu-leave-to {
  opacity: 0;
}
</style>
