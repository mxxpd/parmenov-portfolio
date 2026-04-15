<script setup lang="ts">
import ArrowDownIcon from '~/assets/icons/arrow-down.svg'

const { theme, setTheme } = useTheme()
const { openContact } = useModal()
</script>

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

    <AppButton label="Связаться со мной" size="md" :icon="true" @click="openContact" />
    <AppButton class="header-actions__cv" label="CV" variant="secondary" size="md" :icon="true" href="/Maxim_Parmenov_Resume.pdf" target="_blank">
      <template #icon>
        <ArrowDownIcon class="app-btn__icon" />
      </template>
    </AppButton>
  </div>
</template>
