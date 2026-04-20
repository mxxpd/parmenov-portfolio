<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()

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
  </div>
</template>
