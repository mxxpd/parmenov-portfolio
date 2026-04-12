<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const roles = [
  "UX-архитектура",
  "Визуальный дизайн",
  "Продуктовая стратегия",
  "Конкурентный анализ",
];
</script>

<template>
  <section
    :ref="bind"
    class="yc-context context"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="context__main">
      <AppTag size="s" appearance="tonal">Контекст</AppTag>

      <p class="context__body">
        Я пришёл в проект на стадии идеи и проработал в нём 3 года — с первого
        дня до закрытия. Команда насчитывала 18 человек, я был единственным
        дизайнером. Отвечал за весь UX и визуальный дизайн, участвовал в
        продуктовой стратегии и инициировал ключевой поворот в направлении
        продукта.
      </p>
    </div>

    <aside class="context__meta">
      <div class="info-card">
        <AppTag size="s" appearance="tonal">Моя роль</AppTag>

        <ul class="roles">
          <li v-for="role in roles" :key="role" class="role">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 7l3 3 6-6"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ role }}
          </li>
        </ul>

        <div class="role-divider" aria-hidden="true" />

        <p class="role-note">
          Я был единственным дизайнером в команде и сам выстраивал все процессы
          по своей работе — от постановки задачи до сдачи в разработку. Это
          давало полную ответственность за качество и свободу принимать решения
          самостоятельно.
        </p>
      </div>

    </aside>
  </section>
</template>
