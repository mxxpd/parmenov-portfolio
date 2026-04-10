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
