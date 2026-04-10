<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const items = [
  { n: '01', title: 'Конкурентный анализ', text: 'Нашёл 3 рабочие модели у конкурентов, зафиксировал точки трения — что работает, что отталкивает пользователей.' },
  { n: '02', title: 'Инициировал пивот', text: 'Предложил механику быстрых матчей. Обосновал через поведенческую логику и конкурентный ландшафт.' },
  { n: '03', title: 'User flows и архитектура', text: 'Спроектировал все сценарии: онбординг, поиск матча, игровой цикл, вывод средств, спорные ситуации.' },
  { n: '04', title: 'CJM и JTBD', text: 'Зафиксировал точки трения и мотивационные крюки на пути от первого визита до повторной игры.' },
  { n: '05', title: 'Визуальный дизайн', text: 'Отрисовал весь UI продукта — от первых wireframes до финального дизайна в высокой детализации.' },
  { n: '06', title: 'Бренд-стратегия', text: 'Совместно с маркетингом формировал позиционирование и визуальный голос продукта.' },
]
</script>

<template>
  <section class="section" :class="{ 'is-visible': isVisible }" :ref="bind">
    <p class="label">Что я сделал</p>
    <h2 class="heading">Этапы работы</h2>

    <div class="grid">
      <div v-for="item in items" :key="item.n" class="card">
        <span class="card__n">{{ item.n }}</span>
        <h3 class="card__title">{{ item.title }}</h3>
        <p class="card__text">{{ item.text }}</p>
      </div>
    </div>

    <blockquote class="insight">
      <p class="insight__label">Ключевой инсайт</p>
      <p class="insight__text">
        Пользователь приходит не «поиграть», а «доказать себе, что он лучше — и заработать на этом».
      </p>
    </blockquote>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.section.is-visible { opacity: 1; transform: translateY(0); }

.label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.heading {
  font-size: var(--text-h1);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
  margin-top: calc(-1 * var(--spacing-3));
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3);
}

.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-subtle);
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.card__n {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  letter-spacing: 0.04em;
}
.card__title {
  font-size: var(--text-body);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-primary);
  line-height: var(--line-height-heading);
}
.card__text {
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.insight {
  background: var(--color-bg-accent-soft);
  border: 1px solid var(--color-border-accent);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.insight__label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.insight__text {
  font-size: var(--text-h3);
  font-weight: var(--font-weight-body-strong);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-primary);
}

@media (max-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
  .insight__text { font-size: var(--text-body); }
}
</style>
