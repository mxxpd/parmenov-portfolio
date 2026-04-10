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
