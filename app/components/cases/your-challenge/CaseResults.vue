<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();

const rows = [
  {
    label: "Новые пользователи",
    before: "150 за 5 месяцев",
    after: "2 000 за 2 месяца",
    strong: true,
  },
  { label: "Конверсия в 1-й матч", before: "—", after: "~40%" },
  { label: "Конверсия в повтор", before: "—", after: "~10%" },
  { label: "Макс. активность", before: "—", after: "300 матчей/мес" },
  { label: "Частота возврата", before: "—", after: "ежедневно" },
];

const reasons = [
  { pct: "90%", label: "Зарабатывать на скилле" },
  { pct: "8%", label: "Тестировали продукт" },
  { pct: "2%", label: "Азарт" },
];
</script>

<template>
  <section
    :ref="bind"
    class="yc-results section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Результаты</AppTag>
      <h2 class="heading">Результаты превзошли ожидания в 10 раз</h2>
    </div>

    <p class="body">
      3 стримера с аудиторией около 100 человек каждый привели примерно 2 000
      пользователей за 2 месяца.
    </p>

    <div
      class="table-wrap"
      role="region"
      aria-label="Результаты до и после пивота"
    >
      <table class="table">
        <thead>
          <tr>
            <th class="th" />
            <th class="th">До пивота</th>
            <th class="th th--after">После пивота</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.label">
            <td class="td td--label">{{ row.label }}</td>
            <td class="td td--before">{{ row.before }}</td>
            <td
              class="td td--after"
              :class="{ 'td--after-strong': row.strong }"
            >
              {{ row.after }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="reasons-block">
      <AppTag size="s" appearance="tonal">Почему платили</AppTag>
      <div class="reasons">
        <div v-for="r in reasons" :key="r.pct" class="reason">
          <p class="reason__pct">{{ r.pct }}</p>
          <p class="reason__label">{{ r.label }}</p>
        </div>
      </div>
      <p class="reasons__note">
        Аудитория пришла за монетизацией скилла, а не за азартом — это
        определяло все продуктовые решения.
      </p>
    </div>
  </section>
</template>
