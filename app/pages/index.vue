<template>
  <div class="page">
    <header class="navbar">
      <div class="navbar__logo">
        <span class="logo-icon">N</span>
        <span class="logo-text">Nova Bank</span>
      </div>

      <nav class="navbar__links" aria-label="Основная навигация">
        <a href="#" class="nav-link active">
          <AppIcon name="home" label="Главная" class="nav-link__icon" />
          Главная
        </a>
        <a href="#" class="nav-link">
          <AppIcon name="services" label="Сервисы" class="nav-link__icon" />
          Сервисы
        </a>
        <a href="#" class="nav-link">
          <AppIcon name="pricing" label="Тарифы" class="nav-link__icon" />
          Тарифы
        </a>
        <a href="#" class="nav-link">
          <AppIcon name="features" label="Возможности" class="nav-link__icon" />
          Возможности
        </a>
      </nav>

      <button class="btn-cta">
        Открыть счет
        <AppIcon name="arrow" label="Перейти" class="btn-cta__arrow" />
      </button>
    </header>

    <main class="grid">
      <section class="card card--hero-left">
        <h1 class="hero-title">Управляйте финансами просто и уверенно</h1>
        <p class="hero-subtitle">
          Автоматизируйте финансовые процессы, отслеживайте показатели в реальном
          времени и работайте с деньгами бизнеса в одном удобном сервисе.
        </p>

        <button class="btn-cta btn-cta--hero">
          Открыть счет
          <AppIcon name="arrow" label="Перейти" class="btn-cta__arrow" />
        </button>

        <div class="hero-stats">
          <div class="hero-stats__line"></div>
          <div class="hero-stats__content">
            <strong class="hero-stats__number">15 млн+</strong>
            <p class="hero-stats__desc">
              Получайте доступ к аналитике, операциям и управлению капиталом в
              одном окне
            </p>
          </div>
          <div class="hero-stats__avatars" aria-label="Клиенты платформы">
            <div class="avatar avatar--1"></div>
            <div class="avatar avatar--2"></div>
            <div class="avatar avatar--3"></div>
          </div>
        </div>
      </section>

      <section class="card card--phone">
        <div class="phone-mockup">
          <div class="phone-mockup__frame">
            <div class="phone-mockup__notch"></div>
            <div class="phone-mockup__screen">
              <div class="app-status">
                <span>9:41</span>
                <div class="app-status__icons" aria-hidden="true">
                  <AppIcon name="signal" class="app-status__icon" />
                  <AppIcon name="wifi" class="app-status__icon" />
                  <AppIcon name="battery" class="app-status__icon" />
                </div>
              </div>

              <div class="app-header">
                <span class="app-logo-sm">N</span>
                <span class="app-greeting">Здравствуйте, Алекс</span>
                <div class="app-avatar-sm"></div>
              </div>

              <div class="app-balance">
                <p class="app-balance__label">Общий баланс</p>
                <div class="app-balance__row">
                  <h2 class="app-balance__amount">123 981,00 $</h2>
                  <span class="app-balance__currency">RUB</span>
                </div>
              </div>

              <div class="app-actions">
                <div class="app-action">
                  <AppIcon name="deposit" label="Пополнить" class="app-action__icon" />
                  <span>Пополнить</span>
                </div>
                <div class="app-action">
                  <AppIcon name="withdraw" label="Снять" class="app-action__icon" />
                  <span>Снять</span>
                </div>
                <div class="app-action">
                  <AppIcon name="topup" label="Добавить" class="app-action__icon" />
                  <span>Добавить</span>
                </div>
                <div class="app-action">
                  <AppIcon name="send" label="Отправить" class="app-action__icon" />
                  <span>Отправить</span>
                </div>
              </div>

              <div class="app-section-title">Переводы</div>
              <div class="app-transfer">
                <div class="app-transfer__avatar t1"></div>
                <div class="app-transfer__avatar t2"></div>
                <div class="app-transfer__avatar t3"></div>
                <div class="app-transfer__avatar t4"></div>
                <div class="app-transfer__add">+</div>
              </div>

              <div class="app-section-title">Последние операции</div>
              <div class="app-activity">
                <div class="app-activity__item">
                  <div class="app-activity__icon">ИА</div>
                  <div class="app-activity__info">
                    <span>Иван Алексеев</span>
                    <small>7 января 2026</small>
                  </div>
                  <span class="app-activity__amount positive">+58 999 ₽</span>
                </div>
                <div class="app-activity__item">
                  <div class="app-activity__icon">ДП</div>
                  <div class="app-activity__info">
                    <span>Дизайн-проект</span>
                    <small>10 апреля 2026</small>
                  </div>
                  <span class="app-activity__amount positive">+21 978 ₽</span>
                </div>
                <div class="app-activity__item">
                  <div class="app-activity__icon app-activity__icon--apple">
                    <AppIcon name="apple" label="Покупка устройства" />
                  </div>
                  <div class="app-activity__info">
                    <span>Ноутбук</span>
                    <small>12 мая 2026</small>
                  </div>
                  <span class="app-activity__amount negative">-45 054 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card card--connect">
        <div class="connect__header">
          <h3 class="connect__title">Быстрое подключение</h3>
          <a href="#" class="connect__see-all">Смотреть все</a>
        </div>
        <ul class="connect__list">
          <li v-for="user in users" :key="user.name" class="connect__item">
            <div class="connect__item-avatar" :style="{ background: user.color }"></div>
            <div class="connect__item-info">
              <strong>{{ user.name }}</strong>
              <span>{{ user.description }}</span>
            </div>
            <button class="connect__item-add">+</button>
          </li>
        </ul>
      </section>

      <section class="card card--digital">
        <h3 class="digital__title">Цифровая банковская платформа</h3>
        <div class="digital__illustration">
          <div class="digital__blob digital__blob--green"></div>
          <div class="digital__person"></div>
          <div class="digital__badge digital__badge--apple">
            <AppIcon name="apple" label="Apple" />
          </div>
          <div class="digital__badge digital__badge--android">
            <AppIcon name="android" label="Android" />
          </div>
        </div>
        <button class="btn-digital">Попробовать</button>
      </section>

      <section class="card card--grow">
        <div class="grow__badge grow__badge--top">Выбор клиентов</div>
        <div class="grow__coin">
          <div class="grow__coin-inner">₽</div>
        </div>
        <div class="grow__badge grow__badge--rev">Новый подход</div>
        <div class="grow__text">
          <h3 class="grow__title">Увеличивайте капитал без лишних ограничений</h3>
          <div class="grow__trusted">
            <span class="grow__trusted-icon">N</span>
            Нам доверяют более 50 000 клиентов
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ru',
  },
})

useSeoMeta({
  title: 'Nova Bank',
  description:
    'Современная русскоязычная банковская платформа для управления финансами, переводами и аналитикой бизнеса.',
  ogTitle: 'Nova Bank',
  ogDescription:
    'Современная русскоязычная банковская платформа для управления финансами, переводами и аналитикой бизнеса.',
  ogLocale: 'ru_RU',
})

const users = [
  {
    name: 'Савелий Новиков',
    color: '#E8B4A0',
    description: 'Подключение к расчетному счету',
  },
  {
    name: 'Борис Симонов',
    color: '#A0C4E8',
    description: 'Совместная работа с платежами',
  },
  {
    name: 'Альберт Фролов',
    color: '#B4E8A0',
    description: 'Доступ к отчетам и лимитам',
  },
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 16px;
  background: var(--bg);
  max-width: 1200px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  align-items: center;
  background: var(--white);
  border-radius: 50px;
  padding: 10px 20px;
  margin-bottom: 16px;
  gap: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 17px;
  flex-shrink: 0;
}

.logo-icon {
  width: 28px;
  height: 28px;
  background: var(--black);
  color: var(--white);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
}

.navbar__links {
  display: flex;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  color: var(--gray);
  transition: all 0.2s;
}

.nav-link:hover {
  background: var(--gray-light);
  color: var(--black);
}

.nav-link.active {
  color: var(--black);
}

.nav-link__icon {
  font-size: 13px;
}

.btn-cta {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: var(--black);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 50px;
  transition: opacity 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-cta:hover {
  opacity: 0.88;
}

.btn-cta__arrow {
  width: 28px;
  height: 28px;
  background: var(--black);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 12px;
}

.card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 32px;
  overflow: hidden;
}

.card--hero-left {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-title {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  color: var(--black);
}

.hero-subtitle {
  font-size: 14px;
  color: var(--gray);
  line-height: 1.6;
  max-width: 360px;
}

.btn-cta--hero {
  width: fit-content;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
}

.hero-stats__line {
  width: 40px;
  height: 2px;
  background: var(--black);
  flex-shrink: 0;
}

.hero-stats__content strong {
  font-size: 22px;
  font-weight: 800;
}

.hero-stats__content p {
  font-size: 12px;
  color: var(--gray);
  line-height: 1.4;
  margin-top: 2px;
  max-width: 220px;
}

.hero-stats__avatars {
  display: flex;
  margin-left: auto;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--white);
  margin-left: -10px;
}

.avatar:first-child {
  margin-left: 0;
}

.avatar--1 {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.avatar--2 {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.avatar--3 {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.card--phone {
  grid-column: 2 / 4;
  grid-row: 1;
  background: linear-gradient(160deg, #1a2332 0%, #2d3f55 60%, #3d5a7a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
  position: relative;
}

.card--phone::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 60% 40%, rgba(100, 160, 200, 0.25) 0%, transparent 65%),
    radial-gradient(ellipse at 80% 80%, rgba(50, 100, 150, 0.2) 0%, transparent 50%);
  border-radius: var(--radius-lg);
  pointer-events: none;
}

.phone-mockup {
  position: relative;
  z-index: 1;
}

.phone-mockup__frame {
  width: 240px;
  background: #0a0f1a;
  border-radius: 36px;
  border: 6px solid #1e2a3a;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.phone-mockup__notch {
  width: 80px;
  height: 22px;
  background: #0a0f1a;
  border-radius: 0 0 16px 16px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.phone-mockup__screen {
  background: #ffffff;
  padding: 8px 12px 16px;
  margin-top: -2px;
}

.app-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 9px;
  font-weight: 600;
  padding: 4px 0;
  color: var(--black);
}

.app-status__icons {
  display: flex;
  gap: 4px;
  align-items: center;
}

.app-status__icon {
  font-size: 7px;
  color: var(--black);
  opacity: 0.75;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.app-logo-sm {
  width: 22px;
  height: 22px;
  background: var(--black);
  color: white;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-greeting {
  font-size: 10px;
  flex: 1;
  color: var(--gray);
}

.app-avatar-sm {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.app-balance {
  margin-bottom: 12px;
}

.app-balance__label {
  font-size: 9px;
  color: var(--gray);
}

.app-balance__row {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.app-balance__amount {
  font-size: 17px;
  font-weight: 800;
}

.app-balance__currency {
  font-size: 9px;
  background: var(--gray-light);
  padding: 2px 5px;
  border-radius: 4px;
  color: var(--gray);
}

.app-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin-bottom: 12px;
}

.app-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 8px;
  color: var(--gray);
}

.app-action__icon {
  width: 28px;
  height: 28px;
  background: var(--gray-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.app-section-title {
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--black);
}

.app-transfer {
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
  align-items: center;
}

.app-transfer__avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1.5px solid #eee;
}

.t1 {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.t2 {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.t3 {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.t4 {
  background: linear-gradient(135deg, #fa709a, #fee140);
}

.app-transfer__add {
  width: 26px;
  height: 26px;
  background: var(--gray-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--gray);
}

.app-activity {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.app-activity__item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.app-activity__icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7px;
  font-weight: 700;
  flex-shrink: 0;
}

.app-activity__info {
  flex: 1;
}

.app-activity__info span {
  display: block;
  font-size: 8px;
  font-weight: 600;
}

.app-activity__info small {
  font-size: 7px;
  color: var(--gray);
}

.app-activity__amount {
  font-size: 8px;
  font-weight: 700;
}

.app-activity__amount.positive {
  color: #22c55e;
}

.app-activity__amount.negative {
  color: #ef4444;
}

.card--connect {
  grid-column: 1;
  grid-row: 2;
  padding: 24px;
}

.connect__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.connect__title {
  font-size: 18px;
  font-weight: 700;
}

.connect__see-all {
  font-size: 13px;
  color: var(--gray);
}

.connect__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.connect__item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.connect__item-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
}

.connect__item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.connect__item-info strong {
  font-size: 13px;
  font-weight: 600;
}

.connect__item-info span {
  font-size: 11px;
  color: var(--gray);
}

.connect__item-add {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--gray-light);
  font-size: 18px;
  color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.connect__item-add:hover {
  background: var(--accent);
  color: var(--black);
}

.card--digital {
  grid-column: 2;
  grid-row: 2;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
}

.digital__title {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.2;
  max-width: 180px;
  position: relative;
  z-index: 1;
}

.digital__illustration {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 55%;
  pointer-events: none;
}

.digital__blob {
  position: absolute;
  border-radius: 50%;
}

.digital__blob--green {
  width: 100px;
  height: 100px;
  background: var(--accent);
  bottom: 20px;
  right: 30px;
}

.digital__person {
  position: absolute;
  right: 10px;
  bottom: 0;
  width: 120px;
  height: 160px;
  background: linear-gradient(175deg, #f5c5a3 20%, #e8956b 80%);
  border-radius: 60px 60px 0 0;
  overflow: hidden;
}

.digital__person::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  background: #d4845a;
  border-radius: 50%;
  top: 10px;
  left: 35px;
}

.digital__badge {
  position: absolute;
  border-radius: 50%;
  background: #1a1a1a;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.digital__badge--apple {
  width: 32px;
  height: 32px;
  top: 40px;
  right: 20px;
}

.digital__badge--android {
  width: 28px;
  height: 28px;
  top: 30px;
  right: 60px;
}

.btn-digital {
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--accent);
  font-weight: 800;
  font-size: 14px;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  margin-top: auto;
  align-self: flex-start;
  border: 4px solid var(--white);
  box-shadow: 0 4px 16px rgba(200, 255, 77, 0.4);
}

.btn-digital:hover {
  transform: scale(1.05);
}

.card--grow {
  grid-column: 3;
  grid-row: 2;
  background: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
  padding: 24px;
}

.grow__badge {
  position: absolute;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 50px;
}

.grow__badge--top {
  top: 24px;
  left: 24px;
  background: #ef4444;
  color: white;
}

.grow__badge--rev {
  top: 60px;
  right: 16px;
  background: var(--white);
  color: var(--black);
  transform: rotate(12deg);
}

.grow__coin {
  position: absolute;
  top: 20px;
  right: 50px;
  width: 80px;
  height: 80px;
}

.grow__coin-inner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 900;
  color: white;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.grow__title {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.25;
}

.grow__trusted {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #999;
}

.grow__trusted-icon {
  width: 18px;
  height: 18px;
  background: var(--white);
  color: var(--black);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 10px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .card--hero-left {
    grid-column: 1 / 3;
  }

  .card--phone {
    grid-column: 1 / 3;
    min-height: 400px;
  }

  .card--connect {
    grid-column: 1;
  }

  .card--digital {
    grid-column: 2;
  }

  .card--grow {
    grid-column: 1 / 3;
  }

  .navbar__links {
    display: none;
  }
}

@media (max-width: 600px) {
  .page {
    padding: 10px;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .card--hero-left,
  .card--phone,
  .card--connect,
  .card--digital,
  .card--grow {
    grid-column: 1;
  }
}
</style>
