<script setup lang="ts">
import DiagnosisCheckIcon from "~/assets/icons/diagnosis-check.svg";
import DiagnosisCloseIcon from "~/assets/icons/diagnosis-close.svg";
import releaseV1_1Url from "~/assets/images/cases/your-challenge/release-v1-1.png";
import releaseV1_2Url from "~/assets/images/cases/your-challenge/release-v1-2.png";

const { bind, isVisible } = useScrollReveal();

type Version = "release" | "redesign";

interface PlatformSlide {
  src: string;
  alt: string;
}

interface VersionEntry {
  id: Version;
  label: string;
  caption: string;
  slides: PlatformSlide[];
}

const activeVersion = ref<Version>("release");

const versions: VersionEntry[] = [
  {
    id: "release",
    label: "Первый релиз",
    caption:
      "Спроектировал информационную архитектуру, построил user flow, разработал визуал для веб и мобильной версии.",
    slides: [
      { src: releaseV1_1Url, alt: "Первый релиз — экран 1" },
      { src: releaseV1_2Url, alt: "Первый релиз — экран 2" },
    ],
  },
  {
    id: "redesign",
    label: "Редизайн",
    caption:
      "Переработал веб-версию, выстроил дизайн-систему и совместно с разработчиками привёл её к компонентной базе, оптимизировал user flow. Но проблема была не в интерфейсе — а в механике продукта.",
    slides: [],
  },
];

const current = computed(
  () => versions.find((v) => v.id === activeVersion.value)!,
);

const steps = [
  { n: 1, text: "Зарегистрироваться", isWork: false },
  { n: 2, text: "Придумать и создать челлендж", isWork: true },
  { n: 3, text: "Дождаться, пока кто-то примет вызов", isWork: true },
  { n: 4, text: "Самому провести игру", isWork: true },
  { n: 5, text: "Загрузить результаты", isWork: true },
  { n: 6, text: "Согласовать победителя или пройти модерацию", isWork: true },
];

const signals = [
  { value: "2", label: "рекламные кампании дали всплеск" },
  { value: "0", label: "органического роста между кампаниями" },
  { value: "150", label: "регистраций за 5 месяцев" },
];

const dataTimeline = [
  {
    title: "Релиз платформы",
    text: "Первая версия продукта с механикой челленджей запущена.",
    badge: null,
    state: "neutral",
  },
  {
    title: "Кампания 1 — сбор обратной связи",
    text: "Твич-стримеры играли на платформе в прямом эфире.",
    badge: "Неудобно, непонятно, криво",
    state: "neutral",
  },
  {
    title: "Редизайн",
    text: "Улучшили интерфейс — платформой стало удобнее пользоваться. Но решение роста не дало: мы лечили симптом, а не причину. Зато редизайн убрал интерфейсный шум — и во второй кампании пользователи смогли добраться до настоящей проблемы.",
    badge: "Ошибка диагноза",
    state: "wrong",
  },
  {
    title: "Кампания 2 — сбор обратной связи",
    text: "Интерфейс уже не мешал — выплыло главное.",
    badge: "Создавать челлендж — это работа, никто не хочет",
    state: "neutral",
  },
  {
    title: "Пивот механики",
    text: "Проблема не в дизайне, а в core-механике. Инициировали смену модели на быстрые матчи.",
    badge: "Верный диагноз",
    state: "success",
  },
];
</script>

<template>
  <section
    :ref="bind"
    class="yc-problem section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="problem__intro">
      <div class="section__header">
        <AppTag size="s" appearance="tonal">Проблема</AppTag>
        <h2 class="heading">Что не работало и почему</h2>
      </div>

      <p class="body">
        Изначально продукт строился вокруг пользовательских челленджей: игрок
        сам придумывает соревнование, сам его организует, находит соперника и
        проводит игру. На бумаге это выглядело логично. На практике механика
        требовала слишком много действий до первой ценности.
      </p>
    </div>

    <div class="problem__content">
      <figure class="media-card">
        <div class="media-card__header">
          <AppTag size="s" appearance="tonal">Как выглядела платформа</AppTag>

          <div class="segmented" role="group" aria-label="Версия платформы">
            <button
              v-for="v in versions"
              :key="v.id"
              class="segmented__btn"
              :class="{ 'segmented__btn--active': activeVersion === v.id }"
              type="button"
              :aria-pressed="activeVersion === v.id"
              @click="activeVersion = v.id"
            >
              {{ v.label }}
            </button>
          </div>
        </div>

        <Transition name="fade" mode="out-in">
          <figcaption
            :key="current.id + '-caption'"
            class="media-card__caption"
          >
            {{ current.caption }}
          </figcaption>
        </Transition>

        <div class="media-card__visual">
          <AppImageSlider
            :slides="current.slides"
            :placeholder-label="`Скриншот: ${current.label.toLowerCase()}`"
            aria-label="Скриншоты платформы"
          />
        </div>
      </figure>

      <figure
        class="card flow-card"
        aria-label="Шаги старого пользовательского флоу"
      >
        <div class="flow">
          <ol class="flow__col">
            <li
              v-for="step in steps.slice(0, 3)"
              :key="step.n"
              class="step"
              :class="{ 'step--work': step.isWork }"
            >
              <span class="step__num">{{ step.n }}</span>
              <span class="step__text">{{ step.text }}</span>
            </li>
          </ol>


          <ol class="flow__col">
            <li
              v-for="step in steps.slice(3)"
              :key="step.n"
              class="step"
              :class="{ 'step--work': step.isWork }"
            >
              <span class="step__num">{{ step.n }}</span>
              <span class="step__text">{{ step.text }}</span>
            </li>
          </ol>
        </div>

        <figcaption class="card__caption">
          5 из 6 шагов — это работа пользователя, а не удовольствие.
        </figcaption>
      </figure>
    </div>

    <div class="problem__evidence">
      <div class="data-block">
        <div class="data-block__header">
          <AppTag size="s" appearance="tonal">Данные</AppTag>
          <h3 class="subheading">Поведение подтверждало диагноз</h3>
        </div>
        <ul class="data-list">
          <li class="data-list__item">Пользователи появлялись только во время рекламных кампаний.</li>
          <li class="data-list__item">После окончания рекламы активность почти сразу исчезала.</li>
          <li class="data-list__item">Признаков самостоятельного органического роста не было.</li>
        </ul>
      </div>

      <figure
        class="activity-card"
        aria-label="График активности: рост только во время рекламных кампаний"
      >
        <div class="activity-card__header">
          <h3 class="activity-card__title">
            Активность держалась только на рекламе
          </h3>
        </div>

        <div class="activity-card__stats">
          <div
            v-for="signal in signals"
            :key="signal.label"
            class="activity-stat"
          >
            <strong>{{ signal.value }}</strong>
            <span>{{ signal.label }}</span>
          </div>
        </div>

        <div class="chart-shell">
          <CasesYourChallengeActivityChart />
        </div>

        <div class="data-timeline" aria-labelledby="data-timeline-title">
          <h4 id="data-timeline-title" class="data-timeline__title">
            Как мы читали данные
          </h4>

          <ol class="data-timeline__list">
            <li
              v-for="item in dataTimeline"
              :key="item.title"
              class="data-timeline__item"
              :class="`data-timeline__item--${item.state}`"
            >
              <div class="data-timeline__content">
                <div class="data-timeline__head">
                  <h5 class="data-timeline__step-title">{{ item.title }}</h5>
                  <span
                    v-if="item.badge"
                    class="data-timeline__badge"
                  >
                    <DiagnosisCloseIcon
                      v-if="item.state === 'wrong'"
                      class="data-timeline__badge-icon"
                      aria-hidden="true"
                    />
                    <DiagnosisCheckIcon
                      v-else-if="item.state === 'success'"
                      class="data-timeline__badge-icon"
                      aria-hidden="true"
                    />
                    {{ item.badge }}
                  </span>
                </div>
                <p class="data-timeline__text">{{ item.text }}</p>
              </div>
            </li>
          </ol>

        </div>

        <figcaption class="activity-card__caption">
          Вывод: продукту не хватало самостоятельной ценности. Нужен был
          структурный пивот, а не редизайн экранов.
        </figcaption>
      </figure>
    </div>
  </section>
</template>
