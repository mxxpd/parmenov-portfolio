<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const improvements = [
  "Система рейтингов и лиг — матчинг по уровню",
  "Лидерборды и фракции — социальное сравнение",
  "Социальные механики: друзья, сообщения",
  "Ограничение матчмейкинга по рейтингу на старте",
];
</script>

<template>
  <section
    :ref="bind"
    class="yc-problems section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Проблемы и ограничения</AppTag>
      <h2 class="heading">Рост обнажил узкие места</h2>
    </div>

    <div class="issues">
      <div class="issue">
        <h3 class="issue__title">Матчмейкинг без учёта скилла</h3>
        <p class="issue__text">
          Слабые игроки попадали к сильным и уходили. Среднее — 3 матча на
          пользователя. Причина не в интерфейсе, а в отсутствии рейтинговой
          системы.
        </p>
      </div>
      <div class="issue">
        <h3 class="issue__title">Бонусхантеры</h3>
        <p class="issue__text">
          Часть пользователей создавала несколько аккаунтов для получения
          бонусов. Потребовалась дополнительная верификация.
        </p>
      </div>
    </div>

    <figure
      class="card"
      aria-label="Схема проблемного цикла: мало пользователей ведёт к плохому матчмейкингу, плохому опыту и оттоку"
    >
      <AppTag size="s" appearance="tonal">Проблемный цикл</AppTag>
      <div class="cycle" aria-hidden="true">
        <div class="cycle__node cycle__node--accent">
          <span class="cycle__n">1</span>
          <span>Мало пользователей</span>
        </div>
        <svg class="arrow arrow--h" viewBox="0 0 40 14" fill="none">
          <path
            d="M2 7h32M27 2l7 5-7 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="cycle__node">
          <span class="cycle__n">2</span>
          <span>Плохой матчмейкинг</span>
        </div>

        <svg class="arrow arrow--v arrow--up" viewBox="0 0 14 40" fill="none">
          <path
            d="M7 38V6M2 11l5-7 5 7"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="cycle__spacer" />
        <svg class="arrow arrow--v arrow--down" viewBox="0 0 14 40" fill="none">
          <path
            d="M7 2v32M2 29l5 7 5-7"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="cycle__node">
          <span class="cycle__n">4</span>
          <span>Отток</span>
        </div>
        <svg class="arrow arrow--h arrow--left" viewBox="0 0 40 14" fill="none">
          <path
            d="M38 7H6M13 2L6 7l7 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="cycle__node">
          <span class="cycle__n">3</span>
          <span>Плохой опыт</span>
        </div>
      </div>
    </figure>

    <div class="future">
      <AppTag size="s" appearance="tonal">Что бы я сделал сейчас</AppTag>
      <ul class="future__list">
        <li v-for="item in improvements" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>
