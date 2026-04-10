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
