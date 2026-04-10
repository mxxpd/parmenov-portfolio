<template>
  <div class="header-actions">
    <div
      class="theme-switcher"
      :class="theme === 'dark' ? 'theme-switcher--dark' : 'theme-switcher--light'"
      role="group"
      aria-label="Переключение темы"
    >
      <span class="theme-switcher__thumb" aria-hidden="true" />

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
  position: relative;
  isolation: isolate;
  display: inline-grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  padding: var(--spacing-1);
  border-radius: var(--radius-pill);
  background: color-mix(in srgb, var(--color-bg-surface-muted) 78%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--color-border-subtle) 70%, transparent);
}

.theme-switcher__thumb {
  position: absolute;
  top: var(--spacing-1);
  bottom: var(--spacing-1);
  left: var(--spacing-1);
  width: calc((100% - (var(--spacing-1) * 2)) / 2);
  border-radius: var(--radius-pill);
  background: var(--color-bg-surface);
  box-shadow:
    0 10px 20px rgba(13, 13, 13, 0.08),
    0 0 0 1px color-mix(in srgb, var(--color-border-subtle) 80%, transparent);
  transition:
    transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.22s ease,
    box-shadow 0.22s ease;
  will-change: transform;
  z-index: 0;
}

.theme-switcher--dark .theme-switcher__thumb {
  transform: translateX(100%);
}

.theme-switcher__btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 108px;
  padding: 8px 14px;
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
    color 0.22s ease,
    transform 0.22s ease,
    opacity 0.22s ease;
}

.theme-switcher__btn:hover {
  color: var(--color-text-primary);
}

.theme-switcher__btn:active {
  transform: scale(0.98);
}

.theme-switcher__btn--active {
  color: var(--color-text-primary);
}

.theme-switcher:hover .theme-switcher__thumb {
  box-shadow:
    0 12px 28px rgba(13, 13, 13, 0.1),
    0 0 0 1px color-mix(in srgb, var(--color-border-default) 88%, transparent);
}
</style>
