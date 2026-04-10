<script setup lang="ts">
useSeoMeta({
  title: 'Кейсы — Парменов',
  description: 'Проекты в сфере продуктового дизайна: iGaming, AdTech, HoReCa, AI.',
  ogTitle: 'Кейсы — Парменов',
  ogLocale: 'ru_RU',
})

const { cases } = useCases()
const [hero, ...rest] = cases
</script>

<template>
  <div class="cases-page">
    <h1 class="cases-title">Кейсы</h1>
    <CasesHero v-bind="hero" />
    <div class="cases-grid">
      <CasesCard v-for="item in rest" :key="item.slug" v-bind="item" />
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.cases-page {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.cases-title {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-display);
  color: var(--color-text-primary);
  animation: fade-up 0.5s ease both;
}

:deep(.case-hero) {
  animation: fade-up 0.5s ease 0.08s both;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4);
  animation: fade-up 0.5s ease 0.18s both;
}

@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
