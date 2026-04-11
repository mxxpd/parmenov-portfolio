<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();
const typo = useTypograf();

const text = computed(() =>
  typo(
    "Платформа для соревновательных игр на деньги два года разрабатывалась, а после релиза 5 месяцев не показывала роста. Я инициировал смену core-механики и спроектировал новый user flow — командой запустили MVP. Результат: ×13 к базе пользователей, 40% конверсия в первый матч — в 10 раз лучше ожиданий.",
  ),
);
</script>

<template>
  <div :ref="bind" class="yc-tldr tldr" :class="{ 'is-visible': isVisible }">
    <div class="tldr__lead">
      <AppTag size="s" appearance="tonal">TL;DR</AppTag>
    </div>

    <p class="tldr__text">{{ text }}</p>
  </div>
</template>
