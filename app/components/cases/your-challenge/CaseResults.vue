<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const rows = [
  { label: 'Новые пользователи', before: '150 за 5 месяцев', after: '2 000 за 2 месяца', strong: true },
  { label: 'Конверсия в 1-й матч', before: '—', after: '~40%' },
  { label: 'Конверсия в повтор', before: '—', after: '~10%' },
  { label: 'Макс. активность', before: '—', after: '300 матчей/мес' },
  { label: 'Частота возврата', before: '—', after: 'ежедневно' },
]

const reasons = [
  { pct: '90%', label: 'Зарабатывать на скилле' },
  { pct: '8%', label: 'Тестировали продукт' },
  { pct: '2%', label: 'Азарт' },
]
</script>

<template>
  <section class="section" :class="{ 'is-visible': isVisible }" :ref="bind">
    <p class="label">Результаты</p>
    <h2 class="heading">Результаты превзошли ожидания в 10 раз</h2>

    <p class="body">
      3 стримера с аудиторией около 100 человек каждый привели примерно 2 000 пользователей за 2 месяца.
    </p>

    <div class="table-wrap" role="region" aria-label="Результаты до и после пивота">
      <table class="table">
        <thead>
          <tr>
            <th class="th"></th>
            <th class="th">До пивота</th>
            <th class="th th--after">После пивота</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.label">
            <td class="td td--label">{{ row.label }}</td>
            <td class="td td--before">{{ row.before }}</td>
            <td class="td td--after" :class="{ 'td--after-strong': row.strong }">{{ row.after }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="reasons-block">
      <p class="sub-label">Почему платили</p>
      <div class="reasons">
        <div v-for="r in reasons" :key="r.pct" class="reason">
          <p class="reason__pct">{{ r.pct }}</p>
          <p class="reason__label">{{ r.label }}</p>
        </div>
      </div>
      <p class="reasons__note">
        Аудитория пришла за монетизацией скилла, а не за азартом — это определяло все продуктовые решения.
      </p>
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
.body {
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.table-wrap {
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-subtle);
}
.table { width: 100%; border-collapse: collapse; font-size: var(--text-body-sm); }
.th {
  text-align: left;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--color-bg-surface-muted);
  border-bottom: 1px solid var(--color-border-subtle);
}
.th--after { color: var(--color-brand-primary); background: var(--color-bg-accent-soft); }
.td {
  padding: var(--spacing-3) var(--spacing-4);
  border-bottom: 1px solid var(--color-border-subtle);
}
.table tr:last-child .td { border-bottom: none; }
.td--label  { font-weight: var(--font-weight-body-strong); color: var(--color-text-primary); }
.td--before { color: var(--color-text-tertiary); }
.td--after  { color: var(--color-brand-primary); font-weight: var(--font-weight-body-strong); background: var(--color-bg-accent-soft); }
.td--after-strong { font-size: var(--text-body); font-weight: var(--font-weight-heading); }

.reasons-block {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-subtle);
  padding: var(--spacing-8);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}
.sub-label {
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.reasons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4);
}
.reason {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
.reason__pct {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: var(--font-weight-display);
  line-height: 1;
  color: var(--color-brand-primary);
}
.reason__label {
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body);
}
.reasons__note {
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
  font-style: italic;
  border-top: 1px solid var(--color-border-subtle);
  padding-top: var(--spacing-4);
}

@media (max-width: 640px) {
  .reasons { grid-template-columns: 1fr; }
}
</style>
