<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const shifts = [
  {
    n: '1',
    title: 'От UX/UI к продуктовой логике',
    text: 'Начал задавать вопрос «зачем эта механика существует», а не «как её оформить».',
  },
  {
    n: '2',
    title: 'Поведенческая психология',
    text: 'Понял, как формируются привычки и что вызывает повторное действие.',
  },
  {
    n: '3',
    title: 'Решения, меняющие поведение',
    text: 'Не просто интерфейс — структура, которая влияет на то, как пользователь принимает решения.',
  },
]
</script>

<template>
  <section :ref="bind" class="section" :class="{ 'is-visible': isVisible }">
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Выводы</AppTag>
      <h2 class="heading">Этот проект изменил то, как я думаю о дизайне</h2>
    </div>

    <p class="body">
      Я начинал как UX/UI дизайнер — строил флоу, рисовал экраны. К концу думал иначе: что влияет
      на поведение пользователя, и почему он возвращается или уходит.
    </p>

    <div class="shifts">
      <div v-for="s in shifts" :key="s.n" class="shift">
        <span class="shift__n">{{ s.n }}</span>
        <div>
          <h3 class="shift__title">{{ s.title }}</h3>
          <p class="shift__text">{{ s.text }}</p>
        </div>
      </div>
    </div>

    <p class="footnote">Проект закрыт в связи с прекращением финансирования.</p>
  </section>

  <footer class="case-footer">
    <AppButton label="← Все кейсы" variant="secondary" href="/cases" />
  </footer>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.section.is-visible { opacity: 1; transform: translateY(0); }

.section__header {
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
.body {
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.shifts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.shift {
  display: flex;
  gap: var(--spacing-6);
  align-items: flex-start;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-subtle);
  padding: var(--spacing-6);
}
.shift__n {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-display);
  line-height: 1;
  color: var(--color-brand-primary);
  opacity: 0.3;
  flex-shrink: 0;
  min-width: 28px;
}
.shift__title {
  font-size: var(--text-body);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}
.shift__text {
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-secondary);
}

.footnote {
  font-size: var(--text-body-sm);
  color: var(--color-text-tertiary);
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--color-border-subtle);
}

.case-footer {
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--color-border-subtle);
}
</style>
