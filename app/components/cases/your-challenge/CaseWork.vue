<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const workTabs = [
  { id: "interface", label: "Новый интерфейс", placeholderLabel: "Скриншот: новый интерфейс" },
  { id: "design-system", label: "Дизайн-система", placeholderLabel: "Скриншот: дизайн-система" },
];

const activeWorkTabId = ref("interface");
const activeWorkTab = computed(() => workTabs.find(t => t.id === activeWorkTabId.value)!);

const items = [
  {
    n: "01",
    title: "Конкурентный анализ",
    text: "Изучил рынок, зафиксировал что работает и что отталкивает пользователей.",
    hasSlider: false,
    metric: null,
  },
  {
    n: "02",
    title: "Инициировал пивот",
    text: "Сформировал документ концепций и смыслов по стратегическому развитию продукта.",
    hasSlider: false,
    metric: null,
  },
  {
    n: "03",
    title: "User flows и архитектура",
    text: "Спроектировал сценарии: онбординг, поиск матча, игровой цикл.",
    hasSlider: false,
    metric: null,
  },
  {
    n: "04",
    title: "Визуальный дизайн",
    text: "Отрисовал веб-версию продукта и выстроил дизайн-систему.",
    hasSlider: true,
    metric: null,
  },
  {
    n: "05",
    title: "Доведение до прода",
    text: "Совместно с разработкой привёл дизайн-систему к компонентной базе.",
    hasSlider: false,
    metric: { from: "12 мес", to: "3 мес", label: "скорость разработки новой версии" },
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
      <div
        v-for="item in items"
        :key="item.n"
        class="card"
        :class="{
          'card--featured': item.hasSlider,
          'card--metric': item.metric,
        }"
      >
        <div class="card__body">
          <span class="card__n">{{ item.n }}</span>
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__text">{{ item.text }}</p>
        </div>

        <div v-if="item.hasSlider" class="card__slider-wrap">
          <div class="segmented" role="group" aria-label="Раздел материалов">
            <button
              v-for="tab in workTabs"
              :key="tab.id"
              class="segmented__btn"
              :class="{ 'segmented__btn--active': activeWorkTabId === tab.id }"
              type="button"
              :aria-pressed="activeWorkTabId === tab.id"
              @click="activeWorkTabId = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
          <AppImageSlider
            :slides="[]"
            :placeholder-label="activeWorkTab.placeholderLabel"
            aria-label="Материалы: визуальный дизайн"
          />
        </div>

        <div v-if="item.metric" class="card__metric">
          <p class="card__metric-value">
            {{ item.metric.from }}<span class="card__metric-arrow">→</span>{{ item.metric.to }}
          </p>
          <p class="card__metric-label">{{ item.metric.label }}</p>
        </div>
      </div>
    </div>

    <blockquote class="insight">
      <AppTag size="s" appearance="tonal">Ключевой инсайт</AppTag>
      <p class="insight__text">
        Пользователь приходит не «поиграть», а «доказать себе, что он лучше — и
        заработать на этом».
      </p>
    </blockquote>
  </section>
</template>
