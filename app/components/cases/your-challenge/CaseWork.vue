<script setup lang="ts">
import { useScrollReveal } from "../../../composables/useScrollReveal";

const { bind, isVisible } = useScrollReveal();
const workMediaHeight = ref(520);

const workTabs = [
  { id: "interface", label: "Новый интерфейс", placeholderLabel: "Скриншот: новый интерфейс" },
  { id: "design-system", label: "Дизайн-система", placeholderLabel: "Скриншот: дизайн-система" },
];

const competitorRows = [
  {
    platform: "Faceit",
    mechanic: "Матчи и турниры",
    problem: "Крупнейшая платформа в нише, конкурировать напрямую на нашем этапе нереально.",
    takeaway: "Ориентир по ожиданиям аудитории.",
  },
  {
    platform: "Fastcup",
    mechanic: "Быстрые матчи",
    problem: "Если игрок ливнул в середине игры, матч всё равно идёт до конца.",
    takeaway: "Взяли матчевую механику за основу и заложили авто-победу/поражение при ливе.",
  },
  {
    platform: "Cybershoke",
    mechanic: "Турниры и игровые сценарии",
    problem: "Турниры не собирают участников и висят мёртвыми.",
    takeaway: "Подтвердили риск турнирной модели для маленькой аудитории.",
  },
];

const flowTabs = [
  { id: "quick-matches", label: "Быстрые матчи", placeholderLabel: "User flow: быстрые матчи" },
  { id: "challenges", label: "Челленджи", placeholderLabel: "User flow: челленджи" },
];

const activeWorkTabId = ref("interface");
const activeWorkTab = computed(() => workTabs.find(t => t.id === activeWorkTabId.value)!);
const activeFlowTabId = ref("quick-matches");
const activeFlowTab = computed(() => flowTabs.find(t => t.id === activeFlowTabId.value)!);

const updateWorkMediaHeight = () => {
  if (!import.meta.client) return;

  if (window.matchMedia("(max-width: 480px)").matches) {
    workMediaHeight.value = 240;
    return;
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    workMediaHeight.value = 320;
    return;
  }

  workMediaHeight.value = 520;
};

const items = [
  {
    n: "01",
    title: "Конкурентный анализ",
    text: "Изучил три платформы — Faceit, Fastcup, Cybershoke. Зафиксировал ключевые паттерны: как устроен поиск матча, какие взносы, как обрабатываются результаты. Главный вывод: турниры на всех платформах кроме Faceit не собирают участников — висят мёртвые. Быстрые матчи как механика давали мгновенный цикл и не зависели от одновременного присутствия большого числа игроков. Из анализа Fastcup взял за основу механику матчей, но доработал: у них если игрок ливнул в середине игры, матч всё равно идёт до конца — пользователь теряет 15 минут впустую. Мы заложили авто-победу/поражение при ливе.",
    hasSlider: false,
    hasCompetitorTable: true,
    metric: null,
  },
  {
    n: "02",
    title: "Инициировал пивот",
    text: "Вышел за рамки задачи: параллельно с турнирами самостоятельно спроектировал быстрые матчи и показал оба варианта на презентации.",
    hasSlider: false,
    isPivot: true,
    detailHref: "#hypothesis-solution",
    metric: null,
  },
  {
    n: "03",
    title: "User flows и архитектура",
    text: "Спроектировал user flow и screen flow для быстрых матчей. Одно из ключевых решений — отказ от мобильной версии: суть платформы изменилась, пользователь играет в CS2 с компьютера, мобильный контекст перестал быть релевантным. Флоу челленджей был громоздким — десятки разветвлённых путей. Флоу быстрых матчей получился лаконичным: меньше экранов, меньше решений, больше скорости до первой ценности.",
    hasSlider: false,
    hasFlowArchitecture: true,
    metric: null,
  },
  {
    n: "04",
    title: "Визуальный дизайн",
    text: "Отрисовал веб-версию продукта и выстроил дизайн-систему.",
    hasSlider: true,
    metric: null,
  },
  {
    n: "05",
    title: "Доведение до прода",
    text: "Ускорение разработки случилось комплексно. На старте проекта разработчики были закрыты к диалогу — интерфейсы выходили захардкоженными, правки занимали недели. Позже в команду пришли новые разработчики, с которыми получилось выстроить нормальную коммуникацию в паре дизайнер-фронт-бек. На этой основе мы вместе построили компонентную дизайн-систему. В результате то, что раньше требовало месяца, стало решаться за дни.",
    hasSlider: false,
    metric: {
      from: "12 мес",
      to: "3 мес",
      label: "скорость разработки новой версии",
      note: "результат смены команды, выстроенного диалога и компонентной системы",
    },
  },
];

onMounted(() => {
  updateWorkMediaHeight();
  window.addEventListener("resize", updateWorkMediaHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWorkMediaHeight);
});
</script>

<template>
  <section
    :ref="bind"
    class="yc-work section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Что я сделал</AppTag>
      <h2 class="heading">Этапы работы</h2>
    </div>

    <div class="grid">
      <div
        v-for="item in items"
        :key="item.n"
        class="card"
        :class="{
          'card--featured': item.hasSlider,
          'card--metric': item.metric,
          'card--analysis': item.hasCompetitorTable,
          'card--flow': item.hasFlowArchitecture,
          'card--pivot': item.isPivot,
        }"
      >
        <div class="card__body">
          <span class="card__n">{{ item.n }}</span>
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__text">{{ item.text }}</p>
          <a
            v-if="item.detailHref"
            class="card__link"
            :href="item.detailHref"
          >
            Читать подробнее
          </a>
        </div>

        <div
          v-if="item.hasCompetitorTable"
          class="competitor-table-wrap"
          role="region"
          aria-label="Сравнение конкурентов"
        >
          <table class="competitor-table">
            <thead>
              <tr>
                <th>Платформа</th>
                <th>Механика</th>
                <th>Проблема</th>
                <th>Что взяли</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in competitorRows" :key="row.platform">
                <td>{{ row.platform }}</td>
                <td>{{ row.mechanic }}</td>
                <td>{{ row.problem }}</td>
                <td>{{ row.takeaway }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="item.hasFlowArchitecture" class="flow-slider-wrap">
          <div class="segmented" role="group" aria-label="Раздел флоу">
            <button
              v-for="tab in flowTabs"
              :key="tab.id"
              class="segmented__btn"
              :class="{ 'segmented__btn--active': activeFlowTabId === tab.id }"
              type="button"
              :aria-pressed="activeFlowTabId === tab.id"
              @click="activeFlowTabId = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
          <AppImageSlider
            :slides="[]"
            :placeholder-label="activeFlowTab.placeholderLabel"
            :placeholder-height="workMediaHeight"
            aria-label="Материалы: user flows и архитектура"
          />
        </div>

        <div v-if="item.hasSlider" class="card__slider-wrap">
          <div class="segmented" role="group" aria-label="Раздел материалов">
            <button
              v-for="tab in workTabs"
              :key="tab.id"
              class="segmented__btn"
              :class="{ 'segmented__btn--active': activeWorkTabId === tab.id }"
              type="button"
              :aria-pressed="activeWorkTabId === tab.id"
              @click="activeWorkTabId = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
          <AppImageSlider
            :slides="[]"
            :placeholder-label="activeWorkTab.placeholderLabel"
            :placeholder-height="workMediaHeight"
            aria-label="Материалы: визуальный дизайн"
          />
        </div>

        <div v-if="item.metric" class="card__metric">
          <p class="card__metric-value">
            {{ item.metric.from }}<span class="card__metric-arrow">→</span>{{ item.metric.to }}
          </p>
          <p class="card__metric-label">{{ item.metric.label }}</p>
          <p
            v-if="item.metric.note"
            class="card__metric-note"
          >
            {{ item.metric.note }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
