<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const roles = [
  'UX-архитектура',
  'Визуальный дизайн',
  'Продуктовая стратегия',
  'Конкурентный анализ',
]
</script>

<template>
  <section :ref="bind" class="section" :class="{ 'is-visible': isVisible }">
    <div class="content">
      <div class="text-col">
        <p class="label">Контекст</p>
        <p class="body">
          Я пришёл в проект на стадии идеи и проработал в нём 3 года — с первого дня до закрытия. Команда из 18 человек:
          frontend, backend, marketing, devops, тестировщики, PM и PO.
        </p>
        <p class="body">
          Моя зона ответственности — весь UX продукта: user flows, CJM, JTBD-анализ, информационная архитектура,
          визуальный дизайн. Помимо этого участвовал в стратегических сессиях и инициировал ключевой поворот в
          направлении продукта.
        </p>
      </div>

      <aside class="aside">
        <div class="card card--role">
          <p class="card__title">Моя роль</p>

          <ul class="roles">
            <li v-for="role in roles" :key="role" class="role">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7l3 3 6-6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ role }}
            </li>
          </ul>

          <div class="team-mini">
            <p class="team-mini__label">Команда</p>
            <p class="team-num">18</p>
            <p class="team-sub">человек · 3 года</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: clamp(24px, 3vw, 48px);
  align-items: start;
}

.text-col {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  max-width: 72ch;
}

.label {
  margin-bottom: var(--spacing-2);
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.body {
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.aside {
  position: relative;
}

.card {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  background: var(--color-bg-surface);
  box-shadow: var(--shadow-subtle);
}

.card--role {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--color-brand-primary) 8%, transparent), transparent 38%),
    var(--color-bg-surface);
}

.card__title {
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.roles {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.role {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  font-size: var(--text-body-sm);
  color: var(--color-text-primary);
}

.role svg {
  color: var(--color-brand-primary);
  flex-shrink: 0;
}

.team-mini {
  padding-top: var(--spacing-5);
  border-top: 1px solid color-mix(in srgb, var(--color-border-subtle) 78%, transparent);
}

.team-mini__label {
  margin-bottom: var(--spacing-3);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.team-num {
  font-size: var(--text-display);
  font-weight: var(--font-weight-display);
  line-height: 1;
  color: var(--color-brand-primary);
}

.team-sub {
  margin-top: var(--spacing-2);
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }

  .text-col {
    max-width: 100%;
  }
}
</style>
