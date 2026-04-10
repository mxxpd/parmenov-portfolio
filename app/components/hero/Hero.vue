<template>
  <section class="hero">
    <div class="hero__copy">
      <div class="hero__intro">
        <span class="hero__label">UX/UI дизайнер</span>

        <h1 class="hero__title">
          Проектирую интерфейсы для сложных цифровых продуктов
        </h1>
      </div>

      <div class="hero__body">
        <p class="hero__description">
          Помогаю продуктам становиться понятнее, быстрее и полезнее: от структуры и пользовательских сценариев до
          визуальной системы и ключевых продуктовых решений.
        </p>

        <div class="hero__actions">
          <AppButton label="Связаться со мной" size="lg" :icon="true" />
          <AppButton label="Посмотреть кейсы" variant="secondary" size="lg" href="/cases" />
        </div>
      </div>

      <p class="hero__tagline">
        HoReCa • AI Analytics • iGaming • AdTech
      </p>
    </div>

    <div class="hero__visual" aria-hidden="true">
      <div class="hero__visual-orb hero__visual-orb--1" />
      <div class="hero__visual-orb hero__visual-orb--2" />
    </div>
  </section>
</template>
