<template>
  <div id="top" class="page-shell">
    <header class="topbar">
      <NuxtLink to="/" class="brand" aria-label="Nova Bank">
        <span class="brand__mark">N</span>
        <span class="brand__text">Nova Bank</span>
      </NuxtLink>

      <nav class="topbar__nav" aria-label="Основная навигация">
        <a
          v-for="item in navigation"
          :key="item.label"
          :href="item.href"
          class="topbar__link"
        >
          <AppIcon :name="item.icon" class="icon-sm" />
          <TypoText :text="item.label" />
        </a>
      </nav>

      <div class="topbar__actions">
        <div class="theme-switcher" role="group" aria-label="Переключение темы">
          <button
            type="button"
            class="theme-switcher__button"
            :class="{ 'theme-switcher__button--active': theme === 'light' }"
            :aria-pressed="theme === 'light'"
            @click="setTheme('light')"
          >
            <AppIcon name="sun" class="icon-sm" />
            <span>Светлая</span>
          </button>
          <button
            type="button"
            class="theme-switcher__button"
            :class="{ 'theme-switcher__button--active': theme === 'dark' }"
            :aria-pressed="theme === 'dark'"
            @click="setTheme('dark')"
          >
            <AppIcon name="moon" class="icon-sm" />
            <span>Тёмная</span>
          </button>
        </div>

        <a class="cta-button" href="#pricing">
          <span>Открыть счёт</span>
          <AppIcon name="arrow" class="icon-sm" />
        </a>
      </div>
    </header>

    <main class="layout">
      <section class="hero">
        <div class="hero__content">
          <div class="eyebrow">
            <span class="eyebrow__dot"></span>
            <TypoText
              text="Спокойный цифровой банк для личных и командных финансов"
            />
          </div>

          <TypoText
            tag="h1"
            class-name="hero__title"
            text="Деньги, платежи и аналитика в одном аккуратном интерфейсе."
          />

          <TypoText
            tag="p"
            class-name="hero__description"
            text="Nova Bank показывает важное сразу: баланс, лимиты, движения средств и статус команды. Без перегруженных виджетов, случайных блоков и визуального шума."
          />

          <div class="hero__actions">
            <a class="cta-button cta-button--large" href="#pricing">
              <span>Запустить за 5 минут</span>
              <AppIcon name="arrow" class="icon-sm" />
            </a>
            <a class="ghost-button" href="#features">
              <AppIcon name="play" class="icon-sm" />
              <span>Посмотреть возможности</span>
            </a>
          </div>

          <div class="hero__metrics">
            <article
              v-for="metric in metrics"
              :key="metric.label"
              class="metric-card"
            >
              <TypoText
                tag="strong"
                class-name="metric-card__value"
                :text="metric.value"
              />
              <TypoText
                tag="span"
                class-name="metric-card__label"
                :text="metric.label"
              />
            </article>
          </div>
        </div>

        <div class="hero__visual">
          <div class="panel panel--back">
            <TypoText
              tag="strong"
              class-name="panel__title"
              text="Лимиты и сценарии"
            />
            <div class="panel__bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="phone-card">
            <div class="phone-card__top">
              <span class="phone-card__brand">N</span>
              <div class="phone-card__top-copy">
                <TypoText
                  tag="strong"
                  class-name="phone-card__name"
                  text="Nova Account"
                />
                <TypoText
                  tag="span"
                  class-name="phone-card__meta"
                  text="Бизнес-профиль"
                />
              </div>
              <span class="phone-card__badge">PRO</span>
            </div>

            <div class="phone-card__balance">
              <TypoText
                tag="span"
                class-name="phone-card__caption"
                text="Доступный баланс"
              />
              <TypoText
                tag="strong"
                class-name="phone-card__amount"
                text="1 284 320 ₽"
              />
            </div>

            <div class="quick-actions">
              <button
                v-for="action in quickActions"
                :key="action.label"
                type="button"
                class="quick-action"
              >
                <span class="quick-action__icon">
                  <AppIcon :name="action.icon" class="icon-sm" />
                </span>
                <TypoText :text="action.label" />
              </button>
            </div>

            <div class="transaction-list">
              <article
                v-for="item in transactions"
                :key="item.title"
                class="transaction"
              >
                <span
                  class="transaction__icon"
                  :class="`transaction__icon--${item.tone}`"
                >
                  <AppIcon :name="item.icon" class="icon-sm" />
                </span>
                <div class="transaction__body">
                  <TypoText
                    tag="strong"
                    class-name="transaction__title"
                    :text="item.title"
                  />
                  <TypoText
                    tag="span"
                    class-name="transaction__meta"
                    :text="item.meta"
                  />
                </div>
                <span
                  class="transaction__amount"
                  :class="`transaction__amount--${item.tone}`"
                >
                  {{ item.amount }}
                </span>
              </article>
            </div>
          </div>

          <div class="panel panel--front">
            <TypoText
              tag="strong"
              class-name="panel__title"
              text="+18% к свободному остатку"
            />
            <div class="panel__chart">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="section">
        <div class="section__heading">
          <TypoText
            tag="span"
            class-name="section__eyebrow"
            text="Что исправлено в структуре"
          />
          <TypoText
            tag="h2"
            class-name="section__title"
            text="Экран собран как цельный продуктовый лендинг, а не набор разрозненных карточек."
          />
        </div>

        <div class="feature-grid">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="feature-card"
          >
            <span class="feature-card__icon">
              <AppIcon :name="feature.icon" class="icon-md" />
            </span>
            <TypoText
              tag="h3"
              class-name="feature-card__title"
              :text="feature.title"
            />
            <TypoText
              tag="p"
              class-name="feature-card__text"
              :text="feature.text"
            />
          </article>
        </div>
      </section>

      <section class="section showcase">
        <article class="showcase-card">
          <TypoText tag="span" class-name="section__eyebrow" text="Аналитика" />
          <TypoText
            tag="h3"
            class-name="showcase-card__title"
            text="Ключевые сигналы видны сразу"
          />
          <div class="signal-list">
            <div
              v-for="signal in signals"
              :key="signal.label"
              class="signal-row"
            >
              <div>
                <TypoText
                  tag="strong"
                  class-name="signal-row__label"
                  :text="signal.label"
                />
                <TypoText
                  tag="span"
                  class-name="signal-row__meta"
                  :text="signal.meta"
                />
              </div>
              <span class="signal-row__value">{{ signal.value }}</span>
            </div>
          </div>
        </article>

        <article id="team" class="showcase-card">
          <TypoText tag="span" class-name="section__eyebrow" text="Команда" />
          <TypoText
            tag="h3"
            class-name="showcase-card__title"
            text="Доступы и роли читаются без путаницы"
          />
          <ul class="team-list">
            <li v-for="user in users" :key="user.name" class="team-list__item">
              <span
                class="team-list__avatar"
                :style="{ background: user.color }"
              >
                {{ user.initials }}
              </span>
              <div class="team-list__body">
                <TypoText
                  tag="strong"
                  class-name="team-list__name"
                  :text="user.name"
                />
                <TypoText
                  tag="span"
                  class-name="team-list__role"
                  :text="user.description"
                />
              </div>
              <span class="team-list__status">{{ user.status }}</span>
            </li>
          </ul>
        </article>
      </section>

      <section id="pricing" class="section pricing">
        <div class="section__heading">
          <TypoText tag="span" class-name="section__eyebrow" text="Тарифы" />
          <TypoText
            tag="h2"
            class-name="section__title"
            text="Можно начать с малого и масштабироваться без редизайна."
          />
        </div>

        <div class="pricing-grid">
          <article
            v-for="plan in plans"
            :key="plan.name"
            class="plan-card"
            :class="{ 'plan-card--featured': plan.featured }"
          >
            <div class="plan-card__head">
              <TypoText
                tag="strong"
                class-name="plan-card__name"
                :text="plan.name"
              />
              <span v-if="plan.featured" class="plan-card__badge"
                >Рекомендуем</span
              >
            </div>
            <TypoText
              tag="div"
              class-name="plan-card__price"
              :text="plan.price"
            />
            <TypoText
              tag="p"
              class-name="plan-card__description"
              :text="plan.description"
            />
            <ul class="plan-card__list">
              <li
                v-for="item in plan.items"
                :key="item"
                class="plan-card__item"
              >
                <AppIcon name="check" class="icon-sm plan-card__check" />
                <TypoText :text="item" />
              </li>
            </ul>
            <a href="#top" class="plan-card__button">{{ plan.cta }}</a>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({ htmlAttrs: { lang: "ru" } });

useSeoMeta({
  title: "Nova Bank, цифровой банковский интерфейс",
  description:
    "Концепт цифрового банка с понятной аналитикой, ролями, лимитами и спокойной визуальной системой.",
  ogTitle: "Nova Bank, цифровой банковский интерфейс",
  ogDescription:
    "Концепт цифрового банка с понятной аналитикой, ролями, лимитами и спокойной визуальной системой.",
  ogLocale: "ru_RU",
});

const { setTheme, theme } = useTheme();

const navigation = [
  { label: "Главная", href: "#top", icon: "home" },
  { label: "Возможности", href: "#features", icon: "grid" },
  { label: "Команда", href: "#team", icon: "users" },
  { label: "Тарифы", href: "#pricing", icon: "wallet" },
];

const metrics = [
  { value: "15 млн+", label: "операций в месяц проходят без ручной сверки" },
  { value: "3 мин", label: "нужно на запуск новых правил" },
  { value: "24/7", label: "доступ к платежам, лимитам и отчётам" },
];

const quickActions = [
  { label: "Пополнить", icon: "deposit" },
  { label: "Перевести", icon: "send" },
  { label: "Аналитика", icon: "chart" },
  { label: "Карты", icon: "card" },
];

const transactions = [
  {
    title: "Новые подписки",
    meta: "Сегодня, 09:24",
    amount: "+84 000 ₽",
    tone: "positive",
    icon: "deposit",
  },
  {
    title: "Зарплатный пул",
    meta: "Сегодня, 12:10",
    amount: "-215 000 ₽",
    tone: "neutral",
    icon: "wallet",
  },
  {
    title: "Резерв на налоги",
    meta: "Автоматическое правило",
    amount: "+48 200 ₽",
    tone: "positive",
    icon: "shield",
  },
];

const features = [
  {
    icon: "shield",
    title: "Контроль доступа",
    text: "Каждый участник команды видит только те действия, которые нужны ему по роли.",
  },
  {
    icon: "chart",
    title: "Фокус на сигналах",
    text: "Баланс, остатки, отклонения и лимиты вынесены на первый экран без перегруза.",
  },
  {
    icon: "spark",
    title: "Основа для роста",
    text: "Концепт уже собран на токенах и легко развивается в полноценный продуктовый сайт.",
  },
];

const signals = [
  { label: "Денежный поток", meta: "Последние 30 дней", value: "+12.4%" },
  { label: "Средний остаток", meta: "По всем счетам", value: "6.8 млн ₽" },
  {
    label: "Автодействия",
    meta: "Сработали без ручного участия",
    value: "148",
  },
];

const users = [
  {
    initials: "СН",
    name: "Савелий Новиков",
    description: "Финансовый контур и ключевые платежи",
    status: "Admin",
    color: "linear-gradient(135deg, #ef8c62 0%, #f4b28d 100%)",
  },
  {
    initials: "БС",
    name: "Борис Симонов",
    description: "Регулярные выплаты и зарплатные реестры",
    status: "Ops",
    color: "linear-gradient(135deg, #7ba7ff 0%, #5c7df2 100%)",
  },
  {
    initials: "АФ",
    name: "Альберт Фролов",
    description: "Отчётность, лимиты и экспорт данных",
    status: "View",
    color: "linear-gradient(135deg, #58d58a 0%, #7ef0c4 100%)",
  },
];

const plans = [
  {
    name: "Start",
    price: "0 ₽",
    description: "Для первого сценария, одного счёта и базовой аналитики.",
    cta: "Попробовать",
    featured: false,
    items: ["1 рабочее пространство", "Базовые роли", "История операций"],
  },
  {
    name: "Core",
    price: "19 900 ₽ / мес",
    description:
      "Для команд, которым нужны лимиты, аналитика и автоматические правила.",
    cta: "Выбрать Core",
    featured: true,
    items: [
      "Командные роли",
      "Автоматические сценарии",
      "Расширенная аналитика",
    ],
  },
  {
    name: "Scale",
    price: "Индивидуально",
    description:
      "Для больших процессов, нескольких команд и продуктовой настройки.",
    cta: "Связаться",
    featured: false,
    items: [
      "Мультикомандная структура",
      "Кастомные процессы",
      "Поддержка внедрения",
    ],
  },
];
</script>

<style scoped>
.page-shell {
  min-height: 100vh;
  max-width: 1480px;
  margin: 0 auto;
  padding: 20px;
}
.layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.icon-sm {
  width: 16px;
  height: 16px;
}
.icon-md {
  width: 20px;
  height: 20px;
}
.topbar,
.hero,
.section {
  border: 1px solid
    color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
  border-radius: 32px;
  background: color-mix(in srgb, var(--color-bg-surface) 88%, transparent);
  box-shadow: var(--shadow-raised);
}
.topbar {
  position: sticky;
  top: 16px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
  padding: 16px 18px;
  background: color-mix(in srgb, var(--color-bg-surface) 82%, transparent);
  backdrop-filter: blur(18px);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  font-weight: var(--font-weight-display);
}
.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    var(--color-bg-inverse) 0%,
    color-mix(in srgb, var(--color-bg-inverse) 88%, var(--color-brand-soft))
      100%
  );
  color: var(--color-text-inverse);
}
.topbar__nav,
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border-radius: 999px;
  background: color-mix(
    in srgb,
    var(--color-bg-surface-muted) 72%,
    transparent
  );
}
.topbar__link,
.theme-switcher__button,
.cta-button,
.ghost-button,
.plan-card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 999px;
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}
.topbar__link {
  padding: 12px 16px;
  color: var(--color-text-secondary);
}
.topbar__link:hover,
.theme-switcher__button--active {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
}
.topbar__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.theme-switcher__button {
  padding: 10px 14px;
  color: var(--color-text-secondary);
}
.cta-button,
.plan-card__button {
  min-height: 52px;
  padding: 0 18px;
  background: linear-gradient(
    135deg,
    var(--color-brand-primary) 0%,
    var(--color-bg-accent-hover) 100%
  );
  color: var(--color-text-inverse);
}
.ghost-button {
  min-height: 52px;
  padding: 0 18px;
  border: 1px solid
    color-mix(in srgb, var(--color-border-default) 78%, transparent);
  background: color-mix(in srgb, var(--color-bg-surface) 84%, transparent);
  color: var(--color-text-primary);
}
.cta-button:hover,
.ghost-button:hover,
.plan-card__button:hover,
.topbar__link:hover {
  transform: translateY(-1px);
}
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
  gap: 28px;
  padding: 34px;
  background:
    radial-gradient(
      circle at top left,
      color-mix(in srgb, var(--color-brand-soft) 65%, transparent) 0%,
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 88%,
      color-mix(in srgb, var(--color-brand-primary) 20%, transparent) 0%,
      transparent 28%
    ),
    color-mix(in srgb, var(--color-bg-surface) 92%, transparent);
}
.hero__content {
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
}
.eyebrow,
.section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-secondary);
  font-size: var(--text-label);
  font-weight: var(--font-weight-heading);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.eyebrow__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-brand-primary) 0%,
    var(--color-bg-accent-hover) 100%
  );
}
.hero__title {
  max-width: 11ch;
  font-size: clamp(42px, 5.4vw, 88px);
  font-weight: var(--font-weight-display);
  line-height: 0.95;
  letter-spacing: -0.04em;
}
.hero__description,
.feature-card__text,
.signal-row__meta,
.team-list__role,
.plan-card__description {
  color: var(--color-text-secondary);
  font-size: var(--text-body);
  line-height: var(--line-height-body-relaxed);
}
.hero__description {
  max-width: 58ch;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.cta-button--large {
  min-height: 56px;
  padding-inline: 22px;
}
.hero__metrics,
.feature-grid,
.pricing-grid,
.showcase {
  display: grid;
  gap: 16px;
}
.hero__metrics {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.metric-card,
.feature-card,
.showcase-card,
.plan-card {
  padding: 22px;
  border: 1px solid
    color-mix(in srgb, var(--color-border-subtle) 76%, transparent);
  border-radius: 26px;
  background: color-mix(
    in srgb,
    var(--color-bg-surface-muted) 72%,
    transparent
  );
}
.metric-card__value,
.plan-card__price {
  font-size: clamp(28px, 2.4vw, 40px);
  font-weight: var(--font-weight-display);
  line-height: 1;
}
.metric-card__label {
  display: block;
  margin-top: 8px;
  color: var(--color-text-secondary);
  font-size: var(--text-body-sm);
  line-height: 1.5;
}
.hero__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 640px;
  border-radius: 28px;
  background: linear-gradient(
    160deg,
    color-mix(in srgb, var(--color-bg-inverse) 92%, transparent) 0%,
    color-mix(in srgb, var(--color-brand-soft) 54%, var(--color-bg-inverse))
      100%
  );
  overflow: hidden;
}
.panel {
  position: absolute;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  background: color-mix(in srgb, var(--color-bg-surface) 88%, transparent);
  box-shadow: var(--shadow-surface);
}
.panel--back {
  top: 48px;
  left: 32px;
  width: 220px;
}
.panel--front {
  right: 28px;
  bottom: 40px;
  width: 240px;
}
.panel__title {
  display: block;
  margin-bottom: 14px;
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-heading);
}
.panel__bars,
.panel__chart {
  display: grid;
  gap: 10px;
}
.panel__bars span,
.panel__chart span {
  display: block;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--color-brand-primary) 0%,
    color-mix(in srgb, var(--color-brand-primary) 18%, transparent) 100%
  );
}
.panel__bars span:nth-child(1) {
  width: 72%;
  height: 14px;
}
.panel__bars span:nth-child(2) {
  width: 90%;
  height: 14px;
}
.panel__bars span:nth-child(3) {
  width: 56%;
  height: 14px;
}
.panel__chart {
  display: flex;
  align-items: flex-end;
  height: 110px;
}
.panel__chart span {
  width: 22%;
}
.panel__chart span:nth-child(1) {
  height: 48px;
}
.panel__chart span:nth-child(2) {
  height: 78px;
}
.panel__chart span:nth-child(3) {
  height: 60px;
}
.panel__chart span:nth-child(4) {
  height: 94px;
}
.phone-card {
  position: relative;
  z-index: 1;
  width: min(370px, 100%);
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 34px;
  background: linear-gradient(180deg, #151b1f 0%, #111619 100%);
  box-shadow: 0 32px 80px rgba(17, 22, 25, 0.48);
  color: #f7f2ee;
}
.phone-card__top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}
.phone-card__brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #f6efe9;
  color: #141414;
  font-weight: 800;
}
.phone-card__top-copy {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.phone-card__name {
  font-size: 14px;
  font-weight: 700;
}
.phone-card__meta,
.phone-card__caption,
.transaction__meta {
  color: rgba(247, 242, 238, 0.68);
  font-size: 12px;
}
.phone-card__badge {
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(242, 143, 91, 0.18);
  color: #ffbd91;
  font-size: 11px;
  font-weight: 700;
}
.phone-card__balance {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}
.phone-card__amount {
  font-size: clamp(34px, 4vw, 46px);
  font-weight: 800;
  line-height: 1;
}
.quick-actions,
.transaction-list,
.signal-list,
.team-list,
.plan-card__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.quick-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 20px;
}
.quick-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 10px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(247, 242, 238, 0.85);
  font-size: 12px;
}
.quick-action__icon,
.transaction__icon,
.feature-card__icon,
.plan-card__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 16px;
  background: rgba(242, 143, 91, 0.18);
  color: #ffb487;
}
.transaction {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.04);
}
.transaction__body,
.team-list__body {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.transaction__title,
.signal-row__label,
.team-list__name,
.feature-card__title,
.showcase-card__title,
.plan-card__name {
  display: block;
  font-size: 15px;
  font-weight: var(--font-weight-heading);
  line-height: 1.2;
}
.transaction__amount {
  font-size: 13px;
  font-weight: 700;
}
.transaction__amount--positive {
  color: #75e7aa;
}
.transaction__amount--neutral {
  color: #f7f2ee;
}
.transaction__icon--positive {
  background: rgba(86, 208, 139, 0.16);
  color: #75e7aa;
}
.transaction__icon--neutral {
  background: rgba(255, 255, 255, 0.08);
  color: #f7f2ee;
}
.section {
  padding: 30px;
}
.section__heading {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.section__title {
  max-width: 16ch;
  font-size: clamp(28px, 3vw, 46px);
  font-weight: var(--font-weight-display);
  line-height: 1.02;
}
.feature-grid,
.pricing-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.feature-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.feature-card__icon {
  background: var(--color-bg-accent-soft);
  color: var(--color-brand-primary-active);
}
.showcase {
  grid-template-columns: 1.1fr 0.9fr;
}
.showcase-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.signal-row,
.team-list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 14px 0;
  border-top: 1px solid
    color-mix(in srgb, var(--color-border-subtle) 72%, transparent);
}
.signal-row:first-child,
.team-list__item:first-child {
  border-top: none;
  padding-top: 0;
}
.signal-row__value,
.team-list__status,
.plan-card__badge {
  flex-shrink: 0;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--color-bg-accent-soft);
  color: var(--color-text-accent);
  font-size: 13px;
  font-weight: var(--font-weight-heading);
}
.team-list {
  list-style: none;
}
.team-list__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 18px;
  color: #fff;
  font-size: 14px;
  font-weight: 800;
}
.pricing {
  background:
    radial-gradient(
      circle at top right,
      color-mix(in srgb, var(--color-brand-soft) 60%, transparent) 0%,
      transparent 26%
    ),
    color-mix(in srgb, var(--color-bg-surface) 88%, transparent);
}
.plan-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.plan-card--featured {
  border-color: color-mix(in srgb, var(--color-border-accent) 86%, transparent);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-bg-surface) 84%, transparent) 0%,
    color-mix(in srgb, var(--color-bg-accent-soft) 82%, transparent) 100%
  );
}
.plan-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.plan-card__list {
  list-style: none;
}
.plan-card__item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--text-body-sm);
}
@media (max-width: 1280px) {
  .hero,
  .showcase,
  .feature-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  .hero__title {
    max-width: 14ch;
  }
  .hero__visual {
    min-height: 560px;
  }
}
@media (max-width: 980px) {
  .topbar {
    flex-wrap: wrap;
  }
  .topbar__nav {
    order: 3;
    width: 100%;
    overflow-x: auto;
  }
  .topbar__actions {
    width: 100%;
    justify-content: space-between;
  }
  .hero__metrics {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 720px) {
  .page-shell {
    padding: 12px;
  }
  .topbar,
  .hero,
  .section {
    padding: 20px;
    border-radius: 24px;
  }
  .topbar__actions {
    flex-direction: column;
    align-items: stretch;
  }
  .theme-switcher {
    width: 100%;
  }
  .theme-switcher__button {
    flex: 1;
  }
  .hero__visual {
    min-height: auto;
    padding: 26px 12px 120px;
  }
  .panel--back,
  .panel--front {
    position: static;
    width: 100%;
    margin-top: 14px;
  }
  .phone-card {
    width: 100%;
  }
}
</style>
