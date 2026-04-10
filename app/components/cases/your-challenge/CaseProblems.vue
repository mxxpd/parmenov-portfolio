<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const improvements = [
  'Система рейтингов и лиг — матчинг по уровню',
  'Лидерборды и фракции — социальное сравнение',
  'Социальные механики: друзья, сообщения',
  'Ограничение матчмейкинга по рейтингу на старте',
]
</script>

<template>
  <section class="section" :class="{ 'is-visible': isVisible }" :ref="bind">
    <p class="label">Проблемы и ограничения</p>
    <h2 class="heading">Рост обнажил узкие места</h2>

    <div class="issues">
      <div class="issue">
        <h3 class="issue__title">Матчмейкинг без учёта скилла</h3>
        <p class="issue__text">
          Слабые игроки попадали к сильным и уходили. Среднее — 3 матча на пользователя.
          Причина не в интерфейсе, а в отсутствии рейтинговой системы.
        </p>
      </div>
      <div class="issue">
        <h3 class="issue__title">Бонусхантеры</h3>
        <p class="issue__text">
          Часть пользователей создавала несколько аккаунтов для получения бонусов.
          Потребовалась дополнительная верификация.
        </p>
      </div>
    </div>

    <figure class="card" aria-label="Схема проблемного цикла: мало пользователей ведёт к плохому матчмейкингу, плохому опыту и оттоку">
      <p class="card__title">Проблемный цикл</p>
      <div class="cycle" aria-hidden="true">
        <div class="cycle__node cycle__node--accent">
          <span class="cycle__n">1</span>
          <span>Мало пользователей</span>
        </div>
        <svg class="arrow arrow--h" viewBox="0 0 40 14" fill="none">
          <path d="M2 7h32M27 2l7 5-7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="cycle__node">
          <span class="cycle__n">2</span>
          <span>Плохой матчмейкинг</span>
        </div>

        <svg class="arrow arrow--v arrow--up" viewBox="0 0 14 40" fill="none">
          <path d="M7 38V6M2 11l5-7 5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="cycle__spacer" />
        <svg class="arrow arrow--v arrow--down" viewBox="0 0 14 40" fill="none">
          <path d="M7 2v32M2 29l5 7 5-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <div class="cycle__node">
          <span class="cycle__n">4</span>
          <span>Отток</span>
        </div>
        <svg class="arrow arrow--h arrow--left" viewBox="0 0 40 14" fill="none">
          <path d="M38 7H6M13 2L6 7l7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="cycle__node">
          <span class="cycle__n">3</span>
          <span>Плохой опыт</span>
        </div>
      </div>
    </figure>

    <div class="future">
      <p class="future__label">Что бы я сделал сейчас</p>
      <ul class="future__list">
        <li v-for="item in improvements" :key="item">{{ item }}</li>
      </ul>
    </div>
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

.issues {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3);
}
.issue {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-subtle);
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.issue__title {
  font-size: var(--text-body);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-primary);
}
.issue__text {
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
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
.card__title {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.cycle {
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  grid-template-rows: auto 40px auto;
  gap: var(--spacing-3);
  align-items: center;
  justify-items: center;
  max-width: 520px;
  margin: 0 auto;
}

.cycle__node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  text-align: center;
  background: var(--color-bg-surface-muted);
  border: 1.5px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4) var(--spacing-4);
  width: 100%;
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-body-strong);
  color: var(--color-text-primary);
}
.cycle__node--accent {
  background: var(--color-error-bg);
  border-color: var(--color-error-border);
  color: var(--color-error-text);
}
.cycle__n {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  opacity: 0.5;
}
.cycle__spacer { width: 40px; height: 40px; }

.arrow { color: var(--color-text-tertiary); }
.arrow--h { width: 40px; height: 14px; }
.arrow--v { width: 14px; height: 40px; }

.future {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}
.future__label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.future__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.future__list li {
  font-size: var(--text-body);
  line-height: var(--line-height-body);
  color: var(--color-text-secondary);
  padding-left: var(--spacing-6);
  position: relative;
}
.future__list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-text-accent);
}

@media (max-width: 640px) { .issues { grid-template-columns: 1fr; } }
</style>
