<template>
  <nav class="header-nav" aria-label="Основная навигация">
    <NuxtLink
      v-for="link in links"
      :key="link.label"
      :to="link.to"
      class="header-nav__link"
      active-class="header-nav__link--active"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { label: 'Главная', to: '/' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Сервисы', to: '/services' },
  { label: 'Статьи', to: '/articles' },
]
</script>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-1);
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-bg-surface-muted) 96%, transparent);
}

.header-nav__link {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: var(--radius-pill);
  color: var(--color-text-secondary);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  text-decoration: none;
  white-space: nowrap;
  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.header-nav__link:hover,
.header-nav__link--active {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
}
</style>
