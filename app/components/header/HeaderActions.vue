<template>
  <div class="header-actions">
    <div class="theme-switcher" role="group" aria-label="Переключение темы">
      <button
        type="button"
        class="theme-switcher__btn"
        :class="{ 'theme-switcher__btn--active': theme === 'light' }"
        :aria-pressed="theme === 'light'"
        @click="setTheme('light')"
      >
        Светлая
      </button>
      <button
        type="button"
        class="theme-switcher__btn"
        :class="{ 'theme-switcher__btn--active': theme === 'dark' }"
        :aria-pressed="theme === 'dark'"
        @click="setTheme('dark')"
      >
        Тёмная
      </button>
    </div>

    <AppButton label="Связаться со мной" size="md" :icon="true" />
  </div>
</template>

<script setup lang="ts">
const { theme, setTheme } = useTheme()
</script>

<style scoped>
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  flex-shrink: 0;
}

.theme-switcher {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-1);
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-bg-surface-muted) 78%, transparent);
}

.theme-switcher__btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border: none;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-text-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.theme-switcher__btn:hover,
.theme-switcher__btn--active {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
}
</style>
