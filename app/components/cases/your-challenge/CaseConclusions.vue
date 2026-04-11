<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const shifts = [
  {
    n: "1",
    title: "От UX/UI к продуктовой логике",
    text: "Начал задавать вопрос «зачем эта механика существует», а не «как её оформить».",
  },
  {
    n: "2",
    title: "Поведенческая психология",
    text: "Понял, как формируются привычки и что вызывает повторное действие.",
  },
  {
    n: "3",
    title: "Решения, меняющие поведение",
    text: "Не просто интерфейс — структура, которая влияет на то, как пользователь принимает решения.",
  },
];
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

  <footer class="yc-conclusions-footer case-footer">
    <AppButton label="< Все кейсы" variant="secondary" href="/cases" />
  </footer>
</template>
