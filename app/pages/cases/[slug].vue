<script setup lang="ts">
useHead({
  title: 'Кейс — Парменов',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <div class="stub">
    <p class="stub__label">В разработке</p>
    <p class="stub__text">Здесь скоро будет кейс</p>
    <AppButton label="Все кейсы" variant="ghost" href="/cases" />
  </div>
</template>

<style scoped>
.stub {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
  min-height: 50vh;
  text-align: center;
}

.stub__label {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stub__text {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-display);
  color: var(--color-text-primary);
  line-height: var(--line-height-heading);
}
</style>
