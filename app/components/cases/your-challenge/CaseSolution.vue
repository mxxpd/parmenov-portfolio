<script setup lang="ts">
import { useScrollReveal } from '../../../composables/useScrollReveal'

const { bind, isVisible } = useScrollReveal()

const oldFlow = [
  { n: 1, text: 'Зарегистрироваться', isWork: false },
  { n: 2, text: 'Придумать и создать челлендж', isWork: true },
  { n: 3, text: 'Дождаться, пока кто-то примет вызов', isWork: true },
  { n: 4, text: 'Самому провести игру', isWork: true },
  { n: 5, text: 'Загрузить результаты', isWork: true },
  { n: 6, text: 'Согласовать победителя / пройти модерацию', isWork: false },
]

const newFlow = [
  { n: 1, text: 'Выбрал игру' },
  { n: 2, text: 'Выбрал взнос' },
  { n: 3, text: 'Нажал «найти матч»' },
  { n: 4, text: 'Сыграл' },
  { n: 5, text: 'Получил деньги' },
]

const mechanics = [
  { label: 'Время до первой ценности', old1: 'Долго', old2: 'Очень долго', good: 'Быстро' },
  { label: 'Зависимость от других', old1: 'Высокая', old2: 'Высокая', good: 'Низкая' },
  { label: 'Сложность реализации', old1: 'Средняя', old2: 'Высокая', good: 'Низкая' },
  { label: 'Повторяемость', old1: 'Низкая', old2: 'Низкая', good: 'Высокая' },
]
</script>

<template>
  <section :ref="bind" class="section" :class="{ 'is-visible': isVisible }">
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Гипотеза и решение</AppTag>
      <h2 class="heading">Как я пришёл к идее быстрых матчей</h2>
    </div>

    <blockquote class="quote">
      Пользователь не должен «работать» — продукт должен развлекать. Если убрать всё, что не
      создаёт ценность, и оставить только путь к дофамину — удержание вырастет.
    </blockquote>

    <figure class="card" aria-label="Сравнение старого и нового флоу">
      <div class="compare">
        <div class="compare__col">
          <AppTag size="s" variant="error" appearance="tonal">Старый флоу — 6 шагов</AppTag>
          <div class="flow-list">
            <div v-for="s in oldFlow" :key="s.n" class="step" :class="{ 'step--work': s.isWork }">
              <span class="step__n">{{ s.n }}</span>
              <span class="step__text">{{ s.text }}</span>
              <AppTag v-if="s.isWork" class="step__tag" size="s" variant="error" appearance="tonal">работа</AppTag>
            </div>
          </div>
        </div>
        <div class="compare__col">
          <AppTag size="s" variant="success" appearance="tonal">Новый флоу — 5 шагов</AppTag>
          <div class="flow-list">
            <div v-for="s in newFlow" :key="s.n" class="step step--ok">
              <span class="step__n step__n--ok">{{ s.n }}</span>
              <span class="step__text step__text--ok">{{ s.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption class="card__caption">
        В старом флоу 4 из 6 шагов — это работа пользователя. В новом — 0.
      </figcaption>
    </figure>

    <p class="body">
      Мы рассмотрели альтернативу — турниры — и отклонили её: сложная логистика, риск не набрать
      участников, длинный цикл до результата. Быстрые 1v1-матчи давали мгновенный цикл и
      возможность играть в любое время.
    </p>

    <figure class="materials-card">
      <div class="materials-card__header">
        <AppTag size="s" appearance="tonal">Материалы решения</AppTag>
        <p>Сюда можно положить фрагменты user flow, схему матчмейкинга или первые wireframes нового сценария.</p>
      </div>
      <div class="materials-card__grid">
        <PlaceholderImage label="User flow — онбординг и поиск матча" :height="240" />
        <PlaceholderImage label="Схема: быстрый 1v1 матч" :height="240" />
      </div>
    </figure>

    <div class="table-wrap" role="region" aria-label="Сравнение механик">
      <table class="table">
        <thead>
          <tr>
            <th class="th th--label"/>
            <th class="th">Челленджи</th>
            <th class="th">Турниры</th>
            <th class="th th--win">Быстрые матчи</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in mechanics" :key="row.label">
            <td class="td td--label">{{ row.label }}</td>
            <td class="td td--bad">{{ row.old1 }}</td>
            <td class="td td--bad">{{ row.old2 }}</td>
            <td class="td td--win">{{ row.good }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
.quote {
  font-size: var(--text-h4);
  line-height: var(--line-height-body-relaxed);
  color: var(--color-text-primary);
  border-left: 3px solid var(--color-brand-primary);
  padding-left: var(--spacing-6);
  margin: 0;
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

.compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-6);
}
.compare__col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4);
  padding: var(--spacing-5);
  border: 1px solid color-mix(in srgb, var(--color-border-subtle) 78%, transparent);
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-bg-surface-muted) 36%, transparent);
}

.flow-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  width: 100%;
}

.step {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-bg-surface-muted) 78%, transparent);
}
.step--work {
  border: 1px solid color-mix(in srgb, var(--color-error-border) 60%, transparent);
  background: color-mix(in srgb, var(--color-error-bg) 56%, var(--color-bg-surface));
}
.step--ok {
  border: 1px solid color-mix(in srgb, var(--color-success-border) 44%, transparent);
  background: color-mix(in srgb, var(--color-success-bg) 34%, var(--color-bg-surface));
}

.step__n {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-pill);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: var(--font-weight-heading);
  color: var(--color-text-secondary);
  flex-shrink: 0;
}
.step--work .step__n { border-color: var(--color-error-border); color: var(--color-error-text); }
.step__n--ok { border-color: var(--color-success-border); color: var(--color-success-text); }

.step__text { font-size: var(--text-body-sm); color: var(--color-text-secondary); flex: 1; line-height: 1.4; }
.step--work .step__text { color: var(--color-error-text); }
.step__text--ok {
  color: var(--color-text-primary);
}

.step__tag {
  flex-shrink: 0;
}

.table-wrap {
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-subtle);
}

.materials-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  margin: 0;
  padding: var(--spacing-6);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  background: var(--color-bg-surface);
  box-shadow: var(--shadow-subtle);
}

.materials-card__header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--spacing-6);
}

.materials-card__header p {
  max-width: 56ch;
  color: var(--color-text-secondary);
  font-size: var(--text-body-sm);
  line-height: var(--line-height-body-relaxed);
}

.materials-card__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-3);
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
.th--label { width: 200px; }
.th--win { color: var(--color-success-text); background: var(--color-success-bg); }
.td {
  padding: var(--spacing-3) var(--spacing-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border-subtle);
}
.table tr:last-child .td { border-bottom: none; }
.td--label { font-weight: var(--font-weight-body-strong); color: var(--color-text-primary); }
.td--bad { color: var(--color-text-tertiary); }
.td--win { color: var(--color-success-text); font-weight: var(--font-weight-heading); background: var(--color-success-bg); }

@media (max-width: 640px) {
  .compare,
  .materials-card__grid {
    grid-template-columns: 1fr;
  }

  .materials-card__header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
