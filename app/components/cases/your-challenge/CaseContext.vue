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
        дня до закрытия. Отвечал за весь UX и визуальный дизайн, участвовал в
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
      </div>

      <div class="info-card">
        <AppTag size="s" appearance="tonal">Команда</AppTag>
        <p class="team-num">18</p>
        <p class="team-sub">человек · 3 года</p>
      </div>
    </aside>
  </section>
</template>
