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
</script>

<template>
  <section :ref="bind" class="section" :class="{ 'is-visible': isVisible }">
    <p class="label">Проблема</p>
    <h2 class="heading">Что не работало и почему</h2>

    <p class="body">
      Изначально продукт строился вокруг модели пользовательских челленджей: игрок сам придумывает
      соревнование, сам его организует, находит соперника и проводит игру. На бумаге — логично. На
      практике — механика требовала слишком много до получения первой ценности.
    </p>

    <figure class="card" aria-label="Шаги старого флоу">
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
        Пользователь сам создаёт ценность — и уходит до того, как её получает.
        <strong>4 из 6 шагов — это работа, а не удовольствие.</strong>
      </figcaption>
    </figure>

    <div class="data-block">
      <h3 class="subheading">Данные подтверждали диагноз</h3>
      <ul class="list">
        <li>Пользователи появлялись только во время рекламных кампаний</li>
        <li>После окончания рекламы активность исчезала полностью</li>
        <li>Никаких признаков органического роста</li>
        <li>За 5 месяцев — 150 зарегистрированных пользователей</li>
      </ul>
    </div>

    <figure class="card" aria-label="Схематичный график активности: рост только во время рекламных кампаний">
      <svg class="chart" viewBox="0 0 600 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <line x1="0" y1="40"  x2="600" y2="40"  class="chart__grid" />
        <line x1="0" y1="90"  x2="600" y2="90"  class="chart__grid" />
        <line x1="0" y1="140" x2="600" y2="140" class="chart__grid" />
        <path
class="chart__fill"
          d="M0,148 C40,148 70,148 95,148 C120,148 148,72 178,38 C208,4 228,4 248,36
             C268,68 298,145 350,148 C385,148 405,148 425,148
             C445,148 465,44 492,18 C519,-8 530,-4 548,22
             C566,48 578,142 600,148 L600,148 L0,148 Z"
        />
        <path
class="chart__line" fill="none"
          d="M0,148 C40,148 70,148 95,148 C120,148 148,72 178,38 C208,4 228,4 248,36
             C268,68 298,145 350,148 C385,148 405,148 425,148
             C445,148 465,44 492,18 C519,-8 530,-4 548,22
             C566,48 578,142 600,148"
        />
        <text x="213" y="22" class="chart__tag" text-anchor="middle">Рекламная кампания</text>
        <text x="510" y="10" class="chart__tag" text-anchor="middle">Рекламная кампания</text>
        <line x1="0" y1="148" x2="600" y2="148" class="chart__axis" />
      </svg>
      <figcaption class="card__caption">
        Рост только во время рекламы — органики нет
      </figcaption>
    </figure>

    <p class="body body--strong">
      Вывод: продукту не хватало самостоятельной ценности. Нужен был структурный пивот, а не
      редизайн экранов.
    </p>
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
.subheading {
  font-size: var(--text-h4);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3);
}
.body {
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}
.body--strong {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-body-strong);
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
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-text-tertiary);
}
.data-block {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
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
.card__caption {
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
  font-style: italic;
  text-align: center;
}

.flow {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--spacing-2);
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
  content: '→';
  position: absolute;
  right: -10px;
  top: 10px;
  font-size: 13px;
  color: var(--color-text-tertiary);
}

.step__circle {
  width: 32px;
  height: 32px;
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
  font-size: 11px;
  line-height: 1.4;
  color: var(--color-text-secondary);
}
.step--work .step__text { color: var(--color-error-text); }

.chart { width: 100%; height: auto; overflow: visible; }
.chart__grid { stroke: var(--color-border-subtle); stroke-width: 1; }
.chart__axis { stroke: var(--color-border-default); stroke-width: 1; }
.chart__fill { fill: var(--color-bg-accent-soft); }
.chart__line {
  stroke: var(--color-brand-primary);
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.chart__tag {
  fill: var(--color-text-accent);
  font-size: 11px;
  font-family: var(--font-sans);
  font-weight: 700;
}

@media (max-width: 640px) {
  .flow { grid-template-columns: repeat(3, 1fr); }
  .step:nth-child(3)::after { display: none; }
}
</style>
