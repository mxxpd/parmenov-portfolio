<script setup lang="ts">
const { bind, isVisible } = useScrollReveal();

const oldFlow = [
  { n: 1, text: "Зарегистрироваться", isWork: false },
  { n: 2, text: "Придумать и создать челлендж", isWork: true },
  { n: 3, text: "Дождаться, пока кто-то примет вызов", isWork: true },
  { n: 4, text: "Самому провести игру", isWork: true },
  { n: 5, text: "Загрузить результаты", isWork: true },
  { n: 6, text: "Согласовать победителя / пройти модерацию", isWork: true },
];

const newFlow = [
  { n: 1, text: "Зарегистрировался", tag: null, isOk: false },
  { n: 2, text: "Выбрал игру", tag: "выбор", isOk: true },
  { n: 3, text: "Выбрал взнос", tag: "выбор", isOk: true },
  { n: 4, text: "Нажал «найти матч»", tag: "1 действие", isOk: true },
  { n: 5, text: "Сыграл", tag: "ценность", isOk: true },
  { n: 6, text: "Получил деньги", tag: "результат", isOk: true },
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
    good: "Средняя",
  },
  { label: "Повторяемость", old1: "Низкая", old2: "Низкая", good: "Высокая" },
];

const mechanicCards = [
  {
    title: "Челленджи",
    values: mechanics.map(row => ({ label: row.label, value: row.old1, isWin: false })),
    isWin: false,
  },
  {
    title: "Турниры",
    values: mechanics.map(row => ({ label: row.label, value: row.old2, isWin: false })),
    isWin: false,
  },
  {
    title: "Быстрые матчи",
    values: mechanics.map(row => ({ label: row.label, value: row.good, isWin: true })),
    isWin: true,
  },
];
</script>

<template>
  <section
    id="hypothesis-solution"
    :ref="bind"
    class="yc-solution section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="section__header">
      <AppTag size="s" appearance="tonal">Гипотеза и решение</AppTag>
      <h2 class="heading">Как я пришёл к идее быстрых матчей</h2>
    </div>

    <div class="narrative">
      <p class="narrative__text narrative__text--lead">
        Когда платформа не показывала роста, команда приняла решение двигаться к
        турнирам — следующей большой фиче. Передо мной поставили задачу:
        спроектировать турниры.
      </p>
      <p class="narrative__text">
        Прежде чем рисовать, я изучил как это работает у конкурентов. На Fastcup,
        Cybershoke и других платформах я увидел системную проблему: большинство
        турниров мёртвые — не набирают участников, не стартуют. Исключение —
        Faceit, но это самая крупная платформа в нише, конкурировать с ней на
        нашем этапе нереально.
      </p>
      <div class="risk-flow" aria-label="Проблемы турнирной механики">
        <div class="risk-flow__item">Маленькая аудитория</div>
        <div class="risk-flow__item">Маленькие взносы</div>
        <div class="risk-flow__item">Маленькие призовые</div>
        <div class="risk-flow__item">Маленький доход платформы</div>
        <p class="risk-flow__note">
          Для нормального турнира по CS2 нужны собственные игровые серверы — без
          них организация снова ложится на пользователя.
        </p>
      </div>
      <p class="narrative__text">
        Я понял: если мы запустим турниры в таком виде — повторим ту же ошибку,
        что с челленджами. Механика снова потребует от пользователя слишком много
        работы до первой ценности.
      </p>
      <p class="narrative__text">
        Тогда я принял решение выйти за рамки задачи. Параллельно с турнирами я
        самостоятельно спроектировал быстрые матчи — изучил как это устроено у
        конкурентов, выстроил user flow, нарисовал screen flow. На презентации я
        показал оба варианта рядом. Увидев интерфейсы, команда сама сделала
        выбор: быстрые матчи — это то, что нужно в первую очередь. Реализовать
        проще, серверов нужно меньше, не нужно собирать 16+ игроков. И главное —
        пользователь сразу получает ценность.
      </p>
    </div>

    <figure class="card materials-card" aria-label="Материалы решения">
      <AppTag size="s" appearance="tonal">Материалы решения</AppTag>

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

      <div class="mechanic-cards" aria-label="Сравнение механик">
        <article
          v-for="card in mechanicCards"
          :key="card.title"
          class="mechanic-card"
          :class="{ 'mechanic-card--win': card.isWin }"
        >
          <h3 class="mechanic-card__title">{{ card.title }}</h3>
          <dl class="mechanic-card__list">
            <div
              v-for="item in card.values"
              :key="item.label"
              class="mechanic-card__row"
            >
              <dt class="mechanic-card__term">{{ item.label }}</dt>
              <dd
                class="mechanic-card__value"
                :class="{ 'mechanic-card__value--win': item.isWin }"
              >
                {{ item.value }}
              </dd>
            </div>
          </dl>
        </article>
      </div>

      <div class="materials-grid">
        <PlaceholderImage label="Wireframe: турнирная механика" :height="260" />
        <PlaceholderImage label="Wireframe: экран поиска матча" :height="260" />
      </div>
    </figure>

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
            >Новый флоу — 6 шагов</AppTag
          >
          <div class="flow-list">
            <div v-for="s in newFlow" :key="s.n" class="step" :class="{ 'step--ok': s.isOk }">
              <span class="step__n">{{ s.n }}</span>
              <span class="step__text">{{ s.text }}</span>
              <AppTag
                v-if="s.tag"
                class="step__tag"
                size="s"
                variant="success"
                appearance="tonal"
              >{{ s.tag }}</AppTag>
            </div>
          </div>
        </div>
      </div>
      <figcaption class="card__caption">
        Новый флоу: пользователь только играет — всё остальное берёт на себя продукт.
      </figcaption>
    </figure>

    <blockquote class="insight">
      <AppTag size="s" appearance="tonal">Ключевой инсайт</AppTag>
      <p class="insight__text">
        Анализ поведения пользователей дал ключевое понимание: люди приходят на
        платформу не "поиграть", а доказать себе, что они лучше — и заработать на
        этом. Монетизация скилла была сутью платформы с первого дня. Вопрос был
        только в том, какая механика даёт к этому самый короткий путь.
      </p>
    </blockquote>
  </section>
</template>
