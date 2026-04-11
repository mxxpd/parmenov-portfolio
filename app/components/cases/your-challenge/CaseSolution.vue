<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const oldFlow = [
  { n: 1, text: "Зарегистрироваться", isWork: false },
  { n: 2, text: "Придумать и создать челлендж", isWork: true },
  { n: 3, text: "Дождаться, пока кто-то примет вызов", isWork: true },
  { n: 4, text: "Самому провести игру", isWork: true },
  { n: 5, text: "Загрузить результаты", isWork: true },
  { n: 6, text: "Согласовать победителя / пройти модерацию", isWork: false },
];

const newFlow = [
  { n: 1, text: "Выбрал игру" },
  { n: 2, text: "Выбрал взнос" },
  { n: 3, text: "Нажал «найти матч»" },
  { n: 4, text: "Сыграл" },
  { n: 5, text: "Получил деньги" },
];

const mechanics = [
  {
    label: "Время до первой ценности",
    old1: "Долго",
    old2: "Очень долго",
    good: "Быстро",
  },
  {
    label: "Зависимость от других",
    old1: "Высокая",
    old2: "Высокая",
    good: "Низкая",
  },
  {
    label: "Сложность реализации",
    old1: "Средняя",
    old2: "Высокая",
    good: "Низкая",
  },
  { label: "Повторяемость", old1: "Низкая", old2: "Низкая", good: "Высокая" },
];
</script>

<template>
  <section
    :ref="bind"
    class="yc-solution section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Гипотеза и решение</AppTag>
      <h2 class="heading">Как я пришёл к идее быстрых матчей</h2>
    </div>

    <blockquote class="quote">
      Пользователь не должен «работать» — продукт должен развлекать. Если убрать
      всё, что не создаёт ценность, и оставить только путь к дофамину —
      удержание вырастет.
    </blockquote>

    <figure class="card" aria-label="Сравнение старого и нового флоу">
      <div class="compare">
        <div class="compare__col">
          <AppTag size="s" variant="error" appearance="tonal"
            >Старый флоу — 6 шагов</AppTag
          >
          <div class="flow-list">
            <div
              v-for="s in oldFlow"
              :key="s.n"
              class="step"
              :class="{ 'step--work': s.isWork }"
            >
              <span class="step__n">{{ s.n }}</span>
              <span class="step__text">{{ s.text }}</span>
              <AppTag
                v-if="s.isWork"
                class="step__tag"
                size="s"
                variant="error"
                appearance="tonal"
                >работа</AppTag
              >
            </div>
          </div>
        </div>
        <div class="compare__col">
          <AppTag size="s" variant="success" appearance="tonal"
            >Новый флоу — 5 шагов</AppTag
          >
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
      Мы рассмотрели альтернативу — турниры — и отклонили её: сложная логистика,
      риск не набрать участников, длинный цикл до результата. Быстрые 1v1-матчи
      давали мгновенный цикл и возможность играть в любое время.
    </p>

    <figure class="materials-card">
      <div class="materials-card__header">
        <AppTag size="s" appearance="tonal">Материалы решения</AppTag>
        <p>
          Сюда можно положить фрагменты user flow, схему матчмейкинга или первые
          wireframes нового сценария.
        </p>
      </div>
      <div class="materials-card__grid">
        <PlaceholderImage
          label="User flow — онбординг и поиск матча"
          :height="240"
        />
        <PlaceholderImage label="Схема: быстрый 1v1 матч" :height="240" />
      </div>
    </figure>

    <div class="table-wrap" role="region" aria-label="Сравнение механик">
      <table class="table">
        <thead>
          <tr>
            <th class="th th--label" />
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
