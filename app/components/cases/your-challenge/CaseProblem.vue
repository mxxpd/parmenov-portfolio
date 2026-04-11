<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const steps = [
  { n: 1, text: 'Зарегистрироваться', isWork: false },
  { n: 2, text: 'Придумать и создать челлендж', isWork: true },
  { n: 3, text: 'Дождаться, пока кто-то примет вызов', isWork: true },
  { n: 4, text: 'Самому провести игру', isWork: true },
  { n: 5, text: 'Загрузить результаты', isWork: true },
  { n: 6, text: 'Согласовать победителя или пройти модерацию', isWork: false },
]

const signals = [
  { value: '2', label: 'рекламные кампании дали всплеск' },
  { value: '0', label: 'органических волн после кампаний' },
  { value: '150', label: 'регистраций за 5 месяцев' },
]
</script>

<template>
  <section :ref="bind" class="section" :class="{ 'is-visible': isVisible }">
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Проблема</AppTag>
      <h2 class="heading">Что не работало и почему</h2>
    </div>

    <p class="body">
      Изначально продукт строился вокруг пользовательских челленджей: игрок сам придумывает соревнование,
      сам его организует, находит соперника и проводит игру. На бумаге это выглядело логично. На практике
      механика требовала слишком много действий до первой ценности.
    </p>

    <figure class="media-card">
      <div class="media-card__copy">
        <AppTag size="s" appearance="tonal">Как выглядела платформа</AppTag>
        <p>
          Место под скриншоты старого продукта: главный экран, карточка челленджа или сценарий создания соревнования.
        </p>
      </div>
      <PlaceholderImage label="Медиа: как выглядела платформа до пивота" :height="320" />
    </figure>

    <figure class="card flow-card" aria-label="Шаги старого пользовательского флоу">
      <div class="flow">
        <div
          v-for="step in steps"
          :key="step.n"
          class="step"
          :class="{ 'step--work': step.isWork }"
        >
          <div class="step__circle">{{ step.n }}</div>
          <p class="step__text">{{ step.text }}</p>
        </div>
      </div>
      <figcaption class="card__caption">
        Пользователь сам создавал ценность и часто уходил до того, как ее получал.
        <strong>4 из 6 шагов были работой, а не удовольствием.</strong>
      </figcaption>
    </figure>

    <div class="data-block">
      <div class="data-block__header">
        <AppTag size="s" appearance="tonal">Данные</AppTag>
        <h3 class="subheading">Поведение подтверждало диагноз</h3>
      </div>
      <ul class="list">
        <li>Пользователи появлялись только во время рекламных кампаний.</li>
        <li>После окончания рекламы активность почти сразу исчезала.</li>
        <li>Признаков самостоятельного органического роста не было.</li>
      </ul>
    </div>

    <figure class="activity-card" aria-label="График активности: рост только во время рекламных кампаний">
      <div class="activity-card__header">
        <h3 class="activity-card__title">Активность держалась только на рекламе</h3>
      </div>

      <div class="activity-card__stats">
        <div v-for="signal in signals" :key="signal.label" class="activity-stat">
          <strong>{{ signal.value }}</strong>
          <span>{{ signal.label }}</span>
        </div>
      </div>

      <div class="chart-shell">
        <CasesYourChallengeActivityChart />
      </div>

      <figcaption class="activity-card__caption">
        Вывод: продукту не хватало самостоятельной ценности. Нужен был структурный пивот, а не редизайн экранов.
      </figcaption>
    </figure>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: clamp(var(--spacing-8), 3vw, var(--spacing-12));
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section__header,
.data-block__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3);
}

.heading {
  font-size: var(--text-h1);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
}

.subheading {
  font-size: var(--text-h4);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-primary);
}

.body {
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.list li {
  font-size: var(--text-body);
  line-height: var(--line-height-body);
  color: var(--color-text-secondary);
  padding-left: var(--spacing-6);
  position: relative;
}

.list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.72em;
  width: 8px;
  height: 8px;
  border-radius: var(--radius-pill);
  background: var(--color-brand-primary);
  opacity: 0.7;
}

.data-block {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding-block: var(--spacing-2);
}

.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-subtle);
  padding: var(--spacing-8);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.flow-card {
  padding: clamp(var(--spacing-8), 4vw, var(--spacing-12));
}

.media-card {
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) minmax(0, 0.62fr);
  gap: var(--spacing-6);
  align-items: stretch;
  margin: 0;
  padding: var(--spacing-6);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 10% 0%, color-mix(in srgb, var(--color-brand-primary) 8%, transparent), transparent 34%),
    var(--color-bg-surface);
  box-shadow: var(--shadow-subtle);
}

.media-card__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-6);
  padding: var(--spacing-4);
}

.media-card__copy p {
  color: var(--color-text-secondary);
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body-relaxed);
}

.card__caption {
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
  font-style: italic;
  text-align: center;
}

.card__caption strong {
  color: var(--color-text-primary);
  font-style: normal;
}

.flow {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: var(--spacing-4);
  position: relative;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  text-align: center;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 15px;
  right: calc(-1 * var(--spacing-3));
  width: var(--spacing-3);
  height: 1px;
  background: var(--color-border-default);
}

.step__circle {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-pill);
  background: var(--color-bg-surface-muted);
  border: 1.5px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-secondary);
  flex-shrink: 0;
}

.step--work .step__circle {
  background: var(--color-error-bg);
  border-color: var(--color-error-border);
  color: var(--color-error-text);
}

.step__text {
  font-size: clamp(12px, 1vw, 15px);
  line-height: 1.45;
  color: var(--color-text-secondary);
}

.step--work .step__text {
  color: var(--color-error-text);
}

.activity-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin: 0;
  padding: var(--spacing-8);
  border: 1px solid color-mix(in srgb, var(--color-border-accent) 70%, transparent);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 18% 0%, color-mix(in srgb, var(--color-brand-primary) 18%, transparent), transparent 32%),
    linear-gradient(145deg, var(--color-bg-surface), color-mix(in srgb, var(--color-bg-accent-soft) 46%, var(--color-bg-surface)));
  box-shadow: var(--shadow-surface);
}

.activity-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(color-mix(in srgb, var(--color-border-subtle) 34%, transparent) 1px, transparent 1px);
  background-size: 100% 42px;
  mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 78%, transparent);
  opacity: 0.42;
}

.activity-card__header,
.activity-card__stats,
.chart-shell,
.activity-card__caption {
  position: relative;
  z-index: 1;
}

.activity-card__title {
  font-size: var(--text-h3);
  font-weight: var(--font-weight-display);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
}

.activity-card__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3);
}

.activity-stat {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  padding: var(--spacing-4);
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-bg-surface) 80%, transparent);
  backdrop-filter: blur(14px);
}

.activity-stat strong {
  font-size: var(--text-h3);
  line-height: 1;
  color: var(--color-brand-primary);
}

.activity-stat span {
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body);
  color: var(--color-text-secondary);
}

.chart-shell {
  overflow: hidden;
  min-height: 320px;
  padding: var(--spacing-2) var(--spacing-2) 0;
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 74%, transparent);
  border-radius: calc(var(--radius-xl) + var(--spacing-2));
  background:
    radial-gradient(circle at 24% 6%, color-mix(in srgb, var(--color-brand-primary) 12%, transparent), transparent 28%),
    linear-gradient(135deg, color-mix(in srgb, var(--color-bg-surface) 94%, var(--color-bg-accent-soft)), var(--color-bg-surface-muted));
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, var(--color-text-inverse) 16%, transparent),
    0 24px 80px color-mix(in srgb, var(--color-text-primary) 12%, transparent);
}

.activity-card__caption {
  max-width: 760px;
  color: var(--color-text-primary);
  font-size: var(--text-body);
  font-weight: var(--font-weight-body-strong);
  line-height: var(--line-height-body-relaxed);
}

@media (max-width: 760px) {
  .media-card {
    grid-template-columns: 1fr;
  }

  .flow {
    grid-template-columns: repeat(3, 1fr);
  }

  .step:nth-child(3)::after {
    display: none;
  }

  .activity-card__header,
  .activity-card__stats {
    grid-template-columns: 1fr;
  }

  .activity-card__header {
    flex-direction: column;
  }
}

@media (max-width: 540px) {
  .card,
  .activity-card {
    padding: var(--spacing-6);
  }

  .flow {
    grid-template-columns: 1fr;
  }

  .step {
    flex-direction: row;
    text-align: left;
  }

  .step::after {
    display: none;
  }

  .chart-shell {
    min-height: 260px;
  }
}
</style>
