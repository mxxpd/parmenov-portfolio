<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();
const { cases, toCaseCard } = useCases();
const relatedCases = ref<ReturnType<typeof toCaseCard>[]>([]);

const shifts = [
  {
    n: "01",
    title: "От UX/UI к продуктовой логике",
    text: "Начал задавать вопрос «зачем эта механика существует», а не «как её оформить».",
  },
  {
    n: "02",
    title: "Поведенческая психология",
    text: "Понял, как формируются привычки и что вызывает повторное действие.",
  },
  {
    n: "03",
    title: "Решения, меняющие поведение",
    text: "Не просто интерфейс — структура, которая влияет на то, как пользователь принимает решения.",
  },
];

const shuffleCases = <T,>(items: T[]) => {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const currentItem = result[index];
    const randomItem = result[randomIndex];

    if (currentItem === undefined || randomItem === undefined) continue;

    result[index] = randomItem;
    result[randomIndex] = currentItem;
  }

  return result;
};

onMounted(() => {
  relatedCases.value = shuffleCases(
    cases.filter((item) => item.slug !== "your-challenge"),
  )
    .slice(0, 3)
    .map(toCaseCard);
});
</script>

<template>
  <section
    :ref="bind"
    class="yc-conclusions section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Выводы</AppTag>
      <h2 class="heading">Этот проект изменил то, как я думаю о дизайне</h2>
    </div>

    <p class="body">
      Я начинал как UX/UI дизайнер — строил флоу, рисовал экраны. К концу думал
      иначе: что влияет на поведение пользователя, и почему он возвращается или
      уходит.
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

  <footer class="yc-conclusions-footer related-cases">
    <div class="related-cases__header">
      <AppTag size="s" appearance="tonal">Смотреть дальше</AppTag>
      <h2 class="related-cases__title">Другие кейсы</h2>
    </div>

    <div class="related-cases__grid">
      <CasesCard v-for="item in relatedCases" :key="item.slug" v-bind="item" />
    </div>
  </footer>
</template>
