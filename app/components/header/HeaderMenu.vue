<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()

const { theme, setTheme } = useTheme()
const { openContact } = useModal()

const links = [
  { label: 'Главная', to: '/' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Сервисы', to: '/services' },
  { label: 'Статьи', to: '/articles' },
]

const handleContactClick = () => {
  openContact()
  emit('close')
}
</script>

<template>
  <div class="mmenu">
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

    <div class="mmenu__actions" aria-label="Основные действия">
      <AppButton label="Связаться со мной" size="md" @click="handleContactClick" />
      <AppButton label="Скачать CV" variant="secondary" size="md" />
    </div>

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
