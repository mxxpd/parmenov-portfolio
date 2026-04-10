<script setup lang="ts">
useSeoMeta({
  title: 'Статьи — Парменов',
  description: 'Раздел со статьями находится в подготовке.',
  ogTitle: 'Статьи — Парменов',
  ogLocale: 'ru_RU',
})
</script>

<template>
  <div class="stub">
    <p class="stub__label">Скоро</p>
    <h1 class="stub__title">Статьи в разработке</h1>
    <p class="stub__text">
      Здесь появятся заметки о продуктовой логике, UX, исследованиях и работе с интерфейсами.
    </p>
    <AppButton label="Вернуться на главную" variant="secondary" href="/" />
  </div>
</template>

<style scoped>
.stub {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-4);
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.stub__label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stub__title {
  font-size: var(--text-display);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-display);
  color: var(--color-text-primary);
}

.stub__text {
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}
</style>
