<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const items = [
  {
    n: "01",
    title: "Конкурентный анализ",
    text: "Нашёл 3 рабочие модели у конкурентов, зафиксировал точки трения — что работает, что отталкивает пользователей.",
  },
  {
    n: "02",
    title: "Инициировал пивот",
    text: "Предложил механику быстрых матчей. Обосновал через поведенческую логику и конкурентный ландшафт.",
  },
  {
    n: "03",
    title: "User flows и архитектура",
    text: "Спроектировал все сценарии: онбординг, поиск матча, игровой цикл, вывод средств, спорные ситуации.",
  },
  {
    n: "04",
    title: "CJM и JTBD",
    text: "Зафиксировал точки трения и мотивационные крюки на пути от первого визита до повторной игры.",
  },
  {
    n: "05",
    title: "Визуальный дизайн",
    text: "Отрисовал весь UI продукта — от первых wireframes до финального дизайна в высокой детализации.",
  },
  {
    n: "06",
    title: "Бренд-стратегия",
    text: "Совместно с маркетингом формировал позиционирование и визуальный голос продукта.",
  },
];
</script>

<template>
  <section
    :ref="bind"
    class="yc-work section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Что я сделал</AppTag>
      <h2 class="heading">Этапы работы</h2>
    </div>

    <div class="grid">
      <div v-for="item in items" :key="item.n" class="card">
        <span class="card__n">{{ item.n }}</span>
        <h3 class="card__title">{{ item.title }}</h3>
        <p class="card__text">{{ item.text }}</p>
      </div>
    </div>

    <figure class="work-media">
      <div class="work-media__header">
        <AppTag size="s" appearance="tonal">Рабочие материалы</AppTag>
        <p>
          Фрагменты CJM, JTBD или UI-скриншоты лучше смотрятся здесь: они
          раскрывают этапы работы, а не живут отдельным хвостом.
        </p>
      </div>
      <div class="work-media__grid">
        <PlaceholderImage
          label="CJM — путь пользователя, фрагмент"
          :height="260"
        />
        <PlaceholderImage label="Скриншот: главный экран" :height="260" />
        <PlaceholderImage label="Скриншот: поиск матча" :height="260" />
      </div>
    </figure>

    <blockquote class="insight">
      <AppTag size="s" appearance="tonal">Ключевой инсайт</AppTag>
      <p class="insight__text">
        Пользователь приходит не «поиграть», а «доказать себе, что он лучше — и
        заработать на этом».
      </p>
    </blockquote>
  </section>
</template>
