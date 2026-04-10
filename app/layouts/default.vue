<template>
  <div class="layout">
    <Header />
    <main class="layout__main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  max-width: 1480px;
  margin: 0 auto;
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

@media (max-width: 640px) {
  .layout {
    padding: var(--spacing-3);
  }
}
</style>
