<script setup lang="ts">
useSeoMeta({
  title: "Кейсы — Парменов",
  description:
    "Проекты в сфере продуктового дизайна: iGaming, AdTech, HoReCa, AI Analytics.",
  ogTitle: "Кейсы — Парменов",
  ogLocale: "ru_RU",
});

const { cases, getFeaturedCase, toCaseCard } = useCases();
const featuredCase = getFeaturedCase();
const hero = featuredCase ? toCaseCard(featuredCase) : null;
const rest = cases
  .filter((item) => item.slug !== featuredCase?.slug)
  .map(toCaseCard);
</script>

<template>
  <div class="cases-page">
    <h1 class="cases-title">Кейсы</h1>
    <CasesHero v-if="hero" v-bind="hero" />
    <div class="cases-grid">
      <CasesCard v-for="item in rest" :key="item.slug" v-bind="item" />
    </div>
  </div>
</template>
