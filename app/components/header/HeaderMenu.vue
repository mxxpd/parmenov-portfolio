<script setup lang="ts">
import LogoIcon from '~/assets/icons/logo.svg'

const emit = defineEmits<{ close: [] }>()

const { theme, setTheme } = useTheme()

const links = [
  { label: 'Главная', to: '/' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Сервисы', to: '/services' },
  { label: 'Статьи', to: '/articles' },
]
</script>

<template>
  <div class="mmenu">
    <div class="mmenu__bar">
      <NuxtLink to="/" class="mmenu__logo" @click="emit('close')">
        <LogoIcon class="mmenu__logo-icon" />
        <span class="mmenu__logo-name">Парменов</span>
      </NuxtLink>
      <HeaderMenuButton :is-open="true" @toggle="emit('close')" />
    </div>

    <nav class="mmenu__nav" aria-label="Мобильная навигация">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        class="mmenu__link"
        active-class="mmenu__link--active"
        @click="emit('close')"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <div class="mmenu__footer">
      <div
        class="mmenu__theme"
        :class="theme === 'dark' ? 'mmenu__theme--dark' : 'mmenu__theme--light'"
        role="group"
        aria-label="Переключение темы"
      >
        <span class="mmenu__theme-thumb" aria-hidden="true" />

        <button
          type="button"
          class="mmenu__theme-btn"
          :class="{ 'mmenu__theme-btn--active': theme === 'light' }"
          :aria-pressed="theme === 'light'"
          @click="setTheme('light')"
        >
          Светлая
        </button>

        <button
          type="button"
          class="mmenu__theme-btn"
          :class="{ 'mmenu__theme-btn--active': theme === 'dark' }"
          :aria-pressed="theme === 'dark'"
          @click="setTheme('dark')"
        >
          Тёмная
        </button>
      </div>
    </div>
  </div>
</template>
