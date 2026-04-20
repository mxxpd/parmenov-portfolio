<script setup lang="ts">
import versoCardCoverUrl from '~/assets/images/services/verso/verso-card-cover.png'

useSeoMeta({
  title: 'Сервисы — Парменов',
  ogTitle: 'Сервисы — Парменов',
  ogLocale: 'ru_RU',
})

const tools = [
  {
    slug: 'verso',
    category: 'Инструменты',
    title: 'Verso',
    description: 'Десктопный epub ридер с AI переводом на русский.',
    meta: 'Personal Project · 2026',
    coverImage: versoCardCoverUrl,
    coverFrom: '#1C1B2E',
    coverTo: '#2E2147',
  },
]
</script>

<template>
  <div class="services-page">
    <h1 class="services-page__title">Сервисы</h1>
    <div class="cases-grid">
      <ServicesCard v-for="tool in tools" :key="tool.slug" v-bind="tool" />
    </div>
  </div>
</template>
